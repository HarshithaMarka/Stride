const authService = require('../services/authService');
const { validateLogin } = require('../validators/authValidator');
const logger = require('../config/logger');

const loginUser = async (req, res, next) => {
    try {
        // Validate request data
        const validatedData = await validateLogin(req.body);
        
        // Login user using service
        const result = await authService.loginUser(validatedData.email, validatedData.password);

        res.status(200).json({
            status: 'success',
            data: result
        });
    } catch (error) {
        logger.error('Login controller error:', error);
        next(error);
    }
};

module.exports = {
    loginUser
};