import  express from 'express' ;
import http from 'http';
import { ApolloServer } from '@apollo/server';
import { ApolloServerPluginDrainHttpServer } from '@apollo/server/plugin/drainHttpServer';
import { expressMiddleware } from '@apollo/server/express4';
import cors from 'cors';
import bodyParser from 'body-parser';
import { typeDefs }   from "./apolo/schema.js";
import { resolvers } from './apolo/resolvers.js';
import { mongoose } from "mongoose";
import models from './models/index.js'
const uri = "mongodb+srv://facugs2090:202320@cluster0.inuahqf.mongodb.net/?retryWrites=true&w=majority";


// Required logic for integrating with Express
const app = express()

// Our httpServer handles incoming requests to our Express app.
// Below, we tell Apollo Server to "drain" this httpServer,
// enabling our servers to shut down gracefully.
const httpServer = http.createServer(app);

// Same ApolloServer initialization as before, plus the drain plugin
// for our httpServer.
const server = new ApolloServer({ 
  typeDefs, 
  resolvers,
  plugins: [ApolloServerPluginDrainHttpServer({ httpServer })],
  context: ({req}) => {
      return {
          models,
      }
  } 
});
await server.start();


// Create a MongoClient with a MongoClientOptions object to set the Stable API version
mongoose.connect(uri)
    .then(() => {
      console.log('Connection success');
      
    })
    .catch(error => {
      console.error('Connection fail', error);
  });
  
  app.use(
    '/',
    cors(),
    // 50mb is the limit that `startStandaloneServer` uses, but you may configure this to suit your needs
    bodyParser.json({ limit: '50mb' }),
    // expressMiddleware accepts the same arguments:
    // an Apollo Server instance and optional configuration options
    expressMiddleware(server, {
      context: async ({ req }) => ({ token: req.headers.token }),
    }),
  );
  
  // Modified server startup
  await new Promise((resolve) => httpServer.listen({ port: 4000 }, resolve));
  console.log(`🚀 Server ready at http://localhost:4000/`);