  
const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const prescriptionSchema = new Schema({
  doctorID: { type: Number, required: true },
  patientID: { type: Number, required: true },
  medicineName: { type: String, required: true },
  testName: { type: String},
  date: { type: Date, required: true }
}, {
  timestamps: true,
});

const Prescription = mongoose.model('Prescription', prescriptionSchema);

module.exports = Prescription;