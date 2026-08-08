"use client";
import Section from "../Section";
import TunisiaImages from "../tunisia-images";

const Gallery = () => {
  return (
    <Section title="Gallery" description="Iconic Tunisian locations to explore">
      <TunisiaImages isHomePage={false} />
    </Section>
  );
};

export default Gallery;
