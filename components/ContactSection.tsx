"use client";

import { Building2, CheckCircle2, Mail, Send, UserRound } from "lucide-react";
import { FormEvent, useState } from "react";

const enquiryTypes = [
  { value: "participant", label: "Participant", description: "Registration, teams, or event questions", icon: UserRound },
  { value: "partner", label: "Partner", description: "Sponsorships, collaborations, or media", icon: Building2 },
] as const;

export default function ContactSection() {
  const [enquiryType, setEnquiryType] = useState<(typeof enquiryTypes)[number]["value"]>("participant");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setSubmitted(true);
  };

  return (
    <section className="theme-transition w-full bg-black py-16 sm:py-24">
      <div className="mx-auto grid w-full max-w-[90rem] lg:grid-cols-[0.82fr_1.18fr]">
          <div className="relative overflow-hidden border-b border-[color-mix(in_srgb,var(--theme-accent)_38%,transparent)] px-6 py-10 sm:px-10 sm:py-14 lg:border-r lg:border-b-0 lg:px-16 lg:py-20">
            <div className="relative">
              <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.06] px-3 py-1.5 font-mono text-[10px] uppercase tracking-[0.2em] text-white/65">
                <Mail className="theme-accent size-3.5" />
                Get in touch
              </div>
              <h2 className="theme-accent mt-6 font-avatar-airbender text-5xl leading-[0.9] tracking-wide sm:text-6xl">
                Let&apos;s make
                <br />
                it happen.
              </h2>
              <p className="mt-6 max-w-sm text-base leading-relaxed text-white/60 sm:text-lg">
                Whether you&apos;re ready to participate or want to partner with Bizerte Tcodi, our team would love to hear from you.
              </p>

              <div className="mt-10 space-y-4">
                <a href="mailto:contact@bizertetcodi.tn" className="group flex items-center gap-4 border-b border-white/10 py-4 transition hover:border-[var(--theme-accent)]">
                  <span className="theme-accent flex size-10 shrink-0 items-center justify-center"><Mail className="theme-accent size-4" /></span>
                  <span><span className="block text-xs text-white/45">Email us directly</span><span className="text-sm font-medium text-white">contact@bizertetcodi.tn</span></span>
                </a>
                <p className="border-b border-white/10 py-4 text-sm leading-relaxed text-white/55">
                  We&apos;ll use your details only to respond to your enquiry.
                </p>
              </div>
            </div>
          </div>

          <div className="px-6 py-10 sm:px-10 sm:py-14 lg:px-16 lg:py-20">
            {submitted ? (
              <div className="flex min-h-[29rem] flex-col items-center justify-center text-center">
                <span className="theme-accent-border flex size-16 items-center justify-center rounded-[1.25rem] border bg-[var(--theme-accent-soft)]"><CheckCircle2 className="theme-accent size-8" /></span>
                <h3 className="mt-6 text-2xl font-semibold text-white">Message received</h3>
                <p className="mt-3 max-w-sm text-white/60">Thank you for reaching out. The Bizerte Tcodi team will get back to you soon.</p>
                <button type="button" onClick={() => setSubmitted(false)} className="theme-accent mt-7 text-sm font-medium transition-opacity hover:opacity-70">Send another message</button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <p className="text-sm font-medium text-white">What can we help with?</p>
                  <div className="mt-3 grid gap-3 sm:grid-cols-2">
                    {enquiryTypes.map(({ value, label, description, icon: Icon }) => {
                      const selected = enquiryType === value;
                      return (
                        <button key={value} type="button" onClick={() => setEnquiryType(value)} aria-pressed={selected} className={`rounded-2xl border bg-black p-4 text-left transition ${selected ? "border-[var(--theme-accent)]" : "border-white/10 hover:border-white/30"}`}>>
                          <Icon className={`size-5 ${selected ? "theme-accent" : "text-white/55"}`} />
                          <span className="mt-3 block text-sm font-semibold text-white">{label}</span>
                          <span className="mt-1 block text-xs leading-relaxed text-white/50">{description}</span>
                        </button>
                      );
                    })}
                  </div>
                </div>

                <input type="hidden" name="enquiryType" value={enquiryType} />
                <div className="grid gap-5 sm:grid-cols-2">
                  <label className="space-y-2"><span className="text-sm font-medium text-white/80">Full name</span><input required name="name" placeholder="Your name" className="contact-input" /></label>
                  <label className="space-y-2"><span className="text-sm font-medium text-white/80">Email address</span><input required type="email" name="email" placeholder="you@example.com" className="contact-input" /></label>
                </div>
                <label className="space-y-2"><span className="text-sm font-medium text-white/80">Organization <span className="text-white/35">(optional)</span></span><input name="organization" placeholder="University, company, or organization" className="contact-input" /></label>
                <label className="space-y-2"><span className="text-sm font-medium text-white/80">Your message</span><textarea required name="message" rows={5} placeholder={enquiryType === "partner" ? "Tell us how you would like to collaborate with Bizerte Tcodi." : "How can we help you prepare for Bizerte Tcodi?"} className="contact-input min-h-32 resize-y" /></label>
                <button type="submit" className="theme-accent-bg inline-flex h-12 w-full items-center justify-center gap-2 rounded-2xl text-sm font-semibold transition hover:brightness-110 sm:w-auto sm:px-6">
                  Send message
                  <Send className="size-4" />
                </button>
              </form>
            )}
          </div>
      </div>
    </section>
  );
}
