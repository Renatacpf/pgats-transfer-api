const transferService = require('../service/transferService');

module.exports = {
  getAll: (req, res) => {
    res.json(transferService.getAll());
  },
  create: (req, res) => {
    const { to, amount } = req.body;
    const from = req.user.id;
    try {
      const transfer = transferService.create({ from, to, amount });
      res.status(201).json(transfer);
    } catch (err) {
      res.status(400).json({ error: err.message });
    }
  },
  getByUser: (req, res) => {
    const userId = Number(req.params.userId);
    res.json(transferService.getByUser(userId));
  }
};
