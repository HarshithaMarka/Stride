const jwt = require('jsonwebtoken');
const { AppError } = require('../utils/errors');
const User = require('../models/user');
const logger = require('../config/logger');

const protect = async (req, res, next) => {
    try {
        // Get token from header
        const authHeader = req.headers.authorization;
        if (!authHeader || !authHeader.startsWith('Bearer ')) {
            throw new AppError('Not authorized', 401);
        }

        const token = authHeader.split(' ')[1];

        try {
            // Verify token
            const decoded = jwt.verify(token, process.env.JWT_SECRET);

            // Get user
            const user = await User.findById(decoded.id).select('-password');
            if (!user) {
                throw new AppError('User not found', 401);
            }

            // Add user to request
            req.user = user;
            next();
        } catch (error) {
            logger.error('Token verification error:', error);
            throw new AppError('Not authorized', 401);
        }
    } catch (error) {
        next(error);
    }
};

module.exports = { protect };