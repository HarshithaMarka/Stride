// backend/src/validators/authValidator.js
const Joi = require('joi');
const { AppError } = require('../utils/errors');
// 1. LOGIN SCHEMA 
const loginSchema = Joi.object({
    email: Joi.string().email().required().messages({
        'string.empty': 'Email is required',
        'string.email': 'Please provide a valid email',
        'any.required': 'Email is required'
    }),
    password: Joi.string().required().messages({
        'string.empty': 'Password is required',
        'any.required': 'Password is required'
    })
});

// 2. REGISTER SCHEMA (New schema for registration, including 'name')
const registerSchema = Joi.object({
    name: Joi.string().required().trim().messages({
        'string.empty': 'Name is required',
        'any.required': 'Name is required'
    }),
    email: Joi.string().email().required().messages({
        'string.empty': 'Email is required',
        'string.email': 'Please provide a valid email',
        'any.required': 'Email is required'
    }),
    password: Joi.string().min(6).required().messages({
        'string.empty': 'Password is required',
        'string.min': 'Password must be at least 6 characters long',
        'any.required': 'Password is required'
    })
});

// 3. OTP VERIFICATION SCHEMA (New schema for verifying email and OTP)
const otpSchema = Joi.object({
    email: Joi.string().email().required().messages({
        'string.empty': 'Email is required',
        'string.email': 'Please provide a valid email',
        'any.required': 'Email is required'
    }),
    otp: Joi.string().length(6).required().messages({ // Assuming 6-digit OTP
        'string.empty': 'Verification code is required',
        'string.length': 'Verification code must be 6 digits',
        'any.required': 'Verification code is required'
    })
});

// Validator Functions (Asynchronous wrappers)

const validatorWrapper = (schema) => async (data) => {
    try {
        return await schema.validateAsync(data, { abortEarly: false });
    } catch (error) {
        // Map Joi validation errors to a single error message
        const errorMessage = error.details.map(detail => detail.message).join('; ');
        throw new AppError(`Validation Error: ${errorMessage}`, 400);
    }
};

const validateLogin = validatorWrapper(loginSchema);
const validateRegister = validatorWrapper(registerSchema);
const validateOTP = validatorWrapper(otpSchema);

// Export all required functions

module.exports = {
    validateLogin,
    validateRegister, 
    validateOTP,
};