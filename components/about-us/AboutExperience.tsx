"use client";

import Link from "next/link";
import Image from "next/image";
import { useRef, useState } from "react";
import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ArrowDown, ArrowUpRight, ChevronRight, Image as ImageIcon, Route } from "lucide-react";
import { registrationUrl } from "@/constants";

gsap.registerPlugin(ScrollTrigger);

const manifesto = [
  {
    number: "01",
    title: "Think before you type.",
    copy: "Strong solutions begin by understanding the statement, constraints, edge cases, and the shape of the problem.",
  },
  {
    number: "02",
    title: "Turn logic into code.",
    copy: "Choose the right data structures and algorithms, then implement them with precision under a running clock.",
  },
  {
    number: "03",
    title: "Prove every answer.",
    copy: "A solution succeeds only when it is correct, efficient, and robust enough to pass the official test cases.",
  },
];

const branches = [
  { code: "01", name: "ISET Bizerte", role: "Host energy", detail: "Creating a focused competition environment where every participant can do their best work.", imageSrc: "/images/ieee-partners/iset-bizerte.png" },
  { code: "02", name: "ENIB", role: "Technical drive", detail: "Bringing engineering depth and a strong culture of algorithms, logic, and disciplined problem solving.", imageSrc: "/images/ieee-partners/ieee-fsb.png" },
  { code: "03", name: "ISSATM", role: "Problem design", detail: "Helping shape clear technical challenges that reward reasoning, correctness, and efficiency.", imageSrc: "/images/ieee-partners/ieee-issatm.png" },
  { code: "04", name: "FSB", role: "Community reach", detail: "Connecting problem solvers across campuses and strengthening Bizerte's competitive programming community.", imageSrc: "/images/ieee-partners/ieee-enib.png" },
];

