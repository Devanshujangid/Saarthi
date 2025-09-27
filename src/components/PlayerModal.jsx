import React, { useState } from "react";

export default function PlayerModal({ resource, onClose }) {
  const [lang, setLang] = useState(resource.lang[0]);

  return (
    <div className="fixed inset-0 bg-black/60 flex items-center justify-center z-50">
      <div className="bg-white rounded-xl shadow-xl max-w-lg w-full p-6 relative">
        <button
          onClick={onClose}
          className="absolute top-2 right-2 text-gray-500 hover:text-black"
        >
          ✕
        </button>

        <h2 className="text-xl font-bold mb-4">{resource.title}</h2>

        {/* Language switch */}
        {resource.lang.length > 1 && (
          <div className="mb-4 flex gap-2">
            {resource.lang.map((l) => (
              <button
                key={l}
                onClick={() => setLang(l)}
                className={`px-3 py-1 rounded-full text-sm font-semibold transition ${
                  lang === l
                    ? "bg-green-700 text-white"
                    : "bg-gray-100 text-gray-700 hover:bg-green-100"
                }`}
              >
                {l.toUpperCase()}
              </button>
            ))}
          </div>
        )}

        {/* Content preview */}
        {resource.type === "audio" && (
          <audio controls className="w-full mb-4">
            <source src={resource.src[lang]} type="audio/mp3" />
          </audio>
        )}

        {resource.type === "video" && (
          <video controls className="w-full mb-4 rounded">
            <source src={resource.src[lang]} type="video/mp4" />
          </video>
        )}

        {resource.type === "pdf" && (
          <iframe
            src={resource.src[lang]}
            title="PDF Viewer"
            className="w-full h-64 mb-4 border rounded"
          />
        )}

        {/* Download button */}
        <a
          href={resource.src[lang]}
          download
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block px-4 py-2 rounded bg-green-700 text-white font-semibold hover:bg-green-800 transition"
        >
          Download
        </a>
      </div>
    </div>
  );
}
