
export const typeDefs = `#graphql
  scalar JSON
  type Truck {
    _id: String!
    name: String      
    letter: String
    date: String
    patent: String
  }

  type Driver {
    _id: String!
    first_name: String
    last_name: String 
    bithday: String
    dni: String
  }

  type Query {
    truck(where: JSON): [Truck]
  }  

  type Mutation {
    addTruck(name: String, letter: String, date: String, patent: String ): Truck
    addDriver(first_name: String, last_name: String, birthday: String, dni: String ): Driver
  }
    
  
`;