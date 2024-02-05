const express = require('express')
const {register,login} = require('../Controller/api')
const routes = express.Router()




routes.post('/register',register)
routes.post('/login',login)


module.exports = routes