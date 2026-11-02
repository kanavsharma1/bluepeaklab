function Check() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#4A7BA6" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M5 12l5 5L20 7" />
    </svg>
  );
}

function BrowserMockup() {
  return (
    <div aria-hidden="true" className="overflow-hidden rounded-[18px] border border-line bg-white">
      <div className="flex items-center gap-1.5 border-b border-[#E8EEF4] bg-[#F9FBFC] px-4 py-3">
        <span className="size-2.5 rounded-full bg-peach" />
        <span className="size-2.5 rounded-full bg-mist" />
        <span className="size-2.5 rounded-full bg-line" />
        <span className="ml-3 rounded-md bg-[#EEF3F8] px-3 py-0.5 text-xs text-[#5B6E84]">yourbrand.com</span>
      </div>
      <div className="flex flex-col gap-4 p-7">
        <div className="h-3.5 w-2/5 rounded-md bg-mist" />
        <div className="h-[30px] w-[85%] rounded-lg bg-navy" />
        <div className="h-[30px] w-3/5 rounded-lg bg-navy" />
        <div className="h-3 w-[90%] rounded-md bg-mist-soft" />
        <div className="h-3 w-3/4 rounded-md bg-mist-soft" />
        <div className="mt-1.5 h-[42px] w-[150px] rounded-[10px] bg-peach" />
        <div className="mt-2.5 grid grid-cols-3 gap-3">
          <div className="h-[84px] rounded-[10px] bg-[#EEF3F8]" />
          <div className="h-[84px] rounded-[10px] bg-mist-soft" />
          <div className="h-[84px] rounded-[10px] bg-[#EEF3F8]" />
        </div>
      </div>
    </div>
  );
}

export function Hero() {
  return (
    <section id="top" className="mx-auto flex max-w-[1160px] flex-wrap items-center gap-14 px-6 pb-20 pt-16 md:pb-[88px] md:pt-24">
      <div className="min-w-0 flex-[1_1_460px]">
        <p className="mb-[18px] inline-block rounded-full bg-mist-soft px-3 py-1.5 text-[13px] font-semibold uppercase tracking-[0.06em]">
          Web design and development studio
        </p>
        <h1 className="mb-5 font-display text-[40px] font-semibold leading-[1.1] tracking-[-0.02em] md:text-[56px]">
          Websites built to convert.
        </h1>
        <p className="mb-8 max-w-[520px] text-[19px] text-ink-soft">
          We design and build fast, beautiful websites and landing pages that turn visitors into customers. Clean
          code, clear messaging, and a design your brand deserves.
        </p>
        <div className="flex flex-wrap gap-3.5">
          <a href="#contact" className="rounded-xl bg-peach px-[26px] py-3.5 font-semibold transition-colors hover:bg-peach-hover">
            Book a free call
          </a>
          <a href="#services" className="rounded-xl border border-mist bg-white px-[26px] py-3.5 font-semibold transition-colors hover:border-dusty">
            View packages
          </a>
        </div>
        <ul className="mt-9 flex flex-wrap gap-6 text-sm text-ink-soft">
          {["Mobile-first design", "SEO-ready", "Fixed price, no surprises"].map((t) => (
            <li key={t} className="flex items-center gap-2">
              <Check />
              {t}
            </li>
          ))}
        </ul>
      </div>
      <div className="min-w-0 flex-[1_1_420px]">
        <BrowserMockup />
      </div>
    </section>
  );
}
