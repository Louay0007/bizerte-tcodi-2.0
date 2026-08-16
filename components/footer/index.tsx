"use client";

import Image from "next/image";
import Link from "next/link";
import { Facebook, Github, Instagram, Linkedin, Twitter } from "lucide-react";

import { navbarLinks } from "@/constants";

const socials = [
  { href: "https://www.facebook.com/profile.php?id=61577092617315", label: "Facebook", Icon: Facebook },
  { href: "https://www.instagram.com/_wameed__/", label: "Instagram", Icon: Instagram },
  { href: "#", label: "LinkedIn", Icon: Linkedin },
  { href: "#", label: "GitHub", Icon: Github },
  { href: "#", label: "Twitter", Icon: Twitter },
];

export default function Footer() {
  return (
    <footer className="theme-transition relative w-full overflow-hidden bg-dark text-white">
      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(180deg,transparent,rgba(0,0,0,0.4))]" />

      <div className="relative z-10 mx-auto max-w-7xl px-6 sm:px-10 lg:px-16">
        <div className="flex flex-col gap-10 border-t border-[color-mix(in_srgb,var(--theme-accent)_40%,transparent)] py-10 lg:flex-row lg:items-start lg:gap-16 lg:py-14">
          <div className="flex flex-1 items-center gap-4">
            <Image src="/logos/official-logo.png?v=2" alt="Bizerte Tcodi 3.0" width={720} height={720} className="h-auto w-20 drop-shadow-[0_0_12px_var(--theme-glow)] sm:w-24" />
            <div>
              <p className="font-avatar-airbender text-3xl tracking-wide text-white">Bizerte Tcodi</p>
              <p className="mt-1 max-w-xs text-sm leading-relaxed text-white/50">A student-led hackathon for the next generation of Tunisian builders.</p>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-x-10 gap-y-8 sm:grid-cols-3 lg:gap-x-16">
            <div className="flex flex-col gap-4">
              <span className="text-xs font-medium uppercase tracking-[0.18em] text-white/90">Explore</span>
              <nav aria-label="Footer navigation">
                <ul className="flex flex-col gap-3">
                  {navbarLinks.map((link) => (
                    <li key={link.route}><Link href={link.route} className="text-sm text-white/60 transition-colors hover:text-[var(--theme-accent)]">{link.label}</Link></li>
                  ))}
                </ul>
              </nav>
            </div>
            <div className="flex flex-col gap-4">
              <span className="text-xs font-medium uppercase tracking-[0.18em] text-white/90">Event</span>
              <ul className="flex flex-col gap-3 text-sm text-white/60">
                <li>19 September 2026</li>
                <li>ENIB, Bizerte</li>
                <li>Registration coming soon</li>
              </ul>
            </div>
            <div className="flex flex-col gap-4">
              <span className="text-xs font-medium uppercase tracking-[0.18em] text-white/90">Connect</span>
              <div className="flex flex-wrap gap-3">
                {socials.map(({ href, label, Icon }) => (
                  <Link key={label} href={href} aria-label={label} target="_blank" className="theme-accent-border flex size-8 items-center justify-center rounded-full border text-white/65 transition hover:bg-[var(--theme-accent)] hover:text-black">
                    <Icon size={16} strokeWidth={1.5} />
                  </Link>
                ))}
              </div>
              <a href="mailto:bizerte.tcodi@gmail.com" className="text-sm text-white/60 transition-colors hover:text-[var(--theme-accent)]">bizerte.tcodi@gmail.com</a>
            </div>
          </div>
        </div>
      </div>

      <div className="relative z-10 overflow-hidden border-t border-[color-mix(in_srgb,var(--theme-accent)_28%,transparent)]">
        <p className="theme-wordmark-muted pointer-events-none -mb-3 w-full select-none whitespace-nowrap text-center font-avatar-airbender text-[18vw] leading-none tracking-wide sm:text-[14vw]">Bizerte Tcodi</p>
        <div className="relative mx-auto flex max-w-7xl flex-col items-center justify-between gap-3 px-6 py-5 text-xs text-white/40 sm:flex-row sm:px-10 lg:px-16">
          <p>© {new Date().getFullYear()} Bizerte Tcodi. All rights reserved.</p>
          <button type="button" onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })} className="transition-colors hover:text-[var(--theme-accent)]">Back to top ↑</button>
        </div>
      </div>
    </footer>
  );
}
