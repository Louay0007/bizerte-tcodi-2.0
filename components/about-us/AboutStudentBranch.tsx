"use client";
import Image from "next/image";
import ActionButton from "../ActionButton";
import Link from "next/link";
import dynamic from "next/dynamic";


export default function AboutStudentBranch() {
  return (
    <section className="bg-dark flex justify-center items-center py-12 px-4 md:px-6 relative overflow-hidden">
      
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-8 md:gap-16 items-center">
        <div className="space-y-4 md:space-y-6 text-white order-2 md:order-1">
          <h2 className="text-3xl md:text-4xl font-bold">
            IEEE WIE ISSATM SBAG
          </h2>

          <p className="text-base md:text-lg font-medium">
            IEEE WIE ISSATM SBAG is one of the prominent IEEE affinity groups in region 8, established to inspire and empower women in engineering and technology. Founded at the Higher Institute of Applied Sciences and Technology of Mateur, it focuses on fostering gender diversity and inclusion.
          </p>

          <p className="text-base md:text-lg font-medium">
            As part of the IEEE Student Branch, WIE ISSATM SBAG actively organizes events, workshops, and initiatives to support female engineers and students. Their efforts include mentorship programs, technical training, and networking opportunities to bridge gender gaps in STEM fields.
          </p>
          <div className="pt-2">
            <Link href="https://wie-issatm.ieee.tn/" target="_blank">
              <ActionButton text="Learn More" />
            </Link>
          </div>
        </div>
        <div className="flex justify-center order-1 md:order-2 mb-8 md:mb-0">
          <Image
            src="/images/wie1.jpg"
            alt="Stacked IEEE images"
            width={800}
            height={400}
            className="max-w-full h-auto border-4 border-white rounded-lg"
          />
        </div>
      </div>
    </section>
  );
}
