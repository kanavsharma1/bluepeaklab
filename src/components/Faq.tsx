import { faqs } from "@/lib/content";
import { SectionHeading } from "./SectionHeading";

export function Faq() {
  return (
    <section id="faq" aria-labelledby="faq-title" className="border-y border-[#E8EEF4] bg-white">
      <div className="mx-auto max-w-[820px] px-6 py-20 md:py-24">
        <SectionHeading id="faq-title" title="Questions, answered" />
        <div className="flex flex-col gap-3">
          {faqs.map((f) => (
            <details key={f.q} className="group rounded-xl border border-line bg-cloud px-[22px] py-[18px]">
              <summary className="flex items-center justify-between gap-4 text-[17px] font-semibold">
                {f.q}
                <svg
                  className="shrink-0 transition-transform group-open:rotate-45"
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  aria-hidden="true"
                >
                  <path d="M12 5v14M5 12h14" />
                </svg>
              </summary>
              <p className="mt-3 text-[15px] text-ink-soft">{f.a}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
