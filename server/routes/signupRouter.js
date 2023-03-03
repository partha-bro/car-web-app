const signup = require('../controllers/signupController')

const signupRouter = require('express').Router()

signupRouter.route('/').get(signup)

module.exports = signupRouter