const pillars = [
  { index: "01", title: "Clear problems", copy: "Every challenge defines its inputs, outputs, examples, and constraints so reasoning—not guesswork—drives the solution.", tag: "Read precisely" },
  { index: "02", title: "Algorithmic thinking", copy: "Participants recognize patterns, select data structures, and turn a sound approach into working code.", tag: "Think deeply" },
  { index: "03", title: "Hidden test cases", copy: "Submissions must handle edge cases and scale within the required time and memory limits.", tag: "Code correctly" },
  { index: "04", title: "Live standings", copy: "Correct submissions move competitors forward and keep the contest focused until the final minute.", tag: "Compete fairly" },
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
  const rootRef = useRef<HTMLElement>(null);
  const [activePillar, setActivePillar] = useState(0);

  useGSAP(() => {
    const root = rootRef.current;
    if (!root || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const mediaQueries = gsap.matchMedia();

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
        mediaQueries.add("(min-width: 1024px)", () => {
          let currentIndex = -1;
          const getDistance = () => Math.max(0, horizontal.scrollWidth - rail.clientWidth);

          const tween = gsap.to(horizontal, {
            x: () => -getDistance(),
            ease: "none",
            scrollTrigger: {
              trigger: rail,
              start: "top top+=88",
              end: () => `+=${getDistance()}`,
              scrub: 0.65,
              pin: true,
              invalidateOnRefresh: true,
              anticipatePin: 1,
              onUpdate: (self) => {
                const nextIndex = Math.min(pillars.length - 1, Math.floor(self.progress * pillars.length));
                if (nextIndex !== currentIndex) {
                  currentIndex = nextIndex;
                  setActivePillar(nextIndex);
                }
              },
            },
          });

          return () => tween.kill();
        });
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

    return () => {
      mediaQueries.revert();
      context.revert();
    };
  }, { scope: rootRef });

  return (
    <main ref={rootRef} className="bg-dark pt-14 text-white sm:pt-16">
      <section className="theme-transition border-b border-white/10 bg-dark" data-about-hero>
        <div className="relative aspect-video w-full overflow-hidden bg-black sm:aspect-[1640/624]">
          <Image
            src="/images/hero/bizerte-codi-banner.png"
            alt="Bizerte Tcodi 3.0 event artwork"
            fill
            priority
            sizes="100vw"
            className="object-contain"
          />
        </div>
        <div className="relative mx-auto max-w-7xl px-6 py-12 sm:px-10 sm:py-16 lg:px-16">
          <p className="flex items-center gap-2 font-mono text-[11px] uppercase tracking-[0.28em] text-white/55"><Route className="size-4 text-[var(--theme-accent)]" /> About Bizerte Tcodi</p>
          <h1 className="theme-accent mt-5 max-w-5xl font-avatar-airbender text-5xl leading-[0.86] tracking-wide sm:text-6xl lg:text-7xl">Born in Bizerte.<br />Made for problem solvers.</h1>
          <div className="mt-8 flex flex-wrap items-center justify-between gap-5 border-t border-white/20 pt-5">
            <p className="max-w-lg text-base leading-relaxed text-white/70 sm:text-lg">A student-led coding competition where participants race to solve algorithmic problems correctly and efficiently.</p>
            <a href="#why" className="inline-flex size-12 items-center justify-center border border-[var(--theme-accent)] text-[var(--theme-accent)] transition-colors hover:bg-[var(--theme-accent)] hover:text-[var(--theme-on-accent)]" aria-label="Explore why Tcodi exists"><ArrowDown className="size-5" /></a>
          </div>
        </div>
      </section>

      <section id="why" data-manifesto className="theme-transition bg-dark py-20 sm:py-28">
        <div className="mx-auto grid max-w-7xl gap-12 px-6 lg:grid-cols-[0.85fr_1.15fr] lg:px-10">
          <div className="lg:sticky lg:top-28 lg:self-start">
            <p className="font-mono text-[11px] uppercase tracking-[0.28em] text-white/42">The why</p>
            <h2 className="theme-accent mt-5 font-avatar-airbender text-5xl leading-[0.88] tracking-wide sm:text-6xl">Sharp minds.<br />Clear solutions.</h2>
            <div data-manifesto-media className="relative mt-8 hidden aspect-[4/5] overflow-hidden rounded-lg border border-white/15 lg:block">
              <Image src="/images/about-us/manifesto-hackathon.png" alt="Students solving coding problems during Bizerte Tcodi" width={1664} height={2080} sizes="(min-width: 1024px) 35vw, 100vw" className="h-full w-full object-cover" />
              <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_right,#000_0%,transparent_24%,transparent_76%,#000_100%),linear-gradient(to_bottom,#000_0%,transparent_20%,transparent_80%,#000_100%)]" />
            </div>
          </div>
          <div className="space-y-3">
            <p className="max-w-2xl pb-7 text-lg leading-relaxed text-white/68">Tcodi turns curiosity into a focused contest of logic and code. Participants analyze unfamiliar problems, design efficient algorithms, and test their thinking under time pressure.</p>
            {manifesto.map((item) => (
              <article key={item.number} data-manifesto-line className="border-t border-white/14 py-7 sm:grid sm:grid-cols-[4rem_1fr] sm:gap-6">
                <p className="font-mono text-xs text-[var(--theme-accent)]">{item.number}</p>
                <div className="mt-3 sm:mt-0"><h3 className="text-2xl font-semibold text-white sm:text-3xl">{item.title}</h3><p className="mt-3 max-w-xl leading-relaxed text-white/58">{item.copy}</p></div>
              </article>
            ))}
            <div className="relative mt-4 aspect-[4/5] overflow-hidden rounded-lg border border-white/15 lg:hidden">
              <Image src="/images/about-us/manifesto-hackathon.png" alt="Students solving coding problems during Bizerte Tcodi" width={1664} height={2080} sizes="100vw" className="h-full w-full object-cover" />
              <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_right,#000_0%,transparent_24%,transparent_76%,#000_100%),linear-gradient(to_bottom,#000_0%,transparent_20%,transparent_80%,#000_100%)]" />
            </div>
          </div>
        </div>
      </section>

      <section className="theme-transition border-y border-white/10 bg-dark py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <div className="max-w-2xl"><p className="font-mono text-[11px] uppercase tracking-[0.28em] text-white/42">The network</p><h2 className="theme-accent mt-5 font-avatar-airbender text-5xl leading-[0.88] tracking-wide sm:text-6xl">Four branches.<br />One contest.</h2><p className="mt-5 leading-relaxed text-white/63">Four IEEE Student Branches unite around one competitive programming experience for Bizerte's students.</p></div>
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
        <div className="mx-auto flex max-w-7xl items-end justify-between gap-8 px-6 lg:px-10">
          <div><p className="font-mono text-[11px] uppercase tracking-[0.28em] text-white/42">The competition</p><h2 className="theme-accent mt-5 max-w-3xl font-avatar-airbender text-5xl leading-[0.88] tracking-wide sm:text-6xl">More than syntax.<br />A test of thinking.</h2></div>
          <p className="hidden shrink-0 font-mono text-xs tracking-[0.2em] text-white/45 lg:block" aria-hidden="true">{String(activePillar + 1).padStart(2, "0")} / {String(pillars.length).padStart(2, "0")}</p>
        </div>
        <div data-pillars-track className="mt-10 grid gap-4 px-6 sm:px-10 lg:flex lg:w-max lg:px-[max(2.5rem,calc((100vw-80rem)/2))]">
          {pillars.map((pillar, index) => (
            <article key={pillar.title} data-pillar-card data-active={activePillar === index} className={`flex min-h-[22rem] w-full shrink-0 flex-col border border-white/12 bg-[var(--site-surface-raised)] p-7 transition-colors sm:min-h-[24rem] sm:p-9 lg:min-h-[26rem] lg:w-[36rem] ${activePillar === index ? "lg:border-[var(--theme-accent)] lg:bg-[var(--theme-accent-soft)]" : ""}`}>
              <span className="font-mono text-xs text-[var(--theme-accent)]">{pillar.index}</span><div className="mt-14 flex items-start justify-between gap-8 sm:mt-20"><h3 className="font-avatar-airbender text-4xl leading-[0.88] tracking-wide text-white sm:text-5xl">{pillar.title}</h3><ChevronRight className="hidden size-6 shrink-0 text-[var(--theme-accent)] lg:block" aria-hidden="true" /></div><p className="mt-7 max-w-md text-base leading-relaxed text-white/65 sm:text-lg">{pillar.copy}</p><p className="mt-auto pt-10 font-mono text-[10px] uppercase tracking-[0.24em] text-white/45">{pillar.tag}</p>
            </article>
          ))}
        </div>
      </section>

      <section data-impact className="theme-transition bg-dark py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-6 lg:px-10"><div className="flex flex-wrap items-end justify-between gap-6"><div><p className="font-mono text-[11px] uppercase tracking-[0.28em] text-white/42">The impact</p><h2 className="theme-accent mt-5 font-avatar-airbender text-5xl leading-[0.88] tracking-wide sm:text-6xl">Growing with<br />every edition.</h2></div><p className="max-w-sm leading-relaxed text-white/60">Official participation and competition figures will be added with the final event archive.</p></div>
          <div className="mt-10 grid gap-4 lg:grid-cols-[1.2fr_.8fr]"><div data-impact-item className="relative aspect-video overflow-hidden rounded-lg border border-white/15"><Image src="/images/about-us/impact-coding-hackathon.png" alt="Students competing in a Bizerte coding challenge" width={2560} height={1440} sizes="(min-width: 1024px) 55vw, 100vw" className="h-full w-full object-cover" /><div className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_right,#000_0%,transparent_24%,transparent_76%,#000_100%),linear-gradient(to_bottom,#000_0%,transparent_20%,transparent_80%,#000_100%)]" /></div><div data-impact-item className="grid grid-cols-2 gap-4"><div className="flex aspect-square flex-col justify-between border border-white/12 bg-[var(--site-surface-raised)] p-5"><span className="font-mono text-[10px] uppercase tracking-[0.18em] text-white/42">Participants</span><strong className="theme-accent text-4xl">+200</strong></div><div className="flex aspect-square flex-col justify-between border border-white/12 bg-[var(--site-surface-raised)] p-5"><span className="font-mono text-[10px] uppercase tracking-[0.18em] text-white/42">Teams</span><strong className="theme-accent text-4xl">+20</strong></div><div className="col-span-2 border border-white/12 bg-[var(--site-surface-raised)] p-5"><span className="font-mono text-[10px] uppercase tracking-[0.18em] text-white/42">Timeline</span><div className="mt-8 grid grid-cols-3 gap-3 text-sm"><div><p className="theme-accent font-medium">Edition 1</p><p className="mt-2 text-white/45">The first contest.</p></div><div><p className="theme-accent font-medium">Edition 2</p><p className="mt-2 text-white/45">The community grows.</p></div><div><p className="theme-accent font-medium">3.0</p><p className="mt-2 text-white/45">The next challenge.</p></div></div></div></div></div>
        </div>
      </section>

      <section className="theme-transition border-t border-white/10 bg-dark px-6 py-20 sm:py-28"><div className="mx-auto max-w-7xl border border-[var(--theme-accent)] bg-[var(--theme-accent-soft)] p-7 sm:p-12"><p className="font-mono text-[11px] uppercase tracking-[0.28em] text-white/56">Bizerte Tcodi 3.0</p><div className="mt-10 flex flex-col justify-between gap-10 lg:flex-row lg:items-end"><div><h2 className="font-avatar-airbender text-5xl leading-[0.88] tracking-wide text-white sm:text-7xl">Ready to solve<br />under pressure?</h2><p className="mt-5 max-w-xl text-lg leading-relaxed text-white/70">Explore the competition flow, then complete the official registration form to secure your place.</p></div><div className="flex flex-wrap gap-3"><Link href="/program" className="inline-flex min-h-11 items-center gap-2 border border-white bg-white px-5 py-3 text-sm font-semibold text-black transition-opacity hover:opacity-80 active:translate-y-px focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-black">View program <ArrowUpRight className="size-4" aria-hidden="true" /></Link><a href={registrationUrl} target="_blank" rel="noreferrer" className="inline-flex min-h-11 items-center gap-2 border border-white/35 px-5 py-3 text-sm font-semibold text-white transition-colors hover:bg-white/10 active:translate-y-px focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white">Register now <ArrowUpRight className="size-4" aria-hidden="true" /></a></div></div></div></section>
    </main>
  );
}
