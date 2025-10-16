const User = require('../models/user');
const { AppError } = require('../utils/errors');

class UserService {
  async createUser(userData) {
    // Check if user already exists
    const existingUser = await User.findOne({ email: userData.email });
    if (existingUser) {
      throw new AppError('User with this email already exists', 400);
    }

    // Create new user
    const user = await User.create(userData);

    // Return user without sensitive information
    return this.sanitizeUser(user);
  }

  sanitizeUser(user) {
    return {
      id: user._id,
      name: user.name,
      email: user.email,
      createdAt: user.createdAt
    };
  }
}

module.exports = new UserService();