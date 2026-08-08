import Link from "next/link";
import ActionButton from "../ActionButton";


export default function About() {
  return (
    <section
      id="discover"
      className="bg-dark flex justify-center items-center py-12 px-4 md:px-6 relative overflow-hidden"
    >
     
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-8 md:gap-16 items-center">
        <div className="space-y-4 md:space-y-6 text-white order-2 md:order-1">
          <h2 className="text-3xl md:text-4xl font-bold">
            Tunisia: The Gem of the Mediterranean
          </h2>

          <p className="text-base md:text-lg font-medium">
            From sun-kissed Mediterranean shores to the golden sands of the Sahara, Tunisia is a land of breathtaking contrasts and timeless beauty. Its 1,250 km coastline sparkles with vibrant ports, hidden islands, and ancient ruins, while each region reveals a tapestry of unique traditions, flavors, and stories. Journey through Tunisia and discover a country where history, culture, and natural wonders blend in a symphony of unforgettable experiences.
          </p>

          <p className="text-base md:text-lg font-medium">
            We are delighted to introduce you to these regions by breaking them
            down into this video.
          </p>
          <Link
            href="https://www.discovertunisia.com/en/"
            target="_blank"
            className="pt-2"
          >
            <ActionButton text="Discover Tunisia Official Website" />
          </Link>
        </div>
        <div className="flex justify-center order-1 md:order-2 mb-8 md:mb-0">
          <iframe
            width="560"
            height="315"
            src="https://www.youtube.com/embed/H__i5LKFVXg?si=jZdPW8ayTkba-iVG"
            title="Discover Tunisia - Official Video"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
            className="rounded-3xl max-w-full"
          ></iframe>
        </div>
      </div>
    </section>
  );
}
