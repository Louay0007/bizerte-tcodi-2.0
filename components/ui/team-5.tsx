"use client";

import { Github, Globe, Linkedin } from "lucide-react";
import gsap from "gsap";
import { useRef, type ComponentType } from "react";

import { cn } from "@/lib/utils";

export type Team5SocialPlatform = "linkedin" | "github" | "website";

export interface Team5Member {
  id: string;
  name: string;
  role: string;
  image: string;
  socials?: { platform: Team5SocialPlatform; url: string; label?: string }[];
}

interface Team5Props {
  heading?: string;
  description?: string;
  members: Team5Member[];
  className?: string;
}

const socialIcons: Record<Team5SocialPlatform, ComponentType<{ className?: string }>> = {
  linkedin: Linkedin,
  github: Github,
  website: Globe,
};

export default function Team5({
  heading = "Organizing Committee",
  description,
  members,
  className,
}: Team5Props) {
  const membersRef = useRef<HTMLDivElement>(null);

  const handleCardEnter = (index: number) => {
    const cards = Array.from(membersRef.current?.children ?? []);
    gsap.to(cards, {
      flexGrow: 1,
      opacity: 0.72,
      scale: 0.992,
      duration: 0.85,
      ease: "power3.inOut",
      stagger: { each: 0.025, from: index },
      overwrite: "auto",
    });
    gsap.to(cards[index], {
      flexGrow: 3,
      opacity: 1,
      scale: 1.008,
      duration: 0.9,
      ease: "power3.inOut",
      overwrite: "auto",
    });
  };

  const handleCardLeave = () => {
    gsap.to(Array.from(membersRef.current?.children ?? []), {
      flexGrow: 1,
      opacity: 1,
      scale: 1,
      duration: 0.95,
      ease: "power3.inOut",
      stagger: 0.03,
      overwrite: "auto",
    });
  };

  return (
    <section className={cn("theme-transition w-full bg-dark py-20 sm:py-24", className)}>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-10 text-center sm:mb-14">
          <p className="font-mono text-[11px] uppercase tracking-[0.3em] text-white/35">The team</p>
          <h2 className="theme-accent mt-4 font-avatar-airbender text-4xl tracking-wide sm:text-5xl md:text-6xl">{heading}</h2>
          {description && <p className="mx-auto mt-5 max-w-xl text-base text-white/60 sm:text-lg">{description}</p>}
        </div>

        <div ref={membersRef} className="flex h-[22rem] gap-1.5 sm:h-[30rem] sm:gap-2 md:h-[34rem]">
          {members.map((member, index) => (
            <article
              key={member.id}
              onMouseEnter={() => handleCardEnter(index)}
              onMouseLeave={handleCardLeave}
              className="theme-accent-border group relative min-w-0 flex-1 overflow-hidden rounded-xl border bg-white/5 shadow-sm transition-[box-shadow,border-color] duration-700 hover:shadow-[0_0_28px_var(--theme-glow)] focus-within:flex-[3]"
            >
              <img
                src={member.image}
                alt={`Mock portrait of ${member.name}`}
                className="absolute inset-0 h-full w-full object-cover grayscale transition-all duration-700 group-hover:grayscale-0 group-focus-within:grayscale-0"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/25 to-transparent opacity-0 transition-opacity duration-700 group-hover:opacity-100 group-focus-within:opacity-100" />
              <div className="absolute inset-x-0 bottom-0 flex translate-y-5 flex-col gap-3 p-4 opacity-0 transition-all duration-700 ease-out group-hover:translate-y-0 group-hover:opacity-100 group-focus-within:translate-y-0 group-focus-within:opacity-100 sm:p-6">
                <span className="theme-accent-border w-fit rounded-full border bg-black/35 px-3 py-1 text-xs font-medium text-white/85 backdrop-blur">{member.role}</span>
                <h3 className="text-lg font-semibold tracking-tight text-white sm:text-2xl">{member.name}</h3>
                {member.socials && (
                  <div className="flex items-center gap-2">
                    {member.socials.map((social) => {
                      const Icon = socialIcons[social.platform];
                      const label = social.label ?? `${member.name} on ${social.platform}`;
                      return (
                        <a key={`${social.platform}-${social.url}`} href={social.url} aria-label={label} target="_blank" rel="noopener noreferrer" className="flex size-8 items-center justify-center rounded-full bg-white/10 text-white backdrop-blur transition-colors hover:bg-[var(--theme-accent)] hover:text-black">
                          <Icon className="size-4" />
                        </a>
                      );
                    })}
                  </div>
                )}
              </div>
            </article>
          ))}
        </div>
        <p className="mt-5 text-center text-xs text-white/35">Committee profiles are placeholder data and will be updated when official details are available.</p>
      </div>
    </section>
  );
}

export { Team5 };
