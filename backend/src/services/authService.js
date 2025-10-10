const otpGenerator = require('otp-generator');
const sendVerificationEmail = require('../services/emailService');

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
// Helper function to generate OTP
generateOTP() {
    return otpGenerator.generate(6, { 
        digits: true, 
        alphabets: false, 
        upperCase: false, 
        specialChars: false 
    });
}

// 1. Handles user creation, OTP generation, and email sending
async registerUser(userData) {
    try {
        let user = await User.findOne({ email: userData.email });
        
        if (user && user.isVerified) {
             throw new AppError('User already exists and verified. Please log in.', 409);
        }
        
        if (user && !user.isVerified) {
            
        } else {
        
            user = new User(userData);
            
        }
        
        // Generate and set OTP fields
        const otp = this.generateOTP();
        const otpExpires = Date.now() + 5 * 60 * 1000; 
        
        user.otp = otp;
        user.otpExpires = otpExpires;
        user.isVerified = false; 
        await user.save();
        
        // Send OTP email using the service function
        await sendVerificationEmail(user.email, otp);
        
        return 'Registration successful! Check your email for verification code.';
        
    } catch (error) {
        logger.error('Registration service error:', error);
        throw error;
    }
}

// 2. Handles OTP verification and finalizes the account
async verifyOTP(email, otp) {
    try {
        const user = await User.findOne({ email });

        if (!user) {
            throw new AppError('User not found.', 404);
        }
        
        if (user.isVerified) {
            throw new AppError('Account already verified.', 400);
        }

        // 2. Check OTP and expiration time
        if (user.otp !== otp) {
            throw new AppError('Invalid verification code.', 400);
        }
        if (user.otpExpires < Date.now()) {
            throw new AppError('Verification code has expired.', 400);
        }

        // 3. Verification successful: Update status and clean up fields
        user.isVerified = true;
        user.otp = undefined; 
        user.otpExpires = undefined; 
        
    
        if (!user.role) user.role = 'Team Member'; 

        await user.save();

        // 4. Generate token (Feature TCR-03)
        const token = this.generateToken(user);

        return {
            user: {
                id: user._id,
                name: user.name,
                email: user.email,
                role: user.role 
            },
            token
        };
        
    } catch (error) {
        logger.error('OTP verification service error:', error);
        throw error;
    }
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