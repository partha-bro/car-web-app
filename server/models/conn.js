const mongoose = require('mongoose')

const connectDB = async (url,database) => {
    return await mongoose.connect(url+database)
}

module.exports = connectDB