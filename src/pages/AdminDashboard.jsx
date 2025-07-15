import React, { useEffect, useState } from "react";
import axios from "axios";

const AdminDashboard = () => {
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
        console.error("❌ Error fetching summary:", error);
      }
    };

    fetchSummary();
  }, []);

  return (
    <div className="min-h-screen bg-gray-100 py-10 px-6">
      <h1 className="text-3xl font-bold text-center mb-10 text-indigo-700">📊 Admin Summary Dashboard</h1>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-5xl mx-auto">
        <div className="bg-white p-6 rounded shadow text-center border border-indigo-100">
          <h2 className="text-xl font-semibold text-gray-700">👥 Total Students</h2>
          <p className="text-3xl font-bold text-indigo-700 mt-2">{summary.totalStudents}</p>
        </div>
        <div className="bg-white p-6 rounded shadow text-center border border-green-100">
          <h2 className="text-xl font-semibold text-gray-700">💰 Total Fees Collected</h2>
          <p className="text-3xl font-bold text-green-600 mt-2">₹{summary.totalPaid}</p>
        </div>
        <div className="bg-white p-6 rounded shadow text-center border border-red-100">
          <h2 className="text-xl font-semibold text-gray-700">🧾 Pending Fees</h2>
          <p className="text-3xl font-bold text-red-500 mt-2">₹{summary.totalDue}</p>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;
