const bcrypt = require("bcrypt");

// HASH PASSWORD

exports.hashPassword = async (password) => {
  try {
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);
    return hashedPassword;
  } catch (error) {
    console.error("Error hashing password:", error);
    throw error;
  }
};
exports.comparePassword = async (password, hashed) => {
  try {
    return await bcrypt.compare(password, hashed);
  } catch (error) {
    console.error("Error comparing password:", error);
    throw error;
  }
};
