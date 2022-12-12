const mysql=require('mysql');
const conn=mysql.createConnection({
    host:"localhost",
    user:"root",
    password:"",
    database:"backendlog"
});

const sqlLog=(req,res,next)=>{
    conn.query("INSERT INTO logs (method,host,path,body,useragent) values (?,?,?,?,?)"
    ,[req.method,req.headers.host,req.path,JSON.stringify(req.body),req.get('user-agent')]
    ,(error)=>{
        if(error){
            console.log(error);
        }

    });
    next();
}

module.exports={sqlLog};