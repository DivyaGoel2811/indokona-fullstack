import React from "react";
import { useNavigate } from "react-router-dom";

const EducationReferral = () => {
  const navigate = useNavigate();

  const handleFormClick = () => {
    navigate("/retailer/admission");
  };

  return (
    <section className="bg-white py-10">
      <div className="max-w-6xl mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold mb-4 text-indigo-700">🎓 Education Referral</h2>
        <p className="mb-6 text-gray-700">
          Add student admissions like BA, MBA, BCA, DMLT, etc., and earn commissions.
        </p>
        <button
          onClick={handleFormClick}
          className="bg-green-600 hover:bg-green-700 text-white px-6 py-2 rounded-full font-semibold shadow"
        >
          📝 Fill Admission Form
        </button>
      </div>
    </section>
  );
};

export default EducationReferral;
