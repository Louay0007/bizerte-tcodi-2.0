import HeroGradient from "../hero/HeroGradient";
import HeroText from "../hero/HeroText";
import StarsBackground from "../hero/StarsBackground";

const Hero = () => {
  return (
    <HeroGradient
      backgroundType="image"
      backgroundSrc="/images/w33.jpg"
    >
      <StarsBackground />
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
