"use client";

import Link from "next/link";
import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import {
  ArrowDown,
  ArrowUpRight,
  Handshake,
  Lightbulb,
  UsersRound,
} from "lucide-react";
import {
  CasesWithInfiniteScroll,
  type PartnerLogo,
} from "@/components/ui/cases-with-infinite-scroll";

gsap.registerPlugin(ScrollTrigger);

const partnerLogos: PartnerLogo[] = [
  {
    name: "IEEE ISET Bizerte Student Branch",
    imageSrc: "/images/ieee-partners/iset-bizerte.png",
    href: "https://www.facebook.com/profile.php?id=61550723499159",
  },
  {
    name: "IEEE ISSATM Student Branch",
    imageSrc: "/images/ieee-partners/ieee-issatm.png",
    href: "https://www.facebook.com/IEEE.SB.ISSATM",
  },
  {
    name: "IEEE ENIB Student Branch",
    imageSrc: "/images/ieee-partners/ieee-enib.png",
    href: "https://www.facebook.com/IEEE.ENIB",
  },
  {
    name: "IEEE FSB Student Branch",
    imageSrc: "/images/ieee-partners/ieee-fsb.png",
    href: "https://www.facebook.com/IEEEFSBStudentBranch",
  },
];

const outcomes = [
  {
    number: "01",
    title: "Meet emerging talent",
    copy: "Connect with driven students who are ready to learn, build, and put ideas into practice.",
    icon: UsersRound,
  },
  {
    number: "02",
    title: "Support local innovation",
    copy: "Give practical ideas the space, guidance, and visibility needed to become useful prototypes.",
    icon: Lightbulb,
  },
  {
    number: "03",
    title: "Create visible impact",
    copy: "Be part of an event that gathers students, institutions, and the Bizerte technology community in one room.",
    icon: Handshake,
  },
];

