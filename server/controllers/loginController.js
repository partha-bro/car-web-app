require('dotenv').config()
const customError = require("../errors/customError")
const { UserDb } = require("../models/carModel")
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')

const login = async (req,res) => {
    const { email,password } = req.body
    const user = await UserDb.findOne({email})
    if(!user) throw new customError(204,'User not exist!')
    const login = await bcrypt.compare(password,user.password)
    if(login){
        const token = jwt.sign({id:user._id,name:user.name},process.env.JWT_SECRET,{expiresIn:'1d'})
        res.status(200).json({token,message:'Login Successfully'})
    }else{
        res.status(400).json({message:'Email & Password incorrect!'})
    }
}

module.exports = login