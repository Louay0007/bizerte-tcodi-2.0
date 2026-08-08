"use client";

import { useRouter } from "next/navigation";
import { Lock, ArrowLeft } from "lucide-react";

interface LockedPageProps {
  pageName: string;
}

export default function LockedPage({ pageName }: LockedPageProps) {
  const router = useRouter();

  return (
    <section className="relative flex min-h-[70vh] w-full items-center justify-center overflow-hidden bg-black px-6 py-20">
      <div className="flex max-w-md flex-col items-center text-center">
        <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-full border border-white/15 bg-neutral-900">
          <Lock className="h-7 w-7 text-neutral-300" strokeWidth={1.5} />
        </div>

        <h1 className="text-3xl font-semibold tracking-tight text-white sm:text-4xl">
          {pageName} is coming soon
        </h1>

        <p className="mt-4 text-base leading-relaxed text-neutral-400">
          This page is still being crafted. We&apos;re putting the finishing
          touches on it — check back shortly.
        </p>

        <button
          onClick={() => router.push("/")}
          className="mt-8 inline-flex items-center gap-2 rounded-lg bg-white px-5 py-2.5 text-sm font-medium text-black transition-colors hover:bg-neutral-200"
        >
          <ArrowLeft className="h-4 w-4" strokeWidth={1.5} />
          Back to home
        </button>
      </div>
    </section>
  );
}
