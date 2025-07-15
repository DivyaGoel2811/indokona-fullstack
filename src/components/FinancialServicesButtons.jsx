import React from "react";

const services = [
  "AEPS – आधार से कैश निकालें",
  "BBPS – Bill Payment",
  "DMT – Money Transfer",
  "Recharge – Mobile/DTH",
  "PAN Card Services",
  "Loan Services",
  "Bank A/C Opening",
  "Credit Card",
  "Insurance POSP",
  "CA Services",
  "Legal Drafting",
];

const FinancialServicesButtons = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 p-6">
      {services.map((service, index) => (
        <button
          key={index}
          className="bg-indigo-600 text-white font-semibold py-3 px-4 rounded-xl shadow hover:bg-indigo-700 transition duration-200"
        >
          {service}
        </button>
      ))}
    </div>
  );
};

export default FinancialServicesButtons;
