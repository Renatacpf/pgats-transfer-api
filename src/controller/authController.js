const jwt = require('jsonwebtoken');
const userService = require('../service/userService');

module.exports = {
  login: (req, res) => {
    const { username, password } = req.body;
    const user = userService.authenticate(username, password);
    if (!user) {
      return res.status(401).json({ error: 'Credenciais inválidas' });
    }
    const secret = process.env.JWT_SECRET || 'supersecret';
    const token = jwt.sign({ id: user.id, username: user.username }, secret, { expiresIn: '1h' });
    res.json({ token });
  }
};
