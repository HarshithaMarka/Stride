const logger = require('../config/logger');
const { AppError } = require('../utils/errors');

const errorHandler = (err, req, res, next) => {
    // Log the error
    logger.error('Error:', {
        name: err.name,
        message: err.message,
        stack: err.stack,
        path: req.path
    });

    // If it's our custom error
    if (err instanceof AppError) {
        return res.status(err.statusCode).json({
            status: err.status,
            message: err.message
        });
    }

    // Handle MongoDB/Mongoose specific errors
    if (err.name === 'CastError') {
        return res.status(400).json({
            status: 'fail',
            message: 'Invalid data format'
        });
    }

    if (err.name === 'ValidationError') {
        return res.status(400).json({
            status: 'fail',
            message: 'Validation failed',
            errors: Object.values(err.errors).map(e => e.message)
        });
    }

    if (err.code === 11000) {
        return res.status(409).json({
            status: 'fail',
            message: 'Duplicate field value'
        });
    }

    // Default error
    res.status(500).json({
        status: 'error',
        message: process.env.NODE_ENV === 'development' ? err.message : 'Something went wrong'
    });
};

module.exports = errorHandler;