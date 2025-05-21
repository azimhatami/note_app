const jwt = require('jsonwebtoken');
const dotenv = require('dotenv');
dotenv.config();
const SECRET = process.env.ACCESS_TOKEN_SECRET;

const generateToken = (user) => {
  return jwt.sign(
    { id: user._id, role: user.role },
    SECRET,
    { expiresIn: '7d' }
  );
};

const verifyToken = (token) => {
  return jwt.verify(token, SECRET);
};

module.exports = { generateToken, verifyToken };

