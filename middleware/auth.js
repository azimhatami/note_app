const jwt = require('jsonwebtoken');
const dotenv = require('dotenv');
dotenv.config();

const authenticateToken = (req, res, next) => {
  const authHeader = req.headers['authorization'];
  const token = authHeader && authHeader.split(' ')[1]; 

  if (!token) return res.status(401).json({ message: 'Access token is missing' });

  jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, (error, user) => {
    if (error) {
      return res.status(403).json({
        message: 'Invalid or expired token',
        error: error.message
      });
    }
    req.user = user;
    next();
  });
};

module.exports = {
  authenticateToken,
};
