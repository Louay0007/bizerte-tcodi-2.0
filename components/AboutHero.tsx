"use client";

import { useHomeAnimation } from "@/hooks/useHomeAnimation";

const stats = [
  { value: "+200", label: "Participating students" },
  { value: "+20", label: "Teams competing" },
  { value: "3", label: "Problem levels" },
  { value: "+8", label: "Coding challenges" },
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
          coding problem-solving competition
        </h1>

        <p data-animate="block" className="mb-16 max-w-[800px] text-sm leading-relaxed text-white/60 md:text-base">
          <strong className="text-white/80">Bizerte Tcodi</strong> brings together four IEEE student branches from across the Bizerte region — <strong className="text-white/80">ISET Bizerte</strong>, <strong className="text-white/80">ENIB</strong>, <strong className="text-white/80">ISSATM</strong>, and <strong className="text-white/80">FSB</strong> — around one goal: strengthening algorithmic thinking and competitive programming. Under the umbrella of the <strong className="text-white/80">IEEE Tunisia Section</strong>, participants face timed coding problems with clear inputs, outputs, examples, and constraints. Success comes from understanding each statement, designing a correct and efficient algorithm, handling edge cases, and submitting code that passes the official tests. Tcodi is where Bizerte&apos;s student problem solvers meet, compete, and sharpen the way they think.
        </p>

        <p data-animate="block" className="mb-8 font-mono text-[10px] uppercase tracking-[0.25em] text-white/30 md:text-[11px]">
          Bizerte Tcodi in numbers from last edition
        </p>

        <div className="grid grid-cols-2 gap-8 sm:grid-cols-3 md:grid-cols-5 md:gap-12">
          {stats.map((stat, index) => (
            <div key={stat.label} data-animate="block" className={`flex flex-col items-center ${index === stats.length - 1 ? "col-span-2 sm:col-span-1" : ""}`}>
              <span className="theme-accent text-4xl leading-none font-bold sm:text-5xl md:text-6xl">{stat.value}</span>
              <span className="mt-2 text-center text-[10px] leading-tight text-white/40 sm:text-[11px] md:text-xs">{stat.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
