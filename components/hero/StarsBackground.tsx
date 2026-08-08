import React from "react";
import seedrandom from "seedrandom";

const STAR_COUNT = 25;
const SEED = "menasyp-stars";

function getSeededStars() {
  const rng = seedrandom(SEED);
  return Array.from({ length: STAR_COUNT }).map((_, i) => {
    const size = 2 + rng() * 2; // px
    const left = rng() * 100; // %
    const top = rng() * 100; // %
    const delay = rng() * 3; // seconds
    const duration = 1.5 + rng() * 2; // seconds
    return {
      size,
      left,
      top,
      delay,
      duration,
    };
  });
}

const StarsBackground = () => {
  const stars = getSeededStars();
  return (
    <div className="absolute inset-0 w-full h-full pointer-events-none z-1">
      {stars.map((star, i) => (
        <div
          key={i}
          className="absolute rounded-full bg-white/90 shadow-lg animate-star-twinkle"
          style={{
            width: `${star.size}px`,
            height: `${star.size}px`,
            left: `${star.left}%`,
            top: `${star.top}%`,
            animationDelay: `${star.delay}s`,
            animationDuration: `${star.duration}s`,
            zIndex: 1,
          }}
        />
      ))}
    </div>
  );
};

export default StarsBackground; 