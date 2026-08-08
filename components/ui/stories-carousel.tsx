"use client";

import type { ComponentProps, HTMLAttributes, VideoHTMLAttributes } from "react";
import { useEffect, useRef } from "react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Carousel, CarouselContent, CarouselItem } from "@/components/ui/carousel";
import { cn } from "@/lib/utils";

export type StoriesProps = ComponentProps<typeof Carousel>;
export const Stories = ({ className, opts, ...props }: StoriesProps) => <Carousel className={cn("w-full", className)} opts={{ align: "start", loop: false, dragFree: true, ...opts }} {...props} />;
export const StoriesContent = ({ className, ...props }: ComponentProps<typeof CarouselContent>) => <CarouselContent className={cn("gap-2", className)} {...props} />;
export const Story = ({ className, ...props }: HTMLAttributes<HTMLDivElement>) => <CarouselItem className="basis-auto !w-[280px] pl-3 sm:!w-[340px] md:pl-4"><div className={cn("group relative cursor-pointer overflow-hidden rounded-xl bg-muted/40 transition-all duration-200 hover:scale-[1.02] hover:shadow-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2", className)} role="button" tabIndex={0} {...props} /></CarouselItem>;

const timePattern = /t=(\d+(?:\.\d+)?)/;
export const StoryVideo = ({ className, ...props }: VideoHTMLAttributes<HTMLVideoElement>) => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const initialTime = useRef(0);
  useEffect(() => { const match = typeof props.src === "string" ? props.src.match(timePattern) : null; initialTime.current = match ? Number.parseFloat(match[1]) : 0; }, [props.src]);
  const reset = () => { if (videoRef.current) { videoRef.current.pause(); videoRef.current.currentTime = initialTime.current; } };
  return <video ref={videoRef} className={cn("absolute inset-0 size-full object-cover transition-opacity duration-200 group-hover:opacity-90", className)} loop muted preload="metadata" tabIndex={0} onMouseOver={() => videoRef.current?.play()} onFocus={() => videoRef.current?.play()} onMouseOut={reset} onBlur={reset} {...props} />;
};
export const StoryImage = ({ className, alt, ...props }: ComponentProps<"img"> & { alt: string }) => <img alt={alt} className={cn("absolute inset-0 h-full w-full object-cover transition-opacity duration-200 group-hover:opacity-90", className)} {...props} />;
export const StoryAuthor = ({ className, children, ...props }: HTMLAttributes<HTMLDivElement>) => <div className={cn("absolute right-0 bottom-0 left-0 z-10 p-3 text-white", className)} {...props}><div className="flex items-center gap-2">{children}</div></div>;
export const StoryAuthorImage = ({ src, fallback, name, className, ...props }: ComponentProps<typeof Avatar> & { src?: string; name?: string; fallback?: string }) => <Avatar className={cn("size-6 border border-white/20", className)} {...props}>{src && <AvatarImage alt={name} src={src} />}<AvatarFallback className="bg-white/10 text-xs text-white">{fallback || name?.charAt(0)?.toUpperCase()}</AvatarFallback></Avatar>;
export const StoryAuthorName = ({ className, ...props }: HTMLAttributes<HTMLSpanElement>) => <span className={cn("truncate text-sm font-medium", className)} {...props} />;
export const StoryTitle = ({ className, ...props }: HTMLAttributes<HTMLDivElement>) => <div className={cn("absolute top-0 right-0 left-0 z-10 p-3 text-white", className)} {...props} />;
export const StoryOverlay = ({ className, side = "bottom", ...props }: HTMLAttributes<HTMLDivElement> & { side?: "top" | "bottom" }) => <div className={cn("absolute right-0 left-0 h-10 from-black/20 to-transparent", side === "top" ? "top-0 bg-gradient-to-b" : "bottom-0 bg-gradient-to-t", className)} {...props} />;
