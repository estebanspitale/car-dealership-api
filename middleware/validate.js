const vehicle = (req, res, next) => {
  const { make, model, year, price } = req.body

  if (!make || !model || !year || !price) {
    return res.status(400).json({
      error: 'make, model, year and price are required'
    })
  }

  if (year < 1900) {
    return res.status(400).json({ error: 'Invalid year' })
  }

  if (price <= 0) {
    return res.status(400).json({ error: 'Price must be positive' })
  }

  next()
}

export default {
  vehicle
}
