// Single source of truth for business details. Edit here, and the whole site,
// metadata, structured data and sitemap update together.

const whatsappNumber = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER ?? "";

export const site = {
  name: "Bluepeak Lab",
  url: "https://bluepeaklab.in",
  tagline: "Websites built to convert",
  description:
    "Bluepeak Lab designs and builds fast, mobile-first websites and landing pages for small businesses in Noida, Ghaziabad and across India. Fixed prices, SEO-ready, built to turn visitors into customers.",
  email: "hello@bluepeaklab.in",
  whatsappNumber,
  whatsappUrl: whatsappNumber
    ? `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
        "Hi Bluepeak Lab, I'd like to talk about a website.",
      )}`
    : "mailto:hello@bluepeaklab.in",
  areaServed: ["Noida", "Ghaziabad", "Delhi NCR", "India"],
  locality: "Ghaziabad",
  region: "Uttar Pradesh",
  country: "IN",
  social: {
    instagram: "https://instagram.com/bluepeaklab",
    linkedin: "https://www.linkedin.com/company/bluepeak-lab",
  },
  keywords: [
    "website design Noida",
    "website development Ghaziabad",
    "landing page design India",
    "small business website",
    "web design agency Delhi NCR",
    "Next.js website development",
    "website maintenance India",
  ],
} as const;
