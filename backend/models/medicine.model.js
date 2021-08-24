  
const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const medicineSchema = new Schema({
  medicineName: { type: String, required: true, unique: true },
  quantity: { type: Number, required: true}
}, {
  timestamps: true,
});

const Medicine = mongoose.model('Medicine', medicineSchema);

module.exports = Medicine;