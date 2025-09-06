const User = require('../model/user');
const bcrypt = require('bcryptjs');

module.exports = {
  authenticate: (username, password) => {
    const user = User.findByUsername(username);
    if (user && bcrypt.compareSync(password, user.password)) {
      return user;
    }
    return null;
  },
  getAll: () => User.getAll(),
  getById: (id) => User.findById(id),
  create: ({ username, password }) => User.create({ username, password }),
  updateBalance: (id, amount) => User.updateBalance(id, amount)
};
