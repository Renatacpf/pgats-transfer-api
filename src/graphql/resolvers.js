const userService = require('../service/userService');
const transferService = require('../service/transferService');

module.exports = {
  Query: {
    users: () => userService.getAll(),
    user: (_, { id }) => userService.getById(Number(id)),
    transfers: () => transferService.getAll(),
    transfersByUser: (_, { userId }) => transferService.getByUser(Number(userId))
  },
  Mutation: {
    createUser: (_, { username, password }) => userService.create({ username, password }),
    createTransfer: (_, { to, amount }, { user }) => {
      if (!user) throw new Error('Não autorizado');
      return transferService.create({ from: user.id, to: Number(to), amount });
    }
  }
};
