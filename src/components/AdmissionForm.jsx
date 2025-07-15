import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const AdmissionForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    course: "",
    amountPaid: "",
    dueAmount: "",
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post(
        "http://localhost:5000/api/students",
        formData,
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      const studentId = res.data._id;
      navigate(`/retailer/receipt/${studentId}`);
    } catch (error) {
      console.error("❌ Submission Error:", error);
      alert("❌ Failed to save. Try again.");
    }
  };

  return (
    <div className="max-w-xl mx-auto mt-10 p-6 shadow-md bg-white rounded-md">
      <h2 className="text-2xl font-bold mb-4 text-center text-indigo-600">
        🎓 Fill Admission Form
      </h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          type="text"
          name="name"
          placeholder="Student Name"
          className="w-full p-2 border rounded"
          value={formData.name}
          onChange={handleChange}
          required
        />
        <input
          type="email"
          name="email"
          placeholder="Email Address"
          className="w-full p-2 border rounded"
          value={formData.email}
          onChange={handleChange}
        />
        <input
          type="text"
          name="phone"
          placeholder="Phone Number"
          className="w-full p-2 border rounded"
          value={formData.phone}
          onChange={handleChange}
          required
        />
        <input
          type="text"
          name="course"
          placeholder="Course Name"
          className="w-full p-2 border rounded"
          value={formData.course}
          onChange={handleChange}
          required
        />
        <input
          type="number"
          name="amountPaid"
          placeholder="Amount Paid"
          className="w-full p-2 border rounded"
          value={formData.amountPaid}
          onChange={handleChange}
        />
        <input
          type="number"
          name="dueAmount"
          placeholder="Due Amount"
          className="w-full p-2 border rounded"
          value={formData.dueAmount}
          onChange={handleChange}
        />
        <button
          type="submit"
          className="w-full bg-indigo-600 hover:bg-indigo-700 text-white p-2 rounded font-semibold"
        >
          Submit & Generate Receipt
        </button>
      </form>
    </div>
  );
};

export default AdmissionForm;
