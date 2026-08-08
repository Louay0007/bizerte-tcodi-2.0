"use client";

import { useEffect, useState } from "react";
import type { CarouselApi } from "@/components/ui/carousel";
import { Stories, StoriesContent, Story, StoryAuthor, StoryAuthorName, StoryImage, StoryOverlay, StoryTitle } from "@/components/ui/stories-carousel";

const speakers = [
  { name: "Alex Johnson", role: "Product strategist", image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=600&h=800&fit=crop&crop=face" },
  { name: "Sarah Chen", role: "AI researcher", image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=800&h=1000&q=85" },
  { name: "Mike Rodriguez", role: "Startup founder", image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=600&h=800&fit=crop&crop=face" },
  { name: "Emma Wilson", role: "Design lead", image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=600&h=800&fit=crop&crop=face" },
  { name: "David Kim", role: "Engineering manager", image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=600&h=800&fit=crop&crop=face" },
];

export default function SpeakersSection() {
  const [api, setApi] = useState<CarouselApi>();
  useEffect(() => { if (!api) return; const timer = window.setInterval(() => api.canScrollNext() ? api.scrollNext() : api.scrollTo(0), 3000); return () => window.clearInterval(timer); }, [api]);
  return <section className="theme-transition w-full bg-dark py-16 sm:py-24"><div className="mx-auto max-w-7xl px-6 lg:px-8"><p className="theme-accent font-mono text-[11px] uppercase tracking-[0.3em]">Meet the voices</p><div className="mb-10 flex flex-wrap items-end justify-between gap-4"><h2 className="theme-accent font-avatar-airbender text-5xl leading-none tracking-wide sm:text-6xl">Featured speakers.</h2><p className="max-w-md text-white/60">Get to know the innovators and mentors joining Bizerte Tcodi 3.0.</p></div><Stories setApi={setApi} opts={{ loop: false }} aria-label="Featured speakers"><StoriesContent className="gap-4">{speakers.map((speaker) => <Story key={speaker.name} className="aspect-[4/5] w-[280px] sm:w-[340px]"><StoryImage alt={`Portrait of ${speaker.name}`} src={speaker.image} /><div aria-hidden="true" className="pointer-events-none absolute inset-y-0 left-0 w-2/3 bg-gradient-to-r from-black/90 via-black/45 to-transparent" /><div aria-hidden="true" className="pointer-events-none absolute inset-y-0 right-0 w-2/3 bg-gradient-to-l from-black/80 via-black/35 to-transparent" /><StoryOverlay side="top" /><StoryOverlay side="bottom" /><StoryTitle className="text-base font-medium">{speaker.role}</StoryTitle><StoryAuthor><StoryAuthorName className="text-lg">{speaker.name}</StoryAuthorName></StoryAuthor></Story>)}</StoriesContent></Stories></div></section>;
}
