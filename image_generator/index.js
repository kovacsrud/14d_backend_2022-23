const express=require('express');
const dotenv=require('dotenv').config();
const port=process.env.PORT || 8000;
const app=express();

app.use(express.json());
app.use('/api',require('./routes/imageGenerateRoutes'));

app.listen(port,()=>{console.log(`Running on port:${port}`)});