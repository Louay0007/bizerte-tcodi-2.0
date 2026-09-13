"use client";

import Link from "next/link";
import Image from "next/image";
import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import {
  ArrowDown,
  ArrowUpRight,
  BookOpenCheck,
  Code2,
  Rocket,
  Timer,
} from "lucide-react";
import { registrationUrl } from "@/constants";

gsap.registerPlugin(ScrollTrigger);

const tracks = [
  { index: "01", title: "Correctness", detail: "Translate each statement into code that handles every valid case, not only the examples.", accent: "from-red-500/20 via-transparent to-transparent" },
  { index: "02", title: "Algorithms", detail: "Recognize patterns and select data structures and algorithms that fit the constraints.", accent: "from-cyan-400/20 via-transparent to-transparent" },
  { index: "03", title: "Efficiency", detail: "Improve time and memory complexity so solutions succeed on demanding hidden tests.", accent: "from-emerald-400/20 via-transparent to-transparent" },
];

const workflow = [
  { number: "01", title: "Join", copy: "Complete the registration form and arrive with your coding environment ready.", icon: Rocket },
  { number: "02", title: "Read", copy: "Understand every statement, example, constraint, and required output.", icon: BookOpenCheck },
  { number: "03", title: "Solve", copy: "Design and implement correct algorithms under the competition clock.", icon: Code2 },
  { number: "04", title: "Submit", copy: "Test, optimize, submit, and follow your progress on the standings.", icon: Timer },
];

