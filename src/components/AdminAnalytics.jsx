import React, { useEffect, useState } from "react";

const AdminAnalytics = () => {
  const [students, setStudents] = useState([]);
  const [loading, setLoading] = useState(true);

  // Fetch student records from backend
  useEffect(() => {
    const fetchStudents = async () => {
      try {
        const response = await fetch("http://localhost:5000/api/students");
        const data = await response.json();
        setStudents(data);
        setLoading(false);
      } catch (error) {
        console.error("Failed to fetch students", error);
        setLoading(false);
      }
    };

    fetchStudents();
  }, []);

  // Calculate totals
  const totalStudents = students.length;
  const totalFees = students.reduce((sum, student) => sum + Number(student.totalFee || 0), 0);
  const totalPaid = students.reduce((sum, student) => sum + Number(student.paidFee || 0), 0);
  const totalDue = totalFees - totalPaid;

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <h2 className="text-3xl font-bold text-center mb-6">📊 Admin Real-Time Reports</h2>

      {loading ? (
        <p className="text-center">Loading data...</p>
      ) : (
        <>
          {/* Summary Cards */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-8">
            <div className="bg-white p-4 rounded shadow text-center">
              <h3 className="text-xl font-semibold">👨‍🎓 Total Students</h3>
              <p className="text-2xl text-indigo-600">{totalStudents}</p>
            </div>
            <div className="bg-white p-4 rounded shadow text-center">
              <h3 className="text-xl font-semibold">💰 Total Fees</h3>
              <p className="text-2xl text-green-600">₹{totalFees}</p>
            </div>
            <div className="bg-white p-4 rounded shadow text-center">
              <h3 className="text-xl font-semibold">✅ Total Paid</h3>
              <p className="text-2xl text-blue-600">₹{totalPaid}</p>
            </div>
            <div className="bg-white p-4 rounded shadow text-center">
              <h3 className="text-xl font-semibold">❌ Total Due</h3>
              <p className="text-2xl text-red-600">₹{totalDue}</p>
            </div>
          </div>

          {/* Detailed Table */}
          <div className="overflow-x-auto">
            <table className="min-w-full bg-white shadow rounded">
              <thead>
                <tr className="bg-indigo-600 text-white">
                  <th className="px-4 py-2 text-left">Receipt ID</th>
                  <th className="px-4 py-2 text-left">Student Name</th>
                  <th className="px-4 py-2 text-left">Course</th>
                  <th className="px-4 py-2 text-left">Retailer Name</th>
                  <th className="px-4 py-2 text-left">Total Fee</th>
                  <th className="px-4 py-2 text-left">Paid Fee</th>
                  <th className="px-4 py-2 text-left">Due Amount</th>
                </tr>
              </thead>
              <tbody>
                {students.map((student, idx) => (
                  <tr key={idx} className="border-b hover:bg-gray-50">
                    <td className="px-4 py-2">{student.receiptId}</td>
                    <td className="px-4 py-2">{student.name}</td>
                    <td className="px-4 py-2">{student.course}</td>
                    <td className="px-4 py-2">{student.retailerName || "N/A"}</td>
                    <td className="px-4 py-2">₹{student.totalFee}</td>
                    <td className="px-4 py-2">₹{student.paidFee}</td>
                    <td className="px-4 py-2 text-red-600">₹{student.totalFee - student.paidFee}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </>
      )}
    </div>
  );
};

export default AdminAnalytics;
