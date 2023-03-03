const mongoose = require('mongoose')

const carSchema = new mongoose.Schema(
    {
        brandName: {
            type: String,
            required: [true,'Car Name must be provided']
        },
        model: {
            type: String,
            required: [true,'Model Name must be provided']
        }
    }
)

const userSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            trim: true,
            required: [true,'Name must be provided!']
        },
        email: {
            type: String,
            lowercase: true,
            required: [true,'Email must be provided!']
        },
        password: {
            type: String,
            required: [true,'Password must be provided!']
        },
        cars: [ carSchema ]
    },{timestamps:true}
)

UserDb = mongoose.model('user',userSchema)
CarDb = mongoose.model('car',carSchema)
module.exports = { UserDb,CarDb }