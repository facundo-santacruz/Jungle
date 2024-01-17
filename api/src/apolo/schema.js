
export const typeDefs = `#graphql
  scalar JSON
  type Truck {
    _id: ID
    name: String      
    letter: String
    date: String
    patent: String
  }

  input TruckInput{
    _id: ID!
    name: String      
    letter: String
    date: String
    patent: String
  }

  type Driver {
    _id: ID!
    firstName: String
    lastName: String 
    birthday: String
    dni: String
  }

  input DriverInput {
    _id: ID!
    firstName: String
    lastName: String 
    birthday: String
    dni: String
  }

  type Total {
    driver: Driver
    time: String
    People: Int
  }

  type Fuel {
    quantity: Int
    hour: String
  }

  type Movement{
    arrival: [Total]
    departure: [Total]
  }

  type TruckTransport { 
    truck: Truck
    date: String
    movements: [Movement] 
    fuel: [Fuel]
  }

  type Message{
    message: String
  }

  type Query {
    truck(where: JSON): [Truck]
    driver(where: JSON): [Driver]
    truckDay(where: JSON): [TruckTransport]
  }  

  type Mutation {
    addTruck(name: String, letter: String, date: String, patent: String ): Truck
    updateTruck(input: TruckInput): Truck
    deleteTruck(_id: ID): [Truck]

    addDriver(firstName: String, lastName: String, birthday: String, dni: String ): Driver
    updateDriver(input: DriverInput): Driver
    deleteDriver(_id: ID): [Driver]

    addTruckDay(truck:ID): TruckTransport
  }
    
  
`;