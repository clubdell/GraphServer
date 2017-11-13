import express from 'express'
import expressGraphQL from 'express-graphql'

import schema from './schema'

const app = express();
const PORT = 4000;

app.use('/graphql', expressGraphQL({
    schema: schema,
    graphiql: true
}));

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
})
