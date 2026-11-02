import { faqs, plans } from "./content";
import { site } from "./site";

// JSON-LD structured data: helps Google show rich results (business info, FAQ).
export function buildJsonLd() {
  const business = {
    "@type": "ProfessionalService",
    "@id": `${site.url}/#business`,
    name: site.name,
    url: site.url,
    email: site.email,
    ...(site.whatsappNumber ? { telephone: `+${site.whatsappNumber}` } : {}),
    description: site.description,
    slogan: site.tagline,
    logo: `${site.url}/icon.svg`,
    image: `${site.url}/opengraph-image`,
    priceRange: "₹4,999 - ₹25,000",
    address: {
      "@type": "PostalAddress",
      addressLocality: site.locality,
      addressRegion: site.region,
      addressCountry: site.country,
    },
    areaServed: site.areaServed.map((name) => ({ "@type": "Place", name })),
    sameAs: Object.values(site.social),
    knowsAbout: ["Web design", "Landing pages", "Conversion rate optimisation", "SEO", "Next.js"],
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Website packages",
      itemListElement: plans.map((p) => ({
        "@type": "Offer",
        name: p.name,
        description: p.summary,
        price: p.price,
        priceCurrency: "INR",
        ...(p.period
          ? {
              priceSpecification: {
                "@type": "UnitPriceSpecification",
                price: p.price,
                priceCurrency: "INR",
                unitText: "MONTH",
              },
            }
          : {}),
        itemOffered: { "@type": "Service", name: p.name, description: p.summary },
      })),
    },
  };

  const website = {
    "@type": "WebSite",
    "@id": `${site.url}/#website`,
    url: site.url,
    name: site.name,
    inLanguage: "en-IN",
    publisher: { "@id": `${site.url}/#business` },
  };

  const faqPage = {
    "@type": "FAQPage",
    "@id": `${site.url}/#faq`,
    mainEntity: faqs.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  };

  return { "@context": "https://schema.org", "@graph": [business, website, faqPage] };
}
