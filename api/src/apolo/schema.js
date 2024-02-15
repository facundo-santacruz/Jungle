
export const typeDefs = `#graphql
  scalar JSON
  type Truck {
    _id: ID
    name: String      
    letter: String
    date: String
    patent: String
    image: String
  }

  input TruckInput{
    _id: ID!
    name: String      
    letter: String
    date: String
    patent: String
    image: String
  }

  type Driver {
    _id: ID!
    firstName: String
    lastName: String 
    birthday: String
    dni: String
    image: String
  }

  input DriverInput {
    _id: ID!
    firstName: String
    lastName: String 
    birthday: String
    dni: String
    image: String
  }

  type Total {
    _id: ID
    driver: Driver
    hour: String
    quantity: Int
  }

  type TotalInput {
    _id: ID
    driver: Driver
    hour: String
    quantity: Int
  }

  type Fuel {
    _id: ID
    quantity: Int
    hour: String
  }

  type FuelInput {
    _id: ID
    quantity: Int
    hour: String
  }

  type MovementInput{
    _id: ID
    arrival: [Total]
    departure: [Total]
  }

  type Movement{
    _id: ID
    arrival: [Total]
    departure: [Total]
  }

  type TruckTransport {
    _id: ID 
    truck: Truck
    date: String
    movements: Movement 
    fuel: [Fuel]
  }

  type TruckTransportInput {
    _id: ID 
    truck: Truck
    date: String
    movements: Movement 
    fuel: [Fuel]
  }

  type Message{
    message: String
  }

  type Query {
    truck(where: JSON): [Truck]
    driver(where: JSON): [Driver]
    truckDay(where: JSON): [TruckTransport]
    movement(where: JSON): [Movement]
  }  

  type Mutation {
    addTruck(name: String, letter: String, date: String, patent: String, image: String ): Truck
    updateTruck(input: TruckInput): Truck
    deleteTruck(_id: ID): [Truck]

    addDriver(firstName: String, lastName: String, birthday: String, dni: String, image:String ): Driver
    updateDriver(input: DriverInput): Driver
    deleteDriver(_id: ID): [Driver]

    addTruckDay(truck:ID): TruckTransport
    updateTruckDay(id_truck:ID, id_truckTransport:ID): TruckTransport
    deleteTruckDay(id_truckTransport: ID): [TruckTransport]

    addMovement(truckTransport:ID, kind:String): TruckTransport
    addMovementDriver(id_driver:ID, id_total:ID): Total

    addQuantityTruck(id_total:ID, quantity: Int): Total

    loadGasoline(id_truck:ID, id_truckTransport:ID, quantity: Int, hour:String ):TruckTransport
  }
    
  
`;