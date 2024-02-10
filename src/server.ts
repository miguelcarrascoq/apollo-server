import { ApolloServer } from '@apollo/server';
import typeDefs from './schema';
import resolvers from './resolvers';

// The ApolloServer constructor requires two parameters: your schema
// definition and your set of resolvers.
const server = new ApolloServer({
  typeDefs,
  resolvers,
});

export default server;
