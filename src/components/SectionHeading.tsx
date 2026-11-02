export function SectionHeading({
  id,
  eyebrow,
  title,
  intro,
  dark = false,
}: {
  id?: string;
  eyebrow?: string;
  title: string;
  intro?: string;
  dark?: boolean;
}) {
  return (
    <div className="mb-10 md:mb-12">
      {eyebrow && <p className="mb-2.5 text-[13px] font-semibold uppercase tracking-[0.08em] text-dusty">{eyebrow}</p>}
      <h2
        id={id}
        className={`font-display text-[32px] font-semibold leading-[1.15] tracking-[-0.015em] md:text-[40px] ${dark ? "text-cloud" : ""}`}
      >
        {title}
      </h2>
      {intro && <p className="mt-3.5 max-w-[620px] text-lg text-ink-soft">{intro}</p>}
    </div>
  );
}
