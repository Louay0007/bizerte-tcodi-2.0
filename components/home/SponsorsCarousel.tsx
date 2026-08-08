import Image from "next/image";
import { sponsors } from "@/constants";
import CarouselComponent from "../CarouselComponent";
import { CarouselItem } from "../ui/carousel";

const SponsorsCarousel = () => {
  return (
    <div className="w-full flex flex-row items-center justify-center gap-0">
      {sponsors.slice(0, 7).map((sponsor, index) => (
        <div
          key={`sponsor-${index}`}
          className="flex-1 min-w-0 flex flex-col items-center justify-center group hover:scale-105 transition-transform duration-300"
        >
          <div className="w-full aspect-square flex items-center justify-center relative">
            <div className="absolute inset-0 bg-primary-500/10 rounded-full group-hover:bg-primary-500/20 transition-all duration-300"></div>
            <Image
              src={sponsor.image}
              alt={sponsor.name}
              fill
              className="object-contain group-hover:scale-110 transition-transform duration-300"
              sizes="(max-width: 768px) 90px, (max-width: 1200px) 120px, 140px"
            />
          </div>
          <h2 className="text-white text-center text-xs md:text-base font-semibold group-hover:text-primary-400 transition-colors duration-300 mt-2 truncate w-full">
            {sponsor.name}
          </h2>
        </div>
      ))}
    </div>
  );
};

export default SponsorsCarousel;
