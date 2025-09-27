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
    <section className="relative py-20 bg-gray-50">
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
        Peer Support Stories
      </h2>

      <div
        className="flex items-center justify-center gap-4 max-w-3xl mx-auto px-4"
        onMouseEnter={stopAutoPlay}
        onMouseLeave={startAutoPlay}
      >
        <button
          onClick={prevStory}
          className="p-3 rounded-full bg-white shadow hover:bg-gray-100"
        >
          <ChevronLeft className="w-6 h-6 text-gray-600" />
        </button>

        <div className="flex-1 relative bg-white/90 backdrop-blur-md shadow-xl rounded-2xl p-8 text-center text-lg text-gray-700 font-medium min-h-[160px] flex flex-col justify-center transition-all duration-500 ease-in-out">
          <div className="flex-1 flex items-center justify-center">
            {peerStories[index].text}
          </div>

          {/* Fancy Gradient Progress Bar */}
          <div className="absolute bottom-0 left-0 w-full h-2 rounded-b-2xl overflow-hidden mt-2">
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

        <button
          onClick={nextStory}
          className="p-3 rounded-full bg-white shadow hover:bg-gray-100"
        >
          <ChevronRight className="w-6 h-6 text-gray-600" />
        </button>
      </div>

      {/* Progress Dots */}
      <div className="flex justify-center gap-2 mt-6">
        {peerStories.map((_, i) => (
          <button
            key={i}
            onClick={() => setIndex(i)}
            className={`!w-1 !h-1 !rounded-full transition ${
              index === i ? "bg-gray-800 scale-110" : "bg-gray-400 opacity-50"
            }`}
          />
        ))}
      </div>

      <p className="mt-6 text-center text-sm text-gray-500">
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
