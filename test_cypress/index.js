const express=require('express');
const app=express();

app.use(express.json());
app.use(express.urlencoded({extended:false}));

app.listen(8000,()=>{console.log("Running")});

let tesztadat=[
    {
        id:1,
        adat:"Szöveg1"
    },
    {
        id:2,
        adat:"Szöveg2"
    },
    {
        id:3,
        adat:"Szöveg3"
    }
]

let tesztadat2="";

app.get('/',(req,res)=>{
    res.send("Backend tesztelés");
});

app.get('/adatok',(req,res)=>{
    res.json(tesztadat);
});

app.post('/ujadat',(req,res)=>{
    tesztadat.push(req.body);

    res.status(201).json({message:"Új adat beszúrva!"});
})

app.delete('/torles',(req,res)=>{
    const torlendo=req.body.id;
    tesztadat=tesztadat.filter(x=>x.id!=torlendo);
    res.status(200).json({message:"Adat törölve!"});

})
