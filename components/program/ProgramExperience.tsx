"use client";

import Link from "next/link";
import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import {
  ArrowDown,
  ArrowUpRight,
  Award,
  CheckCircle2,
  Code2,
  Flag,
  Lightbulb,
  MessagesSquare,
  Presentation,
  Rocket,
  UsersRound,
} from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

const eventArc = [
  { time: "08:00", title: "Check-in", purpose: "Confirm your place, collect your badge, and settle in with your team.", icon: CheckCircle2 },
  { time: "09:00", title: "Opening", purpose: "Meet the people behind Tcodi and get the frame for the weekend.", icon: Flag },
  { time: "09:30", title: "Challenge Reveal", purpose: "Explore the problem spaces, criteria, and the question your team will take on.", icon: Lightbulb },
  { time: "10:00", title: "Build", purpose: "Turn your idea into a working digital product through focused collaboration.", icon: Code2 },
  { time: "13:00", title: "Mentorship", purpose: "Use guidance checkpoints to test decisions, unblock progress, and sharpen your pitch.", icon: MessagesSquare },
  { time: "17:00", title: "Pitching", purpose: "Share what you made, why it matters, and how it works with the jury.", icon: Presentation },
  { time: "18:00", title: "Awards", purpose: "Celebrate the strongest solutions and the work every team brought to the room.", icon: Award },
];

const tracks = [
  { index: "01", title: "Digital civic life", detail: "Software that makes local services, access, or community life easier to navigate.", accent: "from-red-500/20 via-transparent to-transparent" },
  { index: "02", title: "Learning and opportunity", detail: "Useful digital tools that help people discover, learn, and move forward.", accent: "from-cyan-400/20 via-transparent to-transparent" },
  { index: "03", title: "Everyday systems", detail: "Thoughtful products for the practical frustrations people meet in daily life.", accent: "from-emerald-400/20 via-transparent to-transparent" },
];

const workflow = [
  { number: "01", title: "Join", copy: "Register when the call opens and arrive ready to work.", icon: Rocket },
  { number: "02", title: "Form", copy: "Bring a team or meet collaborators at Tcodi.", icon: UsersRound },
  { number: "03", title: "Build", copy: "Choose a direction and ship a useful digital prototype.", icon: Code2 },
  { number: "04", title: "Present", copy: "Tell the story of your solution with clarity and confidence.", icon: Presentation },
];