export default function ProgramExperience() {
  const rootRef = useRef<HTMLElement>(null);

  useGSAP(() => {
    const root = rootRef.current;
    if (!root || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const context = gsap.context(() => {
      gsap.from("[data-track-card]", {
        autoAlpha: 0,
        y: 38,
        stagger: 0.14,
        duration: 0.65,
        ease: "power3.out",
        scrollTrigger: { trigger: "[data-tracks]", start: "top 72%" },
      });

      gsap.from("[data-workflow-step]", {
        autoAlpha: 0,
        y: 24,
        stagger: 0.12,
        duration: 0.55,
        ease: "power2.out",
        scrollTrigger: { trigger: "[data-workflow]", start: "top 75%" },
      });
    }, root);

    return () => context.revert();
  }, { scope: rootRef });

  return (
    <main ref={rootRef} className="bg-dark pt-20 text-white sm:pt-24">
      <section className="theme-transition border-b border-white/10 bg-dark px-6 pb-16 pt-8 sm:px-10 sm:pb-24 lg:px-16">
        <div className="mx-auto max-w-7xl">
          <p className="font-mono text-[11px] uppercase tracking-[0.28em] text-white/42">Bizerte Tcodi 3.0 / Program</p>
          <div className="mt-8 flex flex-col justify-between gap-8 lg:flex-row lg:items-end">
            <div><h1 className="theme-accent font-avatar-airbender text-6xl leading-[0.84] tracking-wide sm:text-7xl lg:text-8xl">The contest<br />has a rhythm.</h1><p className="mt-6 max-w-xl text-lg leading-relaxed text-white/65">From the rules briefing to the final submission, every stage is designed around focused algorithmic problem solving.</p></div>
            <a href="#event-arc" className="inline-flex size-12 shrink-0 items-center justify-center border border-[var(--theme-accent)] text-[var(--theme-accent)] transition-colors hover:bg-[var(--theme-accent)] hover:text-[var(--theme-on-accent)]" aria-label="Explore the event arc"><ArrowDown className="size-5" /></a>
          </div>
        </div>
      </section>

      <section id="event-arc" className="theme-transition bg-dark px-4 py-16 sm:px-8 sm:py-24 lg:px-12">
        <div className="mx-auto max-w-[96rem]">
          <div className="mb-8 max-w-2xl sm:mb-10">
            <p className="font-mono text-[10px] uppercase tracking-[0.28em] text-white/42">Official program</p>
            <h2 className="theme-accent mt-5 font-avatar-airbender text-5xl leading-[0.88] tracking-wide sm:text-6xl">Two days.<br />One shared journey.</h2>
            <p className="mt-6 text-sm leading-relaxed text-white/60 sm:text-base">Explore the complete Bizerte Tcodi 3.0 timeline from check-in to the closing ceremony.</p>
          </div>

          <figure className="overflow-hidden border border-white/15 bg-[var(--site-surface-raised)] p-2 sm:p-3">
            <figcaption className="border-b border-white/10 px-3 py-3 text-xs text-white/65 lg:hidden">
              Swipe or scroll horizontally to view the full timeline →
            </figcaption>
            <div
              tabIndex={0}
              aria-label="Scrollable Bizerte Tcodi program timeline"
              className="overflow-x-auto overscroll-x-contain focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-[var(--theme-accent)] [scrollbar-color:var(--theme-accent)_var(--site-surface)] [scrollbar-width:thin]"
            >
              <Image
                src="/images/program/timeline.png"
                alt="Bizerte Tcodi 3.0 two-day timeline: check-in, opening ceremony, panel discussion, lunch, round table, workshops, coffee breaks, games, dinner, hackathon, blind hour, closing ceremony"
                width={2400}
                height={1350}
                priority
                className="h-auto min-w-[64rem] max-w-none lg:min-w-0 lg:w-full"
                sizes="(min-width: 1024px) calc(100vw - 6rem), 1024px"
              />
            </div>
          </figure>
        </div>
      </section>

      <section data-tracks className="theme-transition border-y border-white/10 bg-dark px-6 py-20 sm:px-10 sm:py-28 lg:px-16">
        <div className="mx-auto max-w-7xl"><div className="max-w-2xl"><p className="font-mono text-[11px] uppercase tracking-[0.28em] text-white/42">What decides the ranking</p><h2 className="theme-accent mt-5 font-avatar-airbender text-5xl leading-[0.88] tracking-wide sm:text-6xl">Think clearly.<br />Code efficiently.</h2><p className="mt-6 leading-relaxed text-white/60">The official problem set and scoring rules will be revealed at the event. Prepare to reason about correctness, algorithms, and complexity.</p></div><div className="mt-12 grid gap-4 lg:grid-cols-3">{tracks.map((track) => <article key={track.index} data-track-card className="relative min-h-80 overflow-hidden border border-white/12 bg-[var(--site-surface-raised)] p-7 sm:p-8"><div className={`absolute inset-0 bg-gradient-to-br ${track.accent}`} /><div className="relative flex h-full flex-col"><p className="font-mono text-xs text-[var(--theme-accent)]">{track.index}</p><h3 className="mt-auto font-avatar-airbender text-4xl leading-[0.9] tracking-wide text-white">{track.title}</h3><p className="mt-5 leading-relaxed text-white/62">{track.detail}</p></div></article>)}</div></div>
      </section>

      <section data-workflow className="theme-transition bg-dark px-6 py-20 sm:px-10 sm:py-28 lg:px-16">
        <div className="mx-auto max-w-7xl"><p className="font-mono text-[11px] uppercase tracking-[0.28em] text-white/42">How it works</p><h2 className="theme-accent mt-5 font-avatar-airbender text-5xl leading-[0.88] tracking-wide sm:text-6xl">Bring the energy.<br />Follow the flow.</h2><div className="mt-12 grid gap-px overflow-hidden border border-white/12 bg-white/12 md:grid-cols-4">{workflow.map((step) => { const Icon = step.icon; return <article key={step.number} data-workflow-step className="min-h-64 bg-[var(--site-surface-raised)] p-6 sm:p-7"><div className="flex items-center justify-between"><span className="font-mono text-xs text-[var(--theme-accent)]">{step.number}</span><Icon className="size-5 text-[var(--theme-accent)]" /></div><h3 className="mt-20 text-3xl font-semibold text-white">{step.title}</h3><p className="mt-4 leading-relaxed text-white/60">{step.copy}</p></article>; })}</div></div>
      </section>

      <section className="theme-transition border-t border-white/10 bg-dark px-6 py-20 sm:px-10 sm:py-28 lg:px-16"><div className="mx-auto max-w-7xl border border-[var(--theme-accent)] bg-[var(--theme-accent-soft)] p-7 sm:p-12"><p className="font-mono text-[11px] uppercase tracking-[0.28em] text-white/56">Registration status</p><div className="mt-10 flex flex-col justify-between gap-10 lg:flex-row lg:items-end"><div><h2 className="font-avatar-airbender text-5xl leading-[0.88] tracking-wide text-white sm:text-7xl">Registration<br />is open.</h2><p className="mt-5 max-w-xl text-lg leading-relaxed text-white/70">Bizerte Tcodi is open to university students ready to test their algorithmic thinking under pressure. Complete the official form to secure your place.</p></div><div className="flex flex-wrap gap-3"><a href={registrationUrl} target="_blank" rel="noreferrer" className="inline-flex min-h-11 items-center gap-2 border border-white bg-white px-5 py-3 text-sm font-semibold text-black transition-opacity hover:opacity-80 active:translate-y-px focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-black">Register now <ArrowUpRight className="size-4" aria-hidden="true" /></a><Link href="/#faq" className="inline-flex min-h-11 items-center gap-2 border border-white/35 px-5 py-3 text-sm font-semibold text-white transition-colors hover:bg-white/10 active:translate-y-px focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white">Read FAQ <ArrowUpRight className="size-4" aria-hidden="true" /></Link></div></div></div></section>
    </main>
  );
}
