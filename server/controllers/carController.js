const customError = require("../errors/customError")
const { UserDb } = require("../models/carModel")

const getAllCars = async (req,res) => {
    const cars = await UserDb.find()
    if(!cars) throw new customError(204, 'No Cars exists!')
    res.status(200).json({user:res.user,data:cars})
}
const createCar = async (req,res) => {
    const existUser = await UserDb.findOne({_id:res.user.id})
    existUser.cars.push(req.body)
    const saved = await existUser.save()
    if(!saved) throw new customError(500,'Car is not created.')
    res.status(201).json({message:'car is created.'})
    
}
const getCar = async (req,res) => {
    const existUser = await UserDb.findOne({_id:res.user.id})
    const car = existUser.cars.filter(car=>car._id == req.params.id)
    if(!car) throw new customError(204, 'No Car exist!')
    res.status(200).json({user:res.user,data:car})
}
const updateCar = async (req,res) => {
    const existUser = await UserDb.findOne({_id:res.user.id})
    existUser.cars.id(req.params.id).brandName = req.body.brandName
    existUser.cars.id(req.params.id).model = req.body.model
    const updated = await existUser.save()
    res.json(updated)
}
const getAllCarsOfUser = async (req,res) => {
    const user = await UserDb.findOne({name:req.params.name})
    if(!user) throw new customError(204, 'No Car Found!')
    res.status(200).json({user:res.user,data:user.cars})
}

module.exports = {
    getAllCars,
    createCar,
    getCar,
    updateCar,
    getAllCarsOfUser
}