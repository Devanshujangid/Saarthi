import React, { useState } from "react";

export default function SignInForm({ closeModal }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!email || !password) {
      setError("Please fill in both fields.");
      return;
    }
    setError("");
    setIsSubmitting(true);
    // Simulate a network request
    setTimeout(() => {
      setIsSubmitting(false);
      closeModal();
    }, 1500);
  };

  return (
      <div
        className="modal-content bg-white p-8 rounded-2xl shadow-xl max-w-lg w-full relative"
        style={{
          backdropFilter: "blur(10px)", // Apply the blur effect
          backgroundSize: "cover", // Ensure the image covers the modal background
          backgroundPosition: "center center", // Center the image
        }}
      >
        <h2 className="text-3xl font-semibold mb-6 text-center text-green-800">Sign In</h2>
        {error && <p className="text-red-600 text-sm mb-4 text-center">{error}</p>}
        <form onSubmit={handleSubmit}>
          <div className="mb-6">
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
            <input
              id="email"
              type="email"
              placeholder="Enter your email"
              className="w-full px-4 py-3 mt-1 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 transition duration-300"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="mb-6">
            <label htmlFor="password" className="block text-sm font-medium text-gray-700">Password</label>
            <input
              id="password"
              type="password"
              placeholder="Enter your password"
              className="w-full px-4 py-3 mt-1 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 transition duration-300"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <div className="flex justify-between items-center mb-4">
            <button
              type="submit"
              className="px-6 py-3 bg-green-700 text-white rounded-full hover:bg-green-800 transition shadow-md flex items-center"
              disabled={isSubmitting}
            >
              {isSubmitting ? (
                <svg
                  className="w-5 h-5 animate-spin"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                >
                  <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" className="opacity-25" />
                  <path
                    fill="none"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="4"
                    d="M4 12a8 8 0 1 0 8-8"
                  />
                </svg>
              ) : (
                "Sign In"
              )}
            </button>
            <button
              type="button"
              onClick={closeModal}
              className="text-gray-500 hover:text-gray-700 transition"
            >
              Close
            </button>
          </div>
        </form>
        <div className="text-center text-sm text-gray-600 mt-4">
          <p>
            Don't have an account?{" "}
            <span
              onClick={() => alert("Redirect to sign up")}
              className="text-green-700 hover:text-green-800 cursor-pointer"
            >
              Sign Up
            </span>
          </p>
        </div>
      </div>
  );
}
