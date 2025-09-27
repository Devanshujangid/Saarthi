
// code copied from perplexity
// reusable modal component with backdrop blur and opacity
import React from "react";

export default function Modal({ children, onClose }) {
  return (
    <div className="modal-overlay fixed inset-0 z-40 flex items-center justify-center">
      {/* Background overlay with blur and opacity */}
      <div
        className="absolute inset-0 bg-black bg-opacity-60 backdrop-blur-md"
        onClick={onClose} // Close modal if clicked outside form
      />
      {/* Content container */}
      <div className="relative z-50">
        {children}
      </div>
    </div>
  );
}
