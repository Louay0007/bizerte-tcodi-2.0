import Image from "next/image";

interface TextWithPattern {
  title: string;
  description?: string;
}

const TextWithPattern = ({ title, description }: TextWithPattern) => {
  return (
    <div className="mb-6 sm:mb-8 md:mb-12 flex flex-col justify-center items-center gap-4 sm:gap-6 md:gap-8">
      <div className="flex flex-col justify-center items-center gap-1 sm:gap-2">
        <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-white font-bold text-center">
          {title}
        </h1>
        {description && (
          <p className="font-medium text-center text-white text-base sm:text-lg md:text-xl lg:text-2xl mt-2 sm:mt-4">
            {description}
          </p>
        )}
      </div>
      {/* Customized gold SVG pattern */}
      <svg
        width="120"
        height="32"
        viewBox="0 0 120 32"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="mt-2"
      >
        <g>
          <rect x="10" y="14" width="100" height="4" rx="2" fill="#ffffff"/>
          <circle cx="60" cy="16" r="8" fill="#ffffff" fillOpacity="0.7"/>
          <circle cx="60" cy="16" r="4" fill="#ffffff" />
          <rect x="0" y="16" width="20" height="2" rx="1" fill="#ffffff" fillOpacity="0.5"/>
          <rect x="100" y="16" width="20" height="2" rx="1" fill="#ffffff" fillOpacity="0.5"/>
        </g>
      </svg>
    </div>
  );
};

export default TextWithPattern;
