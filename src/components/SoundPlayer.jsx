import React, { useRef, useState } from "react";
import { Volume2, VolumeX } from "lucide-react"; // icons

export default function SoundPlayer() {
  const audioRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentSound, setCurrentSound] = useState("rain");

  // Sound files
  const sounds = {
    rain: "/sounds/rain.mp3",
    forest: "/sounds/forest.mp3",
    ocean: "/sounds/ocean.mp3",
  };

  // Toggle sound play/pause
  const toggleSound = () => {
    if (!audioRef.current) return;
    if (isPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play();
    }
    setIsPlaying(!isPlaying);
  };

  // Change sound
  const changeSound = (sound) => {
    if (sound === currentSound) return;
    setCurrentSound(sound);
    if (audioRef.current) {
      audioRef.current.pause();
      audioRef.current.load();
      audioRef.current.play();
    }
    setIsPlaying(true); // Auto-play on change
  };

  return (
    <div className="fixed bottom-25 right-6 z-5">
      {/* Main button with hover effect to show options */}
      <div className="group relative">
        {/* Main Play/Pause Button */}
        <button
          onClick={toggleSound}
          className="bg-white !p-3 !rounded-full shadow-lg hover:bg-gray-100 transition"
        >
          {isPlaying ? <Volume2 size={22} /> : <VolumeX size={22} />}
        </button>

        {/* Sound Options Dropdown on Hover */}
        <div className="absolute bottom-10 right-0 hidden group-hover:block bg-white rounded-lg shadow-lg w-36 mt-2">
          {Object.keys(sounds).map((sound) => (
            <button
              key={sound}
              onClick={() => changeSound(sound)}
              className={`block w-full text-left px-4 py-2 rounded hover:bg-gray-100 transition ${
                currentSound === sound ? "bg-gray-200 font-medium" : ""
              }`}
            >
              {sound.charAt(0).toUpperCase() + sound.slice(1)}
            </button>
          ))}
        </div>
      </div>

      {/* Hidden Audio Element */}
      <audio ref={audioRef} loop>
        <source src={sounds[currentSound]} type="audio/mpeg" />
      </audio>
    </div>
  );
}
