import HeroGradient from "../hero/HeroGradient";
import HeroText from "../hero/HeroText";

const Hero = () => {
  return (
    <HeroGradient
      backgroundType="image"
      backgroundSrc="/images/w4.png"
     
    >
      <HeroText
        title="About us"
        description="Get to know the Bizerte Tcodi organizers"
        arrowText="Scroll to learn more"
        takeMeTo="about"
      />
    </HeroGradient>
  );
};

export default Hero;