export default function PartnersExperience() {
  const rootRef = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      const root = rootRef.current;
      if (
        !root ||
        window.matchMedia("(prefers-reduced-motion: reduce)").matches
      )
        return;

      const context = gsap.context(() => {
        const path = root.querySelector<SVGPathElement>("[data-partner-path]");
        const panels = gsap.utils.toArray<HTMLElement>(
          "[data-outcome-panel]",
          root,
        );

        if (path && panels.length) {
          gsap.set(panels, { autoAlpha: 0, y: 28 });
          const timeline = gsap.timeline({
            scrollTrigger: {
              trigger: "[data-outcomes]",
              start: "top center",
              end: "bottom 38%",
              scrub: 0.5,
            },
          });
          timeline.fromTo(
            path,
            { attr: { "stroke-dashoffset": 1 } },
            { attr: { "stroke-dashoffset": 0 }, ease: "none", duration: 1 },
            0,
          );
          panels.forEach((panel, index) => {
            timeline.to(
              panel,
              { autoAlpha: 1, y: 0, duration: 0.14, ease: "power2.out" },
              index / panels.length + 0.06,
            );
          });
        }
      }, root);

      return () => context.revert();
    },
    { scope: rootRef },
  );

  return (
    <main ref={rootRef} className="bg-dark pt-20 text-white sm:pt-24">
      <section className="relative isolate flex min-h-[calc(100svh-5rem)] overflow-hidden border-b border-white/10 px-6 py-16 sm:min-h-[calc(100svh-6rem)] sm:px-10 sm:py-20 lg:px-16">
        <img
          src="/images/hero/sponsors-partners-hero.png"
          alt="Bizerte Tcodi partnership network inspired by Bizerte's coastal heritage"
          className="absolute inset-0 -z-20 h-full w-full object-cover object-[62%_center] opacity-65 sm:object-center"
        />
        <div className="absolute inset-0 -z-10 bg-[linear-gradient(90deg,rgba(0,0,0,0.9)_0%,rgba(0,0,0,0.58)_55%,rgba(0,0,0,0.25)_100%),linear-gradient(0deg,#000_0%,transparent_48%)]" />
        <div className="relative mx-auto flex w-full max-w-7xl flex-col justify-end">
          <p className="font-mono text-[11px] uppercase tracking-[0.28em] text-white/55">
            Bizerte Tcodi 3.0 / Partners
          </p>
          <h1 className="mt-6 max-w-5xl font-avatar-airbender text-5xl leading-[0.88] tracking-wide text-white sm:text-7xl lg:text-8xl">
            The people behind
            <br />
            every bold idea.
          </h1>
          <div className="mt-7 flex flex-col justify-between gap-8 sm:flex-row sm:items-end">
            <p className="max-w-xl text-base leading-relaxed text-white/65 sm:text-lg">
              Four student branches, one IEEE community, and partners who turn
              a promising weekend into lasting opportunity.
            </p>
            <a
              href="#ecosystem"
              className="inline-flex size-12 shrink-0 items-center justify-center border border-[var(--theme-accent)] text-[var(--theme-accent)] transition-colors hover:bg-[var(--theme-accent)] hover:text-[var(--theme-on-accent)]"
              aria-label="Explore the partner ecosystem"
            >
              <ArrowDown className="size-5" />
            </a>
          </div>
        </div>
      </section>

      <section
        id="ecosystem"
        className="theme-transition relative scroll-mt-20 overflow-hidden bg-dark px-6 py-24 sm:scroll-mt-24 sm:px-10 sm:py-32 lg:px-16"
      >
        <div className="relative mx-auto max-w-7xl">
          <div className="grid gap-8 lg:grid-cols-[minmax(0,1fr)_28rem] lg:items-end">
            <div className="max-w-3xl">
              <p className="font-mono text-[11px] uppercase tracking-[0.28em] text-white/42">
                Partner ecosystem
              </p>
              <h2 className="theme-accent mt-5 font-avatar-airbender text-5xl leading-[0.88] tracking-wide sm:text-6xl">
                Built together.
                <br />
                Connected with purpose.
              </h2>
            </div>
            <p className="border-l border-[var(--theme-accent)] pl-5 text-sm leading-7 text-white/55 sm:text-base">
              Tcodi is built through shared ownership: student branches create
              the experience, IEEE provides the foundation, and sponsors help
              ambitious teams go further.
            </p>
          </div>

          <div className="mt-14 grid gap-5 md:grid-cols-2 lg:mt-20 lg:grid-cols-12">
            <article className="border border-white/12 bg-[var(--site-surface-raised)] p-6 sm:p-8 md:col-span-2 lg:col-span-6">
              <div className="flex items-center justify-between gap-4">
                <p className="font-mono text-[10px] uppercase tracking-[0.22em] text-[var(--theme-accent)]">
                  Organizing collective
                </p>
                <span className="font-mono text-[10px] text-white/35">04 branches</span>
              </div>
              <h3 className="mt-7 text-2xl font-semibold text-white">Built by students, together.</h3>
              <p className="mt-3 max-w-xl text-sm leading-relaxed text-white/55">
                The four IEEE student branches of Bizerte jointly shape and deliver every part of Tcodi.
              </p>
              <div className="mt-8 grid grid-cols-2 gap-3 sm:grid-cols-4 lg:grid-cols-2">
                {partnerLogos.map((partner) => (
                  <a
                    key={partner.name}
                    href={partner.href}
                    target="_blank"
                    rel="noreferrer"
                    aria-label={`Visit ${partner.name}`}
                    className="group flex min-h-24 items-center justify-center border border-white/10 bg-black/15 p-4 transition-colors hover:border-[var(--theme-accent)] hover:bg-[var(--theme-accent-soft)]"
                  >
                    <img
                      src={partner.imageSrc}
                      alt={partner.name}
                      className="max-h-12 max-w-full object-contain opacity-80 transition-opacity group-hover:opacity-100"
                    />
                  </a>
                ))}
              </div>
            </article>
            <article className="flex flex-col border border-white/12 bg-[var(--site-surface-raised)] p-6 sm:p-8 lg:col-span-3">
              <div className="flex items-center justify-between gap-3">
                <p className="font-mono text-[10px] uppercase tracking-[0.22em] text-[var(--theme-accent)]">
                  Institutional partner
                </p>
                <span className="font-mono text-[10px] text-white/35">01</span>
              </div>
              <div className="mt-8 flex min-h-44 flex-1 items-center justify-center border border-white/10 bg-black/15 p-6">
                <img
                  src="/images/ieee-partners/tnsection.png"
                  alt="IEEE Tunisia Section"
                  className="max-h-16 max-w-full object-contain"
                />
              </div>
              <p className="mt-5 text-sm leading-relaxed text-white/58">
                IEEE Tunisia Section connects the student branches contributing
                to Tcodi.
              </p>
            </article>
            <article className="flex flex-col border border-dashed border-white/20 bg-[var(--site-surface-raised)] p-6 sm:p-8 lg:col-span-3">
              <div className="flex items-center justify-between gap-3">
                <p className="font-mono text-[10px] uppercase tracking-[0.22em] text-[var(--theme-accent)]">
                  Sponsors
                </p>
                <span className="font-mono text-[10px] text-white/35">Open</span>
              </div>
              <div className="mt-8 flex min-h-44 flex-1 items-center justify-center border border-dashed border-white/15 bg-black/10 px-5 text-center">
                <p className="font-avatar-airbender text-2xl leading-tight tracking-wide text-white/50">
                  Your mark could
                  <br />
                  live here.
                </p>
              </div>
              <p className="mt-5 text-sm leading-relaxed text-white/58">
                Sponsor spaces are open for organizations ready to invest in
                emerging technical talent.
              </p>
            </article>
          </div>
        </div>
      </section>

      <section
        data-outcomes
        className="theme-transition relative overflow-hidden border-y border-white/10 bg-[var(--site-surface)] px-6 py-24 sm:px-10 sm:py-32 lg:px-16"
      >
        <svg
          className="pointer-events-none absolute -left-24 top-8 hidden h-[calc(100%-4rem)] w-[28rem] text-[var(--theme-accent)] opacity-60 md:block"
          viewBox="0 0 360 900"
          fill="none"
          preserveAspectRatio="none"
          aria-hidden="true"
        >
          <path
            data-partner-path
            pathLength="1"
            d="M250 24C67 118 346 210 148 303S38 482 230 556 341 700 130 876"
            stroke="currentColor"
            strokeWidth="7"
            strokeLinecap="round"
            strokeDasharray="1"
          />
        </svg>
        <div className="relative mx-auto max-w-7xl">
          <div className="max-w-2xl">
            <p className="font-mono text-[11px] uppercase tracking-[0.28em] text-white/42">
              Why partner
            </p>
            <h2 className="theme-accent mt-5 font-avatar-airbender text-5xl leading-[0.88] tracking-wide">
              Make the work
              <br />
              matter more.
            </h2>
            <p className="mt-6 max-w-xl leading-relaxed text-white/55">
              A partnership is more than visibility. It is a direct investment
              in the people who will shape Bizerte&apos;s technical future.
            </p>
          </div>
          <div className="mt-14 grid gap-4 md:grid-cols-3 lg:mt-16">
            {outcomes.map((outcome) => {
              const Icon = outcome.icon;
              return (
                <article
                  key={outcome.number}
                  data-outcome-panel
                  className="flex min-h-80 flex-col border border-white/12 bg-[var(--site-surface-raised)] p-6 sm:p-8"
                >
                  <div className="flex items-center justify-between">
                    <span className="font-mono text-xs text-[var(--theme-accent)]">
                      {outcome.number}
                    </span>
                    <Icon className="size-5 text-[var(--theme-accent)]" />
                  </div>
                  <h3 className="mt-auto pt-16 text-2xl font-semibold text-white lg:text-3xl">
                    {outcome.title}
                  </h3>
                  <p className="mt-4 max-w-2xl leading-relaxed text-white/60">
                    {outcome.copy}
                  </p>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section className="theme-transition bg-dark px-6 py-24 sm:px-10 sm:py-32 lg:px-16">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-8 lg:grid-cols-[minmax(0,1fr)_28rem] lg:items-end">
            <div>
              <p className="font-mono text-[11px] uppercase tracking-[0.28em] text-white/42">
                Sponsorship path
              </p>
              <h2 className="theme-accent mt-5 font-avatar-airbender text-5xl leading-[0.88] tracking-wide sm:text-6xl">
                From hello
                <br />
                to impact.
              </h2>
            </div>
            <p className="text-sm leading-7 text-white/55 sm:text-base">
              We keep the process focused, collaborative, and tailored to the
              kind of contribution your organization wants to make.
            </p>
          </div>
          <div className="mt-14 grid gap-px border border-white/12 bg-white/12 md:grid-cols-3 lg:mt-16">
            <article className="flex min-h-64 flex-col bg-[var(--site-surface-raised)] p-6 sm:p-8">
              <span className="font-mono text-xs text-[var(--theme-accent)]">
                01
              </span>
              <h3 className="mt-auto pt-16 text-3xl font-semibold">Connect</h3>
              <p className="mt-4 leading-relaxed text-white/60">
                Tell us what you care about and where you see a fit.
              </p>
            </article>
            <article className="flex min-h-64 flex-col bg-[var(--site-surface-raised)] p-6 sm:p-8">
              <span className="font-mono text-xs text-[var(--theme-accent)]">
                02
              </span>
              <h3 className="mt-auto pt-16 text-3xl font-semibold">
                Shape the partnership
              </h3>
              <p className="mt-4 leading-relaxed text-white/60">
                Build a focused contribution around your goals and Tcodi&apos;s
                community.
              </p>
            </article>
            <article className="flex min-h-64 flex-col bg-[var(--site-surface-raised)] p-6 sm:p-8">
              <span className="font-mono text-xs text-[var(--theme-accent)]">
                03
              </span>
              <h3 className="mt-auto pt-16 text-3xl font-semibold">
                Activate at Tcodi
              </h3>
              <p className="mt-4 leading-relaxed text-white/60">
                Bring the partnership to life with students during the event.
              </p>
            </article>
          </div>
          <div className="mt-10 flex flex-col justify-between gap-5 border-t border-white/10 pt-8 sm:flex-row sm:items-center">
            <p className="max-w-xl text-sm leading-relaxed text-white/48">
              Ready to support a student-led technology event with a clear local impact?
            </p>
            <Link
              href="/?enquiryType=partner#contact"
              className="inline-flex w-fit items-center gap-2 border border-[var(--theme-accent)] px-5 py-3 text-sm font-semibold text-[var(--theme-accent)] transition-colors hover:bg-[var(--theme-accent)] hover:text-[var(--theme-on-accent)]"
            >
              Start a conversation <ArrowUpRight className="size-4" />
            </Link>
          </div>
        </div>
      </section>

      <section className="theme-transition border-t border-white/10 bg-dark px-6 py-20 sm:px-10 sm:py-24 lg:px-16">
        <div className="mx-auto max-w-7xl">
          <p className="font-mono text-[11px] uppercase tracking-[0.28em] text-white/42">
            Our network
          </p>
          <h2 className="mt-4 text-3xl font-semibold text-white">
            Meet the organizing network
          </h2>
          <div className="mt-10">
            <CasesWithInfiniteScroll logos={partnerLogos} />
          </div>
        </div>
      </section>
    </main>
  );
}
