"use client";

import Image from "next/image";
import { contributors } from "@/constants/contributors";
import { sponsors } from "@/constants/sponsors";

export default function PartnersSection() {
  return (
    <section className="theme-transition w-full bg-dark py-16 sm:py-24">
      <div className="mx-auto max-w-6xl px-6">
        <div className="flex flex-wrap items-end justify-between gap-5 border-b border-white/10 pb-8">
          <div>
            <p className="font-mono text-[11px] uppercase tracking-[0.3em] text-white/38">The people behind Tcodi</p>
            <h2 className="theme-accent mt-4 font-avatar-airbender text-5xl leading-none tracking-wide sm:text-6xl">Organizing branches.</h2>
          </div>
          <p className="max-w-md text-sm leading-relaxed text-white/60 sm:text-base">Bizerte Tcodi is organized by student branches working together under IEEE Tunisia Section.</p>
        </div>
        <div className="mt-8 grid grid-cols-2 border-l border-t border-white/10 sm:grid-cols-4">
          {contributors.filter((contributor) => contributor.facebookUrl).map((contributor) => (
            <a key={contributor.title} href={contributor.facebookUrl} target="_blank" rel="noreferrer" aria-label={`Visit ${contributor.title} on Facebook`} className="group flex min-h-40 flex-col items-center justify-center border-b border-r border-white/10 bg-[var(--site-surface-raised)] p-5 text-center transition-colors hover:bg-[var(--theme-accent-soft)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--theme-accent)] focus-visible:ring-inset">
              <div className="relative h-16 w-28 grayscale transition duration-300 group-hover:grayscale-0">
                <Image src={contributor.imageSrc} alt={contributor.title} fill className="object-contain" sizes="112px" />
              </div>
              <p className="mt-4 text-xs font-medium text-white/70">{contributor.title}</p>
            </a>
          ))}
        </div>
        <div className="mt-16 flex items-end justify-between gap-5 border-b border-white/10 pb-6">
          <div>
            <p className="font-mono text-[11px] uppercase tracking-[0.3em] text-white/38">Supporting Tcodi 3.0</p>
            <h3 className="theme-accent mt-4 font-avatar-airbender text-4xl leading-none tracking-wide sm:text-5xl">Our sponsors.</h3>
          </div>
          <span className="font-mono text-[10px] text-white/35">07 partners</span>
        </div>
        <div className="grid grid-cols-2 border-l border-t border-white/10 sm:grid-cols-4 lg:grid-cols-7">
          {sponsors.map((sponsor) => (
            <div
              key={sponsor.name}
              className="flex min-h-36 items-center justify-center border-b border-r border-white/10 bg-[var(--site-surface-raised)] p-5 sm:min-h-40"
            >
              <div className="relative h-20 w-full">
                <Image
                  src={sponsor.image}
                  alt={`${sponsor.name} logo`}
                  fill
                  className="object-contain"
                  sizes="(max-width: 640px) 40vw, (max-width: 1024px) 22vw, 140px"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
