const User = require("../models/user");   // fixing case sensitivity
const Otp = require('../models/Otp');
const bcrypt = require("bcryptjs");
const sendEmail = require("../utils/sendEmail"); // we'll create this
const jwt = require("jsonwebtoken");

// REGISTER USER (Step 1: Send OTP)
exports.registerUser = async (req, res) => {
  try {
    const { email, password } = req.body;

    // Check if user already exists
    const existingUser = await User.findOne({ email });
    if (existingUser) return res.status(400).json({ msg: "User already exists" });

    // Generate 6-digit OTP
    const otp = Math.floor(100000 + Math.random() * 900000).toString();

    // Save OTP with expiry (5 mins)
    await Otp.create({
      email,
      otp,
      expiresAt: Date.now() + 5 * 60 * 1000
    });

    // Send OTP email
    await sendEmail(email, "Verify your account", `Your OTP is ${otp}`);

    // Don’t create user yet, wait until OTP verified
    res.json({ msg: "OTP sent to your email. Please verify to complete registration." });
  } catch (err) {
    console.error(err);
    res.status(500).json({ msg: "Server error" });
  }
};

// VERIFY OTP (Step 2: Create User after OTP check)
exports.verifyOtp = async (req, res) => {
  try {
    const { email, password, otp } = req.body;

    // Find OTP in DB
    const validOtp = await Otp.findOne({ email, otp });
    if (!validOtp) return res.status(400).json({ msg: "Invalid OTP" });

    if (validOtp.expiresAt < Date.now()) {
      await Otp.deleteOne({ _id: validOtp._id });
      return res.status(400).json({ msg: "OTP expired" });
    }

    // Hash password
    const hashedPassword = await bcrypt.hash(password, 10);

    // Create user
    const user = new User({
      email,
      password: hashedPassword,
      isVerified: true
    });
    await user.save();

    // Delete OTP after use
    await Otp.deleteOne({ _id: validOtp._id });

    // (Optional) Issue JWT token
    const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, { expiresIn: "1h" });

    res.json({ msg: "Account created successfully!", token });
  } catch (err) {
    console.error(err);
    res.status(500).json({ msg: "Server error" });
  }
};
