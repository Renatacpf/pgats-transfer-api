const userService = require('../service/userService');

module.exports = {
  getAll: (req, res) => {
    res.json(userService.getAll());
  },
  getById: (req, res) => {
    const user = userService.getById(Number(req.params.id));
      if (!user) {
        res.status(404);
        return res.json({ error: 'User not found' });
      }
    res.json(user);
  },
  create: (req, res) => {
    const { username, password } = req.body;
    if (!username || !password) return res.status(400).json({ error: 'Campos obrigatórios ausentes' });
    const user = userService.create({ username, password });
    res.status(201).json(user);
  }
};
