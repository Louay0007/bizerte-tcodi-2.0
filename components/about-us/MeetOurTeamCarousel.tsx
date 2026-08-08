import { CarouselItem } from "../ui/carousel";
import Image from "next/image";
import { teamMembers } from "@/constants";
import CarouselComponent from "../CarouselComponent";

const MeetOurTeamCarousel = () => {
  return (
    <div className="w-full max-w-6xl px-2 sm:px-4 relative carousel-container">
      {/* left gradient */}
      <div className="carousel-edge-fade-left hidden sm:block"></div>

      {/* right gradient */}
      <div className="carousel-edge-fade-right hidden sm:block"></div>

      <CarouselComponent>
        {teamMembers.map((oc, index) => (
          <CarouselItem
            key={`oc-${index}`}
            className="pl-2 sm:pl-4 basis-2/3 xs:basis-1/2 sm:basis-1/3 md:basis-1/4 lg:basis-1/5"
          >
            <div className="flex flex-col justify-center items-center p-2 sm:p-4 group hover:scale-105 transition-transform duration-300">
              <div className="w-24 h-24 xs:w-32 xs:h-32 sm:w-36 sm:h-36 md:w-40 md:h-40 mb-2 sm:mb-4 flex items-center justify-center relative">
                <div className="absolute inset-0 bg-primary-500/10 rounded-full group-hover:bg-primary-500/20 transition-all duration-300"></div>
                <Image
                  src={oc.image}
                  alt={oc.name}
                  width={300}
                  height={300}
                  className="w-full h-full object-contain rounded-full group-hover:scale-110 transition-transform duration-300"
                />
              </div>
              <h2 className="text-white text-center text-sm xs:text-base sm:text-lg md:text-xl font-semibold group-hover:text-primary-400 transition-colors duration-300 line-clamp-1">
                {oc.name}
              </h2>
              <p className="hero-text-description text-xs xs:text-sm sm:text-base font-normal text-center line-clamp-2">
                {oc.title}
              </p>
            </div>
          </CarouselItem>
        ))}
      </CarouselComponent>
    </div>
  );
};

export default MeetOurTeamCarousel;