export default function ProgramExperience() {
  const rootRef = useRef<main>(null);

  useGSAP(() => {
    const root = rootRef.current;
    if (!root || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const context = gsap.context(() => {
      const path = root.querySelector<SVGPathElement>("[data-event-path]");
      const phases = gsap.utils.toArray<HTMLElement>("[data-event-phase]", root);

      if (path && phases.length) {
        gsap.set(phases, { autoAlpha: 0, y: 20 });

        const timeline = gsap.timeline({
          scrollTrigger: { trigger: "[data-event-arc]", start: "top center", end: "bottom 35%", scrub: 0.55 },
        });

        timeline.fromTo(path, { attr: { "stroke-dashoffset": 1 } }, { attr: { "stroke-dashoffset": 0 }, duration: 1, ease: "none" }, 0);

        phases.forEach((phase, index) => {
          timeline.to(phase, {
            autoAlpha: 1,
            y: 0,
            duration: 0.08,
            ease: "power2.out",
          }, index / phases.length + 0.03);
        });
      }

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
            <div><h1 className="theme-accent font-avatar-airbender text-6xl leading-[0.84] tracking-wide sm:text-7xl lg:text-8xl">The build<br />has a rhythm.</h1><p className="mt-6 max-w-xl text-lg leading-relaxed text-white/65">From the first check-in to the final pitch, every moment is designed to turn shared curiosity into something useful.</p></div>
            <a href="#event-arc" className="inline-flex size-12 shrink-0 items-center justify-center border border-[var(--theme-accent)] text-[var(--theme-accent)] transition-colors hover:bg-[var(--theme-accent)] hover:text-[var(--theme-on-accent)]" aria-label="Explore the event arc"><ArrowDown className="size-5" /></a>
          </div>
        </div>
      </section>

      <section id="event-arc" data-event-arc className="theme-transition relative overflow-hidden bg-dark px-6 py-20 sm:px-10 sm:py-28 lg:px-16">
        <svg className="pointer-events-none absolute -left-24 top-12 hidden h-[calc(100%-6rem)] w-[30rem] text-[var(--theme-accent)] opacity-65 md:block" viewBox="0 0 420 1400" fill="none" preserveAspectRatio="none" aria-hidden="true"><path data-event-path pathLength="1" d="M280 10C72 82 372 185 178 267S44 411 240 478 362 629 150 723 28 885 229 961 373 1113 168 1206 68 1329 258 1390" stroke="currentColor" strokeWidth="7" strokeLinecap="round" strokeDasharray="1" /></svg>
        <div className="relative mx-auto grid max-w-6xl gap-10 md:grid-cols-[12rem_minmax(0,1fr)] lg:grid-cols-[16rem_minmax(0,1fr)]">
          <div><p className="font-mono text-[10px] uppercase tracking-[0.28em] text-white/42">Event arc</p><h2 className="theme-accent mt-5 font-avatar-airbender text-5xl leading-[0.88] tracking-wide">One day.<br />Seven beats.</h2><p className="mt-6 max-w-[15rem] text-sm leading-relaxed text-white/60">Indicative time slots are shown below. Final timings will be confirmed with registered participants.</p></div>
          <div className="space-y-4 sm:space-y-5">
            {eventArc.map((phase, index) => { const Icon = phase.icon; return <article key={phase.title} data-event-phase className="border border-white/12 bg-[var(--site-surface-raised)] p-5 sm:p-6 max-md:!translate-y-0 max-md:!opacity-100 max-md:!visible"><div className="flex items-start justify-between gap-5"><div className="flex size-10 shrink-0 items-center justify-center border border-[var(--theme-accent)] text-[var(--theme-accent)]"><Icon className="size-5" /></div><p className="font-mono text-[10px] uppercase tracking-[0.18em] text-white/42">{String(index + 1).padStart(2, "0")} / {phase.time}</p></div><h3 className="mt-8 text-2xl font-semibold text-white">{phase.title}</h3><p className="mt-3 max-w-xl leading-relaxed text-white/60">{phase.purpose}</p></article>; })}
          </div>
        </div>
      </section>

      <section data-tracks className="theme-transition border-y border-white/10 bg-dark px-6 py-20 sm:px-10 sm:py-28 lg:px-16">
        <div className="mx-auto max-w-7xl"><div className="max-w-2xl"><p className="font-mono text-[11px] uppercase tracking-[0.28em] text-white/42">Challenge tracks</p><h2 className="theme-accent mt-5 font-avatar-airbender text-5xl leading-[0.88] tracking-wide sm:text-6xl">Where code<br />can matter.</h2><p className="mt-6 leading-relaxed text-white/60">Three technical directions will guide the challenge reveal. Full problem statements and judging criteria arrive at the event.</p></div><div className="mt-12 grid gap-4 lg:grid-cols-3">{tracks.map((track) => <article key={track.index} data-track-card className="relative min-h-80 overflow-hidden border border-white/12 bg-[var(--site-surface-raised)] p-7 sm:p-8"><div className={`absolute inset-0 bg-gradient-to-br ${track.accent}`} /><div className="relative flex h-full flex-col"><p className="font-mono text-xs text-[var(--theme-accent)]">{track.index}</p><h3 className="mt-auto font-avatar-airbender text-4xl leading-[0.9] tracking-wide text-white">{track.title}</h3><p className="mt-5 leading-relaxed text-white/62">{track.detail}</p></div></article>)}</div></div>
      </section>

      <section data-workflow className="theme-transition bg-dark px-6 py-20 sm:px-10 sm:py-28 lg:px-16">
        <div className="mx-auto max-w-7xl"><p className="font-mono text-[11px] uppercase tracking-[0.28em] text-white/42">How it works</p><h2 className="theme-accent mt-5 font-avatar-airbender text-5xl leading-[0.88] tracking-wide sm:text-6xl">Bring the energy.<br />Follow the flow.</h2><div className="mt-12 grid gap-px overflow-hidden border border-white/12 bg-white/12 md:grid-cols-4">{workflow.map((step) => { const Icon = step.icon; return <article key={step.number} data-workflow-step className="min-h-64 bg-[var(--site-surface-raised)] p-6 sm:p-7"><div className="flex items-center justify-between"><span className="font-mono text-xs text-[var(--theme-accent)]">{step.number}</span><Icon className="size-5 text-[var(--theme-accent)]" /></div><h3 className="mt-20 text-3xl font-semibold text-white">{step.title}</h3><p className="mt-4 leading-relaxed text-white/60">{step.copy}</p></article>; })}</div></div>
      </section>

      <section className="theme-transition border-t border-white/10 bg-dark px-6 py-20 sm:px-10 sm:py-28 lg:px-16"><div className="mx-auto max-w-7xl border border-[var(--theme-accent)] bg-[var(--theme-accent-soft)] p-7 sm:p-12"><p className="font-mono text-[11px] uppercase tracking-[0.28em] text-white/56">Registration status</p><div className="mt-10 flex flex-col justify-between gap-10 lg:flex-row lg:items-end"><div><h2 className="font-avatar-airbender text-5xl leading-[0.88] tracking-wide text-white sm:text-7xl">Registration<br />opens soon.</h2><p className="mt-5 max-w-xl text-lg leading-relaxed text-white/70">Bizerte Tcodi is open to motivated university students ready to collaborate and build. Eligibility details, the final schedule, and registration access will be announced together.</p></div><div className="flex flex-wrap gap-3"><Link href="/#faq" className="inline-flex items-center gap-2 border border-white bg-white px-5 py-3 text-sm font-semibold text-black transition-opacity hover:opacity-80">Read FAQ <ArrowUpRight className="size-4" /></Link><Link href="/#contact" className="inline-flex items-center gap-2 border border-white/35 px-5 py-3 text-sm font-semibold text-white transition-colors hover:bg-white/10">Contact the team <ArrowUpRight className="size-4" /></Link></div></div></div></section>
    </main>
  );
}