require('dotenv').config()
const express = require('express')
const mongoose = require('mongoose')

const app = express()

const swaggerUi = require('swagger-ui-express')
const swaggerSpec = require('./docs/swagger')

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec))
app.use(express.json())

mongoose.connect(process.env.MONGODB_URI)
  .then(() => console.log('MongoDB connected'))
  .catch(err => console.error(err))

app.use('/api/vehicles', require('./routes/vehiclesRoutes'))

app.use((err, req, res, next) => {
  res.status(err.status || 500).json({ error: err.message })
})

app.listen(process.env.PORT, () => {
  console.log(`Server running on port ${process.env.PORT}`)
})