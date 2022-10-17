const express=require('express');
const cors=require('cors');
const sqlite3=require('sqlite3');
const db=new sqlite3.Database('./autok.db');
const {allAuto,getAutoMarka}=require('./dbrepo');
const dbfunc=require('./dbrepo');

const app=express();
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended:true}));

app.listen(8000,()=>{console.log("Fut a szerver")});

app.get('/',(req,res)=>{
    res.send("Autó API");
});

app.get('/all_auto',(req,res)=>{
    db.all("select * from autok",(error,rows)=>{
        if(error){
            res.send(error);
        } else {
            if(rows.length>0){
                res.json(rows);
            } else {
                res.json({message:"Nincs ilyen adat!"})
            }
        }
        
    });
});

app.get('/all_auto2',(req,res)=>{
    allAuto(db).then(res=>res.json()).then(adatok=>res.json(adatok)).catch(err=>res.send(err));
});

app.get('/all_auto3',async (req,res)=>{
    try {
        const response=await allAuto(db);
        const data=await response.json();

        res.json(data);
        
    } catch (error) {
        res.send(error);
    }

});

app.get('/marka/:marka',(req,res)=>{
    getAutoMarka(db,req.params.marka).then(res=>res.json()).then(adatok=>res.json(adatok)).catch(err=>res.json(err));
});

app.post('/ujauto',(req,res)=>{
    console.log(req.body);
    dbfunc.ujAuto(db,req.body).then(res=>res.json()).catch(err=>res.send(err));

});

app.patch('/modauto',(req,res)=>{
    dbfunc.updateAuto(db,req.body).then(res=>res.json()).catch(err=>res.send(err));
});

app.delete('/delauto',(req,res)=>{
    dbfunc.deleteAuto(db,req.body.rendszam).then(res=>res.json()).catch(err=>res.send(err));
});

