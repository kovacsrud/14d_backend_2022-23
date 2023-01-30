const express=require('express');
const cors=require('cors');
const dotenv=require('dotenv').config();
const {errorHandler}=require('./mwares/errorMiddleware');
const asyncHandler=require('express-async-handler');
const bcrypt=require('bcryptjs');
const User=require('./models/User');
const {connect}=require('./db');

const app=express();

app.use(express.json());
app.use(express.urlencoded({extended:false}));
app.use(cors());
app.use('/api/user',require('./routes/userRoutes'));
app.use(errorHandler);

connect();

app.listen(process.env.PORT,()=>{console.log('Running, port:'+process.env.PORT)});

app.get('/',(req,res)=>{
    res.send('User login');
});