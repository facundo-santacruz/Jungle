import Driver from '../models/driver.js';
import Truck from '../models/truck.js';
import { addTruck, deleteTruck, updateTruck } from '../resolvers/truck.js';
import { addDriver, deleteDriver, updateDriver } from '../resolvers/driver.js';

export const resolvers = {

    Query: {
        truck: async (parent, { where }, context) => await Truck.find(where).populate().exec(),
        driver: async (parent, { where }, context) => await Driver.find(where).populate().exec(),
    },

    Mutation: {
        //Truck
        addTruck: (_, { name, letter, date, patent } ) => addTruck( name, letter, date, patent ),
        updateTruck: async (parent,  {input}  ) => await updateTruck ( input ),
        deleteTruck: async (_, { _id } )=> deleteTruck( _id ),
        //Driver
        addDriver: (_, { firstName, lastName, birthday, dni } ) => addDriver( firstName, lastName, birthday, dni ),
        updateDriver: async (parent,  {input}  ) => await updateDriver ( input ),
        deleteDriver: async ( _, {_id}) => deleteDriver (_id),
    }
}