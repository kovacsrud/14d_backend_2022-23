const express=require('express');
const dotenv=require('dotenv').config();
const cors=require('cors');

const app=express();
const {logger}=require('./middlewares/logger');
const {sqlLog}=require('./middlewares/sqlLog');
const {errorHandler}=require('./middlewares/errorMiddleware');
const asyncHandler=require('express-async-handler');



app.use(express.json());
app.use(express.urlencoded({extended:false}));
app.use(cors());
app.use(logger);
app.use(sqlLog);
app.use(errorHandler);

app.listen(process.env.PORT,()=>{console.log("Running")});

app.get('/',(req,res)=>{
    res.send("Middlewares");
});

app.get('/szam/:szam',asyncHandler(async (req,res)=>{

    let szam=req.params.szam;

    if(szam>10){
        //res.json({message:"Nem megfelelő szám!"});
        throw new Error("Nem megfelelő szám!");
        
    }

    res.json({szam:req.params.szam})
}))

app.post('/post',(req,res)=>{

    res.send("Post");
});