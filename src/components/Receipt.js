import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import jsPDF from "jspdf";
import autoTable from "jspdf-autotable";
import axios from "axios";

const Receipt = () => {
  const { id } = useParams();
  const [student, setStudent] = useState(null);

  useEffect(() => {
    const fetchStudent = async () => {
      try {
        const res = await axios.get(`http://localhost:5000/api/students/${id}`);
        setStudent(res.data);
      } catch (err) {
        console.error("Error fetching student:", err);
      }
    };

    fetchStudent();
  }, [id]);

  const generatePDF = () => {
    const doc = new jsPDF();
    doc.setFontSize(18);
    doc.text("Indokona Credit Bazar", 70, 20);
    doc.setFontSize(14);
    doc.text("Admission Receipt", 85, 30);

    autoTable(doc, {
      startY: 40,
      head: [["Field", "Details"]],
      body: [
        ["Student Name", student.name],
        ["Email", student.email],
        ["Phone", student.phone],
        ["Course", student.course],
        ["Amount Paid", `₹${student.amountPaid}`],
        ["Due Amount", `₹${student.dueAmount}`],
      ],
    });

    doc.save(`Receipt_${student.name}.pdf`);
  };

  if (!student) return <div className="text-center mt-10">Loading receipt...</div>;

  return (
    <div className="max-w-xl mx-auto mt-10 p-6 shadow-md bg-white rounded-md">
      <h2 className="text-2xl font-bold mb-4 text-center text-indigo-600">🎓 Receipt</h2>
      <div className="space-y-2">
        <p><strong>Student Name:</strong> {student.name}</p>
        <p><strong>Email:</strong> {student.email}</p>
        <p><strong>Phone:</strong> {student.phone}</p>
        <p><strong>Course:</strong> {student.course}</p>
        <p><strong>Amount Paid:</strong> ₹{student.amountPaid}</p>
        <p><strong>Due Amount:</strong> ₹{student.dueAmount}</p>
      </div>
      <button
        onClick={generatePDF}
        className="mt-6 w-full bg-green-600 hover:bg-green-700 text-white p-2 rounded font-semibold"
      >
        Download PDF
      </button>
    </div>
  );
};

export default Receipt;
