"use client";

import AutoScroll from "embla-carousel-auto-scroll";
import { Carousel, CarouselContent } from "./ui/carousel";

const CarouselComponent = ({ children, className }: { children: React.ReactNode, className?: string }) => {
  return (
    <Carousel
      className="w-full relative"
      opts={{
        loop: true,
        align: "center",
        dragFree: true,
      }}
      plugins={[
        AutoScroll({
          playOnInit: true,
          speed: 2.0,
          stopOnInteraction: false,
          stopOnMouseEnter: false,
          stopOnFocusIn: false,
        }),
      ]}
    >
      <CarouselContent className={className ? className : "-ml-2 sm:-ml-4"}>{children}</CarouselContent>
    </Carousel>
  );
};

export default CarouselComponent;
