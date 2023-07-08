const { gql } = require('apollo-server-express');

const typeDefs = gql`
  type User {
    _id: ID
    username: String!
    email: String!
    password: String!
    savedBook: [Book]
  }

  type Auth {
    token: ID!
    profile: Profile
  }

  type Query {
    users: [User]!
    user(username: String!): User
  }

  type Mutation {
    addUser(username: String!, email: String!, password: String!): Auth
    login(email: String!, password: String!): Auth

    addBook(userId: ID!,book: String!): User
    removeBook(userId: ID!,book: String!): User
  }

`;


module.exports = typeDefs;