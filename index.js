const express = require('express')
const app = express()
const cors = require('cors')
const {dataRoute} = require('./Routes/RouteData')
const connectDB = require('./Config/db')


require('dotenv').config()
const port = process.env.PORT

app.use(cors({
    origin:'*'
}))

app.use(express.json())
app.use(express.urlencoded({extended:true}))

app.use('/pages',dataRoute)




app.listen(port,()=>{
    // connect to db 
    connectDB()
    console.log('Server is running');
})