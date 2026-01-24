const swaggerJsdoc = require('swagger-jsdoc')

const options = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'Car Dealership API',
      version: '1.0.0',
      description: 'API for managing vehicles in a car dealership'
    },
    servers: [
  {
    url: 'http://localhost:3000',
    description: 'Local server'
  },
  {
    url: 'https://car-dealership-api-xtx6.onrender.com',
    description: 'Production server'
  }
]
  },
  apis: ['./routes/*.js']
}

module.exports = swaggerJsdoc(options)
