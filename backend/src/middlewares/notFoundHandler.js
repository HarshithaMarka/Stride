const logger = require('../config/logger');

const notFoundHandler = (req, res) => {
    logger.warn(`Route not found: ${req.method} ${req.url}`);
    res.status(404).json({
        status: 'error',
        message: 'Route not found'
    });
};

module.exports = notFoundHandler;