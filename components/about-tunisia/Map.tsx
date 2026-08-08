"use client";
import Image from "next/image";
import ActionButton from "../ActionButton";
import Link from "next/link";
import dynamic from "next/dynamic";


const Map = () => {
  return (
    <section className="bg-dark flex justify-center items-center py-12 px-4 md:px-6 relative overflow-hidden">
     
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-8 md:gap-16 items-center">
        <div className="space-y-4 md:space-y-6 text-white order-2 md:order-1">
          <h2 className="text-3xl md:text-4xl font-bold">
            The Heart of North Africa
          </h2>

          <p className="text-base md:text-lg font-medium">
            Nestled at the crossroads of Africa and the Mediterranean, Tunisia is a vibrant mosaic of civilizations. From the ancient Amazigh and legendary Carthaginians to Roman emperors, Arab dynasties, and Ottoman sultans, each era has left its mark on Tunisia’s soul. Here, history and heritage blend seamlessly, creating a land where cultures meet, stories intertwine, and every corner reveals a new chapter in a timeless journey.
          </p>
          <Link
            href="https://maps.app.goo.gl/PsDPbsZ3mMj3L9keA"
            target="_blank"
            className="pt-2"
          >
            <ActionButton text="View on Maps" />
          </Link>
        </div>
        <div className="flex justify-center order-1 md:order-2 mb-8 md:mb-0">
          <Image
            src="/images/tunisia-map.jpg"
            alt="Tunisia Map"
            width={600}
            height={400}
            className="max-w-full h-auto"
            priority
          />
        </div>
      </div>
    </section>
  );
};

export default Map;
