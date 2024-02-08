const mongoose = require('mongoose')

const userSchema = mongoose.Schema({
    firstname:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    id :{
        type:Number,
    },
    category :{
        type:String
    },
    image :{
        type:String
    },
    name :{
        type: String
    },
    price :{
        type:Number
    },
    description :{
        type:String
    },
    rating :{
        type:String
    }
})

const Ecom = mongoose.model("EcommerceDetails",userSchema)

module.exports = Ecom
