const customError = require("../errors/customError")
const { CarDb, UserDb } = require("../models/carModel")

const getAllCars = async (req,res) => {
    const cars = await CarDb.find()
    if(!cars) throw new customError(204, 'No Cars exists!')
    res.status(200).json(cars)
}
const createCar = async (req,res) => {
    const car = await CarDb.create(req.body)
    if(!car) throw new customError(500,'car is not created.')
    res.status(201).json(car)
}
const getCar = async (req,res) => {
    const car = await CarDb.findById(req.params.id)
    if(!car) throw new customError(204, 'No Car exist!')
    res.status(200).json(car)
}
const updateCar = async (req,res) => {
    const car = await CarDb.findByIdAndUpdate(req.params.id,req.body,{
        new:true,
        runValidators:true
    })
    if(!car) throw new customError(204, 'No Car exist!')
    res.status(200).json(car)
}
const getAllCarsOfUser = async (req,res) => {
    const car = await UserDb.findOne({name:req.params.user})
    if(!car) throw new customError(204, 'No Car exist!')
    res.status(200).json(car)
}

module.exports = {
    getAllCars,
    createCar,
    getCar,
    updateCar,
    getAllCarsOfUser
}