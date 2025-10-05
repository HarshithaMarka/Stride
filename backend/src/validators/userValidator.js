const Joi = require('joi');

const userValidationSchema = {
  register: Joi.object({
    name: Joi.string()
      .required()
      .trim()
      .min(2)
      .max(50)
      .messages({
        'string.empty': 'Name is required',
        'string.min': 'Name must be at least 2 characters long',
        'string.max': 'Name cannot exceed 50 characters'
      }),
    email: Joi.string()
      .required()
      .trim()
      .email()
      .messages({
        'string.empty': 'Email is required',
        'string.email': 'Please enter a valid email address'
      }),
    password: Joi.string()
      .required()
      .min(6)
      .messages({
        'string.empty': 'Password is required',
        'string.min': 'Password must be at least 6 characters long'
      })
  })
};

const validateRegisterUser = async (data) => {
  try {
    return await userValidationSchema.register.validateAsync(data, { abortEarly: false });
  } catch (error) {
    const errors = error.details.map(detail => ({
      field: detail.path[0],
      message: detail.message
    }));
    throw { 
      status: 400, 
      message: 'Validation failed', 
      errors 
    };
  }
};

module.exports = {
  validateRegisterUser
};