const authService = require('../services/authService');
const { validateLogin, validateRegister, validateOTP } = require('../validators/authValidator');
const logger = require('../config/logger');

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
    try {
        
        const validatedData = await validateLogin(req.body)
        const result = await authService.loginUser(validatedData);

    
        res.status(200).json({
            status: 'success',
            data: result
        });

    } catch (error) {
        logger.error('Login controller error:', error);
        
        next(error);
    }
};

// 4. RESEND OTP
const resendOTP = async (req, res, next) => {
    try {
        const { email } = req.body;
        const message = await authService.resendOTP(email);
        res.status(200).json({
            status: 'success',
            message: message
        });
    } catch (error) {
        logger.error('Resend OTP controller error:', error);
        next(error);
    }
};

module.exports = {
    loginUser,
    registerUser,
    verifyOTP,
    resendOTP // Added resendOTP to exports
};