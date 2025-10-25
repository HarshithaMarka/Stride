const authController = require('../controllers/authController');
const express = require('express');
const { loginUser, registerUser, verifyOTP } = require('../controllers/authController');
const { loginUser, logoutUser } = require('../controllers/authController');
const router = express.Router();

const { protect } = require('../middlewares/authMiddleware');

router.post('/login', loginUser);
router.post('/logout', protect, logoutUser); 

router.post('/verify-otp', verifyOTP);
router.post('/resend-otp', authController.resendOTP);

module.exports = router;
