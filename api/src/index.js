import  express from 'express' ;
import { typeDefs }   from "./apolo/schema.js";
import { resolvers } from './apolo/resolvers.js';
import { mongoose } from "mongoose";
import { ApolloServer } from '@apollo/server';
import { startStandaloneServer } from '@apollo/server/standalone';
const uri = "mongodb+srv://facugs2090:202320@cluster0.inuahqf.mongodb.net/?retryWrites=true&w=majority";

const app = express();

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
mongoose.connect(uri)
    .then(() => {
      console.log('Connection success');
      app.listen(5000, () => {
        console.log(`Server listen on http://localhost:5000}`);
      });
    })
    .catch(error => {
      console.error('Connection fail', error);
    });
  
    
const server = new ApolloServer({ 
  typeDefs, 
  resolvers,
  context: ({req}) => {
      return {
          models
      }
  } 
});
const { url } = await startStandaloneServer(server, {
listen: { port: 4000 },
});
    
console.log(`🚀  Server ready at: ${url}`);
