import Driver from '../models/driver.js';
import Truck from '../models/truck.js';
import { addTruck, deleteTruck, updateTruck } from '../resolvers/truck.js';
import { addDriver, deleteDriver, updateDriver } from '../resolvers/driver.js';
import {  addQuantityTruck, addTruckDay, deleteTruckDay, updateTruckDay } from '../resolvers/truckTransport.js';
import { addMovement, addMovementDriver } from "../resolvers/movement.js";
import TruckTransport from '../models/truckTransport.js';
import { loadGasoline } from '../resolvers/fuel.js';
import Movement from '../models/movement.js';
import Total from '../models/total.js';

export const resolvers = {

    Query: {
        truck: async (parent, { where }, context) => await Truck.find(where).populate().exec(),
        driver: async (parent, { where }, context) => await Driver.find(where).populate().exec(),
        truckDay: async (parent, { where }, context ) => await TruckTransport.find(where).populate([
            {path:'movements' },
            {path:'movements.arrival'},
            {path:'movements.departure'},
            // {path:'movements.arrival.driver', model: "Driver"},
            // {path:'movements.departure.driver', model: "Driver"},
            
            {path:'truck',},
            {path: 'fuel'}
        ]).exec(), 
        // movement: async(parent, { where }, context ) => await Movement.find(where).populate('arrival.driver').populate('departure.driver').exec(),
    },

    Mutation: {
        //Truck
        addTruck: (_, { name, letter, date, patent, image } ) => addTruck( name, letter, date, patent, image ),
        updateTruck: async (parent,  {input}  ) => await updateTruck ( input ),
        deleteTruck: async (_, { _id } )=> deleteTruck( _id ),

        //Driver
        addDriver: (_, { firstName, lastName, birthday, dni } ) => addDriver( firstName, lastName, birthday, dni ),
        updateDriver: async (parent,  {input}  ) => await updateDriver ( input ),
        deleteDriver: async ( _, {_id}) => deleteDriver (_id),

        //Truck Transport
        addTruckDay: (_, { truck }) => addTruckDay( truck ),
        updateTruckDay: (_, { id_truck, id_truckTransport }) => updateTruckDay( id_truck, id_truckTransport ),
        deleteTruckDay: ( _, { id_truckTransport }) => deleteTruckDay( id_truckTransport ),

        //Movement
        addMovement: (_, { truckTransport, kind }) => addMovement ( truckTransport, kind ),
        
        //Movement Driver
        addMovementDriver: (_, { id_driver, id_total }) => addMovementDriver ( id_driver, id_total ),
        
        //Quantity Truck
        addQuantityTruck: (_, { id_total, quantity }) => addQuantityTruck( id_total, quantity ),
    
        //Fuel
        loadGasoline: (_, { id_truck, id_truckTransport, quantity, hour }) => loadGasoline( id_truck, id_truckTransport, quantity, hour ),
    }   
}