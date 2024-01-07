
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
    firstName: String
    lastName: String 
    birthday: String
    dni: String
  }

  type Query {
    truck(where: JSON): [Truck]
    driver(where: JSON): [Driver]
  }  

  type Mutation {
    addTruck(name: String, letter: String, date: String, patent: String ): Truck
    addDriver(firstName: String, lastName: String, birthday: String, dni: String ): Driver
  }
    
  
`;