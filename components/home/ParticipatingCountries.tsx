"use client";
import CountriesCarousel from "./CountriesCarousel";
import Section from "../Section";

const ParticipatingCountries = () => {
  return (
    <Section
      title="Participating Countries"
      description="15+ Countries of the MENA Region"
      className="items-center py-16 md:py-20"
    >
      <CountriesCarousel />
    </Section>
  );
};

export default ParticipatingCountries;
