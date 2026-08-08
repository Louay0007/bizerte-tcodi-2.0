"use client";

import Image from "next/image";

import { type ThemeName, themeDetails, useTheme } from "@/components/theme/ThemeProvider";
import { useHomeAnimation } from "@/hooks/useHomeAnimation";

const elements: { theme: ThemeName; src: string; alt: string; label: string }[] = [
  { theme: "fire", src: "/images/elements/fire.svg", alt: "Fire", label: "Fire" },
  { theme: "air", src: "/images/elements/air.svg", alt: "Air", label: "Air" },
  { theme: "water", src: "/images/elements/water.svg", alt: "Water", label: "Water" },
  { theme: "earth", src: "/images/elements/earth.svg", alt: "Earth", label: "Earth" },
];

function ThemeElement({ theme, src, alt, label }: (typeof elements)[number]) {
  const { theme: activeTheme, setTheme } = useTheme();
  const isActive = theme === activeTheme;
  const detail = themeDetails[theme];

  return (
    <button
      type="button"
      data-animate="element"
      onClick={() => setTheme(theme)}
      aria-pressed={isActive}
      aria-label={`Use ${label} theme`}
      className="group flex min-w-0 flex-1 flex-col items-center gap-3 rounded-xl py-2 outline-none focus-visible:ring-2 focus-visible:ring-white/80 sm:gap-4"
    >
      <div className="relative flex h-12 w-12 items-center justify-center sm:h-16 sm:w-16 md:h-20 md:w-20 lg:h-24 lg:w-24">
        <div
          className="absolute inset-0 rounded-full blur-2xl transition-all duration-300"
          style={{ backgroundColor: detail.accent, opacity: isActive ? 0.75 : 0.35 }}
        />
        <Image
          src={src}
          alt={alt}
          width={96}
          height={96}
          className={`relative z-10 h-full w-full object-contain transition-transform duration-300 ${isActive ? "scale-110" : "group-hover:scale-105"}`}
        />
      </div>
      <span className="font-mono text-[9px] uppercase tracking-[0.15em] sm:text-xs md:text-sm md:tracking-[0.2em]" style={{ color: detail.accent }}>
        {label}
      </span>
      <span className={`h-0.5 w-7 rounded-full transition-all ${isActive ? "w-12" : "opacity-0 group-hover:opacity-60"}`} style={{ backgroundColor: detail.accent }} />
    </button>
  );
}

function ClassicThemeButton() {
  const { theme, setTheme } = useTheme();
  const isActive = theme === "classic";

  return (
    <button
      type="button"
      data-animate="element"
      onClick={() => setTheme("classic")}
      aria-pressed={isActive}
      aria-label="Use Classic theme"
      className="group relative flex shrink-0 flex-col items-center outline-none focus-visible:ring-2 focus-visible:ring-white/80"
    >
      <div className="relative flex items-center justify-center">
        <div className={`absolute -bottom-2 h-5 w-16 rounded-full bg-white blur-xl transition-opacity sm:h-6 sm:w-20 ${isActive ? "opacity-35" : "opacity-15 group-hover:opacity-25"}`} />
        <Image
          src="/logos/classic.png"
          alt="Bizerte Tcodi classic emblem"
          width={720}
          height={720}
          className={`relative z-10 h-auto w-20 transition-transform duration-300 sm:w-28 md:w-36 lg:w-40 ${isActive ? "scale-105 drop-shadow-[0_0_12px_rgba(255,255,255,0.28)]" : "group-hover:scale-105"}`}
        />
      </div>
      <span className="mt-2 font-mono text-[9px] uppercase tracking-[0.15em] text-white/75 sm:text-xs md:text-sm md:tracking-[0.2em]">Classic</span>
      <span className={`mt-1 h-0.5 rounded-full bg-white transition-all ${isActive ? "w-12 opacity-90" : "w-7 opacity-0 group-hover:opacity-60"}`} />
    </button>
  );
}

export default function ElementsSection() {
  const ref = useHomeAnimation<HTMLElement>({
    stagger: { selector: "[data-animate='element']" },
  });

  return (
    <section ref={ref} className="theme-transition relative w-full bg-dark py-8 sm:py-12">
      <p className="mb-5 text-center font-mono text-[10px] uppercase tracking-[0.28em] text-white/40 sm:hidden">Choose your element</p>
      <div className="relative mx-auto flex max-w-7xl items-center justify-between gap-2 px-4 sm:gap-6 sm:px-6 md:gap-10">
        {elements.slice(0, 2).map((element) => <ThemeElement key={element.theme} {...element} />)}
        <ClassicThemeButton />
        {elements.slice(2).map((element) => <ThemeElement key={element.theme} {...element} />)}
      </div>
    </section>
  );
}
