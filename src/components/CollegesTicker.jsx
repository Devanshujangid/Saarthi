import React from "react";
import { colleges } from "../data/colleges";
import { motion } from "framer-motion";

export default function CollegesTicker() {
  return (
    <section className="relative py-16 bg-gradient-to-b from-gray-50 to-white">
      {/* Section Heading */}
      <h2 className="text-2xl md:text-3xl font-bold text-center mb-10 text-gray-800">
        Trusted & Supported Across Colleges
      </h2>

      {/* Marquee */}
      <div className="overflow-hidden relative max-w-6xl mx-auto">
        <motion.div
          className="flex gap-8 text-gray-800 font-semibold text-lg md:text-xl"
          initial={{ x: "100%" }}
          animate={{ x: "-100%" }}
          transition={{ repeat: Infinity, duration: 40, ease: "linear" }}
        >
          {colleges.concat(colleges).map((college, idx) => (
            <div
              key={idx}
              className="px-6 py-4 bg-white/90 backdrop-blur-md shadow-lg rounded-2xl border border-gray-200 text-center whitespace-nowrap hover:shadow-2xl hover:scale-105 transition-all duration-300"
            >
              {college}
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
