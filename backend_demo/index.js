const express=require('express');
const cors=require('cors');
const { json } = require('express');
const app=express();

app.use(cors());

let minta=
    [
        {id:123,
        termeknev:"nyomtató",
        marka:"Canon"
        },
        {id:124,
          termeknev:"egér",
          marka:"Logitech"
        },
        {id:445,
          termeknev:"router",
          marka:"TpLink"
        },
        {
            id:678,
            termeknev:"nyomtató",
            marka:"Xerox"   
        }  

    ]
    


app.listen(8000,()=>{
 console.log("Fut a szerver!");
});

app.get('/',(req,res)=>{
    res.send("Backend Demo!");
});

app.get('/printer/:marka',(req,res)=>{

    let marka=req.params.marka;
    let result=minta.filter(x=>x.termeknev=="nyomtató" && x.marka.toLowerCase()==marka.toLowerCase());
    if(result.length>0){
        res.status(200).json(result);
    } else {
        res.status(404).send("Nincs ilyen nyomtató!");
    }
    
});

app.get('/marka/:marka',(req,res)=>{
   
    let marka=req.params.marka;
    let result=minta.filter(x=>x.marka.toLowerCase()==marka.toLowerCase());
    if(result.length>0){
        res.status(200).json(result);
    } else {
        res.status(404).send("Nincs ilyen termék!");
    }

});