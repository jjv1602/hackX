const express=require('express');

const { protect } = require('../middlewares/authMiddleware');
const { getDoctors, getApnmtDetails, getDocDetails } = require('../Controllers/commonControllers');
const router=express.Router()

router.route('/getDocs').get(getDoctors);
router.route('/get-apnmt-details/:id').get(getApnmtDetails);
router.route('/get-apnmt-doc-details/:id').get(getDocDetails);
module.exports=router;