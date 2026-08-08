"use client";

import { useState, useEffect } from "react";
import LogoLoop, { type LogoItem } from "@/components/ui/LogoLoop";
import { contributors } from "@/constants";
import { useHomeAnimation } from "@/hooks/useHomeAnimation";

const ISSATM_SRC = "/images/ieee-partners/ieee-issatm.svg";

const logoItems: LogoItem[] = contributors.map((c) => ({
  src: c.imageSrc,
  alt: c.title,
}));

export default function LogoMarquee() {
  const [logoHeight, setLogoHeight] = useState(60);

  useEffect(() => {
    const update = () => setLogoHeight(window.innerWidth < 640 ? 40 : 60);
    update();
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, []);

  const ref = useHomeAnimation<HTMLElement>({
    stagger: { selector: "[data-animate='block']" },
  });

  return (
    <section ref={ref} className="theme-transition relative w-full bg-dark py-6 sm:py-8">
      <div data-animate="block" className="text-center mb-4 sm:mb-6">
        <p className="theme-accent text-xs uppercase tracking-wider md:tracking-widest px-4 opacity-70">
          Powered by visionary sponsors and partners dedicated to advancing technology
        </p>
      </div>

      <div data-animate="block">
        <LogoLoop
          logos={logoItems}
          speed={60}
          direction="left"
          logoHeight={logoHeight}
          gap={48}
          hoverSpeed={0}
          fadeOut
          fadeOutColor="#000000"
          scaleOnHover
          ariaLabel="Partner logos"
          renderItem={(item) => {
            const isIssatm = item.src === ISSATM_SRC;
            const issatmSize = logoHeight < 50 ? 140 : 240;
            return (
              <img
                src={item.src}
                alt={item.alt ?? ""}
                loading="lazy"
                decoding="async"
                draggable={false}
                style={{
                  height: isIssatm ? "auto" : undefined,
                  width: isIssatm ? `${issatmSize}px` : undefined,
                  maxHeight: isIssatm ? `${issatmSize}px` : undefined,
                  display: "block",
                  objectFit: "contain",
                }}
              />
            );
          }}
        />
      </div>
    </section>
  );
}
