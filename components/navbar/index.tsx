"use client";

import Link from "next/link";
import { navbarLinks } from "@/constants";
import { usePathname } from "next/navigation";
import NavLink from "./NavLink";
import LockedModal from "../LockedModal";
import { useState } from "react";
import { Menu, X, Lock } from "lucide-react";

export default function Navbar() {
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [lockedPage, setLockedPage] = useState<string | null>(null);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  const handleLockedClick = (e: React.MouseEvent, label: string) => {
    e.preventDefault();
    setLockedPage(label);
    setMobileMenuOpen(false);
  };

  return (
    <div className="relative">
      {/* Sticky navbar with backdrop blur and shadow */}
      <nav
        className="w-full z-50 transition-all duration-300 flex items-center justify-center px-2 xs:px-3 sm:px-6 py-3 sm:py-4 fixed top-0 left-0 navbar-gradient backdrop-blur-md shadow-lg"
        role="navigation"
        aria-label="Main navigation"
      >

        {/* Desktop Navigation */}
        <div className="hidden md:flex justify-center items-center space-x-4 lg:space-x-8">
          {navbarLinks.map((link) =>
            link.locked ? (
              <button
                key={link.route}
                onClick={(e) => handleLockedClick(e, link.label)}
                className="theme-nav-link group relative inline-flex items-center gap-1.5 rounded px-2 py-1 transition-all duration-300 focus:outline-none focus:ring-2 transform hover:scale-105"
                aria-label={`${link.label} (coming soon)`}
              >
                {link.label}
                <Lock className="h-3 w-3 text-neutral-500 transition-colors group-hover:text-neutral-300" strokeWidth={1.5} />
              </button>
            ) : (
              <NavLink
                key={link.route}
                href={link.route}
                isActive={pathname === link.route}
                className={`theme-nav-link relative rounded px-2 py-1 transition-all duration-300 focus:outline-none focus:ring-2 transform hover:scale-105 ${
                  pathname === link.route ? "theme-nav-link-active" : ""
                }`}
                aria-current={pathname === link.route ? "page" : undefined}
              >
                {link.label}
              </NavLink>
            )
          )}
        </div>

        {/* Mobile Menu Button */}
        <button
          className="theme-nav-link absolute right-12 p-2 transition-all duration-300 focus:outline-none focus:ring-2 hover:scale-110 md:hidden xs:right-14 sm:right-16"
          onClick={toggleMobileMenu}
          aria-label={mobileMenuOpen ? "Close mobile menu" : "Open mobile menu"}
          aria-expanded={mobileMenuOpen}
          aria-controls="mobile-menu"
        >
          {mobileMenuOpen ? (
            <X className="w-8 h-8 cursor-pointer" />
          ) : (
            <Menu className="w-8 h-8 cursor-pointer" />
          )}
        </button>
      </nav>

      {/* Mobile Menu with animation */}
      <div
        id="mobile-menu"
        className={`fixed inset-0 z-50 bg-dark bg-opacity-95 pt-24 px-4 md:hidden transition-transform duration-300 ease-in-out ${
          mobileMenuOpen ? "translate-y-0 opacity-100" : "-translate-y-8 opacity-0 pointer-events-none"
        }`}
        role="dialog"
        aria-modal="true"
        aria-label="Mobile navigation menu"
      >
          <div className="flex flex-col items-center space-y-6">
          {/* Larger close button at the top */}
          <button
            className="theme-nav-link absolute top-6 right-6 rounded-full bg-white/10 p-3 transition-all duration-300 focus:outline-none focus:ring-2 hover:scale-110"
            onClick={toggleMobileMenu}
            aria-label="Close mobile menu"
          >
            <X className="w-8 h-8" />
          </button>
            {navbarLinks.map((link) =>
              link.locked ? (
                <button
                  key={link.route}
                  onClick={(e) => handleLockedClick(e, link.label)}
                  className="theme-nav-link inline-flex w-full items-center gap-2 rounded px-4 py-2 text-center text-xl font-medium transition-all duration-300 hover:scale-105"
                  aria-label={`${link.label} (coming soon)`}
                >
                  {link.label}
                  <Lock className="h-4 w-4 text-neutral-500" strokeWidth={1.5} />
                </button>
              ) : (
                <Link
                  key={link.route}
                  href={link.route}
                  className={`theme-nav-link w-full rounded px-4 py-2 text-center text-xl font-medium transition-all duration-300 hover:scale-105 ${
                    pathname === link.route ? "theme-nav-link-active" : ""
                  }`}
                  onClick={() => setMobileMenuOpen(false)}
                  aria-current={pathname === link.route ? "page" : undefined}
                >
                  {link.label}
                </Link>
              )
            )}
        </div>
      </div>

      <LockedModal
        open={lockedPage !== null}
        onClose={() => setLockedPage(null)}
        pageName={lockedPage ?? ""}
      />
    </div>
  );
}
