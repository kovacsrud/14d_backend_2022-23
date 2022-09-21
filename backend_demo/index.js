const express=require('express');
const cors=require('cors');

const app=express();

app.use(cors());
app.use(express.urlencoded({extended:true}));
app.use(express.json());

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
        {id:678,
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

app.get('/osszestermek',(req,res)=>{
    res.json(minta);
})

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

app.post('/ujtermek',(req,res)=>{
    //Valahogy hozzá kellene jutni a küldött adatokhoz..
    console.log(req.body);
    let ujadat=req.body;
    minta=[...minta,ujadat];
    res.json({message:"Új adat beszúrva!"});

});

app.patch('/termekmodositas',(req,res)=>{
    
    let adat=req.body;
    let modositando=minta.findIndex(x=>x.id===adat.id);
    if(modositando>-1){
        minta[modositando]=adat;
        console.log(modositando);
        console.log(minta);
        res.json({message:"Adat módosítva"});
    } else {
        res.json({message:"Adat nem található"});
    }
 
});

app.delete('/termektorles/:id',(req,res)=>{
    let id=req.params.id;
    minta=minta.filter(x=>x.id !=id);
    res.json({message:id+" id törölve"});
});