"use client";

import Link from "next/link";
import Image from "next/image";
import { useRef, useState } from "react";
import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ArrowDown, ArrowUpRight, ChevronRight, Image as ImageIcon, Route } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

const manifesto = [
  {
    number: "01",
    title: "Start where you are.",
    copy: "Bizerte is full of students who see what could be better and have the curiosity to act on it.",
  },
  {
    number: "02",
    title: "Build with people.",
    copy: "The strongest ideas take shape when different skills, disciplines, and perspectives meet around one table.",
  },
  {
    number: "03",
    title: "Leave something useful.",
    copy: "Tcodi is a space to turn a challenge into a practical first step, then share that step with a community that can carry it forward.",
  },
];

const branches = [
  { code: "01", name: "ISET Bizerte", role: "Host energy", detail: "Bringing local momentum, campus access, and a welcome built for new builders.", imageSrc: "/images/ieee-partners/iset-bizerte.png" },
  { code: "02", name: "ENIB", role: "Technical drive", detail: "Connecting engineering depth with the hands-on challenge of shipping a real solution.", imageSrc: "/images/ieee-partners/ieee-fsb.png" },
  { code: "03", name: "ISSATM", role: "Creative systems", detail: "Making room for multidisciplinary thinking, experiments, and unexpected combinations.", imageSrc: "/images/ieee-partners/ieee-issatm.png" },
  { code: "04", name: "FSB", role: "Community reach", detail: "Extending the event beyond one campus and building bridges across the student community.", imageSrc: "/images/ieee-partners/ieee-enib.png" },
];

const pillars = [
  { index: "01", title: "Real problems", copy: "Challenges begin with situations that deserve a useful response, not a fictional brief.", tag: "Challenge-led" },
  { index: "02", title: "Hands-on building", copy: "The idea matters, but the work happens in sketches, prototypes, tests, and honest iteration.", tag: "Make it tangible" },
  { index: "03", title: "Mentorship", copy: "Guidance is built into the process so teams can move forward with sharper questions and stronger decisions.", tag: "Learn in motion" },
  { index: "04", title: "Community", copy: "Tcodi is designed for the conversations, connections, and collaborations that outlive a single weekend.", tag: "Build together" },
];

const mediaPlaceholder = (label: string, ratio: string) => (
  <div className={`about-media-placeholder ${ratio} relative overflow-hidden border border-white/15 bg-[var(--site-surface-raised)]`}>
    <div className="absolute inset-0 bg-[linear-gradient(135deg,color-mix(in_srgb,var(--theme-accent)_20%,transparent),transparent_42%,color-mix(in_srgb,var(--theme-accent)_12%,transparent))]" />
    <div className="absolute -left-16 -top-16 size-52 border border-[var(--theme-accent)] opacity-35" />
    <div className="absolute bottom-5 left-5 flex items-center gap-2 font-mono text-[10px] uppercase tracking-[0.24em] text-white/55">
      <ImageIcon className="size-3 text-[var(--theme-accent)]" />
      {label}
    </div>
  </div>
);

