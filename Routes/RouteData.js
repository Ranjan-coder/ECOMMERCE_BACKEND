const dataRoute = require('express').Router()
const {data} = require('../Config/db')
const  routes  = require('./Rooute')

dataRoute.get('/ecom',data)
dataRoute.post('/ecom',routes)

module.exports = {dataRoute}