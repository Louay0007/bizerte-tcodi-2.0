"use client";

import ActionButton from "../ActionButton";
import Link from "next/link";
import { useRef, useState } from "react";


export default function AboutSection() {
  return (
    <section className="bg-dark flex justify-center items-center py-12 px-4 md:px-6 relative overflow-hidden animate-fade-in-up">
      
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-8 md:gap-16 items-center">
        <div className="space-y-4 md:space-y-6 text-white order-2 md:order-1 animate-fade-in delay-100">
          <h2 className="text-3xl md:text-4xl font-bold text-[#ffffff]">Bizerte Tcodi: About</h2>

          <p className="text-base md:text-lg font-medium">
            Bizerte Tcodi is a student-run problem-solving hackathon that brings together creative minds from across the Bizerte region. Participants are invited to form teams and build innovative tech solutions that tackle real-world challenges.
          </p>

          <p className="text-base md:text-lg font-medium">
            The event features entries from many student branches across the region, fostering collaboration and friendly competition. Through the art of hacking, Bizerte Tcodi aims to promote, market, and introduce each team's vision to a wider audience, celebrating diversity and technical excellence.
          </p>

          <p className="text-base md:text-lg font-medium">
            By sharing authentic ideas and prototypes, Bizerte Tcodi empowers participants to become ambassadors for their homeland, strengthening connections and understanding between future engineers. Join us in discovering the vibrant stories of Bizerte through code.
          </p>
          <div className="pt-2">
            <Link href="/about-us">
              <ActionButton text="Learn More" className="bg-[#ffffff] hover:bg-neutral-300 text-black transform transition-transform duration-300 hover:scale-105 active:scale-95" />
            </Link>
          </div>
        </div>
        <div className="flex justify-center order-1 md:order-2 mb-8 md:mb-0 transform transition-all duration-500 animate-fade-in-scale delay-200">
          {/* Custom Video Player */}
          <CustomVideoPlayer src="/videos/aboutw.mp4" />
        </div>
      </div>
    </section>
  );
}

function CustomVideoPlayer({ src }: { src: string }) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [playing, setPlaying] = useState(false);
  const [volume, setVolume] = useState(1);
  const [progress, setProgress] = useState(0);
  const [duration, setDuration] = useState(0);

  const togglePlay = () => {
    const video = videoRef.current;
    if (!video) return;
    if (video.paused) {
      video.play();
      setPlaying(true);
    } else {
      video.pause();
      setPlaying(false);
    }
  };

  const handleVolume = (e: React.ChangeEvent<HTMLInputElement>) => {
    const video = videoRef.current;
    const vol = Number(e.target.value);
    setVolume(vol);
    if (video) video.volume = vol;
  };

  const handleTimeUpdate = () => {
    const video = videoRef.current;
    if (video) setProgress(video.currentTime);
  };

  const handleLoadedMetadata = () => {
    const video = videoRef.current;
    if (video) setDuration(video.duration);
  };

  const handleSeek = (e: React.ChangeEvent<HTMLInputElement>) => {
    const video = videoRef.current;
    const time = Number(e.target.value);
    if (video) video.currentTime = time;
    setProgress(time);
  };

  return (
    <div className="w-full max-w-md bg-dark rounded-lg shadow-lg p-2 flex flex-col items-center border-4 border-white/40 transform transition-transform duration-300 hover:scale-102">
      <video
        ref={videoRef}
        src={src}
        className="w-full rounded-lg"
        onTimeUpdate={handleTimeUpdate}
        onLoadedMetadata={handleLoadedMetadata}
        onClick={togglePlay}
        style={{ cursor: "pointer" }}
      />
      <div className="flex items-center w-full mt-2 gap-2">
        <button
          onClick={togglePlay}
          className="text-black bg-[#ffffff] hover:bg-neutral-300 rounded-full p-2 focus:outline-none transform transition-transform duration-200 hover:scale-110"
          aria-label={playing ? "Pause" : "Play"}
        >
          {playing ? (
            <svg width="20" height="20" fill="currentColor" viewBox="0 0 20 20"><rect x="4" y="4" width="4" height="12"/><rect x="12" y="4" width="4" height="12"/></svg>
          ) : (
            <svg width="20" height="20" fill="currentColor" viewBox="0 0 20 20"><polygon points="5,4 15,10 5,16"/></svg>
          )}
        </button>
        <input
          type="range"
          min={0}
          max={duration}
          value={progress}
          onChange={handleSeek}
          className="flex-1 accent-[#ffffff]"
        />
        <input
          type="range"
          min={0}
          max={1}
          step={0.01}
          value={volume}
          onChange={handleVolume}
          className="w-20 accent-[#ffffff]"
          aria-label="Volume"
        />
      </div>
    </div>
  );
}
