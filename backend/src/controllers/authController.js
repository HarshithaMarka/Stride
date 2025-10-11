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

const logoutUser = async (req, res, next) => {
    try {
        // req.user is attached by the protect middleware
        const user = req.user;
        if (!user) {
            return res.status(401).json({ status: 'fail', message: 'Not authenticated' });
        }

    // Update lastLogout to now to invalidate existing tokens
    user.lastLogout = new Date();
        await user.save();

        res.status(200).json({ status: 'success', message: 'Logged out successfully' });
    } catch (error) {
        logger.error('Logout controller error:', error);
        next(error);
    }
};

module.exports = {
    loginUser,
    logoutUser
};