const dataRoute = require('express').Router()
const {data} = require('../Config/db')
const  routes  = require('./Rooute')

dataRoute.get('/ecom',data)
dataRoute.use('/log',routes)

module.exports = {dataRoute}