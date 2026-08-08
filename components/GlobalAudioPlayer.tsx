"use client";
import { useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";
import { Volume2, VolumeX } from "lucide-react";

const audioFiles = [
  "/audio/d.mp3",
  "/audio/song2.mp3", // Add your new songs here
  // "/audio/song3.mp3",
];

const GlobalAudioPlayer = () => {
  const [playing, setPlaying] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const [mounted, setMounted] = useState(false);
  const [selectedSong, setSelectedSong] = useState(audioFiles[0]);

  useEffect(() => {
    // Pick a random song on mount
    setSelectedSong(audioFiles[Math.floor(Math.random() * audioFiles.length)]);
    setMounted(true);
  }, []);

  const handleToggle = () => {
    if (audioRef.current) {
      if (playing) {
        audioRef.current.pause();
        setPlaying(false);
      } else {
        audioRef.current.play();
        setPlaying(true);
      }
    }
  };

  if (!mounted) return null;

  return createPortal(
    <>
      <button
        onClick={handleToggle}
        style={{
          position: "fixed",
          bottom: 24,
          right: 24,
          zIndex: 100,
          background: "rgba(0,0,0,0.6)",
          borderRadius: "50%",
          padding: 12,
          border: "2px solid #ffffff",
          color: "#ffffff",
          boxShadow: "0 2px 8px #0008",
          cursor: "pointer",
        }}
        aria-label={playing ? "Pause music" : "Play music"}
      >
        {playing ? <Volume2 size={28} /> : <VolumeX size={28} />}
      </button>
      <audio
        ref={audioRef}
        src={selectedSong}
        hidden
      />
    </>,
    document.body
  );
};

export default GlobalAudioPlayer; 