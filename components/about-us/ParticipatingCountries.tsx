import Image from "next/image";
import Section from "../Section";
import { countries } from "@/constants";
import StarsBackground from "../hero/StarsBackground";

const ParticipatingCountries = () => {
  return (
    <Section
      title="Participating Countries"
      description="17 Countries of the MENA Region"
      className="flex items-center justify-center"
    >
      <StarsBackground />
      <div className="flex flex-wrap justify-center gap-12 items-center max-w-5xl">
        {countries.map((country, index) => (
          <div key={index} className="flex flex-col items-center group">
            <div className="relative w-32 h-20 rounded-md overflow-hidden transition-transform duration-300 group-hover:scale-110">
              <Image
                src={country.image}
                alt={`${country.name} flag`}
                fill
                className="object-contain"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              />
            </div>
            <h3 className="text-lg font-semibold text-white text-center mt-3">
              {country.name}
            </h3>
          </div>
        ))}
      </div>
    </Section>
  );
};

export default ParticipatingCountries;
