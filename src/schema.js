import { find, filter } from 'lodash';
import { makeExecutableSchema } from 'graphql-tools';

// Schema
const typeDefs = `
  type User {
    id: Int!
    fullName: String!
    password: String!
  }

  type Query {
    user(id: Int!): User
  }

  type Mutation {
    addUser(id: Int!, fullName: String!, password: String!): User
    removeUser(id: Int!): User
    editUser(id: Int!): User
  }
`;

// Connect to database
const users = [
  { id: 201372836, fullName: 'Cesar Placido', password: 'fuewihfowqenfijocew' },
  { id: 201372853, fullName: 'Gabriel Islas', password: 'jhefqndeedeqdq' }
];

const resolvers = {
  Query: {
    user: (_, { id }) => find(users, { id: id })
  },
  Mutation: {
    // TODO: Add methods logic
  }
};


export const schema = makeExecutableSchema({
  typeDefs,
  resolvers
});
