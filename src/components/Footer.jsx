// src/components/Footer.jsx
import React from "react";

const Footer = () => {
  return (
    <footer className="bg-indigo-800 text-white text-center py-6">
      <p className="text-sm">
        © {new Date().getFullYear()} Indokona Credit Bazar Pvt. Ltd. All Rights Reserved.
      </p>
      <p className="text-xs mt-1">Made with ❤️ for Digital India</p>
    </footer>
  );
};

export default Footer;
