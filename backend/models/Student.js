const mongoose = require("mongoose");

const studentSchema = new mongoose.Schema({
  name: String,
  email: String,
  phone: String,
  course: String,
  feePaid: Number,
  feeDue: Number,
  date: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model("Student", studentSchema);
