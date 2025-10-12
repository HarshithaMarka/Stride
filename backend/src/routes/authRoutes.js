const authController = require('../controllers/authController');
const express = require('express');
const { loginUser, registerUser, verifyOTP } = require('../controllers/authController');
const router = express.Router();

router.post('/login', loginUser);
router.post('/register', registerUser);

router.post('/verify-otp', verifyOTP);
router.post('/resend-otp', authController.resendOTP);

module.exports = router;
