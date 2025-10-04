require('dotenv').config();
const app = require('./app');
const logger = require('./src/config/logger');
const connectDB = require('./src/config/db.js'); 

const PORT = process.env.PORT || 3000;

const startServer = async () => {
    try {
        await connectDB();
        app.listen(PORT, () => {
            logger.info(`Server running,at port ${PORT}`);
        });
    } catch (error) {
        logger.error('Failed to start server:', error);
        process.exit(1);
    }
};

startServer();