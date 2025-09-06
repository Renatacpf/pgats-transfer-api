const chai = require('chai');
const expect = chai.expect;
const request = require('supertest');
const app = require('../../../src/graphql/app');
let token;

describe('GraphQL Controller', () => {
  before(async () => {
    const res = await request(app)
      .post('/auth/login')
      .send({ username: 'admin', password: 'admin123' });
    token = res.body.token;
  });

  it('deve consultar usuários', async () => {
    const res = await request(app)
      .post('/graphql')
      .send({ query: '{ users { id username balance } }' })
      .set('Authorization', `Bearer ${token}`);
    expect(res.body.data.users).to.be.an('array');
  });

  it('deve criar usuário via mutation', async () => {
    const res = await request(app)
      .post('/graphql')
      .send({ query: 'mutation { createUser(username: "gqluser", password: "gqlpass") { id username } }' });
    expect(res.body.data.createUser.username).to.equal('gqluser');
  });
});
