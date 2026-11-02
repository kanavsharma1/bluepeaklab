import { site } from "@/lib/site";

export function Contact() {
  return (
    <section id="contact" aria-labelledby="contact-title" className="mx-auto max-w-[1160px] px-6 py-20 md:py-24">
      <div className="flex flex-wrap items-center justify-between gap-8 rounded-3xl bg-navy px-8 py-14 md:px-12 md:py-16">
        <div className="min-w-0 flex-[1_1_420px]">
          <h2
            id="contact-title"
            className="mb-3 font-display text-[30px] font-semibold leading-[1.15] tracking-[-0.015em] text-cloud md:text-[38px]"
          >
            Ready to reach your peak online?
          </h2>
          <p className="text-lg text-[#C9DAE7]">
            Book a free 20-minute call. We&apos;ll look at your current site and share three quick wins, no strings
            attached.
          </p>
        </div>
        <div className="flex flex-wrap gap-3.5">
          <a
            href={site.whatsappUrl}
            target={site.whatsappNumber ? "_blank" : undefined}
            rel={site.whatsappNumber ? "noopener noreferrer" : undefined}
            className="rounded-xl bg-peach px-[26px] py-3.5 font-semibold text-navy transition-colors hover:bg-peach-hover"
          >
            Chat on WhatsApp
          </a>
          <a
            href={`mailto:${site.email}`}
            className="rounded-xl border border-mist px-[26px] py-3.5 font-semibold text-cloud transition-colors hover:bg-white/10"
          >
            {site.email}
          </a>
        </div>
      </div>
    </section>
  );
}
