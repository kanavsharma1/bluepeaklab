import { steps } from "@/lib/content";
import { SectionHeading } from "./SectionHeading";

export function Process() {
  return (
    <section id="process" aria-labelledby="process-title" className="mx-auto max-w-[1160px] px-6 py-20 md:py-24">
      <SectionHeading id="process-title" eyebrow="How we work" title="From first call to launch in four steps" />
      <ol className="grid grid-cols-[repeat(auto-fit,minmax(230px,1fr))] gap-5">
        {steps.map((s, i) => (
          <li key={s.title} className="rounded-2xl border border-line bg-white p-7">
            <span className="mb-3.5 flex size-10 items-center justify-center rounded-full bg-mist-soft font-display text-[15px] font-semibold">
              {String(i + 1).padStart(2, "0")}
            </span>
            <h3 className="mb-2 font-display text-[19px] font-semibold">{s.title}</h3>
            <p className="text-[15px] text-ink-soft">{s.body}</p>
          </li>
        ))}
      </ol>
    </section>
  );
}
