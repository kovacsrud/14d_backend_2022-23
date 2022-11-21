const mysql= require('mysql');
const conn=mysql.createConnection({
    "host":"localhost",
    "user":"root",
    "password":"",
    "database":"kutyak"
});

const getKutyak=(req,res)=>{
    conn.query("SELECT kutyak.id,fajtaid,nev,kutyanev, nevid, eletkor, utolsoell FROM kutyak,kutyanevek,kutyafajtak WHERE kutyak.nevid=kutyanevek.id and kutyak.fajtaid=kutyafajtak.id",(err,rows)=>{
        if(err){
            res.status(400).send(err);
        } else {
            res.json(rows);
        }
    })
}

const postKutya=(req,res)=>{
    const {nevid,fajtaid,eletkor,utolsoell}=req.body;
    conn.query("INSERT INTO kutyak (nevid,fajtaid,eletkor,utolsoell) values(?,?,?,?)"
    ,[nevid,fajtaid,eletkor,utolsoell]
    ,(err,result)=>{
        if(err){
            res.status(400).send(err);
        } else {
            res.json({message:"Adat beszúrva!"+result.affectedRows});
        }
    })
}

const patchKutya=(req,res)=>{
    const {id,nevid,fajtaid,eletkor,utolsoell}=req.body;
    conn.query("UPDATE kutyak SET nevid=?,fajtaid=?,eletkor=?,utolsoell=? WHERE id=?"
    ,[nevid,fajtaid,eletkor,utolsoell,id]
    ,(err,result)=>{
        if(err){
            res.status(400).send(err);
        } else {
            res.json({message:"Adat módosítva!"+result.affectedRows});
        }
    })
}

const deleteKutya=(req,res)=>{
    const {id}=req.body;
    conn.query("DELETE FROM kutyak WHERE id=?"
    ,[id]
    ,(err,result)=>{
        if(err){
            res.status(400).send(err);
        } else {
            res.json({message:"Adat törölve!"+result.affectedRows});
        }
    })
}

module.exports={
    getKutyak,
    postKutya,
    patchKutya,deleteKutya
}

//SELECT kutyak.id,fajtaid,nev,kutyanev, nevid, eletkor, utolsoell FROM kutyak,kutyanevek,kutyafajtak WHERE kutyak.nevid=kutyanevek.id and kutyak.fajtaid=kutyafajtak.id 