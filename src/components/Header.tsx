import { LogoMark } from "./Logo";

const links = [
  { href: "#services", label: "Services" },
  { href: "#process", label: "Process" },
  { href: "#faq", label: "FAQ" },
];

export function Header() {
  return (
    <header className="sticky top-0 z-30 border-b border-line bg-cloud/90 backdrop-blur">
      <div className="mx-auto flex max-w-[1160px] items-center justify-between gap-4 px-6 py-4">
        <a href="#top" className="flex items-center gap-2.5 text-navy" aria-label="Bluepeak Lab home">
          <LogoMark />
          <span className="font-display text-xl font-semibold tracking-tight">Bluepeak Lab</span>
        </a>
        <nav aria-label="Main" className="flex items-center gap-6 text-[15px]">
          {links.map((l) => (
            <a key={l.href} href={l.href} className="hidden text-navy hover:text-navy-deep sm:inline">
              {l.label}
            </a>
          ))}
          <a
            href="#contact"
            className="inline-flex min-h-11 items-center rounded-[10px] bg-peach px-[18px] font-semibold text-navy transition-colors hover:bg-peach-hover"
          >
            Book a free call
          </a>
        </nav>
      </div>
    </header>
  );
}
