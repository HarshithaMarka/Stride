const express = require("express");
const { registerUser, verifyOtp } = require("../controllers/userController");

const router = express.Router();

router.post("/register", registerUser);
router.post("/verify-otp", verifyOtp);
router.post("/login", loginUser);

