require('dotenv').config();
const express = require('express');
const cors = require('cors');
const { ApolloServer } = require('apollo-server-express');
const graphqlSchema = require('./schema');
const graphqlResolvers = require('./resolvers');
const auth = require('./auth');

const app = express();
app.use(cors());
app.use(express.json());

const apolloServer = new ApolloServer({
  typeDefs: graphqlSchema,
  resolvers: graphqlResolvers,
  context: ({ req }) => ({ user: auth(req) })
});

(async () => {
  await apolloServer.start();
  apolloServer.applyMiddleware({ app, path: '/graphql' });
})();

module.exports = app;
