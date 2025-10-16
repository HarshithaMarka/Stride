const express = require('express');
const { loginUser, logoutUser } = require('../controllers/authController');
const router = express.Router();

const { protect } = require('../middlewares/authMiddleware');

router.post('/login', loginUser);
router.post('/logout', protect, logoutUser);

module.exports = router;