import React from "react";
import Image from "next/image";

interface PlanningProps {
  imgHeight?: number | string;
  imgWidth?: number | string;
}

export default function Planning({ imgHeight = 500, imgWidth = 1000 }: PlanningProps) {
  const heightNum = typeof imgHeight === 'string' ? parseInt(imgHeight) : imgHeight;
  const widthNum = typeof imgWidth === 'string' ? parseInt(imgWidth) : imgWidth;
  return (
    <section className="bg-dark flex flex-col items-center py-16 px-4 md:px-6 relative overflow-hidden">
      <h2 className="text-3xl md:text-4xl font-bold text-white mb-8 text-center drop-shadow-lg">
        Planning & Schedule
      </h2>
     
      <div className="flex justify-center items-center">
        <Image
          src="/images/plann.jpg"
          alt="Event Planning"
          height={heightNum}
          width={widthNum}
          className="rounded-2xl shadow-lg border-4 border-white/40 object-cover"
          style={{ maxWidth: "100%", height: "auto" }}
          priority
        />
      </div>
    </section>
  );
} 