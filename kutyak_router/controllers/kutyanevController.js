const sqlite3=require('sqlite3');
const db=new sqlite3.Database('./kutyak.db');

const getKutyanevek=(req,res)=>{
    db.all("select * from kutyanevek",(err,rows)=>{
        if(err){
            res.send(err);
        } else {
            res.json(rows);
        }

    });
    //res.json({message:"Kutyanevek lekérése"});
}

const postKutyanevek=(req,res)=>{
    db.run("insert into kutyanevek (kutyanev) values(?)"
    ,[req.body.kutyanev],
    (err)=>{
        if(err){
            res.send(err);
        } else {
            res.json({message:"Adat beszúrva!"});
        }
    })
}

const patchKutyanevek=(req,res)=>{
    db.run("update kutyanevek set kutyanev=? where Id=?"
    ,[req.body.kutyanev,req.body.Id],
    (err)=>{
        if(err){
            res.send(err);
        } else {
            res.json({message:"Adat módosítva!"});
        }
    });
}

const deleteKutyanevek=(req,res)=>{
    db.run("delete from kutyanevek where Id=?"
    ,[req.body.Id],
    (err)=>{
        if(err){
            res.send(err);
        } else {
            res.json({message:"Adat törölve!"});
        }
    });
}

module.exports={
    getKutyanevek,
    postKutyanevek,
    patchKutyanevek,
    deleteKutyanevek
}