const { Router } = require('express')
const { getAllCars,createCar,getCar,updateCar,getAllCarsOfUser } = require('../controllers/carController')
const auth = require('../middleware/auth')
const carRouter = Router()

carRouter.use(auth)

carRouter.route('/cars').get(getAllCars).post(createCar)
carRouter.route('/car/:userId/:carId').get(getCar).patch(updateCar)
carRouter.route('/cars/:name').get(getAllCarsOfUser)

module.exports = carRouter

