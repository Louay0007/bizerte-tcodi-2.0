import HeroGradient from "../hero/HeroGradient";
import HeroText from "../hero/HeroText";

const Hero = () => {
  return (
    <HeroGradient
      backgroundType="image"
      backgroundSrc="/images/w33.jpg"
    >
      <HeroText
     
        title="Sponsors & Partners"
        description="Partners of the Bizerte Tcodi 2026 Event"
        arrowText="Check them out"
        takeMeTo="partners"
      />
    </HeroGradient>
  );
};

export default Hero;
