const mongoose = require('mongoose')

const userSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            trim: true
        },
        email: {
            type: String
        },
        password: {
            type: String
        },
        cars: [ new mongoose.Schema({
                brandName: {
                    type: String,
                    required: [true,'Car Name must be provided']
                },
                model: {
                    type: String,
                    required: [true,'Model Name must be provided']
                }
            })
        ]
    },{timestamps:true}
)



UserDb = mongoose.model('user',userSchema)

module.exports = { UserDb }