const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const dotenv = require("dotenv");
const Student = require("./models/Student");

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

// ✅ MongoDB Connection
mongoose
  .connect(process.env.MONGODB_URI)
  .then(() => {
    console.log("✅ MongoDB connected successfully");
  })
  .catch((err) => {
    console.error("❌ DB connection failed:", err);
  });

// ✅ Student POST API
app.post("/api/students", async (req, res) => {
  try {
    const newStudent = new Student(req.body);
    const saved = await newStudent.save();
    res.status(201).json(saved);
  } catch (err) {
    res.status(500).json({ message: "❌ Failed to save student", error: err });
  }
});

// ✅ Student GET API
app.get("/api/students", async (req, res) => {
  try {
    const students = await Student.find();
    res.status(200).json(students);
  } catch (err) {
    res.status(500).json({ message: "❌ Failed to fetch students", error: err });
  }
});

// ✅ Student Summary API (for Retailer/Admin Dashboard)
app.get("/api/students/summary", async (req, res) => {
  try {
    const students = await Student.find();

    const totalStudents = students.length;
    const totalPaid = students.reduce((acc, curr) => acc + Number(curr.amountPaid || 0), 0);
    const totalDue = students.reduce((acc, curr) => acc + Number(curr.dueAmount || 0), 0);

    res.json({ totalStudents, totalPaid, totalDue });
  } catch (err) {
    res.status(500).json({ message: "❌ Summary fetch failed", error: err });
  }
});

// ✅ Server Running
app.listen(PORT, () => {
  console.log(`🚀 Server running on http://localhost:${PORT}`);
});
