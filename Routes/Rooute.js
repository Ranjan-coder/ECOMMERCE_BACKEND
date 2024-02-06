const express = require('express')
const {register,login, cart, product} = require('../Controller/api')
const auth = require('../MIddleware/middleware')
const routes = express.Router()




routes.post('/register',register)
routes.post('/login',login)
routes.get('/cart',auth, cart)
routes.get('/data',product)


module.exports = routes