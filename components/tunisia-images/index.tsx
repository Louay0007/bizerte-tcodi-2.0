import Image from "next/image";
import Link from "next/link";
import ActionButton from "../ActionButton";
import { cn } from "@/lib/utils";

const TunisiaImages = ({ isHomePage }: { isHomePage: boolean }) => {
  return (
    <div className="bg-dark py-8 px-4 md:px-6">
      {/* Creative Hero Section */}
      <div className="flex flex-col items-center justify-center mb-10 animate-fade-in-up">
        <div className="relative flex flex-col items-center justify-center">
          <div className="flex flex-row items-center gap-4 mb-2">
            <Image
              src="/images/countries/tunisia.png"
              alt="Tunisia flag symbol"
              width={80}
              height={50}
              className="w-20 h-12 md:w-28 md:h-16 drop-shadow-lg animate-wiggle"
              priority
            />
            <Image
              src="/images/countries/palestine.png"
              alt="Palestine flag symbol"
              width={80}
              height={50}
              className="w-20 h-12 md:w-28 md:h-16 drop-shadow-lg animate-wiggle"
              priority
            />
          </div>
          <h1 className="text-4xl md:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-white via-neutral-300 to-neutral-500 mt-4 text-center drop-shadow-lg">
            Tunisia
          </h1>
          <p className="text-neutral-400 text-base md:text-lg font-semibold mt-1 text-center">In solidarity with Palestine — From the river to the sea palestine will be free .</p>
          <p className="text-lg md:text-2xl text-white font-medium mt-2 text-center max-w-xl">
            Discover the beauty, history, and vibrant culture of Tunisia through a creative gallery experience.
          </p>
          <Link href="about-tunisia" className="mt-6">
            <ActionButton
              text="Learn More"
              className="text-lg px-8 py-3 font-bold bg-gradient-to-r from-white via-neutral-200 to-neutral-400 text-black shadow-lg hover:from-neutral-300 hover:to-neutral-500 transition-all duration-300 border-2 border-white rounded-full"
            />
          </Link>
        </div>
      </div>
      {/* Smart Animated Gallery */}
      <div className="flex flex-col gap-4 max-w-6xl mx-auto">
        <div className="w-full h-64 sm:h-72 md:h-80 lg:h-[25rem] relative overflow-hidden rounded-xl shadow-lg animate-fade-in">
          <Image
            src="/images/sneak-peak-1.jpg"
            alt="Bizerte port"
            fill
            className="object-cover tunisia-image-border transition-transform duration-500 hover:scale-105 hover:shadow-[0_0_24px_4px_rgba(255,255,255,0.3)]"
            priority
          />
        </div>
        <div
          className={cn(
            "grid gap-4 mt-4",
            isHomePage
              ? "grid-cols-1 sm:grid-cols-3"
              : "grid-cols-1 sm:grid-cols-2"
          )}
        >
          <div className="relative h-64 sm:h-48 md:h-56 lg:h-72 overflow-hidden rounded-xl shadow-lg animate-fade-in-up group">
            <Image
              src="/images/col.jpg"
              alt="Eljemm Colosseum in Tunisia"
              fill
              className="object-cover tunisia-image-border transition-transform duration-500 group-hover:scale-110 group-hover:shadow-[0_0_24px_4px_rgba(255,255,255,0.3)]"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-80 transition-opacity duration-500 flex items-end p-4">
              <span className="text-white text-lg font-bold drop-shadow-lg">Eljemm Colosseum</span>
            </div>
          </div>
          <div className="relative h-64 sm:h-48 md:h-56 lg:h-72 overflow-hidden rounded-xl shadow-lg animate-fade-in-up group">
            <Image
              src="/images/sneak-peak-3.webp"
              alt="Ancient ruins with columns in Tunisia"
              fill
              className="object-cover tunisia-image-border transition-transform duration-500 group-hover:scale-110 group-hover:shadow-[0_0_24px_4px_rgba(255,255,255,0.3)]"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-80 transition-opacity duration-500 flex items-end p-4">
              <span className="text-white text-lg font-bold drop-shadow-lg">Ancient Ruins</span>
            </div>
          </div>
          <div className="relative h-64 sm:h-48 md:h-56 lg:h-72 overflow-hidden rounded-xl shadow-lg animate-fade-in-up group">
            <Image
              src="/images/Tn.jpg"
              alt="Tunisia landscape"
              fill
              className="object-cover tunisia-image-border transition-transform duration-500 group-hover:scale-110 group-hover:shadow-[0_0_24px_4px_rgba(255,255,255,0.3)]"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-80 transition-opacity duration-500 flex items-end p-4">
              <span className="text-white text-lg font-bold drop-shadow-lg">Tunisia Landscape</span>
            </div>
          </div>
        </div>
        <div className="w-full h-64 sm:h-72 md:h-80 lg:h-[25rem] relative overflow-hidden rounded-xl shadow-lg animate-fade-in">
          <Image
            src="/images/sneak-peak-4.png"
            alt="Aerial view of Sousse in Tunisia"
            fill
            className="object-cover tunisia-image-border transition-transform duration-500 hover:scale-105 hover:shadow-[0_0_24px_4px_rgba(255,255,255,0.3)]"
          />
        </div>
      </div>
    </div>
  );
};

// Animations (add to your global CSS or Tailwind config):
// .animate-fade-in { animation: fadeIn 1s ease both; }
// .animate-fade-in-up { animation: fadeInUp 1s ease both; }
// .animate-wiggle { animation: wiggle 2s infinite; }
//
// @keyframes fadeIn { from { opacity: 0; } to { opacity: 1; } }
// @keyframes fadeInUp { from { opacity: 0; transform: translateY(40px); } to { opacity: 1; transform: none; } }
// @keyframes wiggle { 0%, 100% { transform: rotate(-2deg); } 50% { transform: rotate(2deg); } }

export default TunisiaImages;
