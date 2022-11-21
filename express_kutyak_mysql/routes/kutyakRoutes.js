const express=require('express');
const router=express.Router();
const {getKutyak,postKutya,patchKutya,deleteKutya}= require('../controllers/kutyaController');

router.get('/',getKutyak);
router.post('/',postKutya);
router.patch('/',patchKutya);
router.delete('/',deleteKutya);

module.exports =router;