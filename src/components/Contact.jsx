// src/components/Contact.jsx
import React from "react";

const Contact = () => {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-4xl mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold text-indigo-700 mb-6">
          📞 संपर्क करें – अपने बिजनेस को डिजिटल बनाएं!
        </h2>
        <p className="text-lg text-gray-700 mb-6">
          Indokona के साथ जुड़कर पाएं 11+ Digital Services, Education Referral Panel और Fintech Branding.
        </p>
        <div className="space-y-2 text-lg text-gray-800">
          <p>
            🌐 Website:{" "}
            <a
              href="http://www.indokona.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 underline"
            >
              www.indokona.com
            </a>
          </p>
          <p>
            📲 WhatsApp:{" "}
            <a
              href="https://wa.me/c/918800905879"
              target="_blank"
              rel="noopener noreferrer"
              className="text-green-600 underline"
            >
              +91-88009 05879
            </a>
          </p>
          <p>🏢 Location: Delhi NCR, India</p>
        </div>
      </div>
    </section>
  );
};

export default Contact;
