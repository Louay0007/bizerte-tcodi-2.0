"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import {
  CalendarClock,
  Download,
  ExternalLink,
  FileText,
  Maximize2,
  RefreshCw,
  ShieldCheck,
} from "lucide-react";

const challengeDocument = "/documents/bizerte-tcodi-challenge.pdf";

export default function ChallengeExperience() {
  const viewerRef = useRef<HTMLDivElement>(null);
  const [documentAvailable, setDocumentAvailable] = useState<boolean | null>(null);
  const [checkVersion, setCheckVersion] = useState(0);

  const checkDocument = useCallback(async () => {
    setDocumentAvailable(null);

    try {
      const response = await fetch(challengeDocument, {
        method: "HEAD",
        cache: "no-store",
      });
      const contentType = response.headers.get("content-type");
      setDocumentAvailable(response.ok && contentType?.includes("application/pdf") === true);
    } catch {
      setDocumentAvailable(false);
    }
  }, []);

  useEffect(() => {
    void checkDocument();
  }, [checkDocument, checkVersion]);

  const openFullscreen = async () => {
    if (viewerRef.current?.requestFullscreen) {
      await viewerRef.current.requestFullscreen();
    }
  };

  return (
    <main className="theme-transition min-h-screen bg-dark pt-20 text-white sm:pt-24">
      <section className="relative overflow-hidden border-b border-white/10 px-6 pb-14 pt-9 sm:px-10 sm:pb-20 lg:px-16">
        <div className="pointer-events-none absolute inset-0 opacity-[0.08]" aria-hidden="true">
          <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.14)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.14)_1px,transparent_1px)] bg-[size:48px_48px]" />
          <div className="absolute -right-16 top-0 h-full w-1/2 skew-x-[-18deg] border-l border-[var(--theme-accent)] bg-[var(--theme-accent)]/20" />
        </div>

        <div className="relative mx-auto max-w-7xl">
          <div className="flex flex-wrap items-center justify-between gap-4">
            <p className="font-mono text-[11px] uppercase tracking-[0.28em] text-white/45">
              Bizerte Tcodi 3.0 / Challenge room
            </p>
            <div className="inline-flex items-center gap-2 border border-[var(--theme-accent)]/45 bg-[var(--theme-accent-soft)] px-3 py-2 font-mono text-[10px] uppercase tracking-[0.18em] text-[var(--theme-accent)]">
              <span className="size-1.5 bg-[var(--theme-accent)] shadow-[0_0_10px_var(--theme-glow)]" />
              Event-day release
            </div>
          </div>

          <div className="mt-10 grid gap-8 lg:grid-cols-[minmax(0,1fr)_22rem] lg:items-end">
            <div>
              <h1 className="theme-accent font-avatar-airbender text-6xl leading-[0.84] tracking-wide sm:text-7xl lg:text-8xl">
                Your problems.<br />One running clock.
              </h1>
              <p className="mt-7 max-w-2xl text-lg leading-relaxed text-white/65">
                The official problem set, input and output formats, constraints, examples, and scoring rules will appear here when the competition begins.
              </p>
            </div>

            <dl className="grid grid-cols-2 border border-white/12 bg-[var(--site-surface-raised)]">
              <div className="border-r border-white/12 p-4 sm:p-5">
                <dt className="font-mono text-[9px] uppercase tracking-[0.2em] text-white/38">Reveal</dt>
                <dd className="mt-2 text-sm font-medium text-white">19 Sep 2026</dd>
              </div>
              <div className="p-4 sm:p-5">
                <dt className="font-mono text-[9px] uppercase tracking-[0.2em] text-white/38">Format</dt>
                <dd className="mt-2 text-sm font-medium text-white">Official PDF</dd>
              </div>
            </dl>
          </div>
        </div>
      </section>

      <section className="px-4 py-10 sm:px-8 sm:py-14 lg:px-12">
        <div className="mx-auto max-w-[96rem]">
          <div className="mb-5 flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
            <div>
              <div className="flex items-center gap-2 text-[var(--theme-accent)]">
                <FileText className="size-4" />
                <p className="font-mono text-[10px] uppercase tracking-[0.22em]">Official document</p>
              </div>
              <h2 className="mt-2 text-2xl font-semibold tracking-normal sm:text-3xl">Official problem set</h2>
            </div>
            {documentAvailable && (
              <div className="flex items-center gap-2">
                <button
                  type="button"
                  onClick={openFullscreen}
                  className="inline-flex size-11 items-center justify-center border border-white/18 text-white/70 transition-colors hover:border-[var(--theme-accent)] hover:text-[var(--theme-accent)]"
                  aria-label="View PDF in fullscreen"
                  title="Fullscreen"
                >
                  <Maximize2 className="size-4" />
                </button>
                <a
                  href={challengeDocument}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex size-11 items-center justify-center border border-white/18 text-white/70 transition-colors hover:border-[var(--theme-accent)] hover:text-[var(--theme-accent)]"
                  aria-label="Open PDF in a new tab"
                  title="Open in new tab"
                >
                  <ExternalLink className="size-4" />
                </a>
                <a
                  href={challengeDocument}
                  download
                  className="inline-flex h-11 items-center gap-2 border border-[var(--theme-accent)] bg-[var(--theme-accent)] px-4 text-sm font-semibold text-[var(--theme-on-accent)] transition-opacity hover:opacity-80"
                >
                  <Download className="size-4" />
                  Download
                </a>
              </div>
            )}
          </div>

          <div ref={viewerRef} className="relative min-h-[34rem] overflow-hidden border border-white/14 bg-[#080808] sm:min-h-[46rem] lg:min-h-[52rem]">
            {documentAvailable === null && (
              <div className="absolute inset-0 flex items-center justify-center" role="status">
                <div className="flex items-center gap-3 font-mono text-xs uppercase tracking-[0.2em] text-white/50">
                  <RefreshCw className="size-4 animate-spin text-[var(--theme-accent)]" />
                  Checking the problem set
                </div>
              </div>
            )}

            {documentAvailable === true && (
              <iframe
                src={`${challengeDocument}#view=FitH&toolbar=0&navpanes=0`}
                title="Bizerte Tcodi official problem set"
                className="absolute inset-0 h-full w-full bg-white"
              />
            )}

            {documentAvailable === false && (
              <div className="absolute inset-0 flex items-center justify-center px-6 py-14">
                <div className="w-full max-w-xl text-center">
                  <div className="mx-auto flex size-16 items-center justify-center border border-[var(--theme-accent)] bg-[var(--theme-accent-soft)] text-[var(--theme-accent)]">
                    <CalendarClock className="size-7" strokeWidth={1.5} />
                  </div>
                  <p className="mt-8 font-mono text-[10px] uppercase tracking-[0.24em] text-[var(--theme-accent)]">Problem set sealed</p>
                  <h3 className="mt-4 font-avatar-airbender text-4xl tracking-wide text-white sm:text-5xl">Not revealed yet.</h3>
                  <p className="mx-auto mt-5 max-w-md leading-relaxed text-white/55">
                    The official coding problems will unlock when the competition begins. Keep this page ready and refresh after the announcement.
                  </p>
                  <button
                    type="button"
                    onClick={() => setCheckVersion((version) => version + 1)}
                    className="mt-8 inline-flex h-11 items-center gap-2 border border-white/25 px-5 text-sm font-semibold text-white transition-colors hover:border-[var(--theme-accent)] hover:bg-[var(--theme-accent-soft)] hover:text-[var(--theme-accent)]"
                  >
                    <RefreshCw className="size-4" />
                    Check again
                  </button>
                </div>
              </div>
            )}
          </div>

          <div className="mt-4 grid border border-white/10 bg-[var(--site-surface)] md:grid-cols-3 md:divide-x md:divide-white/10">
            <div className="flex gap-3 p-4 sm:p-5">
              <ShieldCheck className="mt-0.5 size-4 shrink-0 text-[var(--theme-accent)]" />
              <div><p className="text-sm font-medium">Official problem set</p><p className="mt-1 text-xs leading-relaxed text-white/45">Always work from the latest version published here.</p></div>
            </div>
            <div className="flex gap-3 border-t border-white/10 p-4 sm:p-5 md:border-t-0">
              <FileText className="mt-0.5 size-4 shrink-0 text-[var(--theme-accent)]" />
              <div><p className="text-sm font-medium">Read every constraint</p><p className="mt-1 text-xs leading-relaxed text-white/45">Check formats, limits, examples, and edge cases before coding.</p></div>
            </div>
            <div className="flex gap-3 border-t border-white/10 p-4 sm:p-5 md:border-t-0">
              <Download className="mt-0.5 size-4 shrink-0 text-[var(--theme-accent)]" />
              <div><p className="text-sm font-medium">Keep an offline copy</p><p className="mt-1 text-xs leading-relaxed text-white/45">Download the PDF once it is published.</p></div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
