import HeroGradient from "../hero/HeroGradient";
import HeroText from "../hero/HeroText";

const Hero = () => {
  return (
    <HeroGradient
      backgroundType="image"
      backgroundSrc="/images/hero1.jpg"
    >
      <HeroText
          
        title="Timeline & Schedule"
        description="Learn more about the MENASYP 2025 schedule and activities"
        arrowText="Check the program"
        takeMeTo="schedule"
      />
    </HeroGradient>
  );
};

export default Hero;
