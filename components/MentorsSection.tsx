"use client";

import { Clock3 } from "lucide-react";

export default function MentorsSection() {
  return (
    <section className="theme-transition w-full bg-dark py-16 sm:py-24">
      <div className="mx-auto grid max-w-6xl items-end gap-8 px-6 md:grid-cols-[1fr_auto]">
        <div>
          <p className="font-mono text-[11px] uppercase tracking-[0.3em] text-white/38">Guidance in progress</p>
          <h2 className="theme-accent mt-4 font-avatar-airbender text-5xl leading-none tracking-wide sm:text-6xl">Mentors soon.</h2>
          <p className="mt-5 max-w-2xl text-base leading-relaxed text-white/60">The people guiding Bizerte Tcodi 3.0 will be announced with their real roles, sessions, and areas of expertise.</p>
        </div>
        <div className="flex items-center gap-3 border border-[var(--theme-accent)] bg-[var(--theme-accent-soft)] px-5 py-4 text-sm text-white/80">
          <Clock3 className="size-5 text-[var(--theme-accent)]" />
          Announcement in progress
        </div>
      </div>
    </section>
  );
}