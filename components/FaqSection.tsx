"use client";

import { ArrowUpRight, CircleHelp } from "lucide-react";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "Who can participate in Bizerte Tcodi?",
    answer: "Bizerte Tcodi welcomes university students who enjoy algorithms, logical thinking, and solving coding problems under time pressure. Final eligibility rules will be published with registration.",
  },
  {
    question: "When and where will the competition take place?",
    answer: "Bizerte Tcodi 3.0 takes place on 19 September 2026 at ENIB in Bizerte, Tunisia. Registration is open and the final event schedule is available on this website.",
  },
  {
    question: "How do I register?",
    answer: "Registration is open now. Use the Register now button on this website to complete the official form.",
  },
  {
    question: "Do I need to come with a team?",
    answer: "The official participation format and team-size rules will be announced with registration. Check the published rules before forming your team.",
  },
  {
    question: "What should I bring?",
    answer: "Bring your laptop, charger, student identification, and a working coding environment. Supported languages and any additional requirements will be published before the competition.",
  },
  {
    question: "How will solutions be evaluated?",
    answer: "Solutions will be judged using the official test cases and competition rules. Correctness, execution limits, scoring details, rankings, and prizes will be confirmed before the event.",
  },
];

export default function FaqSection() {
  return (
    <section id="faq" className="theme-transition w-full bg-dark py-16 sm:py-24">
      <div className="mx-auto grid max-w-7xl gap-10 px-6 lg:grid-cols-[0.8fr_1.2fr] lg:gap-16 lg:px-8">
        <div className="lg:sticky lg:top-20 lg:self-start">
          <div className="inline-flex items-center gap-2 font-mono text-[11px] uppercase tracking-[0.3em] text-white/40">
            <CircleHelp className="theme-accent size-4" />
            Need to know
          </div>
          <h2 className="theme-accent mt-5 font-avatar-airbender text-5xl leading-[0.9] tracking-wide sm:text-6xl md:text-7xl">
            Questions,
            <br />
            answered.
          </h2>
          <p className="mt-6 max-w-md text-base leading-relaxed text-white/60 sm:text-lg">
            Everything you need to know before joining Bizerte Tcodi 3.0.
          </p>
          <a href="mailto:bizerte.tcodi@gmail.com" className="theme-accent group mt-8 inline-flex min-h-11 items-center gap-2 text-sm font-medium transition-opacity hover:opacity-70">
            Ask us directly
            <ArrowUpRight className="size-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
          </a>
        </div>

        <div className="pb-3">
          <Accordion type="single" collapsible className="space-y-3">
            {faqs.map((faq, index) => (
              <AccordionItem key={faq.question} value={`faq-${index}`} className="theme-accent-border rounded-xl border bg-white/[0.03] px-5 transition-colors hover:bg-[var(--theme-accent-soft)] sm:px-6">
                <AccordionTrigger className="min-h-20 items-center py-5 text-base font-medium leading-snug text-white hover:no-underline sm:text-lg">
                  <span className="flex min-w-0 items-baseline gap-4"><span className="theme-accent shrink-0 font-mono text-xs">0{index + 1}</span><span>{faq.question}</span></span>
                </AccordionTrigger>
                <AccordionContent className="max-w-2xl pb-5 pl-8 pr-7 text-sm leading-relaxed text-white/60 sm:pl-9 sm:text-base">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
}
