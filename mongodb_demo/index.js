const express=require('express');
const cors=require('cors');
const dotenv=require('dotenv').config();
const {errorHandler}=require('./mwares/errorMiddleware');
const asyncHandler=require('express-async-handler');
const mongoose=require('mongoose');
const bcrypt=require('bcryptjs');
mongoose.set('strictQuery', false);
const User=require('./models/User');

const app=express();
app.use(express.json());
app.use(express.urlencoded({extended:false}));
app.use(cors());
app.use(errorHandler);

mongoose.connect('mongodb://localhost:27017/login'
,()=>{console.log("Connected")}
,(e)=>{console.log(e)});

app.listen(8000,()=>{console.log('Running')});

app.get('/',(req,res)=>{
    res.send('Mongodb demo');
});

app.get('/user/:username',asyncHandler(async (req,res)=>{
    const username=req.params.username;
    const user=await User.findOne({username:username});

    if(!user){
        res.status(404);
        throw new Error("Nincs ilyen felhasználó");
    }

    res.status(200).json(user);
}))

app.post('/',asyncHandler(async (req,res)=>{
    const {username,password,email,age}=req.body;
    const user=await User.findOne({username:username});
    if(user){
        res.status(400);
        throw new Error("A felhasználónév foglalt!");
    }
    const e_mail=await User.findOne({email:email});
    if(e_mail){
        res.status(400);
        throw new Error("Ezzel az e-mail-el már regisztráltak!");
    }
    if(!username || !password || !email){
        res.status(400);
        throw new Error("Hiányos adatok!");
    }
        
    const hashedPassword=await bcrypt.hash(password,10);

    const ujUser=await User.create({
        username:username,
        password:hashedPassword,
        email:email,
        age:age
    });

    res.json(ujUser);


}))

app.post('/belepes',asyncHandler(async (req,res)=>{
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


}));