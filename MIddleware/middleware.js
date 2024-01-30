const loginsignup =(req,res,next)=>{
    res.send('login signup middleware')
    next()
}

const cart =(req,res,next)=>{
    res.send('cart middleware')
    next()
}

module.exports={loginsignup,cart}