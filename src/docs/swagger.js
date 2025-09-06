module.exports = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'PGATS Transfer API',
      version: '1.0.0',
      description: 'API REST para usuários e transferências com autenticação JWT. Documentação atualizada.'
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
    security: [{ bearerAuth: [] }],
  },
  apis: ['./src/routes/*.js'],
};
