const authService = require('../services/authService');
const { validateLogin, validateRegister, validateOTP } = require('../validators/authValidator');
const logger = require('../config/logger');

// 1. REGISTER USER (Feature UTM-01)
const registerUser = async (req, res, next) => {
    try {

        const validatedData = await validateRegister(req.body);

        
        const message = await authService.registerUser(validatedData);

      
        res.status(201).json({
            status: 'success',
            message: message 
        });

    } catch (error) {
        logger.error('Registration controller error:', error);
        next(error);
    }
};

// 2. VERIFY OTP (New Feature)
const verifyOTP = async (req, res, next) => {
    try {
        const validatedData = await validateOTP(req.body);

        const result = await authService.verifyOTP(validatedData.email, validatedData.otp);

        res.status(200).json({
            status: 'success',
            data: result 
        });

    } catch (error) {
        logger.error('OTP verification controller error:', error);
        next(error);
    }
};

const loginUser = async (req, res, next) => {
    
};


module.exports = {
    loginUser,
    registerUser,  
    verifyOTP      
};