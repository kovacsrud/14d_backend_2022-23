const mongoose=require('mongoose');
const asyncHandler=require('express-async-handler');
const bcrypt=require('bcryptjs');
const jwt=require('jsonwebtoken');

const register=asyncHandler(async (req,res)=>{
    res.send("Register");
});

const login=asyncHandler(async (req,res)=>{
    res.send("Login");
});

const getUser=asyncHandler(async (req,res)=>{
    res.send("Get user");
});

module.exports={register,login,getUser}
