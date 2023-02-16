const express=require('express');
const router=express.Router();
const {protect}=require('../mwares/authMiddleware');
const {register,login,getUser,modifyUser}=require('../controllers/userController');

router.post('/register',register);
router.post('/login',login);
router.get('/',protect,getUser);
router.get('/adatmodositas',protect,modifyUser);


module.exports=router;