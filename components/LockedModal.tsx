"use client";

import { useEffect } from "react";
import { Lock, X } from "lucide-react";

interface LockedModalProps {
  open: boolean;
  onClose: () => void;
  pageName: string;
}

export default function LockedModal({ open, onClose, pageName }: LockedModalProps) {
  useEffect(() => {
    if (!open) return;
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    document.addEventListener("keydown", handleKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", handleKey);
      document.body.style.overflow = "";
    };
  }, [open, onClose]);

  if (!open) return null;

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center bg-black/70 backdrop-blur-sm px-4"
      role="dialog"
      aria-modal="true"
      aria-label={`${pageName} is locked`}
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-sm rounded-2xl border border-white/10 bg-neutral-950 p-8 text-center shadow-2xl"
        onClick={(e) => e.stopPropagation()}
        style={{ animation: "lockedPop 0.3s cubic-bezier(0.34, 1.56, 0.64, 1)" }}
      >
        <button
          onClick={onClose}
          aria-label="Close"
          className="absolute right-4 top-4 text-neutral-500 transition-colors hover:text-white"
        >
          <X className="h-5 w-5" />
        </button>

        <div className="mx-auto mb-5 flex h-14 w-14 items-center justify-center rounded-full border border-white/15 bg-neutral-900">
          <Lock className="h-6 w-6 text-neutral-300" strokeWidth={1.5} />
        </div>

        <h2 className="text-xl font-semibold tracking-tight text-white">
          {pageName} is coming soon
        </h2>
        <p className="mt-2 text-sm leading-relaxed text-neutral-400">
          This page is still being crafted. Check back shortly — we&apos;re
          putting the finishing touches on it.
        </p>

        <button
          onClick={onClose}
          className="mt-6 w-full rounded-lg bg-white px-4 py-2.5 text-sm font-medium text-black transition-colors hover:bg-neutral-200"
        >
          Got it
        </button>
      </div>

      <style jsx>{`
        @keyframes lockedPop {
          0% {
            opacity: 0;
            transform: scale(0.9) translateY(8px);
          }
          100% {
            opacity: 1;
            transform: scale(1) translateY(0);
          }
        }
      `}</style>
    </div>
  );
}
