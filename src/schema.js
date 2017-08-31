import { GraphQLObjectType, GraphQLString, GraphQLInt, GraphQLSchema, GraphQLList, GraphQLNonNull } from 'graphql';

// Connection to DB

// User Type
const UserType = new GraphQLObjectType({
    name: 'User',
    fields: () => ({
        // Model data
    })
});

// Root Query
const RootQuery = new GraphQLObjectType({
    name: 'RootQueryType',
    fields: {
        user: {
            type: UserType,
            args: {
                id: { type: GraphQLString }
            },
            resolve(parentValue, args) {
                // TODO: Queries to the DB
            }
        }
    }
});

// Mutation
const mutation = new GraphQLObjectType({
    name: 'Mutation',
    fields: {
        // TODO: Methods and logic
    }
});

const schema = new GraphQLSchema({
    query: RootQuery,
    mutation
});
