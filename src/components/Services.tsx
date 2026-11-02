import { formatINR, plans } from "@/lib/content";
import { SectionHeading } from "./SectionHeading";

export function Services() {
  return (
    <section id="services" aria-labelledby="services-title" className="border-y border-[#E8EEF4] bg-white">
      <div className="mx-auto max-w-[1160px] px-6 py-20 md:py-24">
        <SectionHeading
          id="services-title"
          eyebrow="Services"
          title="Simple packages, clear pricing"
          intro="Pick the package that fits where your business is today. Every build is mobile-first, fast and ready for search."
        />
        <div className="grid grid-cols-[repeat(auto-fit,minmax(280px,1fr))] gap-6">
          {plans.map((p) => (
            <article
              key={p.id}
              className={`flex flex-col gap-3.5 rounded-[18px] border p-8 ${
                p.featured ? "border-navy bg-navy text-cloud" : "border-line bg-cloud"
              }`}
            >
              <div className="flex items-center justify-between gap-2">
                <h3 className="font-display text-[22px] font-semibold">{p.name}</h3>
                {p.featured && (
                  <span className="rounded-full bg-peach px-2.5 py-1 text-xs font-semibold text-navy">Most popular</span>
                )}
              </div>
              <p className={`text-[15px] ${p.featured ? "text-[#C9DAE7]" : "text-ink-soft"}`}>{p.summary}</p>
              <p className="my-1.5 font-display text-[30px] font-semibold">
                {formatINR(p.price)}
                {p.period && (
                  <span className={`text-base font-medium ${p.featured ? "text-[#C9DAE7]" : "text-ink-soft"}`}> / month</span>
                )}
              </p>
              <ul className={`flex list-disc flex-col gap-1.5 pl-5 text-[15px] ${p.featured ? "text-mist-soft" : ""}`}>
                {p.features.map((f) => (
                  <li key={f}>{f}</li>
                ))}
              </ul>
              <a
                href="#contact"
                className={`mt-auto rounded-[10px] p-3 text-center font-semibold transition-colors ${
                  p.featured
                    ? "bg-peach text-navy hover:bg-peach-hover"
                    : "border border-mist bg-white text-navy hover:border-dusty"
                }`}
              >
                {p.cta}
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
