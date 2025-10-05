import React, { useState, useEffect, useRef } from "react";
import { peerStories } from "../data/stories";
import { ChevronLeft, ChevronRight } from "lucide-react";

export default function PeerSupportStories() {
  const [index, setIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const intervalRef = useRef(null);

  const INTERVAL = 5000; // 5 seconds per slide

  const prevStory = () =>
    setIndex((i) => (i === 0 ? peerStories.length - 1 : i - 1));
  const nextStory = () =>
    setIndex((i) => (i === peerStories.length - 1 ? 0 : i + 1));

  const startAutoPlay = () => {
    stopAutoPlay();
    intervalRef.current = setInterval(() => {
      nextStory();
    }, INTERVAL);
    setIsPaused(false);
  };

  const stopAutoPlay = () => {
    if (intervalRef.current) clearInterval(intervalRef.current);
    setIsPaused(true);
  };

  useEffect(() => {
    // Reset animation
    const bar = document.getElementById("progress-bar-fill");
    if (bar) {
      bar.style.animation = "none";
      bar.offsetHeight; // force reflow
      bar.style.animation = `fillBar ${INTERVAL}ms linear forwards`;
      if (isPaused) bar.style.animationPlayState = "paused";
    }
  }, [index, isPaused]);

  useEffect(() => {
    startAutoPlay();
    return () => stopAutoPlay();
  }, []);

  return (
    <section className="relative py-16 sm:py-20 bg-gray-50">
      <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center mb-10 sm:mb-12">
        Peer Support Stories
      </h2>

      <div
        className="flex flex-col items-center justify-center gap-4 max-w-3xl mx-auto px-4"
        onMouseEnter={stopAutoPlay}
        onMouseLeave={startAutoPlay}
      >
        <div className="w-full relative bg-white/90 backdrop-blur-md shadow-xl rounded-2xl px-4 py-6 sm:p-8 text-center text-base sm:text-lg text-gray-700 font-medium min-h-[140px] sm:min-h-[160px] flex flex-col justify-center transition-all duration-500 ease-in-out">
          <div className="flex-1 flex items-center justify-center leading-relaxed">
            {peerStories[index].text}
          </div>

          {/* Gradient Progress Bar */}
          <div className="absolute bottom-0 left-0 w-full h-2 rounded-b-2xl overflow-hidden">
            <div
              id="progress-bar-fill"
              className="h-2 rounded-b-2xl"
              style={{
                background: "linear-gradient(90deg, #6ee7b7, #3b82f6, #a78bfa)",
                boxShadow: "0 0 8px rgba(99, 102, 241, 0.6)",
                animation: `fillBar ${INTERVAL}ms linear forwards`,
                animationPlayState: isPaused ? "paused" : "running",
              }}
            />
          </div>
        </div>

        {/* Swipe Buttons */}
        <div className="flex gap-4 mt-4">
          <button
            onClick={prevStory}
            className="p-2 sm:p-3 rounded-full bg-white shadow hover:bg-gray-100"
            aria-label="Previous story"
          >
            <ChevronLeft className="w-5 h-5 sm:w-6 sm:h-6 text-gray-600" />
          </button>

          <button
            onClick={nextStory}
            className="p-2 sm:p-3 rounded-full bg-white shadow hover:bg-gray-100"
            aria-label="Next story"
          >
            <ChevronRight className="w-5 h-5 sm:w-6 sm:h-6 text-gray-600" />
          </button>
        </div>
      </div>


      {/* Progress Dots */}
      <div className="flex justify-center gap-2 mt-5 sm:mt-6">
        {peerStories.map((_, i) => (
          <button
            key={i}
            onClick={() => setIndex(i)}
            className={`w-2 h-2 rounded-full transition duration-300 ${index === i ? "bg-gray-800 scale-110" : "bg-gray-400 opacity-50"
              }`}
          />
        ))}
      </div>

      <p className="mt-5 sm:mt-6 text-center text-xs sm:text-sm text-gray-500">
        *Anonymous recovery wins shared with hope*
      </p>

      <style>{`
    @keyframes fillBar {
      0% { width: 0%; }
      100% { width: 100%; }
    }
  `}</style>
    </section>

  );
}
