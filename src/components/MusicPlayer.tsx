import { useState, useRef, useEffect } from 'react';
import { Volume2, VolumeX } from 'lucide-react';
import audioSrc from '../videoplayback.m4a';

export function MusicPlayer() {
  // Start paused to avoid autoplay and to prevent bundling the audio into JS
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.volume = 0.69;
    }
  }, []);

  // We don't auto-play on mount to avoid fetching and playing audio before user intent.
  // Volume is set above; playback will start only when the user toggles.

  const toggleMusic = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause();
        setIsPlaying(false);
      } else {
        const playPromise = audioRef.current.play();
        if (playPromise !== undefined) {
          playPromise
            .then(() => setIsPlaying(true))
            .catch(error => {
              console.log('Playback prevented:', error);
              setIsPlaying(false);
            });
        } else {
          // If play returned undefined, assume it started
          setIsPlaying(true);
        }
      }
    }
  };

  return (
    <div className="flex items-center">
      <button
        onClick={toggleMusic}
        className="p-2 rounded-full bg-[#f5f5f0] dark:bg-[#1a1a1a] hover:bg-[#3B6991]/20 dark:hover:bg-[#d4af37]/20 transition-colors border border-[#3B6991]/20 dark:border-[#d4af37]/20"
        aria-label="Toggle background music"
      >
        {isPlaying ? (
          <Volume2 className="w-4 h-4 text-[#3B6991] dark:text-[#d4af37] opacity-70" />
        ) : (
          <VolumeX className="w-4 h-4 text-[#3B6991] dark:text-[#d4af37] opacity-70" />
        )}
      </button>
      <audio ref={audioRef} loop preload="none">
        <source src={audioSrc as unknown as string} type="audio/mp4" />
        Your browser does not support the audio element.
      </audio>
    </div>
  );
}