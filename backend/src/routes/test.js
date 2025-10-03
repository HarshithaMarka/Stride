const express = require('express');
const { NotFoundError } = require('../utils/errors');
const router = express.Router();

// Example of how to handle different scenarios
router.get('/test/:id', async (req, res, next) => {
    try {
        const id = req.params.id;
        
        // Simulating a database lookup
        if (id !== '1') {
            // For items not found in database
            throw new NotFoundError('Test item');
        }

        res.status(200).json({ 
            status: 'success',
            data: { message: 'Hello World' }
        });
    } catch (error) {
        next(error); // Pass error to error handling middleware
    }
});

module.exports = router;