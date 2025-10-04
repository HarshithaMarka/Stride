const userService = require('../services/userService');
const { validateRegisterUser } = require('../validators/userValidator');
const { AppError } = require('../utils/errors');

const registerUser = async (req, res, next) => {
  try {
    // Validate request data
    const validatedData = await validateRegisterUser(req.body);
    
    // Create user using service
    const user = await userService.createUser(validatedData);

    res.status(201).json({
      status: 'success',
      data: {
        user
      }
    });
  } catch (error) {
    // Pass validation errors as is
    if (error.status === 400 && error.errors) {
      return res.status(400).json({
        status: 'error',
        message: error.message,
        errors: error.errors
      });
    }
    next(error);
  }
};

module.exports = {
  registerUser
};