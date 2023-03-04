require('dotenv').config()
const jwt = require('jsonwebtoken')
const customError = require('../errors/customError')

const auth = (req,res,next) => {
    console.log('call auth middleware')
    const authentication = req.headers.authorization
    if(authentication && authentication.startsWith('Bearer ')){
        const token = authentication.split(' ')[1]
        const user = jwt.verify(token,process.env.JWT_SECRET)
        if(!user) throw new customError(500,'Not a Valid Token!')
        res.user = {...user}
        next()
    }else{
        throw new customError(400,'Token is not provided!')
    }
}

module.exports = auth