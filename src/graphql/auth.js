const jwt = require('jsonwebtoken');

module.exports = (req) => {
  const authHeader = req.headers['authorization'];
  if (!authHeader) return null;
  const token = authHeader.split(' ')[1];
  if (!token) return null;
  try {
    const secret = process.env.JWT_SECRET || 'supersecret';
    return jwt.verify(token, secret);
  } catch (err) {
    return null;
  }
};
