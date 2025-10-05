import React, { useEffect, useState } from "react";

import logo from "./assets/MannSaarthi_Logo.png";
import Chatbot from "./components/chatbot";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Resources from "./components/Resources";
import Charts from "./components/Charts";
import InfoTiles from "./components/InfoTiles";
import Footer from "./components/Footer";
import SoundPlayer from "./components/SoundPlayer";
import CalmBackground from "./components/BackgroundAnimation";
import QuoteSection from "./components/QuoteSection";
import PeerSupportStories from "./components/PeerSupportStories";
import CollegesTicker from "./components/CollegesTicker";
import SignInForm from "./components/SignInForm";
import Modal from "./components/Modal";

export default function App() {
  // --- Background images and quotes (rotates on page load) ---

  const HERO_HEIGHT = 0.7 * window.innerHeight - 35;
  const [showGlassOverlay, setShowGlassOverlay] = useState(false);
  const [openIndex, setOpenIndex] = useState(null);

  // line added by me for sign in page 
  const [modalOpen, setModalOpen] = useState(false);

  // added a handler to open the modal
  const openModal = () => setModalOpen(true);
  const closeModal = () => setModalOpen(false);
  useEffect(() => {
    const onScroll = () => setShowGlassOverlay(window.scrollY > HERO_HEIGHT);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // --- Sample psych-educational resources (with id + languages where relevant) ---


  // --- Sample survey data for charts ---

  // --- Interactive Info tiles data (full) ---

  // Tile open state for interactive reveal

  // -----------------------------
  // FILTER / SORT state and logic
  // -----------------------------


  // -----------------------------------------
  // per-resource action mode + streaming logic
  // -----------------------------------------


  // Escape to close player

  return (
    <div className="min-h-screen font-sans text-gray-800 bg-gray-50 overflow-x-hidden">
      <CalmBackground />
      {/* {showGlassOverlay && <div className="glass-overlay" />} */}
      {/*  */}
      <Navbar openModal={openModal} />

      {/* HERO */}
      <Hero />

      <main className="max-w-8xl mx-auto px-1 sm:px-6 -mt-6 pb-6">
        {/* RESOURCES GRID */}
        <Resources />

        <QuoteSection />

        <PeerSupportStories />

        <CollegesTicker />
        {/* CHARTS */}
        <Charts />

        {/* SERVICES / INFO TILES */}
        <InfoTiles />

        {/* FOOTER */}
        <Footer />

      </main>

      {modalOpen && (
        <Modal onClose={closeModal}>
          <SignInForm closeModal={closeModal} />
        </Modal>
      )}

      <Chatbot />

      <SoundPlayer />
    </div>
  );
}

