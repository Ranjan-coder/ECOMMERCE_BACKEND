const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')
// const saltRound = 10
const Ecom = require('../Model/userModel')


require('dotenv').config()
const secretkey = process.env.SECRETKEY

// let arr = []
const register = async (req, res) => {
    try {
        const saltRound = 10; // Define saltRound here

        const { firstname, email, password } = req.body;

        // Check if user with the provided email already exists
        const existingUser = await Ecom.findOne({ email: email });

        if (existingUser) {
            return res.send({msg:"This email is already registered"});
        }

        // Hash the password
        const hashedPassword = bcrypt.hashSync(password, saltRound);

        // Create a new user with hashed password
        const newUser = await Ecom.create({ firstname, email, password: hashedPassword });

        // Generate JWT token
        const jwtToken = jwt.sign({ user: newUser.email }, secretkey);

        res.status(200).send({ msg: "User Registered successfully", newUser: newUser, jwtToken: jwtToken });
    } catch (error) {
        console.error(error);
        res.status(500).send({ error: "Internal Server Error", error });
    }






    // try{
    //     const saltRound = 10
    //     const newUser = await Ecom.create(req.body)
    //     // const newUser = req.body 
    //     newUser.password = bcrypt.hashSync(newUser.password,saltRound)
    //     // await Ecom.create(newUser)

    //     const jwtToken = jwt.sign({user:newUser.email},secretkey)
    //     // console.log(jwtToken,newUser);

    // // res.send({msg:'User Registered successfully',jwtToken:jwtToken})

    //     res.send({msg:" User Registered successfully ",newUser : newUser,jwtToken:jwtToken})

    // }catch(error){
    //     // res.status(500).send(error,"error")
    //     console.error(error,"error")
    // }




    // const data = req.body

    // // register mailid compare
    // const account = arr.find((item)=>item.email === data.email)
    // if(account){
    //     return res.send({msg:"This email is already exist"})
    // }

    // // password hashSync
    // data.password = bcrypt.hashSync(data.password,saltRound)

    // arr.push(data)
    // console.log(data);


    // // token generation 
    // const jwtToken = jwt.sign({user:data.email},secretkey)
    // console.log(jwtToken);

    // res.send({msg:'User Registered successfully',jwtToken:jwtToken})
}


const login = async (req, res) => {
    try {
        const loginData = req.body; // body parsing

        // Find the user with the provided email
        const account = await Ecom.findOne({ email: loginData.email });
        console.log(account, 'account');

        if (account) {
            // Compare the login password with the hashed password stored in the database
            const login = bcrypt.compareSync(loginData.password, account.password);
            console.log(login, 'login');

            if (login) {
                const jwtToken = jwt.sign({user:loginData.email }, secretkey, { expiresIn: '365d' });
                return res.send({msg:'User logged in successfully', jwtToken:jwtToken});
            } else {
                return res.send('Password is incorrect');
            }
        } else {
            return res.send('User is not registered');
        }
    } catch (error) {
        console.error(error);
        return res.send({ error: 'Internal Server Error' });
    }


    // const loginData = req.body  // body parsing

    // // verifying the loginemail with register email 
    // const account = await Ecom.findOne((item)=>item.email === loginData.email)
    // console.log(account,'account');

    // if (account){
    //     // login password compare with registered password 
    //     const login = bcrypt.compareSync(loginData.password,account.password)
    //     console.log(login,'login');

    //     if(login){
    //         const jwtToken = jwt.sign({user:loginData.email},secretkey,{expiresIn:'365d'})
    //         return res.send({msg:'user loged in sucessfully',jwtToken:jwtToken})
    //     }
    //     else{
    //         return res.send('password is incorrect')
    //     }
    // }
    // else{
    //     return res.send('user is not registered')
    // }
}

const cart = (req,res)=>{
    res.send({msg:'Welcome to cart'})
}


const product = async(req,res)=>{
    try{
        const allUser = await Ecom.find()
        res.send(allUser)
    }
    catch(error){
        res.status(500).send(error,"error")
    }
}



// Controller to fetch user name based on email
const getUserByName = async (req, res) => {
    const { email } = req.query;
    try {
      const user = await Ecom.findOne({ email });
      if (user) {
        res.json({ name: user.firstname });
      } else {
        res.json({ error: 'User not found' });
      }
    } catch (error) {
      console.error('Error fetching user:', error);
      res.json({ error: 'Internal server error' });
    }
  }


module.exports = {register,login,cart,product,getUserByName} 