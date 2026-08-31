interface HeroGradientProps {
  children: React.ReactNode;
  backgroundType?: "image" | "video";
  backgroundSrc?: string;
  className?: string;
  mediaClassName?: string;
  style?: React.CSSProperties;
}

const HeroGradient = ({
  children,
  backgroundType = "image",
  backgroundSrc = "/images/hero.jpg",
  className = "",
  mediaClassName = "object-center",
  style,
}: HeroGradientProps) => {
  const baseGradientStyle = {
    backgroundImage:
      backgroundType === "image"
        ? `linear-gradient(180deg, transparent 20%, var(--site-bg) 100%), url('${backgroundSrc}')`
        : "none",
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
  };

  if (backgroundType === "image") {
    return (
      <section
        className={`relative h-[100svh] min-h-[36rem] w-full overflow-hidden hero-gradient sm:h-[100dvh] ${className}`}
        style={style}
      >
        {/* Solid #000000 background as the base layer */}
        <div className="absolute inset-0 z-0 bg-dark" />
        {/* The hero-gradient class now handles the background gradient. The image/video will be layered below. */}
        <div className="absolute inset-0 z-0" style={baseGradientStyle} />
        <div className="hero-theme-overlay absolute inset-0 z-10" />
        {/* Top fade overlay */}
        <div className="pointer-events-none absolute top-0 left-0 w-full h-40 z-20" style={{background: "linear-gradient(to bottom, #000000 0%, transparent 100%)"}} />
        {/* Bottom fade overlay */}
        <div className="pointer-events-none absolute bottom-0 left-0 w-full h-40 z-20" style={{background: "linear-gradient(to top, #000000 0%, transparent 100%)"}} />
        <div className="relative z-20 h-full w-full">{children}</div>
      </section>
    );
  } else if (backgroundType === "video") {
    return (
      <section
        className={`relative h-[100svh] min-h-[36rem] w-full overflow-hidden hero-gradient sm:h-[100dvh] ${className}`}
      >
        {/* Solid #000000 background as the base layer */}
        <div className="absolute inset-0 z-0 bg-dark" />
        {/* The hero-gradient class now handles the background gradient. The video will be layered below. */}
        <video
          autoPlay
          muted
          loop
          playsInline
          className={`absolute inset-0 z-0 h-full w-full object-cover ${mediaClassName}`}
          preload="metadata"
        >
          <source src={backgroundSrc} type="video/mp4" />
          Your browser does not support the video tag.
        </video>

        <div className="hero-theme-overlay absolute inset-0 z-10" />
        <div className="relative z-20 h-full w-full">{children}</div>
      </section>
    );
  }
};

export default HeroGradient;
