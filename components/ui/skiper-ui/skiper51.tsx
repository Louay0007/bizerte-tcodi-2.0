"use client";

import { motion } from "framer-motion";
import { ChevronLeftIcon, ChevronRightIcon } from "lucide-react";
import { Autoplay, EffectCreative, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/autoplay";
import "swiper/css/effect-creative";
import "swiper/css/navigation";
import "swiper/css/pagination";

import { cn } from "@/lib/utils";

export type Skiper51Image = {
  src: string;
  alt: string;
  title: string;
  description: string;
};

interface Skiper51Props {
  images: Skiper51Image[];
  eyebrow?: string;
  title?: string;
  description?: string;
  className?: string;
}

export function Skiper51({
  images,
  eyebrow = "Bizerte Tcodi memories",
  title = "Relive the energy",
  description = "A look back at the people, ideas, and moments that define Bizerte Tcodi.",
  className,
}: Skiper51Props) {
  return (
    <section className={cn("theme-transition w-full overflow-hidden bg-dark py-16 sm:py-24", className)}>
      <div className="grid w-full gap-10 px-4 sm:px-8 lg:grid-cols-[minmax(22rem,0.8fr)_minmax(0,1.2fr)] lg:items-center lg:gap-12 lg:px-12 xl:gap-16 xl:px-16">
        <div className="text-center lg:text-left">
          <p className="font-mono text-[11px] uppercase tracking-[0.3em] text-white/35">{eyebrow}</p>
          <h2 className="theme-accent mt-4 font-avatar-airbender text-4xl tracking-wide sm:text-5xl md:text-6xl">{title}</h2>
          <p className="mx-auto mt-5 max-w-2xl text-base leading-relaxed text-white/60 sm:text-lg lg:mx-0">{description}</p>
          <div className="mt-8 grid grid-cols-3 items-start gap-3 sm:gap-5">
            <div>
              <img src="/logos/logo-1.0.jpg" alt="Bizerte Tcodi 1.0 logo" className="mx-auto aspect-square w-full object-contain" />
              <div className="mt-2 text-center"><p className="text-xs font-semibold text-white">1.0</p><p className="hidden text-xs text-white/50 sm:block">Where it began</p></div>
            </div>
            <div>
              <img src="/logos/logo-2.0.jpg" alt="Bizerte Tcodi 2.0 logo" className="mx-auto aspect-square w-full object-contain" />
              <div className="mt-2 text-center"><p className="text-xs font-semibold text-white">2.0</p><p className="hidden text-xs text-white/50 sm:block">Growing together</p></div>
            </div>
            <div>
              <img src="/logos/official-logo.png?v=2" alt="Bizerte Tcodi 3.0 logo" className="mx-auto aspect-square w-full object-contain" />
              <div className="mt-2 text-center"><p className="text-xs font-semibold text-white">3.0</p><p className="hidden text-xs text-white/50 sm:block">The next chapter</p></div>
            </div>
          </div>
        </div>

        <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.15 }}
        transition={{ duration: 0.45 }}
        className="skiper51-carousel relative min-w-0 max-w-full overflow-hidden"
      >
        <Swiper
          autoplay={{ delay: 3200, disableOnInteraction: false, pauseOnMouseEnter: true }}
          centeredSlides
          effect="creative"
          grabCursor
          loop={images.length > 1}
          pagination={{ clickable: true }}
          navigation={{ nextEl: ".skiper51-next", prevEl: ".skiper51-prev" }}
          creativeEffect={{
            prev: { shadow: true, translate: ["-18%", 0, -300] },
            next: { translate: ["100%", 0, 0] },
          }}
          modules={[EffectCreative, Pagination, Navigation, Autoplay]}
        >
          {images.map((image) => (
            <SwiperSlide key={image.src}>
              <article className="theme-accent-border relative aspect-[4/3] overflow-hidden rounded-2xl border bg-black">
                <img src={image.src} alt={image.alt} className="h-full w-full object-contain" />
                <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/90 via-black/35 to-transparent px-5 pb-6 pt-24 sm:px-8 sm:pb-8">
                  <h3 className="text-xl font-semibold text-white sm:text-2xl">{image.title}</h3>
                  <p className="mt-1 max-w-xl text-sm text-white/75 sm:text-base">{image.description}</p>
                </div>
              </article>
            </SwiperSlide>
          ))}
        </Swiper>
        <button type="button" aria-label="Previous image" className="skiper51-prev theme-accent-border absolute left-7 top-1/2 z-10 hidden -translate-y-1/2 rounded-full border bg-black/60 p-2 text-white backdrop-blur transition hover:bg-[var(--theme-accent-soft)] hover:text-[var(--theme-accent)] sm:block">
          <ChevronLeftIcon className="size-5" />
        </button>
        <button type="button" aria-label="Next image" className="skiper51-next theme-accent-border absolute right-7 top-1/2 z-10 hidden -translate-y-1/2 rounded-full border bg-black/60 p-2 text-white backdrop-blur transition hover:bg-[var(--theme-accent-soft)] hover:text-[var(--theme-accent)] sm:block">
          <ChevronRightIcon className="size-5" />
        </button>
        </motion.div>
      </div>
    </section>
  );
}
