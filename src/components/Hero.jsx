
// this section contains the banner image and the refreshable quotes 
import React, { useEffect, useState } from "react";
import shivanksirbanner from "../assets/Cam_ban_1_new.jpg";

export default function Hero() {
  const bgImages = [shivanksirbanner];

  const quotes = [
    "Small steps every day add up to big changes.",
    "You are more resilient than you think.",
    "Talking helps. Reach out — you don’t have to do it alone.",
  ];

  const [bg, setBg] = useState(bgImages[0]);
  const [quote, setQuote] = useState(quotes[0]);

  // pick a random background + quote on mount
  useEffect(() => {
    const i = Math.floor(Math.random() * bgImages.length);
    const j = Math.floor(Math.random() * quotes.length);
    setBg(bgImages[i]);
    setQuote(quotes[j]);
  }, []);

  return (
    <header
      className="relative w-full min-h-[60vh] sm:min-h-[70vh] flex items-center"
      aria-label="Hero section with rotating background and quote"
    >
      {/* Background image */}
      <div
        className="absolute inset-0 bg-cover bg-center filter brightness-90"
        style={{ backgroundImage: `url(${bg})` }}
        aria-hidden="true"
      />
      <img src={bg} alt="" className="sr-only" />

      {/* Overlay for better text readability */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/30" aria-hidden="true" />

      <div className="relative z-10 max-w-full mx-auto mt-10 h-full px-4 sm:px-6">
        <div className="mt-8 sm:mt-10 bg-white/10 backdrop-blur-md rounded-xl p-4 sm:p-6 md:p-10 w-full max-w-3xl shadow-xl border border-green-100/20">
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold text-white leading-tight text-center sm:text-left">
            MannSaarthi — Mind's Charioteer towards Clarity
          </h1>

          <p className="mt-3 text-base sm:text-lg md:text-xl lg:text-2xl text-gray-100/90 text-center sm:text-left">
            {quote}
          </p>

          <div className="mt-6 flex flex-col sm:flex-row gap-3">
            <a
              className="w-full sm:w-auto text-center px-4 py-2 rounded-lg bg-green-700 text-white font-semibold shadow hover:bg-green-800 transition"
              href="#resources"
            >
              Explore resources
            </a>
            <a
              className="w-full sm:w-auto text-center px-4 py-2 rounded-lg border border-green-200 text-green-50 hover:bg-green-800/30 hover:border-green-400 transition"
              href="#services"
            >
              Our services
            </a>
          </div>
        </div>

      </div>

      <div className="absolute -bottom-6 left-0 right-0 flex justify-center">
        <div className="w-16 h-1 bg-white/30 rounded-full" />
      </div>
    </header>

  );
}
