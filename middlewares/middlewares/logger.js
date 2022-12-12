const logger=(req,res,next)=>{
    
    const aktIdopont=new Date();
    const ev=aktIdopont.getFullYear();
    const honap=aktIdopont.getMonth();
    const nap=aktIdopont.getDate();
    const perc=aktIdopont.getMinutes();
    
    console.log("Logolás:"+ev+"."+(honap+1)+"."+nap);  
    console.log("Method:"+req.method);
    console.log("Host:"+req.hostname);
    console.log("Path:"+req.path);
    console.log("Body:"+JSON.stringify(req.body));
    console.log(req.headers.host);
    console.log(req.get('user-agent'));
    next(); 
}

module.exports={logger};