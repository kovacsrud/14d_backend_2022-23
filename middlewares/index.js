const express=require('express');
const cors=require('cors');
const { application } = require('express');
const app=express();
const {logger}=require('./middlewares/logger');
const {sqlLog}=require('./middlewares/sqlLog');
const asyncHandler=require('express-async-handler');


app.use(express.json());
app.use(express.urlencoded({extended:false}));
app.use(cors());
app.use(logger);
app.use(sqlLog);

app.listen(8000,()=>{console.log("Running")});

app.get('/',(req,res)=>{
    res.send("Middlewares");
});

app.get('/szam/:szam',(req,res)=>{

    let szam=req.params.szam;

    if(szam>10){
        res.json({message:"Nem megfelelő szám!"});
        
    }

    res.json({szam:req.params.szam})
})

app.post('/post',(req,res)=>{

    res.send("Post");
});