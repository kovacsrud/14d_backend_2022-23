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

module.exports={
    getKutyak
}

//SELECT kutyak.id,fajtaid,nev,kutyanev, nevid, eletkor, utolsoell FROM kutyak,kutyanevek,kutyafajtak WHERE kutyak.nevid=kutyanevek.id and kutyak.fajtaid=kutyafajtak.id 