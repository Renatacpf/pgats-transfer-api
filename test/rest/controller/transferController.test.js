const sinon = require('sinon');
const chai = require('chai');
const expect = chai.expect;
const transferController = require('../../../src/controller/transferController');
const transferService = require('../../../src/service/transferService');

describe('transferController', () => {
  afterEach(() => sinon.restore());

  it('deve listar transferências', () => {
    const req = {};
    const res = { json: sinon.spy() };
    sinon.stub(transferService, 'getAll').returns([{ id: 1, from: 1, to: 2, amount: 10 }]);
    transferController.getAll(req, res);
    expect(res.json.calledWith([{ id: 1, from: 1, to: 2, amount: 10 }])).to.be.true;
  });

  it('deve criar transferência', () => {
    const req = { user: { id: 1 }, body: { to: 2, amount: 10 } };
    const res = { status: sinon.stub().returnsThis(), json: sinon.spy() };
    sinon.stub(transferService, 'create').returns({ id: 1, from: 1, to: 2, amount: 10 });
    transferController.create(req, res);
    expect(res.status.calledWith(201)).to.be.true;
    expect(res.json.calledWith({ id: 1, from: 1, to: 2, amount: 10 })).to.be.true;
  });
});
