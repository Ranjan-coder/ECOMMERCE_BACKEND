const express = require('express')
const routes = express.Router()
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const saltRound = 10
const secretkey = 'ecommerce'


let arr = []
routes.post('/register',(req,res)=>{
    const data = req.body

    // register mailid compare
    const account = arr.find((item)=>item.email === data.email)
    if(account){
        return res.send({msg:"This email is already exist"})
    }

    // password hashSync
    data.password = bcrypt.hashSync(data.password,saltRound)

    arr.push(data)
    console.log(data);


    // token generation 
    const jwtToken = jwt.sign({user:data.email},secretkey)
    console.log(jwtToken);

    res.send({msg:'User Registered successfully',jwtToken:jwtToken})
})


routes.post('/login',(req,res)=>{
    const loginData = req.body  // body parsing

    // verifying the loginemail with register email 
    const account = arr.find((item)=>item.email === loginData.email)
    console.log(account,'account');

    if (account){
        // login password compare with registered password 
        const login = bcrypt.compareSync(loginData.password,account.password)
        console.log(login,'login');

        if(login){
            const jwtToken = jwt.sign({user:loginData.email},secretkey,{expiresIn:'365d'})
            return res.send({msg:'user loged in sucessfully',jwtToken:jwtToken})
        }
        else{
            return res.send('password is incorrect')
        }
    }
    else{
        return res.send('user is not registered')
    }
})


module.exports = routes