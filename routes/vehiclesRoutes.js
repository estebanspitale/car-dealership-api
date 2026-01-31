import express from 'express'
import controller from '../controllers/vehiclesController.js'
import validate from '../middleware/validate.js'
import { authenticate } from '../middleware/auth.js'

const router = express.Router()

/**
 * @swagger
 * /api/vehicles:
 *   get:
 *     summary: Get all vehicles
 *     description: Returns a list of all vehicles in the dealership
 *     responses:
 *       200:
 *         description: Successful response
 */
router.get('/', controller.getAllVehicles)

/**
 * @swagger
 * /api/vehicles/{id}:
 *   get:
 *     summary: Get a vehicle by ID
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Vehicle found
 *       404:
 *         description: Vehicle not found
 */
router.get('/:id', controller.getVehicleById)

/**
 * @swagger
 * /api/vehicles:
 *   post:
 *     summary: Create a new vehicle
 *     description: Adds a new vehicle to the dealership
 *     requestBody:
 *       required: true
 *     responses:
 *       201:
 *         description: Vehicle created successfully
 *       400:
 *         description: Invalid input
 *       401:
 *         description: Unauthorized
 */
router.post(
  '/',
  authenticate,
  validate.vehicle,
  controller.createVehicle
)

/**
 * @swagger
 * /api/vehicles/{id}:
 *   put:
 *     summary: Update a vehicle
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Vehicle updated
 *       401:
 *         description: Unauthorized
 *       404:
 *         description: Vehicle not found
 */
router.put(
  '/:id',
  authenticate,
  validate.vehicle,
  controller.updateVehicle
)

/**
 * @swagger
 * /api/vehicles/{id}:
 *   delete:
 *     summary: Delete a vehicle
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Vehicle deleted
 *       401:
 *         description: Unauthorized
 *       404:
 *         description: Vehicle not found
 */
router.delete('/:id', authenticate, controller.deleteVehicle)

export default router
