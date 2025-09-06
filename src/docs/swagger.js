module.exports = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'PGATS Transfer API',
      version: '1.0.0',
      description: 'API REST e GraphQL para usuários e transferências, com autenticação JWT, testes automatizados e CI.'
    },
    servers: [
      { url: 'http://localhost:4010', description: 'REST Server' }
    ],
    components: {
      securitySchemes: {
        bearerAuth: {
          type: 'http',
          scheme: 'bearer',
          bearerFormat: 'JWT'
        }
      }
    },
  // Removido 'security' global para que só endpoints anotados exibam o cadeado
  },
  apis: ['./src/routes/*.js'],
};
