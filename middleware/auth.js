const jwt = require('jsonwebtoken');
const dotenv = require('dotenv');
dotenv.config();


const authenticateToken = (req, res, next) => {
  const authHeader = req.headers['authorization'];
  const token = authHeader && authHeader.split(' ').[1];

  if (!token) return res.sendStatus(401);

  jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, (error, user) => {
    if (error) return res.sendStatus(403);
    req.user = user;
    next();
  })
}
