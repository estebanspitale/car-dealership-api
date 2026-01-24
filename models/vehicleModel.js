const mongoose = require('mongoose')

const vehicleSchema = new mongoose.Schema({
  make: { type: String, required: true },
  model: { type: String, required: true },
  year: { type: Number, required: true },
  price: { type: Number, required: true },
  mileage: { type: Number, required: true },
  color: { type: String, required: true },
  fuelType: { type: String, required: true },
  transmission: { type: String, required: true },
  status: { type: String, default: 'Available' }
}, { timestamps: true })

module.exports = mongoose.model('Vehicle', vehicleSchema)