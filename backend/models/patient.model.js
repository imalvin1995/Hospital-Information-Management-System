  
const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const patientSchema = new Schema({
  patientID: { type: Number, required: true, unique: true },
  firstName: { type: String, required: true,trim: true },
  lastName: { type: String, required: true,trim: true },
  phone: { type: Number, required: true },
  email: { type: String, required: true },
  DOB: { type: Date, required: true },
  gender: { type: String, required: true },
}, {
  timestamps: true,
});

const Patient = mongoose.model('Patient', patientSchema);

module.exports = Patient;