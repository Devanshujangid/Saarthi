

// code copied from perplexity for this file signinform.jsx

import React, { useState } from "react";

export default function SignInForm({ closeModal }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!email || !password) {
      setError("Please fill in both fields.");
      return;
    }
    setError("");
    closeModal();
  };

  return (
    <div className="modal-content bg-white p-8 rounded-lg shadow-xl max-w-sm w-full z-50">
      <h2 className="text-2xl font-semibold mb-6 text-center text-green-800">Sign In</h2>
      {error && <p className="text-red-600 text-sm mb-4 text-center">{error}</p>}
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
          <input
            id="email"
            type="email"
            placeholder="Enter your email"
            className="w-full px-4 py-2 mt-1 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 transition duration-200"
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
            className="w-full px-4 py-2 mt-1 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 transition duration-200"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <div className="flex justify-between items-center">
          <button
            type="submit"
            className="px-6 py-2 bg-green-700 text-white rounded-full hover:bg-green-800 transition shadow-md"
          >
            Sign In
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
    </div>
  );
}
