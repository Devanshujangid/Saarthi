import React, { useState, useEffect } from "react";
// import SignInForm from "./SignInForm";

export default function Navbar({}) {
  const HERO_HEIGHT = 0.7 * window.innerHeight - 35;
  const [showGlassOverlay, setShowGlassOverlay] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false); // State for modal visibility

  // Open the modal
  const openModal = () => setIsModalOpen(true);

  // Close the modal
  const closeModal = () => setIsModalOpen(false);

  // Handle scroll to show overlay
  useEffect(() => {
    const onScroll = () => setShowGlassOverlay(window.scrollY > HERO_HEIGHT);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      {showGlassOverlay && <div className="glass-overlay" />}
      <div className="fixed top-0 left-4 z-50 flex items-center gap-0">
        <span
          className={`text-2xl font-bold px-4 py-5 transition-colors duration-300 ${showGlassOverlay ? "text-green-700" : "text-white"}`}
        >
          MANNSAARTHI
        </span>
      </div>

      {/* Centered navbar */}
      <nav className="fixed top-4 left-1/2 -translate-x-1/2 bg-green-100/50 backdrop-blur-sm rounded-full shadow-md px-6 py-2 flex items-center gap-6 z-50 text-forest-800">
        <a
          href="#home"
          className={`flex items-center gap-1 font-semibold transition ${showGlassOverlay ? "text-green-700" : "text-white"} hover:text-white`}
        >
          <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
            <path d="M3 12l9-9 9 9v9a1 1 0 0 1-1 1h-5v-6H9v6H4a1 1 0 0 1-1-1v-9z" />
          </svg>
          Home
        </a>
        <a
          href="#resources"
          className={`flex items-center gap-1 font-semibold transition ${showGlassOverlay ? "text-green-700" : "text-white"} hover:text-white`}
        >
          <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
            <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20" />
            <path d="M4 4h16v13H4z" />
          </svg>
          Resources
        </a>
        <a
          href="#services"
          className={`flex items-center gap-1 font-semibold transition ${showGlassOverlay ? "text-green-700" : "text-white"} hover:text-white`}
        >
          <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
            <path d="M21 10a9 9 0 1 1-18 0 9 9 0 0 1 18 0z" />
            <path d="M21 10l-6 6-3-3-6 6" />
          </svg>
          Services
        </a>
        <a
          href="#contact"
          className={`flex items-center gap-1 font-semibold transition ${showGlassOverlay ? "text-green-700" : "text-white"} hover:text-white`}
        >
          <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
            <circle cx="12" cy="12" r="3" />
            <path d="M19.4 15a7 7 0 0 0-14.8 0" />
          </svg>
          Contact Us
        </a>

        <a
          href="#mann-ki-baat"
          className="ml-3 px-4 py-1.5 rounded-full bg-green-700 text-white text-sm font-semibold shadow hover:bg-green-800 transition"
        >
          Mann Ki Baat
        </a>
      </nav>

      {/* Sign In Button */}
      <div className="fixed top-4 right-6 z-50">
        <button
          onClick={openModal}
          className="!px-4 !py-1.5 !rounded-full border !border-green-600 !text-green-600 font-semibold !bg-white hover:bg-green-50 transition shadow-sm"
        >
          Sign In
        </button>
      </div>

      {/* Render SignInForm Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 bg-white blur-sm !bg-opacity-50 flex justify-center items-center">
          <SignInForm closeModal={closeModal} />
        </div>
      )}
    </>
  );
}
