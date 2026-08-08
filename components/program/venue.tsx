import Link from "next/link";
import ActionButton from "../ActionButton";
import Image from "next/image";

const uticaDescription = `
UTICA (Union Tunisienne de l'Industrie, du Commerce et de l'Artisanat) is the leading organization representing Tunisian businesses and employers. As a hub for innovation, entrepreneurship, and economic growth, UTICA brings together industry leaders, visionaries, and changemakers from across Tunisia. The organization plays a vital role in supporting local enterprises, fostering collaboration, and driving the country’s economic development. The MENASYP 2025 on-site experience will take place at UTICA’s prestigious venue in Tunis, offering a dynamic environment for learning, networking, and inspiration.`;

const uticaMapUrl =
  "https://www.google.com/maps/place/UTICA+UNION+TUN.+THE+IND.+TRADE+%26+ART/@36.8321851,10.1836192,946m/data=!3m2!1e3!4b1!4m6!3m5!1s0x12fd349152110abf:0x56d8cb1b63a6a711!8m2!3d36.8321808!4d10.1861941!16s%2Fg%2F1hdz0yzmm?entry=ttu&g_ep=EgoyMDI1MDcwNi4wIKXMDSoASAFQAw%3D%3D";

export default function Venue() {
  return (
    <section
      id="utica"
      className="bg-dark flex flex-col items-center py-12 px-4 md:px-6 relative overflow-hidden"
    >
      {/* Centered, premium title */}
      <h1 className="text-4xl md:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-white via-neutral-300 to-neutral-500 text-center mb-20 drop-shadow-lg tracking-tight pt-12 pb-10">
        First Phase: On-Site Venue
      </h1>
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-8 md:gap-16 items-center">
        <div className="space-y-4 md:space-y-6 text-white order-2 md:order-1">
          <h2 className="text-3xl md:text-4xl font-bold text-white">
            UTICA: The Heart of Tunisian Enterprise
          </h2>

          <p className="text-base md:text-lg font-medium">
            {uticaDescription}
          </p>

          <Link
            href={uticaMapUrl}
            target="_blank"
            className="pt-2"
          >
            <ActionButton text="View on Google Maps" />
          </Link>
        </div>
        <div className="flex justify-center order-1 md:order-2 mb-8 md:mb-0">
          <div className="relative w-full max-w-lg h-72 md:h-96 rounded-3xl overflow-hidden shadow-2xl border-4 border-white/40">
            <Image
              src="/images/utica.jpg"
              alt="UTICA Venue"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 600px"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
}
