const mongoose = require('mongoose');
const MONGO_URI = process.env.MONGO_URI; 
const connectDB = async () => {
  try {
    if (!MONGO_URI) {
      console.error("FATAL ERROR: MONGO_URI is not defined in the environment variables.");
      process.exit(1);
    } 
    await mongoose.connect(MONGO_URI);
    console.log('MongoDB Atlas connected successfully to StrideDB.');
    
  } catch (error) {
    console.error('MongoDB connection failed:', error.message);
    process.exit(1);
  }
};
module.exports = connectDB;