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
            IEEE Tunisia Section
          </h2>

          <p className="text-base md:text-lg font-medium">
            IEEE Tunisia Section aims to spread IEEE Activities to all corners
            of the country through educational and technical activities,
            networking opportunities, and to develop technology and its
            applications for humanitarian goals. The section supports chapters,
            special interest groups, student activities and student awards.
          </p>
          <div className="pt-2">
            <Link href="https://ieee.tn/" target="_blank">
              <ActionButton text="Learn More" />
            </Link>
          </div>
        </div>
        <div className="flex justify-center order-1 md:order-2 mb-8 md:mb-0">
          <Image
            src="/images/ieee-partners/tnsection.png"
            alt="IEEE Tunisia Section logo"
            width={400}
            height={400}
            className="max-w-full h-auto"
          />
        </div>
      </div>
    </section>
  );
};

export default Map;
