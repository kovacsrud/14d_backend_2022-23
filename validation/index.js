const express=require('express');
const cors=require('cors');
const app=express();
const {check,body,validationResult}=require('express-validator');

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended:true}));

app.listen(8000,()=>console.log("Running"));

app.get('/',(req,res)=>{
    res.send("Adatok ellenőrzése");
});

app.post('/reg',
check('usernev').whitelist("abcdefghijklmnopqrstuvw").isLength({min:3,max:20}).withMessage("3 és 20 között legyen").trim().escape(),
body('password').isLength({min:6,max:20}).withMessage("min 6 karakter!"),
body('teljesnev').isLength({min:7}).withMessage("min 7 karakter").trim().escape(),
body('email').isEmail().withMessage("Ez nem e-mail cím!"),
body('szuldatum').isDate().withMessage("Dátumot kell megadni!")
,(req,res)=>{
    const errors=validationResult(req);
    if(!errors.isEmpty()){
        res.status(400).json({Hibák:errors.array()})
    } else {
        console.log(req.body);
        res.send("Sikeres regisztráció!");
    }

});