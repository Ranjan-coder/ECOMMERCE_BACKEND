const express = require('express')
const {register,login, cart, product, getUserByName, tourpackage, touroffer} = require('../Controller/api')
const auth = require('../MIddleware/middleware')
const routes = express.Router()




routes.post('/register',register)
routes.post('/login',login)
routes.get('/cart',auth,cart)
routes.get('/tourpackage',auth,tourpackage)
routes.get('/touroffer',auth,touroffer)
routes.get('/data',product)
routes.get('/username',getUserByName)


module.exports = routes