import React from "react";
import Section from "../Section";
import Image from "next/image";

const sponsors = {
  blue: [
    { name: "INSAT", logo: "/images/sponsors/insat-premium.png" },
    { name: "INSAT", logo: "/images/sponsors/insat-premium.png" },
  ],
  gold: [
    { name: "INSAT", logo: "/images/sponsors/insat-gold.png" },
    { name: "INSAT", logo: "/images/sponsors/insat-gold.png" },
    { name: "INSAT", logo: "/images/sponsors/insat-gold.png" },
  ],
  silver: [
    { name: "INSAT", logo: "/images/sponsors/insat-silver.png" },
    { name: "INSAT", logo: "/images/sponsors/insat-silver.png" },
  ],
  bronze: [
    { name: "INSAT", logo: "/images/sponsors/insat-bronze.png" },
    { name: "INSAT", logo: "/images/sponsors/insat-bronze.png" },
    { name: "INSAT", logo: "/images/sponsors/insat-bronze.png" },
  ],
};
const OurSponsors = () => {
  return (
    <Section title="" description="" className="items-center">
      <div className="flex flex-col items-center justify-center py-16 animate-fade-in-up">
        <div className="mb-4">
          {/* Gold trophy icon (SVG) */}
          <svg width="64" height="64" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg" className="drop-shadow-lg">
            <ellipse cx="32" cy="56" rx="20" ry="6" fill="#ffffff" fillOpacity="0.25" />
            <path d="M16 12V20C16 29.9411 24.0589 38 34 38C43.9411 38 52 29.9411 52 20V12" stroke="#ffffff" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round"/>
            <rect x="24" y="38" width="16" height="10" rx="4" fill="#ffffff" stroke="#a3a3a3" strokeWidth="2"/>
            <rect x="28" y="48" width="8" height="8" rx="4" fill="#ffffff" stroke="#a3a3a3" strokeWidth="2"/>
            <path d="M12 12H52" stroke="#ffffff" strokeWidth="4" strokeLinecap="round"/>
            <path d="M8 12C8 18 12 24 20 24" stroke="#ffffff" strokeWidth="3" strokeLinecap="round"/>
            <path d="M56 12C56 18 52 24 44 24" stroke="#ffffff" strokeWidth="3" strokeLinecap="round"/>
          </svg>
        </div>
        <h2 className="text-3xl md:text-4xl font-extrabold text-center bg-gradient-to-r from-white via-neutral-400 to-white bg-clip-text text-transparent drop-shadow-lg mb-4 animate-pulse">
          Thank you to our amazing sponsors!
        </h2>
        <p className="text-lg md:text-xl text-center text-neutral-300 font-semibold max-w-2xl mx-auto mt-2 animate-fade-in delay-100">
          Your support makes dreams possible and inspires innovation. We are grateful for your partnership and belief in our mission.
        </p>
      </div>
    </Section>
  );
};

export default OurSponsors;
