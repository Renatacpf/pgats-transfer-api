const Transfer = require('../model/transfer');
const User = require('../model/user');

module.exports = {
  getAll: () => Transfer.getAll(),
  create: ({ from, to, amount }) => {
    const sender = User.findById(from);
    const receiver = User.findById(to);
    if (!sender || !receiver || sender.balance < amount) {
      throw new Error('Invalid transfer');
    }
    User.updateBalance(from, -amount);
    User.updateBalance(to, amount);
    return Transfer.create({ from, to, amount });
  },
  getByUser: (userId) => Transfer.getByUser(userId)
};
