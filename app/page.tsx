"use client";

import Hero from "@/components/home/Hero";
import LogoMarquee from "@/components/LogoMarquee";
import ElementsSection from "@/components/ElementsSection";
import AboutHero from "@/components/AboutHero";
import VenueSection from "@/components/VenueSection";
import TeamSection from "@/components/TeamSection";
import ProgramPreview from "@/components/ProgramPreview";
import PartnersSection from "@/components/PartnersSection";
import FaqSection from "@/components/FaqSection";
import ContactSection from "@/components/ContactSection";
import { Skiper19 } from "@/components/ui/skiper-ui/skiper19";
import { Skiper51 } from "@/components/ui/skiper-ui/skiper51";

const venueGalleryItems = [
  {
    id: 1,
    title: "The Organizing Team",
    desc: "The people who made Bizerte Tcodi happen.",
    url: "/bento/1.jpg",
    span: "sm:col-span-2 lg:col-span-2 lg:row-span-2",
  },
  {
    id: 2,
    title: "A Room Full of Ideas",
    desc: "Students gathered to learn, build, and connect.",
    url: "/bento/2.jpg",
    span: "lg:col-span-2",
  },
  {
    id: 3,
    title: "Focused Minds",
    desc: "Every session begins with curiosity.",
    url: "/bento/4.jpg",
    span: "",
  },
  {
    id: 4,
    title: "Learning Together",
    desc: "Collaboration at every stage of the event.",
    url: "/bento/4.0.jpg",
    span: "",
  },
  {
    id: 5,
    title: "Opening Ceremony",
    desc: "Welcoming a new edition of Bizerte Tcodi.",
    url: "/bento/6.0.jpg",
    span: "sm:col-span-2 lg:col-span-2",
  },
  {
    id: 6,
    title: "The Community",
    desc: "A shared passion for technology and impact.",
    url: "/bento/8.jpg",
    span: "lg:row-span-2",
  },
  {
    id: 7,
    title: "On the Stage",
    desc: "Ideas, stories, and the people behind them.",
    url: "/bento/9.jpg",
    span: "",
  },
  {
    id: 8,
    title: "IEEE Community",
    desc: "The student branch spirit that powers our event.",
    url: "/bento/9.0.jpg",
    span: "",
  },
  {
    id: 9,
    title: "The Challenge Begins",
    desc: "New perspectives and bold ideas take shape.",
    url: "/bento/10.jpg",
    span: "",
  },
  {
    id: 10,
    title: "Ideas in Action",
    desc: "A closer look at the Bizerte Tcodi experience.",
    url: "/bento/11.jpg",
    span: "",
  },
  {
    id: 11,
    title: "Built Together",
    desc: "Students connecting through technology.",
    url: "/bento/12.jpg",
    span: "",
  },
  {
    id: 12,
    title: "The Next Generation",
    desc: "Curiosity, commitment, and community.",
    url: "/bento/13.jpg",
    span: "",
  },
  {
    id: 13,
    title: "Moments That Matter",
    desc: "Every edition leaves a lasting impact.",
    url: "/bento/14.jpg",
    span: "",
  },
  {
    id: 14,
    title: "Beyond the Classroom",
    desc: "A space for learning, creating, and leading.",
    url: "/bento/15.jpg",
    span: "",
  },
  {
    id: 15,
    title: "Ready for What Is Next",
    desc: "The journey continues with Bizerte Tcodi 3.0.",
    url: "/bento/17.jpg",
    span: "",
  },
];

export default function Home() {
  return (
    <div>
      <Hero />
      <LogoMarquee />
      <ElementsSection />
      <AboutHero />
      <ProgramPreview />
      <VenueSection />
      <Skiper51
        images={venueGalleryItems.map(({ url, title, desc }) => ({
          src: url,
          alt: title,
          title,
          description: desc,
        }))}
        title="Be part of the story"
        description="From the opening ceremony to the final ideas, explore the moments that bring Bizerte Tcodi to life."
      />
      <TeamSection />
      <PartnersSection />
      <Skiper19 />
      <FaqSection />
      <ContactSection />
    </div>
  );
}
