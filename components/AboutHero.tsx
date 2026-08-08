"use client";

import { useHomeAnimation } from "@/hooks/useHomeAnimation";

const stats = [
  { value: "+200", label: "Participating students" },
  { value: "+20", label: "Teams competing" },
  { value: "3", label: "Technical challenges" },
  { value: "+8", label: "Workshops & keynotes" },
  { value: "+10", label: "Partner companies" },
];

export default function AboutHero() {
  const ref = useHomeAnimation<HTMLElement>({
    stagger: { selector: "[data-animate='block']" },
  });

  return (
    <section ref={ref} className="theme-transition relative w-full overflow-hidden bg-dark">
      <div className="relative z-10 mx-auto flex max-w-5xl flex-col items-center px-6 py-12 text-center sm:py-20 md:py-28">
        <p data-animate="block" className="mb-6 font-mono text-[11px] uppercase tracking-[0.3em] text-white/40 md:text-xs">
          Who are we?
        </p>

        <h1 data-animate="block" className="theme-accent mb-8 text-3xl leading-tight font-extrabold tracking-wide uppercase sm:text-4xl md:text-5xl lg:text-6xl">
          Bizerte&apos;s first ever
          <br />
          problem-solving hackathon
        </h1>

        <p data-animate="block" className="mb-16 max-w-[800px] text-sm leading-relaxed text-white/60 md:text-base">
          <strong className="text-white/80">Bizerte Tcodi</strong> brings together four IEEE student branches from across the Bizerte region — <strong className="text-white/80">ISET Bizerte</strong>, <strong className="text-white/80">ENIB</strong>, <strong className="text-white/80">ISSATM</strong>, and <strong className="text-white/80">FSB</strong> — united by one goal: turning student ambition into real solutions, one hackathon at a time. Under the umbrella of the <strong className="text-white/80">IEEE Tunisia Section</strong>, Bizerte Tcodi is a student-run problem-solving hackathon held at <strong className="text-white/80">ISET Bizerte</strong>, where the brightest minds from across the region converge to tackle real-world challenges. Teams compete in a high-energy, 24–48 hour format, building innovative tech solutions from scratch while receiving guidance from experienced mentors and industry professionals. More than just a competition, Bizerte Tcodi is a launchpad for collaboration, creativity, and the next generation of Tunisian tech talent.
        </p>

        <p data-animate="block" className="mb-8 font-mono text-[10px] uppercase tracking-[0.25em] text-white/30 md:text-[11px]">
          Bizerte Tcodi in numbers from last edition
        </p>

        <div className="grid grid-cols-2 gap-8 sm:grid-cols-3 md:grid-cols-5 md:gap-12">
          {stats.map((stat) => (
            <div key={stat.label} data-animate="block" className="flex flex-col items-center">
              <span className="theme-accent text-4xl leading-none font-bold sm:text-5xl md:text-6xl">{stat.value}</span>
              <span className="mt-2 text-center text-[10px] leading-tight text-white/40 sm:text-[11px] md:text-xs">{stat.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
