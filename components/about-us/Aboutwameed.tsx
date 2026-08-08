import Image from "next/image";
import ActionButton from "../ActionButton";
import Link from "next/link";


export default function AboutMenaSYP() {
  return (
    <section
      id="about"
      className="bg-dark flex justify-center items-center py-12 px-4 md:px-6 relative overflow-hidden"
    >
  
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-8 md:gap-16 items-center">
        <div className="space-y-4 md:space-y-6 text-white order-2 md:order-1">
          <h2 className="text-3xl md:text-4xl font-bold">Bizerte Tcodi: About</h2>

          <p className="text-base md:text-lg font-medium">
            Bizerte Tcodi is a vibrant celebration of problem-solving and creativity, uniting aspiring engineers and visionaries from across the Bizerte region. This unique hackathon invites participants to capture the essence of innovation through the art of code.
          </p>

          <p className="text-base md:text-lg font-medium">
            Each year, Bizerte Tcodi becomes a stage for collaboration, where authentic voices and fresh perspectives shine. The event showcases a rich tapestry of tech solutions that highlight the talent, dreams, and everyday moments that make each team extraordinary.
          </p>

          <p className="text-base md:text-lg font-medium">
            More than a competition, Bizerte Tcodi is a movement—empowering young creators to become ambassadors for their field, fostering understanding, and building bridges between future engineers. Join us on this journey and experience the stories that illuminate the heart of Bizerte.
          </p>
          <div className="pt-2">
            <Link href="/program">
              <ActionButton text="Check Schedule" className="max-w-xl" />
            </Link>
          </div>
        </div>
        <div className="flex justify-center order-1 md:order-2 mb-8 md:mb-0">
          <Image
            src="/images/wameed1.png"
            alt="MenaSYP Logo"
            width={400}
            height={400}
            className="max-w-full h-auto"
          />
        </div>
      </div>
    </section>
  );
}
