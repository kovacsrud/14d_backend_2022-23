const express=require('express');
const router=express.Router();
const {getKutyak}= require('../controllers/kutyaController');

router.get('/',getKutyak);

module.exports =router;