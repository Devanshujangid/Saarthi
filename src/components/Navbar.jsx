import React, { useState, useEffect } from "react";
import SignInForm from "./SignInForm";
import Modal from "./Modal";

export default function Navbar() {
  const HERO_HEIGHT = 0.7 * window.innerHeight - 35;
  const [showGlassOverlay, setShowGlassOverlay] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setShowGlassOverlay(window.scrollY > HERO_HEIGHT);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const navLinkStyle = `flex items-center gap-2 px-4 py-2 font-semibold text-green-900 hover:bg-green-200 rounded`;

  return (
    <>
      {showGlassOverlay && <div className="glass-overlay" />}

      {/* Navbar container */}
      <div className="fixed top-0 left-0 w-full z-50 flex justify-between items-center px-7 py-3 [@media(min-width:813px)]:px-5 bg-transparent">

        {/* Logo */}
        <div>
          <span
            className={`text-2xl font-bold transition-colors duration-300 ${showGlassOverlay ? "text-green-700" : "text-white"}`}
          >
            MANNSAARTHI
          </span>
        </div>

        {/* Desktop Nav */}
        <div className="hidden navd-flex items-center gap-3 lg:gap-8 bg-green-100/50 px-3 lg:px-6 py-2 rounded-full shadow-md backdrop-blur-sm">
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
            className="ml-1 px-4 py-1.5 rounded-full bg-green-700 text-white text-sm font-semibold shadow hover:bg-green-800 transition"
          >
            Mann Ki Baat
          </a>
        </div>

        {/* Sign In Button (desktop) */}
        <div className="hidden navd-block">
          <button
            onClick={() => setIsModalOpen(true)}
            className="px-4 py-1 rounded-full border border-green-600 text-black font-semibold bg-white hover:bg-green-50 transition shadow-sm"
          >
            Sign In
          </button>
        </div>

        {/* Hamburger (mobile only) */}
        <div className="navd-hidden flex items-center">
          <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="text-white focus:outline-none">
            <svg className="w-7 h-7" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <path d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile menu (dropdown) */}
      {isMenuOpen && (
        <div className="navd-hidden fixed top-16 left-4 right-4 z-40 bg-white rounded-xl shadow-lg px-4 py-4 text-green-900">
          <a href="#home" className={navLinkStyle}>Home</a>
          <a href="#resources" className={navLinkStyle}>Resources</a>
          <a href="#services" className={navLinkStyle}>Services</a>
          <a href="#contact" className={navLinkStyle}>Contact Us</a>
          <a
            href="#mann-ki-baat"
            className="block mt-2 px-4 py-2 text-center rounded-full bg-green-700 text-white font-semibold shadow hover:bg-green-800 transition"
          >
            Mann Ki Baat
          </a>
          <button
            onClick={() => setIsModalOpen(true)}
            className="mt-3 w-full text-center px-4 py-2  border-green-600 rounded-full bg-white text-black font-semibold hover:bg-green-100"
          >
            Sign In
          </button>
        </div>
      )}

      {/* Modal */}
      {isModalOpen && (
        <Modal onClose={() => setIsModalOpen(false)}>
          <SignInForm closeModal={() => setIsModalOpen(false)} />
        </Modal>
      )}
    </>
  );
}
