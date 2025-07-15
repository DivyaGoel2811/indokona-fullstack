import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const RetailerDashboard = () => {
  const [summary, setSummary] = useState({
    totalStudents: 0,
    totalPaid: 0,
    totalDue: 0,
  });

  useEffect(() => {
    const fetchSummary = async () => {
      try {
        const res = await axios.get("http://localhost:5000/api/students/summary");
        setSummary(res.data);
      } catch (error) {
        console.error("Error fetching summary:", error);
      }
    };

    fetchSummary();
  }, []);

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold text-indigo-700 mb-4 text-center">
        🧾 Retailer Dashboard Summary
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-white">
        <div className="bg-indigo-600 p-4 rounded-xl shadow-lg">
          <h2 className="text-xl font-semibold">🎓 Total Admissions</h2>
          <p className="text-3xl mt-2">{summary.totalStudents}</p>
        </div>
        <div className="bg-green-600 p-4 rounded-xl shadow-lg">
          <h2 className="text-xl font-semibold">💰 Fee Collected</h2>
          <p className="text-3xl mt-2">₹{summary.totalPaid}</p>
        </div>
        <div className="bg-red-600 p-4 rounded-xl shadow-lg">
          <h2 className="text-xl font-semibold">📌 Due Amount</h2>
          <p className="text-3xl mt-2">₹{summary.totalDue}</p>
        </div>
      </div>

      <div className="mt-8 flex flex-col md:flex-row justify-center items-center gap-4">
        <Link
          to="/retailer/education"
          className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700"
        >
          🎓 Education Referral
        </Link>
        <Link
          to="/retailer/admission"
          className="bg-indigo-600 text-white px-6 py-2 rounded hover:bg-indigo-700"
        >
          ➕ Fill Admission Form
        </Link>
        <Link
          to="/retailer/report"
          className="bg-gray-700 text-white px-6 py-2 rounded hover:bg-gray-800"
        >
          📊 View Report
        </Link>
      </div>
    </div>
  );
};

export default RetailerDashboard;
