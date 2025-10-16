const logger = require('../config/logger');

const requestLogger = (req, res, next) => {
    req.startTime = process.hrtime();

    // Log request
    logger.info('Incoming request', {
        method: req.method,
        url: req.url
    });

    // Capture response status code and calculate processing time
    const originalSend = res.send;
    res.send = function (...args) {
        const diff = process.hrtime(req.startTime);
        const responseTime = (diff[0] * 1e3 + diff[1] * 1e-6).toFixed(2); // Convert to milliseconds

        logger.info('Request completed', {
            method: req.method,
            url: req.url,
            statusCode: res.statusCode,
            responseTime: responseTime
        });
        return originalSend.apply(res, args);
    };

    next();
};

module.exports = requestLogger;