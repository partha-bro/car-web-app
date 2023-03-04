const customError = require("../errors/customError")
const { UserDb } = require("../models/carModel")
const bcrypt = require('bcrypt')
const saltRound = 5

const signup = async (req,res) => {
    const { name,email,password} = req.body
    const user = await UserDb.findOne({email})
    if(!user){
        const hash = await bcrypt.hash(password,saltRound)
        if(!hash) throw new customError(500,'password is not encrypted.')
        const newUser = await UserDb.create({name,email,password:hash})
        if(!newUser) throw new customError(204,'User not exist!')
        res.status(201).json({message:'User is Created.'})
    }else{
        res.status(200).json({message:'user already exist',data:user})
    }
}

module.exports = signup