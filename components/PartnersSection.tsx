"use client";

import Image from "next/image";
import { contributors } from "@/constants/contributors";

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
        <p className="mt-5 text-xs text-white/38">Sponsor and institutional partner announcements will appear here once confirmed.</p>
      </div>
    </section>
  );
}