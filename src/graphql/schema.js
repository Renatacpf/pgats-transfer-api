const { gql } = require('apollo-server-express');

module.exports = gql`
  type User {
    id: ID!
    username: String!
    balance: Float!
  }

  type Transfer {
    id: ID!
    from: ID!
    to: ID!
    amount: Float!
    date: String!
  }

  type Query {
    users: [User!]!
    user(id: ID!): User
    transfers: [Transfer!]!
    transfersByUser(userId: ID!): [Transfer!]!
  }

  type Mutation {
    createUser(username: String!, password: String!): User!
    createTransfer(to: ID!, amount: Float!): Transfer!
  }
`;