export default function AboutExperience() {
  const rootRef = useRef<main>(null);
  const [activePillar, setActivePillar] = useState(0);

  useGSAP(() => {
    const root = rootRef.current;
    if (!root || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const context = gsap.context(() => {
      gsap.from("[data-about-hero] > *", {
        autoAlpha: 0,
        y: 30,
        duration: 0.8,
        stagger: 0.12,
        ease: "power3.out",
      });

      gsap.utils.toArray<HTMLElement>("[data-manifesto-line]").forEach((line) => {
        gsap.fromTo(line, { autoAlpha: 0.28, y: 24 }, {
          autoAlpha: 1,
          y: 0,
          ease: "power2.out",
          scrollTrigger: { trigger: line, start: "top 72%", end: "top 42%", scrub: 0.35 },
        });
      });

      const media = root.querySelector<HTMLElement>("[data-manifesto-media]");
      if (media) {
        gsap.to(media, {
          yPercent: -10,
          ease: "none",
          scrollTrigger: { trigger: "[data-manifesto]", start: "top bottom", end: "bottom top", scrub: true },
        });
      }

      const horizontal = root.querySelector<HTMLElement>("[data-pillars-track]");
      const rail = root.querySelector<HTMLElement>("[data-pillars-rail]");
      if (horizontal && rail) {
        const horizontalWidth = horizontal.scrollWidth - rail.clientWidth;
        if (horizontalWidth > 0) {
          gsap.to(horizontal, {
            x: -horizontalWidth,
            ease: "none",
            scrollTrigger: {
              trigger: rail,
              start: "top top+=88",
              end: () => `+=${horizontalWidth}`,
              scrub: 0.65,
              pin: true,
              anticipatePin: 1,
            },
          });
        }
      }

      gsap.from("[data-impact-item]", {
        autoAlpha: 0,
        y: 24,
        stagger: 0.12,
        duration: 0.55,
        ease: "power2.out",
        scrollTrigger: { trigger: "[data-impact]", start: "top 72%" },
      });
    }, root);

    return () => context.revert();
  }, { scope: rootRef });

  return (
    <main ref={rootRef} className="bg-dark pt-14 text-white sm:pt-16">
      <section className="theme-transition border-b border-white/10 bg-dark" data-about-hero>
        <Image
          src="/images/hero/bizerte-codi-banner.png"
          alt="Bizerte Tcodi 3.0 event artwork"
          width={1640}
          height={624}
          priority
          sizes="100vw"
          className="block h-auto w-full"
        />
        <div className="relative mx-auto max-w-7xl px-6 py-12 sm:px-10 sm:py-16 lg:px-16">
          <p className="flex items-center gap-2 font-mono text-[11px] uppercase tracking-[0.28em] text-white/55"><Route className="size-4 text-[var(--theme-accent)]" /> About Bizerte Tcodi</p>
          <h1 className="theme-accent mt-5 max-w-5xl font-avatar-airbender text-5xl leading-[0.86] tracking-wide sm:text-6xl lg:text-7xl">Built in Bizerte.<br />Made for problem solvers.</h1>
          <div className="mt-8 flex flex-wrap items-center justify-between gap-5 border-t border-white/20 pt-5">
            <p className="max-w-lg text-base leading-relaxed text-white/70 sm:text-lg">A student-led hackathon where local ambition turns into experiments, prototypes, and useful ideas.</p>
            <a href="#why" className="inline-flex size-12 items-center justify-center border border-[var(--theme-accent)] text-[var(--theme-accent)] transition-colors hover:bg-[var(--theme-accent)] hover:text-[var(--theme-on-accent)]" aria-label="Explore why Tcodi exists"><ArrowDown className="size-5" /></a>
          </div>
        </div>
      </section>

      <section id="why" data-manifesto className="theme-transition bg-dark py-20 sm:py-28">
        <div className="mx-auto grid max-w-7xl gap-12 px-6 lg:grid-cols-[0.85fr_1.15fr] lg:px-10">
          <div className="lg:sticky lg:top-28 lg:self-start">
            <p className="font-mono text-[11px] uppercase tracking-[0.28em] text-white/42">The why</p>
            <h2 className="theme-accent mt-5 font-avatar-airbender text-5xl leading-[0.88] tracking-wide sm:text-6xl">Local ambition.<br />Useful action.</h2>
            <div data-manifesto-media className="relative mt-8 hidden aspect-[4/5] overflow-hidden rounded-lg border border-white/15 lg:block">
              <Image src="/images/about-us/manifesto-hackathon.png" alt="Students developing an engineering project during a hackathon" width={1664} height={2080} sizes="(min-width: 1024px) 35vw, 100vw" className="h-full w-full object-cover" />
              <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_right,#000_0%,transparent_24%,transparent_76%,#000_100%),linear-gradient(to_bottom,#000_0%,transparent_20%,transparent_80%,#000_100%)]" />
            </div>
          </div>
          <div className="space-y-3">
            <p className="max-w-2xl pb-7 text-lg leading-relaxed text-white/68">Tcodi treats student curiosity as a force worth organizing: a reason to bring people together, make room for questions, and build something that can matter beyond the room.</p>
            {manifesto.map((item) => (
              <article key={item.number} data-manifesto-line className="border-t border-white/14 py-7 sm:grid sm:grid-cols-[4rem_1fr] sm:gap-6">
                <p className="font-mono text-xs text-[var(--theme-accent)]">{item.number}</p>
                <div className="mt-3 sm:mt-0"><h3 className="text-2xl font-semibold text-white sm:text-3xl">{item.title}</h3><p className="mt-3 max-w-xl leading-relaxed text-white/58">{item.copy}</p></div>
              </article>
            ))}
            <div className="relative mt-4 aspect-[4/5] overflow-hidden rounded-lg border border-white/15 lg:hidden">
              <Image src="/images/about-us/manifesto-hackathon.png" alt="Students developing an engineering project during a hackathon" width={1664} height={2080} sizes="100vw" className="h-full w-full object-cover" />
              <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_right,#000_0%,transparent_24%,transparent_76%,#000_100%),linear-gradient(to_bottom,#000_0%,transparent_20%,transparent_80%,#000_100%)]" />
            </div>
          </div>
        </div>
      </section>

      <section className="theme-transition border-y border-white/10 bg-dark py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <div className="max-w-2xl"><p className="font-mono text-[11px] uppercase tracking-[0.28em] text-white/42">The network</p><h2 className="theme-accent mt-5 font-avatar-airbender text-5xl leading-[0.88] tracking-wide sm:text-6xl">Four branches.<br />One event.</h2><p className="mt-5 leading-relaxed text-white/63">Four IEEE Student Branches bring different strengths to one shared weekend of problem solving.</p></div>
          <div className="relative mt-12 grid gap-4 md:grid-cols-2">
            <svg className="pointer-events-none absolute -left-7 top-[-6rem] hidden h-[calc(100%+12rem)] w-[calc(100%+3.5rem)] text-[var(--theme-accent)] opacity-40 md:block" viewBox="0 0 1100 520" fill="none" preserveAspectRatio="none" aria-hidden="true"><path d="M50 86C242 6 266 184 512 144S766 30 1054 109M50 405c186-84 264 83 462 28s307-86 542-8" stroke="currentColor" strokeWidth="2" strokeDasharray="7 10" /></svg>
            {branches.map((branch) => (
              <article key={branch.code} className="relative border border-white/12 bg-[var(--site-surface-raised)] p-6 transition-colors hover:border-[var(--theme-accent)] hover:bg-[var(--theme-accent-soft)] sm:p-8">
                <div className="flex items-start justify-between gap-6"><p className="font-mono text-[11px] text-[var(--theme-accent)]">{branch.code}</p><div className="flex h-16 w-28 items-center justify-center"><Image src={branch.imageSrc} alt={`IEEE ${branch.name} Student Branch logo`} width={112} height={64} sizes="112px" className="h-16 w-28 object-contain" /></div></div><h3 className="mt-6 text-2xl font-semibold text-white">{branch.name}</h3><p className="mt-2 text-sm uppercase tracking-[0.16em] text-white/45">{branch.role}</p><p className="mt-5 max-w-md leading-relaxed text-white/60">{branch.detail}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="theme-transition overflow-hidden bg-dark py-20 sm:py-28" data-pillars-rail>
        <div className="mx-auto max-w-7xl px-6 lg:px-10"><p className="font-mono text-[11px] uppercase tracking-[0.28em] text-white/42">The difference</p><h2 className="theme-accent mt-5 max-w-3xl font-avatar-airbender text-5xl leading-[0.88] tracking-wide sm:text-6xl">A different kind<br />of weekend.</h2></div>
        <div data-pillars-track className="mt-10 flex gap-4 px-6 lg:w-max lg:px-[max(2.5rem,calc((100vw-80rem)/2))]">
          {pillars.map((pillar, index) => (
            <button key={pillar.title} type="button" onClick={() => setActivePillar(index)} className={`min-h-[26rem] shrink-0 border p-7 text-left transition-colors sm:w-[30rem] sm:p-9 lg:w-[36rem] ${activePillar === index ? "border-[var(--theme-accent)] bg-[var(--theme-accent-soft)]" : "border-white/12 bg-[var(--site-surface-raised)]"}`}>
              <span className="font-mono text-xs text-[var(--theme-accent)]">{pillar.index}</span><div className="mt-20 flex items-start justify-between gap-8"><h3 className="font-avatar-airbender text-5xl leading-[0.88] tracking-wide text-white">{pillar.title}</h3><ChevronRight className="size-6 shrink-0 text-[var(--theme-accent)]" /></div><p className="mt-7 max-w-md text-lg leading-relaxed text-white/65">{pillar.copy}</p><p className="mt-10 font-mono text-[10px] uppercase tracking-[0.24em] text-white/45">{pillar.tag}</p>
            </button>
          ))}
        </div>
      </section>

      <section data-impact className="theme-transition bg-dark py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-6 lg:px-10"><div className="flex flex-wrap items-end justify-between gap-6"><div><p className="font-mono text-[11px] uppercase tracking-[0.28em] text-white/42">The impact</p><h2 className="theme-accent mt-5 font-avatar-airbender text-5xl leading-[0.88] tracking-wide sm:text-6xl">Growing with<br />every edition.</h2></div><p className="max-w-sm leading-relaxed text-white/60">Official participation and project figures will be added with the final event archive.</p></div>
          <div className="mt-10 grid gap-4 lg:grid-cols-[1.2fr_.8fr]"><div data-impact-item className="relative aspect-video overflow-hidden rounded-lg border border-white/15"><Image src="/images/about-us/impact-coding-hackathon.png" alt="Students collaborating during a Bizerte coding hackathon" width={2560} height={1440} sizes="(min-width: 1024px) 55vw, 100vw" className="h-full w-full object-cover" /><div className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_right,#000_0%,transparent_24%,transparent_76%,#000_100%),linear-gradient(to_bottom,#000_0%,transparent_20%,transparent_80%,#000_100%)]" /></div><div data-impact-item className="grid grid-cols-2 gap-4"><div className="flex aspect-square flex-col justify-between border border-white/12 bg-[var(--site-surface-raised)] p-5"><span className="font-mono text-[10px] uppercase tracking-[0.18em] text-white/42">Participants</span><strong className="theme-accent text-4xl">+200</strong></div><div className="flex aspect-square flex-col justify-between border border-white/12 bg-[var(--site-surface-raised)] p-5"><span className="font-mono text-[10px] uppercase tracking-[0.18em] text-white/42">Projects</span><strong className="theme-accent text-4xl">+20</strong></div><div className="col-span-2 border border-white/12 bg-[var(--site-surface-raised)] p-5"><span className="font-mono text-[10px] uppercase tracking-[0.18em] text-white/42">Timeline</span><div className="mt-8 grid grid-cols-3 gap-3 text-sm"><div><p className="theme-accent font-medium">Edition 1</p><p className="mt-2 text-white/45">The first signal.</p></div><div><p className="theme-accent font-medium">Edition 2</p><p className="mt-2 text-white/45">The community grows.</p></div><div><p className="theme-accent font-medium">3.0</p><p className="mt-2 text-white/45">The next build.</p></div></div></div></div></div>
        </div>
      </section>

      <section className="theme-transition border-t border-white/10 bg-dark px-6 py-20 sm:py-28"><div className="mx-auto max-w-7xl border border-[var(--theme-accent)] bg-[var(--theme-accent-soft)] p-7 sm:p-12"><p className="font-mono text-[11px] uppercase tracking-[0.28em] text-white/56">Bizerte Tcodi 3.0</p><div className="mt-10 flex flex-col justify-between gap-10 lg:flex-row lg:items-end"><div><h2 className="font-avatar-airbender text-5xl leading-[0.88] tracking-wide text-white sm:text-7xl">Ready to build<br />what matters?</h2><p className="mt-5 max-w-xl text-lg leading-relaxed text-white/70">Explore the event flow, then get in touch to hear when registration opens.</p></div><div className="flex flex-wrap gap-3"><Link href="/program" className="inline-flex items-center gap-2 border border-white bg-white px-5 py-3 text-sm font-semibold text-black transition-opacity hover:opacity-80">View program <ArrowUpRight className="size-4" /></Link><Link href="/#contact" className="inline-flex items-center gap-2 border border-white/35 px-5 py-3 text-sm font-semibold text-white transition-colors hover:bg-white/10">Contact the team <ArrowUpRight className="size-4" /></Link></div></div></div></section>
    </main>
  );
}
