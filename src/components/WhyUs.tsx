import { reasons } from "@/lib/content";
import { SectionHeading } from "./SectionHeading";

export function WhyUs() {
  return (
    <section aria-labelledby="why-title" className="mx-auto max-w-[1160px] px-6 pb-20 md:pb-24">
      <SectionHeading id="why-title" title="Why Bluepeak Lab" />
      <div className="grid grid-cols-[repeat(auto-fit,minmax(240px,1fr))] gap-8">
        {reasons.map((r) => (
          <div key={r.title}>
            <h3 className="mb-2 font-display text-[19px] font-semibold">{r.title}</h3>
            <p className="text-[15px] text-ink-soft">{r.body}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
