const jwt = require('jsonwebtoken');
const User = require('../models/user');
const { AppError } = require('../utils/errors');
const logger = require('../config/logger');

class AuthService {
    generateToken(user) {
        return jwt.sign(
            {
                id: user._id
            },
            process.env.JWT_SECRET,
            { expiresIn: process.env.JWT_EXPIRES_IN }
        );
    }

    async loginUser(email, password) {
        try {
            // Find user by email
            const user = await User.findOne({ email });
            
            if (!user) {
                throw new AppError('Invalid email or password', 401);
            }

            // Check password
            const isPasswordValid = await user.isValidPassword(password);
            
            if (!isPasswordValid) {
                throw new AppError('Invalid email or password', 401);
            }

            // Generate token
            const token = this.generateToken(user);

            // Update last login
            user.lastLogin = new Date();
            await user.save();

            return {
                user: {
                    id: user._id,
                    name: user.name,
                    email: user.email
                },
                token
            };
        } catch (error) {
            logger.error('Login error:', error);
            throw error;
        }
    }
}

module.exports = new AuthService();