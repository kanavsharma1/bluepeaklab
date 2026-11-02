export type Plan = {
  id: string;
  name: string;
  summary: string;
  price: number;
  period?: "month";
  features: string[];
  cta: string;
  featured?: boolean;
};

export const plans: Plan[] = [
  {
    id: "launch-page",
    name: "Launch page",
    summary: "A single high-converting landing page to launch a product, offer or campaign.",
    price: 5999,
    features: [
      "One page, mobile-first",
      "Copy structure built for conversion",
      "Contact or WhatsApp form",
      "Basic SEO and analytics",
      "Delivered in 5 to 7 days",
    ],
    cta: "Start a launch page",
  },
  {
    id: "business-website",
    name: "Business website",
    summary: "A complete multi-page site that tells your story and brings in leads.",
    price: 25000,
    features: [
      "Up to 6 pages",
      "Editable content (CMS)",
      "Google Business and analytics setup",
      "Speed and SEO optimisation",
      "Delivered in 2 to 3 weeks",
    ],
    cta: "Get a business website",
    featured: true,
  },
  {
    id: "growth-care",
    name: "Growth care",
    summary: "Ongoing updates and improvements so your site keeps performing.",
    price: 4999,
    period: "month",
    features: [
      "Monthly content edits",
      "Hosting, backups and security",
      "Speed checks",
      "A/B tests on key pages",
      "Priority support",
    ],
    cta: "Ask about growth care",
  },
];

export const steps = [
  { title: "Discover", body: "A free call to understand your business, customers and goals." },
  { title: "Design", body: "Layout and visuals you review and refine before any code is written." },
  { title: "Build", body: "Clean, fast code tested on phones, tablets and desktops." },
  { title: "Launch", body: "We go live, set up analytics and hand over everything you need." },
];

export const reasons = [
  {
    title: "Built by a senior engineer",
    body: "Your site is hand-built with the same modern tools used for large enterprise products, not a drag-and-drop template.",
  },
  {
    title: "Designed to convert",
    body: "Every page follows landing-page and conversion best practice, so visitors know what to do next.",
  },
  {
    title: "Fast and reliable",
    body: "Lightweight pages that load quickly on any phone and rank better on Google.",
  },
  {
    title: "Clear and honest",
    body: "Fixed prices, written scope and regular updates. No hidden fees.",
  },
];

export const faqs = [
  {
    q: "How long does a website take?",
    a: "A landing page usually takes 5 to 7 days. A full business website takes 2 to 3 weeks, depending on content and feedback.",
  },
  {
    q: "Do I need to provide the content?",
    a: "You share the basics about your business. We help structure and polish the copy so it works for your customers.",
  },
  {
    q: "How does payment work?",
    a: "50% upfront to start, and the rest before launch. UPI, bank transfer and cards are accepted.",
  },
  {
    q: "Can I update the site myself later?",
    a: "Yes. Business websites include an easy editor, and Growth care covers updates if you would rather not.",
  },
];

export const formatINR = (n: number) =>
  new Intl.NumberFormat("en-IN", { style: "currency", currency: "INR", maximumFractionDigits: 0 }).format(n);
