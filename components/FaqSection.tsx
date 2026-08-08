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
    answer: "Bizerte Tcodi welcomes motivated university students who want to solve meaningful technical challenges, collaborate with peers, and build practical ideas.",
  },
  {
    question: "When and where will the hackathon take place?",
    answer: "Bizerte Tcodi 3.0 takes place on 19 September 2026 at ENIB in Bizerte, Tunisia. Event updates and the final schedule will be shared before registration opens.",
  },
  {
    question: "How do I register?",
    answer: "Registration is coming soon. Follow our social channels and check this website for the official registration announcement.",
  },
  {
    question: "Do I need to come with a team?",
    answer: "You may join with a team or connect with other participants during the event. The goal is to make collaboration accessible to everyone.",
  },
  {
    question: "What should I bring?",
    answer: "Bring your laptop, charger, student identification, and enthusiasm. We will share any additional requirements and event materials before the hackathon.",
  },
  {
    question: "Will there be mentorship and prizes?",
    answer: "Yes. Participants will receive guidance from mentors and industry professionals, and the strongest solutions will be recognized during the closing ceremony.",
  },
];

export default function FaqSection() {
  return (
    <section className="theme-transition w-full bg-dark py-16 sm:py-24">
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
          <a href="mailto:contact@bizertetcodi.tn" className="theme-accent group mt-8 inline-flex items-center gap-2 text-sm font-medium transition-opacity hover:opacity-70">
            Ask us directly
            <ArrowUpRight className="size-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
          </a>
        </div>

        <div className="pb-3">
          <Accordion type="single" collapsible className="space-y-3">
            {faqs.map((faq, index) => (
              <AccordionItem key={faq.question} value={`faq-${index}`} className="theme-accent-border rounded-xl border bg-white/[0.03] px-5 transition-colors hover:bg-[var(--theme-accent-soft)] sm:px-6">
                <AccordionTrigger className="py-5 text-base font-medium text-white hover:no-underline sm:text-lg">
                  <span className="flex gap-4"><span className="theme-accent font-mono text-xs">0{index + 1}</span>{faq.question}</span>
                </AccordionTrigger>
                <AccordionContent className="max-w-2xl pb-5 pl-8 text-sm leading-relaxed text-white/60 sm:text-base">
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
