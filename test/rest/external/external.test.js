const chai = require('chai');
const expect = chai.expect;
const request = require('supertest');
const { spawn } = require('child_process');
let appUrl = 'http://localhost:4010';
let token;

describe('HTTP Externo REST', function() {
  this.timeout(10000);
  let server;
  before(done => {
    server = require('child_process').spawn('node', ['server.js'], { stdio: 'inherit' });
    setTimeout(done, 2000);
  });
  after(() => {
    server.kill();
  });

  it('deve acessar a documentação Swagger', async () => {
  const res = await request(appUrl).get('/docs');
    expect([200, 301]).to.include(res.status);
  });

  it('deve autenticar e obter token', async () => {
    const res = await request(appUrl)
      .post('/auth/login')
      .send({ username: 'admin', password: 'admin123' });
    expect(res.body.token).to.be.a('string');
    token = res.body.token;
  });

  it('deve acessar usuários autenticado', async () => {
    const res = await request(appUrl)
      .get('/users')
      .set('Authorization', `Bearer ${token}`);
    if (res.status !== 200) {
      console.error('Resposta:', res.body);
    }
    expect(res.status).to.equal(200);
  });
});
