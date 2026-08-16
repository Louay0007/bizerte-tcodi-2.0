"use client";

import { useEffect, useState } from "react";
import {
  Carousel,
  type CarouselApi,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";

export type PartnerLogo = {
  name: string;
  imageSrc: string;
  href: string;
};

export function CasesWithInfiniteScroll({ logos }: { logos: PartnerLogo[] }) {
  const [api, setApi] = useState<CarouselApi>();

  useEffect(() => {
    if (!api || logos.length < 2) return;

    const interval = window.setInterval(() => {
      if (api.selectedScrollSnap() + 1 === api.scrollSnapList().length) {
        api.scrollTo(0);
      } else {
        api.scrollNext();
      }
    }, 2800);

    return () => window.clearInterval(interval);
  }, [api, logos.length]);

  return (
    <Carousel setApi={setApi} opts={{ align: "start" }} className="w-full" aria-label="Partner links">
      <CarouselContent>
        {logos.map((logo) => (
          <CarouselItem className="basis-1/2 sm:basis-1/3 lg:basis-1/4" key={logo.name}>
            <a href={logo.href} target="_blank" rel="noreferrer" aria-label={`Visit ${logo.name}`} className="flex h-28 items-center justify-center border border-white/10 bg-[var(--site-surface-raised)] p-5 transition-colors hover:border-[var(--theme-accent)]">
              <img src={logo.imageSrc} alt={logo.name} className="max-h-14 max-w-full object-contain" />
            </a>
          </CarouselItem>
        ))}
      </CarouselContent>
    </Carousel>
  );
}