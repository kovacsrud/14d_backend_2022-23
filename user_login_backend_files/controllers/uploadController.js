const asyncHandler=require('express-async-handler');
const fs=require('fs');
const {dirname}=require('path');
const appDir=dirname(require.main.filename);


const fileUpload=asyncHandler( async (req,res)=>{

    console.log(req.user.username);

    if(req.files){
        const path=appDir+"/files/";
        if(!fs.existsSync(path+req.user.username)){
            fs.mkdir(path+req.user.username,err=>(console.log(err)));
        }
             

        for(prop in req.files){
            
            console.log(req.files[prop].name);
            console.log(appDir);
            await fs.writeFile(path+req.user.username+'/'+req.files[prop].name,req.files[prop].data,err=>{console.log(err)});
        }
    }

    
    res.send("Feltöltés");
});

module.exports={fileUpload};