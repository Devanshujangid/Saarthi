import React from "react";

/**
 * Minimal friendly chatbot icon (SVG).
 * Transparent background. Designed for Tailwind usage / inline SVG.
 */
export default function ChatbotIcon({ className = "w-10 h-10", ariaHidden = false }) {
  return (
    <svg
      className={className}
      viewBox="0 0 64 64"
      fill="none"
      role="img"
      aria-hidden={ariaHidden}
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* gentle gradient */}
      <defs>
        <linearGradient id="g1" x1="0" x2="1" y1="0" y2="1">
          <stop offset="0%" stopColor="#005C00" />     {/* calming green */}
          <stop offset="100%" stopColor="#6FB7E6" />   {/* soft blue */}
        </linearGradient>
      </defs>

      {/* rounded speech bubble */}
      <path
        d="M10 16c0-7.18 5.82-13 13-13h18c7.18 0 13 5.82 13 13v10c0 7.18-5.82 13-13 13H30l-8 6v-6H23c-7.18 0-13-5.82-13-13V16z"
        fill="url(#g1)"
        opacity="0.98"
      />

      {/* subtle inner highlight */}
      <path
        d="M14 20c0-5.52 4.48-10 10-10h18c5.52 0 10 4.48 10 10v4c0 5.52-4.48 10-10 10H33.5L28 40v-6.5H24c-5.52 0-10-4.48-10-10v-0.5z"
        fill="white"
        opacity="0.06"
      />

      {/* eyes */}
      <circle cx="26" cy="26" r="3" fill="#044F4A" opacity="0.95" />
      <circle cx="38" cy="26" r="3" fill="#044F4A" opacity="0.95" />

      {/* smile (simple curve) */}
      <path
        d="M24 34c2.5 3 7.5 3 10 0"
        stroke="#044F4A" // smile green colour 
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
        opacity="0.95"
      />

      {/* small soft shadow for lift */}
      <ellipse cx="33" cy="46" rx="15" ry="3.2" fill="#000" opacity="0.06" />
    </svg>
  );
}
