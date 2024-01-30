const dataRoute = require('express').Router()
const {data} = require('../Config/db')

dataRoute.get('/ecom',data)

module.exports = {dataRoute}