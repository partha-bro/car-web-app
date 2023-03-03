const express = require('express')
const { getAllCars,createCar,getCar,updateCar,getAllCarsOfUser } = require('../controllers/carController')
const carRouter = express.Router()

carRouter.route('/cars').get(getAllCars).post(createCar)
carRouter.route('/car/:id').get(getCar).patch(updateCar)
carRouter.route('/cars/:name').get(getAllCarsOfUser)

module.exports = carRouter