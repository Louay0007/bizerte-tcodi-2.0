export type PartnerLogo = {
  name: string;
  imageSrc: string;
  href: string;
};

export function CasesWithInfiniteScroll({ logos }: { logos: PartnerLogo[] }) {
  return (
    <div className="grid grid-cols-2 gap-3 sm:grid-cols-4" aria-label="Partner links">
      {logos.map((logo) => (
        <a
          key={logo.name}
          href={logo.href}
          target="_blank"
          rel="noreferrer"
          aria-label={`Visit ${logo.name}`}
          className="flex min-h-28 items-center justify-center border border-white/10 bg-[var(--site-surface-raised)] p-5 transition-colors hover:border-[var(--theme-accent)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--theme-accent)]"
        >
          <img src={logo.imageSrc} alt={logo.name} className="max-h-14 max-w-full object-contain" />
        </a>
      ))}
    </div>
  );
}
