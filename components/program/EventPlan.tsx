import React from "react";
import Image from "next/image";

export default function EventPlan() {
  return (
    <>
      {/* Event Plan Details Title */}
      <div className="w-full flex justify-center items-center pt-12 pb-4 bg-dark">
        <h1 className="text-4xl md:text-5xl font-extrabold text-white drop-shadow-lg text-center tracking-tight">
          Event Plan Details
        </h1>
      </div>
      <div className="w-full flex justify-center items-center pb-2 bg-dark">
        <h3 className="text-xl md:text-2xl font-semibold text-[#ffffff] uppercase tracking-wider">Panel Discussion</h3>
      </div>
            {/* Panel Moderator: Ghassen Zaouali */}
            <section className="bg-dark flex justify-center items-center py-20 px-4 md:px-6 relative overflow-hidden mb-12">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-8 md:gap-16 items-center">
          {/* Description on the left */}
          <div className="space-y-4 md:space-y-6 text-white order-2 md:order-1">
            <h2 className="text-3xl md:text-4xl font-bold text-[#ffffff]">
              Panel Moderator: Ghassen Zaouali
            </h2>
            <p className="text-base md:text-lg font-medium whitespace-pre-line">
              IEEE ISSATM SB Mentor,
              Former IEEE ISSATM SB VICE-CHAIR
              Bachelor's in Computer Systems Engineering, specialized in IoT & Embedded Systems
            </p>
          </div>
          {/* Image on the right */}
          <div className="flex justify-center order-1 md:order-2 mb-8 md:mb-0">
            <div className="relative w-full max-w-3xl h-[500px] rounded-3xl overflow-hidden shadow-2xl border-4 border-[#ffffff] bg-dark flex items-center justify-center">
              <Image
                src="/images/mod.jpg"
                alt="Panel Moderator Ghassen Zaouali"
                width={1200}
                height={500}
                className="object-contain w-full h-full"
                priority
                style={{ background: 'black' }}
              />
            </div>
          </div>
        </div>
      </section>
       {/* Panelist: Bothayna Aloulou */}
       <section className="bg-dark flex justify-center items-center py-20 px-4 md:px-6 relative overflow-hidden mb-12">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-8 md:gap-16 items-center">
          {/* Image on the left */}
          <div className="flex justify-center order-1 md:order-1 mb-8 md:mb-0">
            <div className="relative w-full max-w-3xl h-[500px] rounded-3xl overflow-hidden shadow-2xl border-4 border-white/40 bg-dark flex items-center justify-center">
              <Image
                src="/images/both.jpg"
                alt="Panelist Bothayna Aloulou"
                width={1200}
                height={500}
                className="object-contain w-full h-full"
                priority
                style={{ background: 'black' }}
              />
            </div>
          </div>
          {/* Description on the right */}
          <div className="space-y-4 md:space-y-6 text-white order-2 md:order-2">
            <h2 className="text-3xl md:text-4xl font-bold text-white">
              Panelist: Bothayna Aloulou
            </h2>
            <p className="text-base md:text-lg font-medium">
              Bothayna Aloulou, a 28-year-old Tunisian cinematographer. My journey took an unexpected turn from failing engineering to pursuing my passion for film: I directed "The Curse," a short film that won Best Film at Cinepromess JCC 2024. My path was filled with bumps, and I'm here, enjoying the process of experimenting towards the goal of becoming a film director and cinematographer.
            </p>
          </div>
        </div>
      </section>
      {/* Panelist: Moez Bouziri */}
      <section className="bg-dark flex justify-center items-center py-20 px-4 md:px-6 relative overflow-hidden mb-12">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-8 md:gap-16 items-center">
          {/* Description on the left */}
          <div className="space-y-4 md:space-y-6 text-white order-2 md:order-1">
            <h2 className="text-3xl md:text-4xl font-bold text-white">
              Panelist: Moez Bouziri
            </h2>
            <p className="text-base md:text-lg font-medium">
              Passionate Assistant Director since 2017, with over 20 projects in Tunisian cinema and television
            </p>
          </div>
          {/* Image on the right */}
          <div className="flex justify-center order-1 md:order-2 mb-8 md:mb-0">
            <div className="relative w-full max-w-3xl h-[500px] rounded-3xl overflow-hidden shadow-2xl border-4 border-white/40 bg-dark flex items-center justify-center">
              <Image
                src="/images/mpez.jpg"
                alt="Panelist Moez Bouziri"
                width={1200}
                height={500}
                className="object-contain w-full h-full"
                priority
                style={{ background: 'black' }}
              />
            </div>
          </div>
        </div>
      </section>
      {/* Panelist: Mortadha Kneni */}
      <section className="bg-dark flex justify-center items-center py-20 px-4 md:px-6 relative overflow-hidden mb-12">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-8 md:gap-16 items-center">
          {/* Image on the left */}
          <div className="flex justify-center order-1 md:order-1 mb-8 md:mb-0">
            <div className="relative w-full max-w-3xl h-[500px] rounded-3xl overflow-hidden shadow-2xl border-4 border-white/40 bg-dark flex items-center justify-center">
              <Image
                src="/images/mort.jpg"
                alt="Panelist Mortadha Kneni"
                width={1200}
                height={500}
                className="object-contain w-full h-full"
                priority
                style={{ background: 'black' }}
              />
            </div>
          </div>
          {/* Description on the right */}
          <div className="space-y-4 md:space-y-6 text-white order-2 md:order-2">
            <h2 className="text-3xl md:text-4xl font-bold text-white">
              Panelist: Mortadha Kneni
            </h2>
            <p className="text-base md:text-lg font-medium">
              At 25, this Tunisian filmmaker is still exploring and learning every day. He started his path at 17 with BBC Media Action, where he discovered his love for cinematography. Since then, he has studied the field and directed short films, documentaries, music videos, and commercials. His projects have received national and international awards. Today, he continues his journey with RAW Production, a company he founded to keep creating stories that reflect his vision and the world around him.
            </p>
          </div>
        </div>
      </section>
      <section className="bg-dark flex justify-center items-center py-20 px-4 md:px-6 relative overflow-hidden mb-12">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-8 md:gap-16 items-center">
          <div className="space-y-4 md:space-y-6 text-white order-2 md:order-1">
            <h2 className="text-3xl md:text-4xl font-bold text-white">
               Panelist: Amir Sellimi
            </h2>
            <p className="text-base md:text-lg font-medium">
              Amir Sellimi’s journey in cinema began with a deep love for storytelling through images. Choosing to stand behind the camera, he transforms every frame into a painting and every light source into emotion. As a cinematographer and director of photography, Amir crafts visuals that speak before a single word is said—capturing honest moments, embracing natural light, and highlighting the subtle details that shape an entire atmosphere. For Amir, cinema is more than a profession; it’s a language—one that expresses, evokes, and leaves something meaningful behind.
            </p>
          </div>
          <div className="flex justify-center order-1 md:order-2 mb-8 md:mb-0">
            <div className="relative w-full max-w-3xl h-[500px] rounded-3xl overflow-hidden shadow-2xl border-4 border-white/40 bg-dark flex items-center justify-center">
              <Image
                src="/images/panel.jpg"
                alt="Panelist Amir Sellimi"
                width={1200}
                height={500}
                className="object-contain w-full h-full"
                priority
                style={{ background: 'black' }}
              />
            </div>
          </div>
        </div>
      </section>
      {/* Workshop Section: Amel Kadri */}
      <div className="w-full flex justify-center items-center pb-2 bg-dark">
        <h3 className="text-xl md:text-2xl font-semibold text-[#ffffff] uppercase tracking-wider">Workshop</h3>
      </div>
      <section className="bg-dark flex justify-center items-center py-20 px-4 md:px-6 relative overflow-hidden mb-12">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-8 md:gap-16 items-center">
          {/* Image on the left */}
          <div className="flex justify-center order-1 md:order-1 mb-8 md:mb-0">
            <div className="relative w-full max-w-3xl h-[500px] rounded-3xl overflow-hidden shadow-2xl border-4 border-white/40 bg-dark flex items-center justify-center">
              <Image
                src="/images/workshop.jpg"
                alt="Workshop by Amel Kadri"
                width={1200}
                height={500}
                className="object-contain w-full h-full"
                priority
                style={{ background: 'black' }}
              />
            </div>
          </div>
          
          {/* Paragraph on the right */}
          <div className="space-y-4 md:space-y-6 text-white order-2 md:order-2">
            <h2 className="text-3xl md:text-4xl font-bold text-white">
              Workshop: Amel Kadri
            </h2>
            <p className="text-base md:text-lg font-medium">
              Amel Kadri is a Tunisian creative video editor and VFX artist who turns raw footage into bold, emotionally powerful visuals. With both global and local experience, she focuses on purpose-driven storytelling. As founder of AMLVISUALS, Amel empowers emerging creatives—especially women in visual arts. At Bizerte Tcodi, she'll lead an inspiring keynote and a hands-on post-production workshop, sharing her expertise and passion for visual storytelling.
            </p>
          </div>
        </div>
      </section>
      {/* Finish message */}
      <div className="w-full flex justify-center items-center pb-12 bg-dark">
        <div
          style={{
            background: "linear-gradient(90deg, #ffffff 30%, #e5e5e5 60%, #ffffff 100%)",
            color: "#000000",
            fontWeight: 700,
            fontSize: "1.3rem",
            borderRadius: "1.5rem",
            boxShadow: "0 2px 16px rgba(255,255,255,0.35)",
            padding: "1rem 2.5rem",
            margin: "0.5rem auto",
            letterSpacing: "1.5px",
            textShadow: "0 1px 4px rgba(255,255,255,0.6)",
            border: "2px solid #ffffff",
            animation: "fadeInUp 1s cubic-bezier(.23,1.01,.32,1) both"
          }}
        >
          With <span style={{color:'#000000'}}>creativity</span>, we await you all to attend!
        </div>
      </div>
     

    </>
  );
} 