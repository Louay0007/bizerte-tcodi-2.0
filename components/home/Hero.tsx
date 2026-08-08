"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { Calendar, MapPin } from "lucide-react";
import ActionButton from "../ActionButton";
import HeroGradient from "../hero/HeroGradient";
import Particles from "../Particles/Particles";
import { themeDetails, useTheme } from "@/components/theme/ThemeProvider";


const Hero = () => {
  const [daysLeft, setDaysLeft] = useState<number | null>(null);
  const { theme } = useTheme();
  const activeTheme = themeDetails[theme];

  useEffect(() => {
    const calculateDaysLeft = () => {
      const targetDate = new Date("2026-09-19");
      const now = new Date();
      const daysRemaining = Math.ceil(
        (targetDate.getTime() - now.getTime()) /
          (1000 * 60 * 60 * 24)
      );
      setDaysLeft(daysRemaining);
    };

    calculateDaysLeft();

    // Optionally update daily
    const interval = setInterval(calculateDaysLeft, 86400000); // 24 hours

    return () => clearInterval(interval);
  }, []);

  return (
    <HeroGradient
      backgroundType="video"
      backgroundSrc="/videos/hero.mp4"
    >
   
      <Particles key={theme} particleCount={180} particleSpread={8} speed={0.12} particleColors={activeTheme.particleColors} alphaParticles={true} />
      <div className="flex h-full flex-col items-center justify-end px-4 pb-10 sm:px-6 sm:pb-14 md:pb-16">
        <Image
          src="/logos/official-logo.png?v=2"
          alt="Bizerte Tcodi 3.0"
          width={720}
          height={720}
          priority
          className="mb-3 h-auto w-32 drop-shadow-[0_10px_16px_rgba(255,255,255,0.55)] sm:w-40 md:w-48"
        />
        <h1 className="text-2xl font-bold theme-accent sm:text-3xl">
          {daysLeft !== null ? `${daysLeft} days left` : "Loading..."}
        </h1>
        <div className="flex flex-col md:flex-row items-center justify-center gap-4 mt-4">
          <div className="flex items-center">
            <Calendar className="mr-2 h-5 w-5 theme-accent" />
            <span className="text-white font-medium">19th Sept 2026</span>
          </div>
          <div className="flex items-center">
            <MapPin className="mr-2 h-5 w-5 theme-accent" />
            <span className="text-white font-medium">ENIB, Bizerte</span>
          </div>

        </div>
        <ActionButton
          text="Registration Coming Soon"
          className="mt-4"
          disabled={false}
        />
      </div>
    </HeroGradient>
  );
};

export default Hero;
