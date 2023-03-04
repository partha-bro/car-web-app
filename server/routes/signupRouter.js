const signup = require('../controllers/signupController')

const signupRouter = require('express').Router()

signupRouter.route('/').post(signup)

module.exports = signupRouter