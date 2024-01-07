
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

  type Total {
    driver: Driver
    arrivalTime: String
    arrivalPeople: Int
    departureTime: String
    departurePeople: Int
  }

  type Fuel {
    quantity: Int
    hour: String
  }

  type Movement{
    
    arrivalTime: [Total]
    departureTime: [String]
  }

  type TruckTransport { 
    truck: Truck
    date: String
    movements: [Movement] 
    fuel: [Fuel]
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