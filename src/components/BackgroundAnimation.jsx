import React from "react";

export default function CalmBackground() {
  return (
    <div className="fixed inset-0 -z-1">
      <div className="w-full h-full bg-gradient-to-r from-blue-200 via-purple-200 to-pink-200 
        bg-[length:200%_200%] animate-gradientFlow opacity-60">
      </div>
    </div>
  );
}
