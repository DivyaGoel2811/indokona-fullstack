// src/components/Hero.jsx
import React from "react";
import { Link } from "react-router-dom";
import logo from "../assets/logo.png"; // Ensure this file exists in /src/assets/

const Hero = () => {
  return (
    <section className="bg-white py-8 text-center relative">
      <div className="flex flex-col items-center justify-center">
        {/* 🌟 Glowing Logo */}
        <div className="relative w-32 h-32 md:w-40 md:h-40 mb-4">
          <div className="absolute inset-0 rounded-full bg-indigo-500 opacity-30 blur-2xl animate-pulse"></div>
          <img
            src={logo}
            alt="Indokona Logo"
            className="relative z-10 w-full h-full object-contain rounded-full shadow-lg"
          />
        </div>

        <h1 className="text-2xl md:text-3xl font-bold text-gray-800 max-w-xl mx-auto">
          भारत की सबसे भरोसेमंद Fintech सेवा – Indokona Credit Bazar
        </h1>
        <p className="mt-3 text-lg text-gray-600 max-w-2xl mx-auto">
          बनाएं अपनी दुकान को डिजिटल मिनी बैंक और कमाएं ₹1000+ रोजाना!
        </p>

        <div className="mt-6 flex flex-col md:flex-row gap-4 justify-center">
          <a
            href="https://wa.me/918800905879"
            className="bg-green-600 hover:bg-green-700 text-white px-6 py-2 rounded shadow"
          >
            📲 WhatsApp से जुड़ें
          </a>
          <Link
            to="/login"
            className="bg-indigo-600 hover:bg-indigo-700 text-white px-6 py-2 rounded shadow"
          >
            🔐 Login
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Hero;
