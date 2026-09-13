"use client";

import { useEffect, useMemo, useRef } from "react";
import { contributors } from "@/constants";

const ISSATM_SRC = "/images/ieee-partners/ieee-issatm.png";

type Logo = { src: string; alt: string };

export default function LogoMarquee() {
  const trackRef = useRef<HTMLDivElement>(null);
  const offsetRef = useRef(0);
  const logos = useMemo<Logo[]>(
    () =>
      contributors.map((c) => ({
        src: c.imageSrc,
        alt: c.title,
      })),
    []
  );

  // Repeat the set enough times so one half always overflows the viewport.
  // The track holds two identical halves and animates -50% for a seamless loop.
  const half = useMemo(() => {
    const repeats = 4;
    return Array.from({ length: repeats }).flatMap(() => logos);
  }, [logos]);

  useEffect(() => {
    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (reducedMotion.matches) return;

    let frame = 0;
    let previousTime = performance.now();
    const pixelsPerSecond = 60;

    const move = (time: number) => {
      const track = trackRef.current;
      const elapsed = Math.min(time - previousTime, 50);
      previousTime = time;

      if (track) {
        const sequenceWidth = track.scrollWidth / 2;
        if (sequenceWidth > 0) {
          offsetRef.current = (offsetRef.current + (elapsed / 1000) * pixelsPerSecond) % sequenceWidth;
          track.style.transform = `translate3d(${-offsetRef.current}px, 0, 0)`;
        }
      }

      frame = window.requestAnimationFrame(move);
    };

    frame = window.requestAnimationFrame(move);
    return () => window.cancelAnimationFrame(frame);
  }, []);

  const renderRow = (copy: "primary" | "duplicate") => (
    <ul
      aria-hidden="true"
      className="flex shrink-0 items-center gap-12 pr-12 sm:gap-16 sm:pr-16"
    >
      {half.map((logo, i) => {
        const isIssatm = logo.src === ISSATM_SRC;
        return (
          <li key={`${copy}-${i}`} className="flex shrink-0 items-center justify-center">
            <img
              src={logo.src}
              alt=""
              loading="lazy"
              decoding="async"
              draggable={false}
              className="block w-auto object-contain"
              style={{
                height: "clamp(2.5rem, 5vw, 3.75rem)",
                minWidth: isIssatm ? "clamp(8rem, 20vw, 15rem)" : undefined,
              }}
            />
          </li>
        );
      })}
    </ul>
  );

  return (
    <section className="theme-transition relative w-full overflow-hidden bg-dark py-6 sm:py-8">
      <div className="mb-4 px-4 text-center sm:mb-6">
        <p id="partner-marquee-title" className="theme-accent text-xs uppercase tracking-wider opacity-70 md:tracking-widest">
          Powered by visionary sponsors and partners dedicated to advancing technology
        </p>
      </div>

      <ul className="sr-only" aria-labelledby="partner-marquee-title">
        {logos.map((logo) => <li key={logo.alt}>{logo.alt}</li>)}
      </ul>

      <div
        aria-hidden="true"
        className="logo-marquee relative overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_8%,black_92%,transparent)]"
      >
        <div ref={trackRef} className="logo-marquee-track flex w-max will-change-transform">
          {renderRow("primary")}
          {renderRow("duplicate")}
        </div>
      </div>
    </section>
  );
}
