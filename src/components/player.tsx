"use client";

import { Loader, Pause, Play } from "lucide-react";
import React, { useRef, useState } from "react";

export default function Player({ url }: { url: string }) {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const audioPlayer = useRef<HTMLAudioElement | null>(null);

  const togglePlayer = () => {
    const prevValue = isPlaying;
    setIsPlaying(!prevValue);

    if (!prevValue) {
      setIsLoading(true);
      audioPlayer.current
        ?.play()
        .then(() => {
          setIsLoading(false);
        })
        .catch((error) => {
          console.error("Error playing audio:", error);
          setIsLoading(false);
        });
    } else {
      audioPlayer.current?.pause();
    }

    audioPlayer.current?.addEventListener("ended", () => {
      setIsPlaying(false);
    });
  };

  return (
    <button
      className="absolute bottom-0 right-0 z-20 mb-[8px] mr-1 md:mr-4 flex cursor-pointer items-center gap-1 rounded-full border border-green-600/60 bg-green-500/20 p-[1px] px-3 text-sm"
      onClick={togglePlayer}
    >
      <audio ref={audioPlayer} src={url} preload="metadata" />
      {isLoading ? (
        <Loader className="animate-spin" size={14} />
      ) : isPlaying ? (
        <div className="flex items-center gap-1">
          <Pause size={14} />
          pause
        </div>
      ) : (
        <div className="flex items-center gap-1">
          <Play size={14} />
          play
        </div>
      )}
    </button>
  );
}
