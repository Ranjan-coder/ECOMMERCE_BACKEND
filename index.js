const express = require('express')
const app = express()
const cors = require('cors')
const {dataRoute} = require('./Routes/RouteData')


app.use(cors({
    origin:'*'
}))

app.use(express.json())
app.use(express.urlencoded({extended:true}))

app.use('/pages',dataRoute)




app.listen(5555,()=>{
    console.log('Server is running');
})