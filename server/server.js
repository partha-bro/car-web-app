require('dotenv').config()
require('express-async-errors')

const express = require('express')
const cors = require('cors')
const carRouter = require('./routes/carRouter')
const notFound = require('./middleware/notFound')
const errorMiddleware = require('./middleware/errorMiddleware')
const loginRouter = require('./routes/loginRouter')
const signupRouter = require('./routes/signupRouter')
const connectDB = require('./models/conn')
const server = express()

// middleware
server.use(express.static('views'))
server.use(express.json())
server.use(cors())
server.use('/api/v1',carRouter)
server.use('/login',loginRouter)
server.use('/signup',signupRouter)
server.use(notFound)
server.use(errorMiddleware)

const startServer = async () => {
    try {
        const port = process.env.PORT || 5000
        const database = 'CarDB'

        const success = await connectDB(process.env.MONGODB,database)
        console.log(`MongoDB Successfully connected with ${success.connection.host}`)
        server.listen(port,console.log(`Server is running on ${port}`))
    } catch (error) {
        console.log(`Server is not running due to ${error}`);
    }
}

startServer()