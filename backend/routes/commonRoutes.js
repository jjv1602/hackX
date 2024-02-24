const express=require('express');

const { protect } = require('../middlewares/authMiddleware');
const router=express.Router()

// router.route('/getdocs').get( getDoctors); 

// router.route('/get-apnmt-details/:id').get(getApnmtDetails);
// router.route('/get-apnmt-doc-details/:id').get(getApnmtDetails);



module.exports=router;