const express=require('express');
const router=express.Router();

const {getKutyak,postKutya,patchKutya,deleteKutya,getKutyakByName,getKutyakByFajta,getKutyakByKor}= require('../controllers/kutyaController');

router.get('/',getKutyak);
router.get('/nev/:keresettnev',getKutyakByName);
router.get('/fajta/:keresettfajta',getKutyakByFajta);
router.get('/also/:also/felso/:felso',getKutyakByKor);
router.post('/',postKutya);
router.patch('/',patchKutya);
router.delete('/',deleteKutya);

module.exports =router;