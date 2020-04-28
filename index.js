/* eslint-disable no-console */
import { ApolloServer } from 'apollo-server-express';
import express from 'express';
import path from 'path';
import { fileLoader, mergeTypes, mergeResolvers } from 'merge-graphql-schemas';

const typesArray = fileLoader(path.join(__dirname, './schema'));
const typeDefs = mergeTypes(typesArray);

const resolversArray = fileLoader(path.join(__dirname, './resolvers'));
const resolvers = mergeResolvers(resolversArray);

const app = express();


const server = new ApolloServer({
  typeDefs,
  resolvers,
});

server.applyMiddleware({ app });

app.listen(
  { port: 4000 },
  () => console.log(`🚀 Server ready at http://localhost:4000${server.graphqlPath}`),
);
