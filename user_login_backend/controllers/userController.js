const mongoose=require('mongoose');
const asyncHandler=require('express-async-handler');
const bcrypt=require('bcryptjs');
const jwt=require('jsonwebtoken');

const register=asyncHandler(async (req,res)=>{
    res.send("Register");
});

const login=asyncHandler(async (req,res)=>{
    const{username,password}=req.body;

    const user=await User.findOne({username:username});
    if(!user){
        res.status(400);
        throw new Error("Nincs ilyen felhasználó!");
    }
    if(!await bcrypt.compare(password,user.password)){
        res.status(400);
        throw new Error("Hibás jelszó!");
    }

    res.status(200).json(user);

});

const getUser=asyncHandler(async (req,res)=>{
    res.send("Get user");
});

module.exports={register,login,getUser}
