const sinon = require('sinon');
const chai = require('chai');
const expect = chai.expect;
const userController = require('../../../src/controller/userController');
const userService = require('../../../src/service/userService');

describe('userController', () => {
  afterEach(() => sinon.restore());

  it('deve retornar todos os usuários', () => {
    const req = {};
    const res = { json: sinon.spy() };
    sinon.stub(userService, 'getAll').returns([{ id: 1, username: 'admin', balance: 1000 }]);
    userController.getAll(req, res);
    expect(res.json.calledWith([{ id: 1, username: 'admin', balance: 1000 }])).to.be.true;
  });

  it('deve retornar o usuário se encontrado', () => {
    const req = { params: { id: 1 } };
    const res = { json: sinon.spy(), status: sinon.stub().returnsThis() };
    sinon.stub(userService, 'getById').returns({ id: 1, username: 'admin', balance: 1000 });
    userController.getById(req, res);
    expect(res.json.calledWith({ id: 1, username: 'admin', balance: 1000 })).to.be.true;
  });

  it('deve retornar 404 se usuário não encontrado', () => {
    const req = { params: { id: 99 } };
    const res = { json: sinon.spy(), status: sinon.stub().returnsThis() };
    sinon.stub(userService, 'getById').returns(null);
    userController.getById(req, res);
    expect(res.status.calledWith(404)).to.be.true;
    expect(res.json.calledWith({ error: 'User not found' })).to.be.true;
  });
});
