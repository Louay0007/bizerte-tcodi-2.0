"use client";

import Link from "next/link";
import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";
import { MotionPathPlugin } from "gsap/MotionPathPlugin";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ArrowUpRight } from "lucide-react";

gsap.registerPlugin(ScrollTrigger, MotionPathPlugin);

export type ScrollStoryStage = {
  eyebrow: string;
  title: string;
  description: string;
  href: string;
};

export default function ScrollStory({ stages }: { stages: ScrollStoryStage[] }) {
  const rootRef = useRef<HTMLElement>(null);

  useGSAP(() => {
    const root = rootRef.current;
    if (!root || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const ctx = gsap.context(() => {
      const marker = root.querySelector<SVGCircleElement>("[data-story-marker]");
      const path = root.querySelector<SVGPathElement>("[data-story-path]");
      const cards = gsap.utils.toArray<HTMLElement>("[data-story-card]", root);
      if (!marker || !path || !cards.length) return;

      // Ensure the arc starts undrawn so scrub can reveal it.
      gsap.set(path, { attr: { "stroke-dashoffset": 1 } });
      gsap.set(marker, { transformOrigin: "50% 50%" });

      const mm = gsap.matchMedia();

      // Desktop: sticky rail stays visible, arc draws + marker travels + cards activate on scrub.
      mm.add("(min-width: 768px)", () => {
        const timeline = gsap.timeline({
          scrollTrigger: {
            trigger: root,
            start: "top 70%",
            end: "bottom 60%",
            scrub: 0.6,
          },
        });

        timeline
          .fromTo(
            path,
            { attr: { "stroke-dashoffset": 1 } },
            { attr: { "stroke-dashoffset": 0 }, ease: "none", duration: 1 },
            0,
          )
          .to(
            marker,
            {
              motionPath: { path, align: path, alignOrigin: [0.5, 0.5] },
              ease: "none",
              duration: 1,
            },
            0,
          );

        cards.forEach((card, index) => {
          timeline.fromTo(
            card,
            { autoAlpha: 0.25, x: 22 },
            { autoAlpha: 1, x: 0, duration: 0.16, ease: "power2.out" },
            Math.min(index * 0.26 + 0.02, 0.82),
          );
        });

        return () => undefined;
      });

      // Mobile / no-pin fallback: arc still draws on scroll, cards fade up.
      mm.add("(max-width: 767px)", () => {
        gsap.fromTo(
          path,
          { attr: { "stroke-dashoffset": 1 } },
          {
            attr: { "stroke-dashoffset": 0 },
            ease: "none",
            scrollTrigger: { trigger: root, start: "top 80%", end: "bottom 45%", scrub: 0.6 },
          },
        );

        gsap.set(cards, { autoAlpha: 1, x: 0 });
        cards.forEach((card) => {
          gsap.from(card, {
            autoAlpha: 0,
            y: 28,
            duration: 0.55,
            ease: "power2.out",
            scrollTrigger: { trigger: card, start: "top 88%" },
          });
        });

        return () => undefined;
      });
    }, root);

    // Re-measure pins / paths after fonts & layout settle.
    const refresh = () => ScrollTrigger.refresh();
    window.addEventListener("load", refresh);
    return () => {
      window.removeEventListener("load", refresh);
      ctx.revert();
    };
  }, { scope: rootRef });

  return (
    <section ref={rootRef} className="theme-transition relative overflow-hidden bg-dark py-16 sm:py-24">
      <div className="mx-auto grid max-w-6xl gap-10 px-6 md:grid-cols-[12rem_minmax(0,1fr)] lg:grid-cols-[16rem_minmax(0,1fr)]">
        <div data-story-rail className="relative hidden h-[calc(100vh-10rem)] self-start md:sticky md:top-28 md:block">
          <p className="font-mono text-[10px] uppercase tracking-[0.28em] text-white/36">The Tcodi arc</p>
          <svg className="absolute left-4 top-10 h-[calc(100%-4rem)] w-24 overflow-visible" viewBox="0 0 100 600" fill="none" aria-hidden="true">
            <path d="M50 10C12 105 88 164 50 250S12 395 50 485 88 550 50 590" stroke="rgba(255,255,255,0.16)" strokeWidth="2" />
            <path data-story-path pathLength="1" d="M50 10C12 105 88 164 50 250S12 395 50 485 88 550 50 590" stroke="var(--theme-accent)" strokeWidth="2.5" strokeLinecap="round" strokeDasharray="1" strokeDashoffset="1" />
            <circle data-story-marker cx="50" cy="10" r="8" fill="var(--site-bg)" stroke="var(--theme-accent)" strokeWidth="3" style={{ willChange: "transform" }} />
          </svg>
        </div>

        <div className="space-y-4 sm:space-y-5">
          {stages.map((stage, index) => (
            <Link key={stage.title} data-story-card href={stage.href} className="group block border border-white/10 bg-[var(--site-surface-raised)] p-6 transition-colors hover:border-[var(--theme-accent)] hover:bg-[var(--theme-accent-soft)] sm:p-8">
              <div className="flex items-start justify-between gap-5">
                <p className="font-mono text-[10px] uppercase tracking-[0.25em] text-white/42">0{index + 1} / {stage.eyebrow}</p>
                <ArrowUpRight className="mt-0.5 size-5 text-[var(--theme-accent)] transition-transform group-hover:-translate-y-1 group-hover:translate-x-1" />
              </div>
              <h2 className="theme-accent mt-7 font-avatar-airbender text-4xl leading-none tracking-wide sm:text-5xl">{stage.title}</h2>
              <p className="mt-4 max-w-2xl text-sm leading-relaxed text-white/60 sm:text-base">{stage.description}</p>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
