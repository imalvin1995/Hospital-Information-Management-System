  
const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const doctorSchema = new Schema({
  doctorID: { type: Number, required: true, unique: true },
  firstName: { type: String, required: true,trim: true },
  lastName: { type: String, required: true,trim: true },
  phone: { type: Number, required: true },
  email: { type: String, required: true },
  specialization: { type: String, required: true },
  department: { type: String, required: true }
}, {
  timestamps: true,
});

const Doctor = mongoose.model('Doctor', doctorSchema);

module.exports = Doctor;