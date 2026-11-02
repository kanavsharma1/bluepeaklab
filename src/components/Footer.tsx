import { site } from "@/lib/site";

export function Footer() {
  return (
    <footer className="border-t border-line">
      <div className="mx-auto flex max-w-[1160px] flex-wrap items-center justify-between gap-4 px-6 py-8 text-sm text-ink-soft">
        <span className="font-display font-semibold text-navy">{site.name}</span>
        <span>Noida · Ghaziabad · Online</span>
        <div className="flex gap-5">
          <a href={site.social.instagram} rel="noopener noreferrer" target="_blank" className="text-navy hover:underline">
            Instagram
          </a>
          <a href={site.social.linkedin} rel="noopener noreferrer" target="_blank" className="text-navy hover:underline">
            LinkedIn
          </a>
        </div>
        <span>© {new Date().getFullYear()} {site.name}</span>
      </div>
    </footer>
  );
}
