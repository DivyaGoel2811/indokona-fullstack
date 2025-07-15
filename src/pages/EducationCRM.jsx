import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const EducationCRM = () => {
  const [students, setStudents] = useState([]);
  const navigate = useNavigate();

  const fetchStudents = async () => {
    try {
      const res = await axios.get("http://localhost:5000/api/students");
      setStudents(res.data);
    } catch (err) {
      console.error("❌ Failed to fetch students:", err);
    }
  };

  useEffect(() => {
    fetchStudents();
  }, []);

  const totalPaid = students.reduce((sum, student) => sum + Number(student.amountPaid || 0), 0);
  const totalDue = students.reduce((sum, student) => sum + Number(student.dueAmount || 0), 0);

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold mb-6 text-center text-indigo-700">🎓 Education CRM Panel</h2>

        {/* Top Buttons */}
        <div className="flex flex-wrap gap-4 justify-center mb-6">
          <button
            onClick={() => navigate("/retailer/admission")}
            className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded"
          >
            + Fill Admission Form
          </button>
          <button
            onClick={() => navigate("/retailer/report")}
            className="bg-indigo-600 hover:bg-indigo-700 text-white px-4 py-2 rounded"
          >
            📊 View Reports
          </button>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8 text-white">
          <div className="bg-blue-500 p-4 rounded shadow">
            <h4 className="text-lg">Total Students</h4>
            <p className="text-2xl font-bold">{students.length}</p>
          </div>
          <div className="bg-green-600 p-4 rounded shadow">
            <h4 className="text-lg">Total Paid</h4>
            <p className="text-2xl font-bold">₹{totalPaid}</p>
          </div>
          <div className="bg-red-500 p-4 rounded shadow">
            <h4 className="text-lg">Total Due</h4>
            <p className="text-2xl font-bold">₹{totalDue}</p>
          </div>
        </div>

        {/* Table */}
        <div className="bg-white rounded shadow overflow-x-auto">
          <table className="w-full table-auto text-sm text-left">
            <thead className="bg-gray-200 text-gray-700 font-semibold">
              <tr>
                <th className="px-4 py-2">Name</th>
                <th className="px-4 py-2">Email</th>
                <th className="px-4 py-2">Phone</th>
                <th className="px-4 py-2">Course</th>
                <th className="px-4 py-2">Paid</th>
                <th className="px-4 py-2">Due</th>
                <th className="px-4 py-2">Receipt</th>
              </tr>
            </thead>
            <tbody>
              {students.map((student) => (
                <tr key={student._id} className="border-b">
                  <td className="px-4 py-2">{student.name}</td>
                  <td className="px-4 py-2">{student.email}</td>
                  <td className="px-4 py-2">{student.phone}</td>
                  <td className="px-4 py-2">{student.course}</td>
                  <td className="px-4 py-2 text-green-600 font-semibold">₹{student.amountPaid}</td>
                  <td className="px-4 py-2 text-red-600 font-semibold">₹{student.dueAmount}</td>
                  <td className="px-4 py-2">
                    <button
                      onClick={() => navigate(`/retailer/receipt/${student._id}`)}
                      className="text-blue-600 hover:underline"
                    >
                      📄 View
                    </button>
                  </td>
                </tr>
              ))}
              {students.length === 0 && (
                <tr>
                  <td className="px-4 py-4 text-center text-gray-500" colSpan="7">
                    No student data available.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default EducationCRM;
