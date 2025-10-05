const Joi = require('joi');
const { AppError } = require('../utils/errors');

const loginSchema = Joi.object({
    email: Joi.string()
        .email()
        .required()
        .messages({
            'string.empty': 'Email is required',
            'string.email': 'Please provide a valid email'
        }),
    password: Joi.string()
        .required()
        .messages({
            'string.empty': 'Password is required'
        })
});

const validateLogin = async (data) => {
    try {
        return await loginSchema.validateAsync(data, { abortEarly: false });
    } catch (error) {
        throw new AppError('Validation Error', 400, error.details.map(detail => detail.message));
    }
};

module.exports = {
    validateLogin
};