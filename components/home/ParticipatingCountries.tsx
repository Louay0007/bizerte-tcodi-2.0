"use client";
import CountriesCarousel from "./CountriesCarousel";
import Section from "../Section";
import dynamic from "next/dynamic";
const StarsBackground = dynamic(() => import("../hero/StarsBackground"), { ssr: false });

const ParticipatingCountries = () => {
  return (
    <Section
      title="Participating Countries"
      description="15+ Countries of the MENA Region"
      className="items-center py-16 md:py-20"
    >
      <StarsBackground />
      <CountriesCarousel />
    </Section>
  );
};

export default ParticipatingCountries;
