"use client";
import { contributors } from "@/constants";
import Section from "./Section";
import Image from "next/image";
import dynamic from "next/dynamic";

// Helper: get responsive logo size
const getLogoSize = () => ({ mobile: 50, tablet: 80, desktop: 100 });

export default function Partners() {
  return (
    <Section
      title="Our IEEE Partners"
      description="Made by IEEE Members, for IEEE Members"
      id="partners"
    >
      <div className="w-full grid grid-cols-3 md:grid-cols-4 lg:grid-cols-7 gap-4 sm:gap-6 md:gap-8 items-center justify-items-center px-2 sm:px-4 py-4 sm:py-8">
        {contributors.slice(0, 7).map((contributor, index) => {
            const isLg = contributor.size === "lg";
            return (
              <div
                key={"contributor-" + index}
                className="flex flex-col items-center justify-center mb-4 sm:mb-6"
              >
                <div className={`${isLg ? "w-[70px] h-[70px] md:w-[110px] md:h-[110px] lg:w-[140px] lg:h-[140px]" : "w-[50px] h-[50px] md:w-[80px] md:h-[80px] lg:w-[100px] lg:h-[100px]"} flex items-center justify-center relative bg-[#0f0f0f] border border-white/20 rounded-xl shadow-lg ring-2 ring-white/70 animate-pulse`}>
                  <Image
                    src={contributor.imageSrc}
                    alt={contributor.altText}
                    width={240}
                    height={240}
                    className="object-contain w-full h-full"
                    sizes="(max-width: 640px) 60px, (max-width: 1024px) 100px, 120px"
                    quality={100}
                    priority={index < 7}
                  />
                </div>
                <h2 className="text-white font-semibold text-center text-[10px] md:text-xs lg:text-sm mt-2 sm:mt-3 truncate w-full">
                  {contributor.title}
                </h2>
              </div>
            );
          })}
      </div>
    </Section>
  );
}
