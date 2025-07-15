import React, { useEffect, useState } from "react";
import axios from "axios";

function RetailerReport() {
  const [students, setStudents] = useState([]);
  const [totalFees, setTotalFees] = useState(0);
  const [totalDue, setTotalDue] = useState(0);

  useEffect(() => {
    axios
      .get("http://localhost:5000/api/students")
      .then((res) => {
        const data = res.data;
        setStudents(data);

        const totalCollected = data.reduce((acc, student) => acc + Number(student.feePaid || 0), 0);
        const totalLeft = data.reduce((acc, student) => acc + Number(student.feeDue || 0), 0);

        setTotalFees(totalCollected);
        setTotalDue(totalLeft);
      })
      .catch((err) => console.error("Error fetching reports:", err));
  }, []);

  return (
    <div className="p-4">
      <h2 className="text-xl font-bold mb-4 text-indigo-700">📊 Retailer Real-Time Report</h2>

      <div className="mb-6 bg-white shadow p-4 rounded-lg">
        <p><strong>Total Students:</strong> {students.length}</p>
        <p><strong>Total Fees Collected:</strong> ₹{totalFees}</p>
        <p><strong>Pending Fees:</strong> ₹{totalDue}</p>
      </div>

      <table className="w-full border-collapse">
        <thead>
          <tr className="bg-indigo-100">
            <th className="p-2 border">Name</th>
            <th className="p-2 border">Phone</th>
            <th className="p-2 border">Course</th>
            <th className="p-2 border">Paid (₹)</th>
            <th className="p-2 border">Due (₹)</th>
          </tr>
        </thead>
        <tbody>
          {students.map((student) => (
            <tr key={student._id} className="text-center border-t">
              <td className="p-2">{student.name}</td>
              <td className="p-2">{student.phone}</td>
              <td className="p-2">{student.course}</td>
              <td className="p-2">{student.feePaid}</td>
              <td className="p-2">{student.feeDue}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default RetailerReport;
