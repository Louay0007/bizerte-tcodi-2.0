"use client";

import { Building2, CheckCircle2, Mail, Send, UserRound } from "lucide-react";
import { FormEvent, useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";

const enquiryTypes = [
  { value: "participant", label: "Participant", description: "Registration, teams, or event questions", icon: UserRound },
  { value: "partner", label: "Partner", description: "Sponsorships, collaborations, or media", icon: Building2 },
] as const;

export default function ContactSection() {
  const searchParams = useSearchParams();
  const [enquiryType, setEnquiryType] = useState<(typeof enquiryTypes)[number]["value"]>(searchParams.get("enquiryType") === "partner" ? "partner" : "participant");
  const [submitted, setSubmitted] = useState(false);
  const [status, setStatus] = useState<"idle" | "sending" | "error">("idle");

  useEffect(() => {
    if (searchParams.get("enquiryType") === "partner" || searchParams.get("enquiry") === "partner") {
      setEnquiryType("partner");
    }
  }, [searchParams]);

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setStatus("sending");

    const form = event.currentTarget;
    const response = await fetch("/api/contact", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(Object.fromEntries(new FormData(form).entries())),
    });

    if (response.ok) {
      form.reset();
      setSubmitted(true);
      setStatus("idle");
      return;
    }

    setStatus("error");
  };

  return (
    <section id="contact" className="theme-transition w-full bg-dark py-12 sm:py-16">
      <div className="mx-auto grid w-full max-w-6xl overflow-hidden border-y border-white/10 bg-[var(--site-surface-raised)] lg:grid-cols-[0.78fr_1.22fr] lg:rounded-2xl lg:border">
          <div className="relative border-b border-[color-mix(in_srgb,var(--theme-accent)_38%,transparent)] px-6 py-8 sm:px-8 sm:py-10 lg:border-r lg:border-b-0 lg:px-10 lg:py-12">
            <div className="relative">
              <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.06] px-3 py-1.5 font-mono text-[10px] uppercase tracking-[0.2em] text-white/65">
                <Mail className="theme-accent size-3.5" />
                Get in touch
              </div>
              <h2 className="theme-accent mt-5 font-avatar-airbender text-4xl leading-[0.9] tracking-wide sm:text-5xl">
                Let&apos;s make
                <br />
                it happen.
              </h2>
              <p className="mt-5 max-w-sm text-sm leading-relaxed text-white/60 sm:text-base">
                Whether you&apos;re ready to participate or want to partner with Bizerte Tcodi, our team would love to hear from you.
              </p>

              <div className="mt-7 space-y-3">
                <a href="mailto:bizerte.tcodi@gmail.com" className="group flex items-center gap-3 border-b border-white/10 py-3 transition hover:border-[var(--theme-accent)]">
                  <span className="theme-accent flex size-9 shrink-0 items-center justify-center"><Mail className="theme-accent size-4" /></span>
                  <span><span className="block text-xs text-white/45">Email us directly</span><span className="text-sm font-medium text-white">bizerte.tcodi@gmail.com</span></span>
                </a>
                <p className="border-b border-white/10 py-3 text-xs leading-relaxed text-white/55">
                  We&apos;ll use your details only to respond to your enquiry.
                </p>
              </div>
            </div>
          </div>

          <div className="px-6 py-8 sm:px-8 sm:py-10 lg:px-10 lg:py-12">
            {submitted ? (
              <div className="flex min-h-80 flex-col items-center justify-center text-center">
                <span className="theme-accent-border flex size-14 items-center justify-center rounded-2xl border bg-[var(--theme-accent-soft)]"><CheckCircle2 className="theme-accent size-7" /></span>
                <h3 className="mt-5 text-xl font-semibold text-white">Message received</h3>
                <p className="mt-3 max-w-sm text-white/60">Thank you for reaching out. The Bizerte Tcodi team will get back to you soon.</p>
                <button type="button" onClick={() => setSubmitted(false)} className="theme-accent mt-6 text-sm font-medium transition-opacity hover:opacity-70">Send another message</button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div>
                  <p className="text-sm font-medium text-white">What can we help with?</p>
                  <div className="mt-3 grid gap-3 sm:grid-cols-2">
                    {enquiryTypes.map(({ value, label, description, icon: Icon }) => {
                      const selected = enquiryType === value;
                      return (
                        <button key={value} type="button" onClick={() => setEnquiryType(value)} aria-pressed={selected} className={`rounded-xl border bg-[var(--site-surface)] p-3 text-left transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--theme-accent)] ${selected ? "border-[var(--theme-accent)]" : "border-white/10 hover:border-white/30"}`}>
                          <Icon className={`size-4 ${selected ? "theme-accent" : "text-white/55"}`} />
                          <span className="mt-2 block text-sm font-semibold text-white">{label}</span>
                          <span className="mt-1 block text-xs leading-snug text-white/50">{description}</span>
                        </button>
                      );
                    })}
                  </div>
                </div>

                <input type="hidden" name="enquiryType" value={enquiryType} />
                <div className="grid gap-4 sm:grid-cols-2">
                  <label className="space-y-1.5"><span className="text-sm font-medium text-white/80">Full name</span><input required name="name" placeholder="Your name" className="contact-input" /></label>
                  <label className="space-y-1.5"><span className="text-sm font-medium text-white/80">Email address</span><input required type="email" name="email" placeholder="you@example.com" className="contact-input" /></label>
                </div>
                <label className="space-y-1.5"><span className="text-sm font-medium text-white/80">Organization <span className="text-white/35">(optional)</span></span><input name="organization" placeholder="University, company, or organization" className="contact-input" /></label>
                <label className="space-y-1.5"><span className="text-sm font-medium text-white/80">Your message</span><textarea required name="message" rows={4} placeholder={enquiryType === "partner" ? "Tell us how you would like to collaborate with Bizerte Tcodi." : "How can we help you prepare for Bizerte Tcodi?"} className="contact-input min-h-28 resize-y" /></label>
                <button disabled={status === "sending"} type="submit" className="theme-accent-bg inline-flex h-11 w-full items-center justify-center gap-2 rounded-xl text-sm font-semibold transition hover:brightness-110 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white disabled:cursor-wait disabled:opacity-70 sm:w-auto sm:px-5">
                  {status === "sending" ? "Sending..." : "Send message"}
                  <Send className="size-4" />
                </button>
                {status === "error" && <p role="alert" className="text-sm text-red-300">We could not send your message. Please email us directly instead.</p>}
              </form>
            )}
          </div>
      </div>
    </section>
  );
}
