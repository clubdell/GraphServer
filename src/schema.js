import { makeExecutableSchema } from 'graphql-tools'
import { MongoClient, ObjectId } from 'mongodb';

async () => {

  const database = await MongoClient.connect('mongodb://localhost:27017/devschema');
  const Users = database.collection('users');

// Schema
  const typeDefs = `
    type User {
      matricula: Int!
      fullName: String!
      password: String!
    }

    type Query {
      user(matricula: Int!): User
    }

    type Mutation {
      addUser(matricula: Int!, fullName: String!, password: String!): User
      removeUser(matricula: Int!): User
      editUser(matricula: Int!): User
    }

    schema {
      query: Query
      mutation: Mutation
    }
  `;

  const resolvers = {
    Query: {
      user: async (_, { matricula }) => await Users.findOne(ObjectId(matricula))
    },
    Mutation: {
      // TODO: Add methods logic
    }
  };

  const schema = makeExecutableSchema({
    typeDefs,
    resolvers
  });
}
