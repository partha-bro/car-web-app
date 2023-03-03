const login = require('../controllers/loginController')

const loginRouter = require('express').Router()

loginRouter.route('/').get(login)

module.exports = loginRouter