"use client";

import { useState } from "react";
import SpotlightCard from "./ui/SpotlightCard";
import { useHomeAnimation } from "@/hooks/useHomeAnimation";

const mapEmbedUrl = "https://www.google.com/maps?q=ENIB%20Ecole%20Nationale%20d%27Ingenieurs%20de%20Bizerte&z=17&output=embed";
const directionsUrl = "https://www.google.com/maps/search/?api=1&query=ENIB%20Ecole%20Nationale%20d%27Ingenieurs%20de%20Bizerte";

export default function VenueSection() {
  const [mapLoaded, setMapLoaded] = useState(false);
  const ref = useHomeAnimation<HTMLElement>({
    stagger: { selector: "[data-animate='block']" },
  });

  return (
    <section ref={ref} className="theme-transition relative w-full bg-dark py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center gap-10 md:gap-14">
          {/* Image in SpotlightCard — left side */}
          <SpotlightCard data-animate="block" className="p-0 shrink-0 w-full md:w-[55%] lg:w-[60%] overflow-hidden">
            <div className="relative z-10 h-[250px] w-full sm:h-[300px] md:h-[350px] lg:h-[420px]" aria-busy={!mapLoaded}>
              {!mapLoaded && (
                <div className="absolute inset-0 z-10 flex items-center justify-center bg-[var(--site-surface-raised)] px-6 text-center">
                  <p className="font-mono text-[10px] uppercase tracking-[0.22em] text-white/45">Loading interactive map…</p>
                </div>
              )}
              <iframe
                title="Google Map showing ENIB in Bizerte"
                src={mapEmbedUrl}
                className="block h-full w-full"
                style={{ border: 0 }}
                allowFullScreen
                loading="eager"
                referrerPolicy="no-referrer-when-downgrade"
                onLoad={() => setMapLoaded(true)}
              />
            </div>
          </SpotlightCard>

          {/* Text — right side, outside the box */}
          <div data-animate="block" className="flex-1">
            <p className="font-mono text-[11px] md:text-xs uppercase tracking-[0.3em] text-white/30 mb-4">
              Event venue
            </p>

            <h2 className="theme-accent mb-5 text-3xl leading-tight font-bold sm:text-4xl md:text-5xl">
              ENIB
            </h2>

            <p className="text-white/50 text-base md:text-lg leading-relaxed mb-8 max-w-lg">
              École Nationale d'Ingénieurs de Bizerte — Rue
              Tunis  1054, Bizerte, Tunisia. The main venue hosting
              Bizerte Tcodi, equipped with modern labs, workspaces, and all the
              infrastructure needed for a focused coding competition.
            </p>

            <a
              href={directionsUrl}
              target="_blank"
              rel="noreferrer noopener"
              className="theme-accent-border inline-flex items-center gap-2.5 rounded-full border px-6 py-3 text-sm font-medium text-white/80 transition-all duration-300 hover:bg-[var(--theme-accent-soft)] hover:text-[var(--theme-accent)] md:text-base"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
                <circle cx="12" cy="10" r="3" />
              </svg>
              View on Google Maps
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
