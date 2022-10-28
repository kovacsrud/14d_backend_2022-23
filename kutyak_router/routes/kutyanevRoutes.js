const express=require('express');
const router=express.Router();
const {getKutyanevek,postKutyanevek,patchKutyanevek,deleteKutyanevek}=require('../controllers/kutyanevController');

router.get('/',getKutyanevek);
router.post('/',postKutyanevek);
router.patch('/',patchKutyanevek);
router.delete('/',deleteKutyanevek);

module.exports=router;