import React from "react";

const Modal = ({ children, onClose }) => {
  return (
    <>
      <div
        className="fixed inset-0 bg-transparent z-40 "
        style={{
          backdropFilter: "blur(10px)",
        }}
      >
        {/* Modal container */}
        <div
          className="fixed inset-0 flex justify-center items-center z-50"
          onClick={onClose}
        >
          {/* Prevent modal content from closing when clicked */}
          
            {/* Close button */}
            <button
              onClick={onClose}
              className="absolute top-2 right-2 text-gray-600 hover:text-gray-900"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                className="w-6 h-6"
                viewBox="0 0 24 24"
              >
                <path d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>

            {/* Render children (e.g., SignInForm) */}
            {children}
          </div>
        </div>
    </>
  );
};

export default Modal;
