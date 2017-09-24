import { find, filter } from 'lodash';
import { makeExecutableSchema } from 'graphql-tools';

// Schema
const typeDefs = `
  type User {
    id: Int!
    firstName: String
    lastName: String
  }

  type Query {
    user(id: Int!): User
  }
`;

// Dummy data
const users = [
  { id: 1, firstName: 'Cesar', lastName: 'Placido' },
  { id: 2, firstName: 'Gabriel', lastName: 'Islas' }
];

const resolvers = {
  Query: {
    user: (_, { id }) => find(users, { id: id })
  }
};


export const schema = makeExecutableSchema({
  typeDefs,
  resolvers
});
