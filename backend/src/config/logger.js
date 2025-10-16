const winston = require('winston');

// Create the logger instance
const logger = winston.createLogger({
    level: process.env.NODE_ENV === 'production' ? 'info' : 'debug',
    format: winston.format.combine(
        winston.format.colorize(),
        winston.format.timestamp({ format: 'YYYY-MM-DD HH:mm:ss' }),
        winston.format.printf(({ level, message, timestamp, stack, statusCode, method, url, responseTime }) => {
            let logMessage = `${timestamp} ${level}:`;
            
            // Add request information if available
            if (method && url) {
                logMessage += ` ${method} ${url}`;
            }
            
            // Add status code if available
            if (statusCode) {
                logMessage += ` | Status: ${statusCode}`;
            }

            // Add response time if available
            if (responseTime) {
                logMessage += ` | ${responseTime}ms`;
            }
            
            // Add message
            logMessage += ` | ${message}`;
            
            // Add stack trace if available
            if (stack) {
                logMessage += `\n${stack}`;
            }
            
            return logMessage;
        })
    ),
    transports: [
        new winston.transports.Console()
    ],
    defaultMeta: { service: 'stride-backend' }
});

module.exports = logger;