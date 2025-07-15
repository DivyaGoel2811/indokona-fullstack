import React from "react";
import { Link } from "react-router-dom";
import logo from "../assets/logo.png"; // Make sure you have this logo file

const Header = () => {
  return (
    <header className="fixed top-0 left-0 w-full bg-white shadow z-50">
      <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center gap-2">
          <img src={logo} alt="Indokona Logo" className="h-10 w-10 object-contain" />
          <h1 className="text-xl font-bold text-indigo-700">Indokona</h1>
        </div>

        {/* Navigation Buttons */}
        <div className="flex items-center gap-4">
          <Link
            to="/login"
            className="bg-indigo-600 text-white px-4 py-2 rounded hover:bg-indigo-700 transition"
          >
            🔐 लॉगिन करें
          </Link>
          <a
            href="https://wa.me/918800905879"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600 transition"
          >
            📲 WhatsApp
          </a>
        </div>
      </div>
    </header>
  );
};

export default Header;
