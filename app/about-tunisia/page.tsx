import About from "@/components/about-tunisia/About";
import CurrencyConverter from "@/components/about-tunisia/CurrencyConverter";
import Map from "@/components/about-tunisia/Map";
import Gallery from "@/components/about-tunisia/Gallery";
import Hero from "@/components/about-tunisia/Hero";

const AboutTunisia = () => {
  return (
    <div>
      <Hero />
      <About />
      <Map />
      <CurrencyConverter />
      <Gallery />
    </div>
  );
};

export default AboutTunisia;
