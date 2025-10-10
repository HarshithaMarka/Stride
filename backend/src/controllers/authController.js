const authService = require('../services/authService');
const { validateLogin, validateRegister, validateOTP } = require('../validators/authValidator');
const logger = require('../config/logger');

// -----------------------------------------------------------
// 1. REGISTER USER (Feature UTM-01)
// -----------------------------------------------------------
const registerUser = async (req, res, next) => {
    try {
        // Assume you have a validator for registration data
        const validatedData = await validateRegister(req.body);

        // Call service to create user, generate OTP, and send email
        const message = await authService.registerUser(validatedData);

        // Respond, indicating successful registration but verification pending
        res.status(201).json({
            status: 'success',
            message: message // e.g., 'User registered. Please check email for OTP.'
        });

    } catch (error) {
        logger.error('Registration controller error:', error);
        next(error);
    }
};


// -----------------------------------------------------------
// 2. VERIFY OTP (New Feature)
// -----------------------------------------------------------
const verifyOTP = async (req, res, next) => {
    try {
        // Assume you have a validator for OTP and email/userId
        const validatedData = await validateOTP(req.body);

        // Call service to verify OTP, update isVerified: true, and return token
        const result = await authService.verifyOTP(validatedData.email, validatedData.otp);

        // Respond with the authentication token
        res.status(200).json({
            status: 'success',
            data: result // Contains token and user details
        });

    } catch (error) {
        logger.error('OTP verification controller error:', error);
        next(error);
    }
};


// -----------------------------------------------------------
// (Keep your existing loginUser function here)
// -----------------------------------------------------------
const loginUser = async (req, res, next) => {
    // ... (Your existing loginUser code) ...
};


module.exports = {
    loginUser,
    registerUser,  // Export the new function
    verifyOTP      // Export the new function
};