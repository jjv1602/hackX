const {protect}=require('../middlewares/authMiddleware')
const express=require('express')

const router=express.Router()
const { registerDoc, registerPat, authDoc, authPat }=require('../Controllers/userControllers')

// if user goes to api/users/ - it is register page
router.route('/register-doc').post(registerDoc);
router.route('/patient-reg').post(registerPat);

// if user goes to api/users/login it is login page
router.route('/login-doc').post(authDoc);
router.route('/login-patient').post(authPat);

module.exports=router;