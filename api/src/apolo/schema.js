
export const typeDefs = `#graphql
  scalar JSON
  type Truck {
    _id: String!
    name: String      
    letter: String
    date: String
  }

  type Query {
    truck(where: JSON): [Truck]
  }  
`;