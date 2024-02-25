const express=require('express');
const { protect } = require('../middlewares/authMiddleware');
const { createApnmt, getMedicine, postMedicine, fetchReports } = require('../Controllers/apnmtController');
const router=express.Router()


router.route('/create-apnmt').post(createApnmt); 

router.route('/get-medicine').get(getMedicine);
router.route('/post-medicine').post(postMedicine);


// router.route('/get-response').get(getApiResponse);
// router.route('/post-response').post(postApiResponse);

router.route('/fetch-reports/:id').get(fetchReports);

module.exports=router;