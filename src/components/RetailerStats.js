// src/components/RetailerStats.js
import React, { useEffect, useState } from "react";
import axios from "axios";

function RetailerStats() {
  const [stats, setStats] = useState({ total: 0, paid: 0, due: 0 });

  useEffect(() => {
    const fetchStats = async () => {
      try {
        const res = await axios.get("http://localhost:5000/api/students");
        const data = res.data;

        const total = data.length;
        const paid = data.reduce((acc, curr) => acc + parseFloat(curr.feePaid || 0), 0);
        const due = data.reduce((acc, curr) => acc + parseFloat(curr.feeDue || 0), 0);

        setStats({ total, paid, due });
      } catch (error) {
        console.error("Failed to fetch stats", error);
      }
    };

    fetchStats();
  }, []);

  return (
    <div className="bg-white shadow rounded-xl p-6 my-4">
      <h2 className="text-xl font-bold mb-4">🎯 Retailer Summary</h2>
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        <div className="bg-blue-100 text-blue-900 p-4 rounded">Total Students: <strong>{stats.total}</strong></div>
        <div className="bg-green-100 text-green-900 p-4 rounded">Total Fee Paid: ₹<strong>{stats.paid}</strong></div>
        <div className="bg-red-100 text-red-900 p-4 rounded">Fee Due: ₹<strong>{stats.due}</strong></div>
      </div>
    </div>
  );
}

export default RetailerStats;
