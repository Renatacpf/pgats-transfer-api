const transfers = [];

module.exports = {
  getAll: () => transfers,
  create: ({ from, to, amount }) => {
    const id = transfers.length + 1;
    const transfer = { id, from, to, amount, date: new Date() };
    transfers.push(transfer);
    return transfer;
  },
  getByUser: (userId) => transfers.filter(t => t.from === userId || t.to === userId)
};
