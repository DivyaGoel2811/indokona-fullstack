import React from "react";
import { useLocation } from "react-router-dom";

const servicesList = [
  {
    title: "AEPS",
    description: "आधार कार्ड से कैश निकालें",
    emoji: "💳",
  },
  {
    title: "BBPS",
    description: "बिजली, गैस, मोबाइल जैसे सभी बिल पेमेंट",
    emoji: "📲",
  },
  {
    title: "DMT",
    description: "तुरंत मनी ट्रांसफर, किसी भी बैंक में",
    emoji: "🏦",
  },
  {
    title: "Recharge",
    description: "सभी मोबाइल और DTH का रिचार्ज",
    emoji: "🔋",
  },
  {
    title: "PAN Services",
    description: "नया PAN कार्ड या बदलाव – NSDL/UTI के साथ",
    emoji: "🪪",
  },
  {
    title: "Loan Services",
    description: "पर्सनल, बिजनेस, गोल्ड, एजुकेशन लोन",
    emoji: "💰",
  },
  {
    title: "Bank A/C Opening",
    description: "Zero Balance अकाउंट खोलें",
    emoji: "🏦",
  },
  {
    title: "Credit Cards",
    description: "SBI, ICICI, HDFC आदि से क्रेडिट कार्ड",
    emoji: "💳",
  },
  {
    title: "Insurance POSP",
    description: "Life, Health, Vehicle Insurance सेवाएं",
    emoji: "🛡️",
  },
  {
    title: "CA Services",
    description: "ITR, GST, MSME, ISO, Trademark Filing",
    emoji: "📄",
  },
  {
    title: "Legal Drafting",
    description: "Agreement, Affidavit, Court Petition",
    emoji: "⚖️",
  },
];

const Services = () => {
  const location = useLocation();
  const isDashboard =
    location.pathname.includes("/admin") ||
    location.pathname.includes("/distributor") ||
    location.pathname.includes("/retailer");

  return (
    <div className="bg-white py-10 px-4 md:px-8 lg:px-16">
      <h2 className="text-2xl md:text-3xl font-bold text-center mb-8 text-indigo-700">
        {isDashboard
          ? "Available Financial Services"
          : "🌟 11Pro डिजिटल सेवाएं – सिर्फ Indokona में!"}
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {servicesList.map((service, index) => (
          <div
            key={index}
            className="bg-gradient-to-br from-indigo-50 to-indigo-100 shadow-md rounded-2xl p-5 hover:shadow-lg transition duration-300"
          >
            <div className="text-3xl mb-3">{service.emoji}</div>
            <h3 className="text-lg font-semibold text-indigo-800 mb-1">
              {service.title}
            </h3>
            <p className="text-sm text-gray-600">{service.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Services;
