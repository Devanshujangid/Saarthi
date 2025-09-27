
// this section contains the banner image and the refreshable quotes 
import React, { useEffect, useState } from "react";
import shivanksirbanner from "../assets/Cam_ban_1_new.jpg";
export default function Hero() {
  const bgImages = [
    // "https://cdn2.psychologytoday.com/assets/styles/crop_4_3_1140x437/public/2025-09/MirrorShutterstockAI_2676600841.jpg?itok=5prbERn3"
     
    shivanksirbanner
  ];

  const quotes = [
    // "It’s okay to not be okay — healing is not linear.",
    "Small steps every day add up to big changes.",
    "You are more resilient than you think.",
    "Talking helps. Reach out — you don’t have to do it alone.",
  ];


  const HERO_HEIGHT = 0.7 * window.innerHeight - 35;

  const [bg, setBg] = useState(bgImages[0]);
  const [quote, setQuote] = useState(quotes[0]);

  useEffect(() => {
    const i = Math.floor(Math.random() * bgImages.length);
    const j = Math.floor(Math.random() * quotes.length);
    setBg(bgImages[i]);
    setQuote(quotes[j]);
  }, []);

  useEffect(() => {
    const onScroll = () => {
      setShowGlassOverlay(window.scrollY > HERO_HEIGHT);
    };
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className="relative w-full" style={{ height: "70vh" }} aria-label="Hero section with rotating background and quote">
      <div className="absolute inset-0 bg-cover bg-center filter brightness-90" style={{ backgroundImage: `url(${bg})` }} />
      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/30" />

      <div className="relative z-10 max-w-[75rem] mx-auto h-full flex flex-col justify-center px-6">
        <div className=" mt-50 bg-white/10 backdrop-blur-md rounded-xl p-6 md:p-10 max-w-3xl shadow-xl border border-green-100/20">
          <h1 className="text-3xl md:text-4xl font-extrabold text-white leading-tight">MannSaarthi — Mind's Charioteer towards Clarity</h1>
          <p className="mt-4 text-lg text-gray-100/90">{quote}</p>
          <div className="mt-6 flex gap-3">
            <a className="inline-block px-4 py-2 rounded-lg bg-green-700 text-white font-semibold shadow hover:bg-green-800 transition" href="#resources">Explore resources</a>
            <a className="inline-block px-4 py-2 rounded-lg border border-green-200 text-green-50 hover:bg-green-800/30 hover:border-green-400 transition" href="#services">Our services</a>
          </div>
        </div>
      </div>

      <div className="absolute -bottom-6 left-0 right-0 flex justify-center">
        <div className="w-16 h-1 bg-white/30 rounded-full" />
      </div>
    </header>
  );
}
