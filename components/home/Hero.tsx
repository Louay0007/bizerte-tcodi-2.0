"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { Calendar, MapPin } from "lucide-react";
import ActionButton from "../ActionButton";
import HeroGradient from "../hero/HeroGradient";


const Hero = () => {
  const [timeLeft, setTimeLeft] = useState<{ days: number; hours: number; minutes: number } | null>(null);

  useEffect(() => {
    const calculateTimeLeft = () => {
      const targetDate = new Date("2026-09-19T09:00:00+01:00");
      const now = new Date();
      const remainingMilliseconds = Math.max(targetDate.getTime() - now.getTime(), 0);
      const remainingMinutes = Math.floor(remainingMilliseconds / 60000);
      setTimeLeft({
        days: Math.floor(remainingMinutes / 1440),
        hours: Math.floor((remainingMinutes % 1440) / 60),
        minutes: remainingMinutes % 60,
      });
    };

    calculateTimeLeft();

    const interval = setInterval(calculateTimeLeft, 30000);

    return () => clearInterval(interval);
  }, []);

  return (
    <HeroGradient
      backgroundType="video"
      backgroundSrc="/videos/hero.mp4"
    >
      <div className="flex h-full flex-col items-center justify-end px-4 pb-10 sm:px-6 sm:pb-14 md:pb-16">
        <div className="mt-1 flex items-center gap-2 sm:gap-3" aria-label="Time until Bizerte Tcodi">
          {timeLeft ? ([
            [timeLeft.days, "days"],
            [timeLeft.hours, "hours"],
            [timeLeft.minutes, "minutes"],
          ] as const).map(([value, label]) => (
            <div key={label} className="border border-white/15 bg-black/35 px-3 py-2 text-center backdrop-blur-sm sm:min-w-20 sm:px-4">
              <span className="theme-accent block text-xl font-bold leading-none tabular-nums sm:text-2xl">{String(value).padStart(2, "0")}</span>
              <span className="mt-1 block font-mono text-[8px] uppercase tracking-[0.2em] text-white/55 sm:text-[9px]">{label}</span>
            </div>
          )) : <span className="text-sm text-white/70">Loading countdown...</span>}
        </div>
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
