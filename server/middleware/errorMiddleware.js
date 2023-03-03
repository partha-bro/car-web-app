const customError = require("../errors/customError")

const errorMiddleware = (err,req,res,next) => {
    if(err instanceof customError){
        res.status(err.statusCode).json({message:err.message})
    }else{
        res.status(500).json({message:err.message})
    }
}

module.exports = errorMiddleware