import HeroGradient from "../hero/HeroGradient";
import HeroText from "../hero/HeroText";
import StarsBackground from "../hero/StarsBackground";

const Hero = () => {
  return (
    <HeroGradient
      backgroundType="video"
      backgroundSrc="/videos/tn1.mp4"
    >
      <StarsBackground />
      <HeroText
        imgSrc="/images/countries/tunisia.png"
        altText="Tunisia logo"
        imgDim={100}
        title="Tunisia"
        description="Bizerte Tcodi 1st Edition Country"
        arrowText="Learn more about Tunisia"
        takeMeTo="discover"
      />
    </HeroGradient>
  );
};

export default Hero;
