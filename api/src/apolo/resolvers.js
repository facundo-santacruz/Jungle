import Driver from '../models/driver.js';
import Truck from '../models/truck.js';
import { addTruck, deleteTruck, updateTruck } from '../resolvers/truck.js';
import { addDriver, deleteDriver, updateDriver } from '../resolvers/driver.js';
import {  addQuantityTruck, addTruckDay, deleteTruckDay, updateTruckDay } from '../resolvers/truckTransport.js';
import { addDetail, addDetailDriver } from "../resolvers/detail.js";
import TruckTransport from '../models/truckTransport.js';
import { loadGasoline } from '../resolvers/fuel.js';
import Detail from '../models/detail.js';

export const resolvers = {

    Query: {
        truck: async (parent, { where }, context) => await Truck.find(where).populate().exec(),
        driver: async (parent, { where }, context) => await Driver.find(where).populate().exec(),
        truckDay: async (parent, { where }, context ) => await TruckTransport.find(where).populate('truck arrival departure').exec(), 
        // movement: async(parent, { where }, context ) => await Movement.find(where).populate('arrival.driver').populate('departure.driver').exec(),
    },

    Mutation: {
        //Truck
        addTruck: (_, { name, letter, date, patent, image } ) => addTruck( name, letter, date, patent, image ),
        updateTruck: async (parent,  {input}  ) => await updateTruck ( input ),
        deleteTruck: async (_, { _id } )=> deleteTruck( _id ),

        //Driver
        addDriver: (_, { firstName, lastName, birthday, dni, image } ) => addDriver( firstName, lastName, birthday, dni, image ),
        updateDriver: async (parent,  {input}  ) => await updateDriver ( input ),
        deleteDriver: async ( _, {_id}) => deleteDriver (_id),

        //Truck Transport
        addTruckDay: (_, { truck }) => addTruckDay( truck ),
        updateTruckDay: (_, { id_truck, id_truckTransport }) => updateTruckDay( id_truck, id_truckTransport ),
        deleteTruckDay: ( _, { id_truckTransport }) => deleteTruckDay( id_truckTransport ),

        //Movement
        addDetail: (_, { truckTransport, id_driver,  kind, quantity }) => addDetail ( truckTransport, id_driver, kind, quantity ),
        
        //Movement Driver
        addDetailDriver: (_, { id_driver, id_total }) => addDetailDriver ( id_driver, id_total ),
        
        //Quantity Truck
        addQuantityTruck: (_, { id_total, quantity }) => addQuantityTruck( id_total, quantity ),
    
        //Fuel
        loadGasoline: (_, { id_truck, id_truckTransport, quantity, hour }) => loadGasoline( id_truck, id_truckTransport, quantity, hour ),
    }   
}