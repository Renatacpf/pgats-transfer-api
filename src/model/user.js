const bcrypt = require('bcryptjs');

const users = [
  {
    id: 1,
    username: 'admin',
    password: bcrypt.hashSync('admin123', 8),
    balance: 1000
  }
];

module.exports = {
  findByUsername: (username) => users.find(u => u.username === username),
  findById: (id) => users.find(u => u.id === id),
  getAll: () => users,
  create: ({ username, password }) => {
    const id = users.length + 1;
    const user = { id, username, password: bcrypt.hashSync(password, 8), balance: 0 };
    users.push(user);
    return user;
  },
  updateBalance: (id, amount) => {
    const user = users.find(u => u.id === id);
    if (user) user.balance += amount;
    return user;
  }
};
