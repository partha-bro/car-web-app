const login = require('../controllers/loginController')

const loginRouter = require('express').Router()

loginRouter.route('/').post(login)

module.exports = loginRouter