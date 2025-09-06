const chai = require('chai');
const expect = chai.expect;
const request = require('supertest');
const { spawn } = require('child_process');
let appUrl = 'http://localhost:4020';
let token;

describe('HTTP Externo GraphQL', function() {
  this.timeout(10000);
  let server;
  before(done => {
    server = require('child_process').spawn('node', ['server.js'], { stdio: 'inherit' });
    setTimeout(done, 2000);
  });
  after(() => {
    server.kill();
  });

  it('deve acessar o endpoint GraphQL', async () => {
  const res = await request(appUrl).post('/graphql').send({ query: '{ users { id username balance } }' });
    expect([200, 400]).to.include(res.status);
  });

  it('deve autenticar e consultar usuários', async () => {
    const login = await request(appUrl)
      .post('/auth/login')
      .send({ username: 'admin', password: 'admin123' });
    token = login.body.token;
    const res = await request(appUrl)
      .post('/graphql')
      .set('Authorization', `Bearer ${token}`)
      .send({ query: '{ users { id username balance } }' });
    expect(res.status).to.equal(200);
    expect(res.body.data.users).to.be.an('array');
  });
});
