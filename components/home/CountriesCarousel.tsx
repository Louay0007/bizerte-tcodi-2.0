import { CarouselItem } from "../ui/carousel";
import Image from "next/image";
import { countries } from "@/constants";
import CarouselComponent from "../CarouselComponent";

const CountriesCarousel = () => {
  return (
    <div className="w-full max-w-6xl px-2 sm:px-4 relative carousel-container">
      {/* left gradient */}
      <div className="carousel-edge-fade-left hidden sm:block"></div>

      {/* right gradient */}
      <div className="carousel-edge-fade-right hidden sm:block"></div>

      <CarouselComponent>
        {countries.map((country, index) => (
          <CarouselItem
            key={`country-${index}`}
            className="pl-2 sm:pl-4 basis-1/2 sm:basis-1/3 md:basis-1/4 lg:basis-1/5"
            aria-label={`Country: ${country.name}`}
          >
            <div
              className="flex flex-col justify-center items-center p-2 sm:p-4 group transition-transform duration-300 hover:scale-105 hover:-rotate-2 hover:shadow-2xl hover:z-10"
              style={{ perspective: 600 }}
            >
              <div className="w-20 h-20 sm:w-24 sm:h-24 md:w-28 md:h-28 lg:w-32 lg:h-32 mb-2 sm:mb-4 flex items-center justify-center relative transition-all duration-300 border-2 border-zinc-700 hover:border-white rounded-lg bg-dark/40">
                <div className="absolute inset-0 bg-primary-500/10 rounded-lg transition-all duration-300 pointer-events-none"></div>
                <Image
                  src={country.image}
                  alt={country.name}
                  width={150}
                  height={150}
                  className="w-full h-full object-contain p-2 group-hover:scale-110 transition-transform duration-300 rounded-lg"
                />
              </div>
              <h2
                className="text-white text-center text-sm sm:text-base md:text-lg lg:text-xl font-semibold transition-all duration-300 opacity-80 group-hover:opacity-100 group-hover:text-white group-hover:translate-y-1 group-hover:scale-105"
              >
                {country.name}
              </h2>
            </div>
          </CarouselItem>
        ))}
      </CarouselComponent>
    </div>
  );
};

export default CountriesCarousel;
