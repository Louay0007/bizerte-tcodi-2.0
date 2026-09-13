"use client";

import Image from "next/image";
import Link from "next/link";
import { navbarLinks } from "@/constants";
import { usePathname } from "next/navigation";
import NavLink from "./NavLink";
import LockedModal from "../LockedModal";
import { useEffect, useRef, useState } from "react";
import { ArrowUpRight, Lock, Menu, X } from "lucide-react";

export default function Navbar() {
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [lockedPage, setLockedPage] = useState<string | null>(null);
  const menuRef = useRef<HTMLDivElement>(null);

  const toggleMobileMenu = () => {
    setMobileMenuOpen((open) => !open);
  };

  useEffect(() => {
    setMobileMenuOpen(false);
  }, [pathname]);

  useEffect(() => {
    const previousOverflow = document.body.style.overflow;

    if (mobileMenuOpen) {
      document.body.style.overflow = "hidden";
      requestAnimationFrame(() => menuRef.current?.querySelector<HTMLElement>("a, button")?.focus());
    }

    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") setMobileMenuOpen(false);
    };

    window.addEventListener("keydown", closeOnEscape);
    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", closeOnEscape);
    };
  }, [mobileMenuOpen]);

  const handleLockedClick = (e: React.MouseEvent, label: string) => {
    e.preventDefault();
    setLockedPage(label);
    setMobileMenuOpen(false);
  };

  return (
    <header className="fixed inset-x-0 top-0 z-[70] border-b border-transparent bg-transparent">
      <nav
        className="relative z-10 mx-auto flex h-16 w-full max-w-7xl items-center justify-between px-4 sm:h-20 sm:px-8 lg:px-12"
        aria-label="Main navigation"
      >
        <Link href="/" className="group inline-flex min-h-11 min-w-0 items-center gap-2.5" aria-label="Bizerte Tcodi home">
          <Image
            src="/logos/official-logo.png?v=2"
            alt=""
            width={48}
            height={48}
            priority
            className="size-9 shrink-0 object-contain drop-shadow-[0_0_8px_var(--theme-glow)] sm:size-10"
          />
          <span className="hidden truncate font-avatar-airbender text-xl tracking-wide text-white transition-colors group-hover:text-[var(--theme-accent)] min-[360px]:block sm:text-2xl">
            Bizerte Tcodi
          </span>
        </Link>

        <div className="hidden items-center gap-1 md:flex lg:gap-2">
          {navbarLinks.map((link) =>
            link.locked ? (
              <button
                key={link.route}
                onClick={(event) => handleLockedClick(event, link.label)}
                className="theme-nav-link group relative inline-flex h-10 items-center gap-1.5 px-3 text-sm transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--theme-accent)]"
                aria-label={`${link.label} (coming soon)`}
              >
                {link.label}
                <Lock className="size-3 text-white/35" strokeWidth={1.5} />
              </button>
            ) : (
              <NavLink
                key={link.route}
                href={link.route}
                isActive={pathname === link.route}
                className={`theme-nav-link inline-flex h-10 items-center px-3 text-sm transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--theme-accent)] ${
                  pathname === link.route ? "theme-nav-link-active" : ""
                }`}
              >
                {link.label}
              </NavLink>
            ),
          )}
        </div>

        <button
          type="button"
          className="inline-flex size-11 shrink-0 items-center justify-center border border-white/20 bg-white/[0.04] text-white transition-colors hover:border-[var(--theme-accent)] hover:bg-[var(--theme-accent-soft)] hover:text-[var(--theme-accent)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--theme-accent)] md:hidden"
          onClick={toggleMobileMenu}
          aria-label={mobileMenuOpen ? "Close navigation menu" : "Open navigation menu"}
          aria-expanded={mobileMenuOpen}
          aria-controls="mobile-menu"
        >
          {mobileMenuOpen ? <X className="size-5" /> : <Menu className="size-5" />}
        </button>
      </nav>

      <div
        ref={menuRef}
        id="mobile-menu"
        className={`fixed inset-x-0 bottom-0 top-16 z-0 border-t border-white/10 bg-[#030303] transition-[opacity,transform] duration-300 ease-out sm:top-20 md:hidden ${
          mobileMenuOpen
            ? "translate-y-0 opacity-100"
            : "pointer-events-none -translate-y-3 opacity-0"
        }`}
        aria-label="Mobile navigation menu"
        aria-hidden={!mobileMenuOpen}
        inert={!mobileMenuOpen}
      >
        <div className="mx-auto flex h-full max-w-xl flex-col px-6 pb-8 pt-9">
          <div className="flex items-end justify-between gap-5 pb-6">
            <div>
              <p className="font-mono text-[10px] uppercase tracking-[0.24em] text-[var(--theme-accent)]">Navigation</p>
              <p className="mt-2 text-sm text-white/45">Choose where to go next.</p>
            </div>
            <span className="font-mono text-[10px] uppercase tracking-[0.18em] text-white/30">Menu</span>
          </div>

          <div className="border-t border-white/12">
            {navbarLinks.map((link, index) => {
              const active = pathname === link.route;

              return link.locked ? (
                <button
                  key={link.route}
                  onClick={(event) => handleLockedClick(event, link.label)}
                  className="flex w-full items-center justify-between border-b border-white/12 py-5 text-left text-xl font-medium text-white/45"
                  aria-label={`${link.label} (coming soon)`}
                >
                  <span className="flex items-center gap-4"><span className="font-mono text-[10px] text-white/25">{String(index + 1).padStart(2, "0")}</span>{link.label}</span>
                  <Lock className="size-4" strokeWidth={1.5} />
                </button>
              ) : (
                <Link
                  key={link.route}
                  href={link.route}
                  className={`group flex w-full items-center justify-between border-b py-5 text-xl font-medium transition-colors ${
                    active
                      ? "border-[var(--theme-accent)] text-[var(--theme-accent)]"
                      : "border-white/12 text-white/72 hover:text-[var(--theme-accent)]"
                  }`}
                  onClick={() => setMobileMenuOpen(false)}
                  aria-current={active ? "page" : undefined}
                >
                  <span className="flex items-center gap-4"><span className="font-mono text-[10px] text-white/25">{String(index + 1).padStart(2, "0")}</span>{link.label}</span>
                  <ArrowUpRight className="size-4 opacity-40 transition-opacity group-hover:opacity-100" />
                </Link>
              );
            })}
          </div>

          <div className="mt-auto border-t border-white/12 pt-5">
            <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-white/35">19 September 2026</p>
            <p className="mt-2 text-sm text-white/55">ENIB, Bizerte</p>
          </div>
        </div>
      </div>

      <LockedModal
        open={lockedPage !== null}
        onClose={() => setLockedPage(null)}
        pageName={lockedPage ?? ""}
      />
    </header>
  );
}
