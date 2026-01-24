const Vehicle = require('../models/vehicleModel')

exports.getAllVehicles = async (req, res, next) => {
  try {
    const vehicles = await Vehicle.find()
    res.json(vehicles)
  } catch (err) {
    next(err)
  }
}

exports.getVehicleById = async (req, res, next) => {
  try {
    const vehicle = await Vehicle.findById(req.params.id)
    if (!vehicle) return res.status(404).json({ error: 'Vehicle not found' })
    res.json(vehicle)
  } catch (err) {
    err.status = 400
    next(err)
  }
}

exports.createVehicle = async (req, res, next) => {
  try {
    const vehicle = await Vehicle.create(req.body)
    res.status(201).json(vehicle)
  } catch (err) {
    err.status = 400
    next(err)
  }
}

exports.updateVehicle = async (req, res, next) => {
  try {
    const vehicle = await Vehicle.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true, runValidators: true }
    )
    if (!vehicle) return res.status(404).json({ error: 'Vehicle not found' })
    res.json(vehicle)
  } catch (err) {
    err.status = 400
    next(err)
  }
}

exports.deleteVehicle = async (req, res, next) => {
  try {
    const vehicle = await Vehicle.findByIdAndDelete(req.params.id)
    if (!vehicle) return res.status(404).json({ error: 'Vehicle not found' })
    res.json({ message: 'Vehicle deleted' })
  } catch (err) {
    next(err)
  }
}