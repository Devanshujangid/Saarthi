import React, { useState } from "react";
import ChatbotIcon from "./chatboticon";

export default function Chatbot() {
  const [open, setOpen] = useState(false);

  return (
    <>
      {/* Floating button */}
      <button
        aria-label={open ? "Close chat" : "Open chat"}
        onClick={() => setOpen((s) => !s)}
        className={`fixed right-5 bottom-5 z-50 flex items-center justify-center rounded-full shadow-lg
                    transition-transform transform hover:scale-105 focus:outline-none
                    ${open ? "ring-4 ring-green-200" : "animate-bounce-slow"}`}
        style={{
          width: 64,
          height: 64,
          background: "transparent",
        }}
      >
        {/* circular glass background */}
        <div className="rounded-full p-2"
             style={{
               background: "linear-gradient(180deg, rgba(255,255,255,0.06), rgba(255,255,255,0.02))",
               boxShadow: "0 6px 18px rgba(17,24,39,0.12)",
             }}>
          <ChatbotIcon className="w-12 h-12" ariaHidden={false} />
        </div>
      </button>

      {/* Tiny chat panel (replace with real chat integration) */}
      {open && (
        <div
          className="fixed right-5 bottom-20 z-50 w-80 max-w-xs bg-white rounded-2xl shadow-2xl overflow-hidden"
          role="dialog"
          aria-label="Chat with ManasPath support"
        >
          <div className="bg-gradient-to-r from-green-200 to-blue-100 px-4 py-3 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <ChatbotIcon className="w-8 h-8" ariaHidden={true} />
              <div>
                <div className="text-sm font-semibold text-gray-800">Saarthi</div>
                <div className="text-xs text-gray-600">How can I help?</div>
              </div>
            </div>
            <button onClick={() => setOpen(false)} className="text-gray-700 text-sm px-2 py-1 rounded hover:bg-white/30">✕</button>
          </div>

          <div className="p-3 text-sm text-gray-700">
            <div className="text-xs text-gray-500 mb-2">Welcome to MannSaarthi 🌱</div>
            <div className="bg-green-50 rounded px-3 py-2 text-sm mb-2">I’m Saarthi, your mental wellness companion.</div>
            <input
              type="text"
              placeholder="Type a message..."
              className="w-full px-3 py-2 rounded border text-sm focus:outline-none"
            />
            <div className="mt-3 text-xs text-gray-500">“Just say whatever’s on your mind — whether it’s a question, some stress, or you just feel like talking… I’m right here to listen 🙂”</div>
          </div>
        </div>
      )}

      {/* small custom animation style (Tailwind doesn't include by default) */}
      <style>{`
        @keyframes bounce-slow {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-6px); }
        }
        .animate-bounce-slow { animation: bounce-slow 2.8s infinite; }
      `}</style>
    </>
  );
}
