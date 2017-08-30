import express from 'express';
import expressGraphQL from 'express-graphql';

const app = express();

app.use('/graphql', expressGraphQL({
    schema: schema,
    graphiql: true
}));

app.listen(4000, () => {
    console.log('Server running on port 4000');
})
