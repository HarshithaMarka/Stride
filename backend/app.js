const express = require("express");
const requestLogger = require('./src/middlewares/requestLogger');
const errorHandler = require('./src/middlewares/errorHandler');
const notFoundHandler = require('./src/middlewares/notFoundHandler');

const userRoutes = require('./src/routes/userRoutes');

const app = express();

// Built-in middleware
app.use(express.json());

// Logging middleware
app.use(requestLogger);

// Routes
app.use('/api/users', userRoutes);

// Error handling
app.use(errorHandler);

// 404 handler - Keep this last
app.use(notFoundHandler);

module.exports = app;