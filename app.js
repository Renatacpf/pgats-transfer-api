require('dotenv').config();
const express = require('express');
const cors = require('cors');
const swaggerUi = require('swagger-ui-express');
const swaggerJsdoc = require('swagger-jsdoc');
const { ApolloServer } = require('apollo-server-express');
const routes = require('./src/routes');
const graphqlSchema = require('./src/graphql/schema');
const graphqlResolvers = require('./src/graphql/resolvers');
const swaggerOptions = require('./src/docs/swagger');
const authMiddleware = require('./src/middleware/auth');

const app = express();
app.use(cors());
app.use(express.json());

// Swagger
const specs = swaggerJsdoc(swaggerOptions);
app.use('/docs', swaggerUi.serve, swaggerUi.setup(specs));

// REST routes
app.use('/', routes);

// GraphQL
// Para GraphQL, utilize src/graphql/app.js e src/graphql/server.js

module.exports = app;
