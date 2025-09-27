import React from "react";
// this file contains footer section....
export default function Footer() {
  return (
    <footer className="mt-12 bg-green-950 text-green-100 rounded-2xl p-8">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">
        <div>
          <h3 className="text-lg font-semibold">MannSaarthi</h3>
          <p className="mt-2 text-sm text-gray-300">Accessible mental health resources for college students.</p>
        </div>

        <div>
          <h4 className="font-semibold">Contact</h4>
          <p className="mt-2 text-sm text-gray-300">Email: mannsaarthi@gmail.com</p>
          <p className="mt-1 text-sm text-gray-300">Phone: +91 xxxxxxxx</p>
        </div>

        <div>
          <h4 className="font-semibold">Quick links</h4>
          <ul className="mt-2 text-sm text-gray-300 space-y-1">
            <li><a href="#resources" className="underline">Resources</a></li>
            <li><a href="#services" className="underline">Services</a></li>
            <li><a href="#" className="underline">Privacy</a></li>
          </ul>
        </div>
      </div>

      <div className="mt-6 text-xs text-gray-400 text-center">© {new Date().getFullYear()} MannSaarthi — All rights reserved</div>
    </footer>
  );
}
