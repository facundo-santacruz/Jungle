import { addPath } from 'graphql/jsutils/Path.js';
import Driver from '../models/driver.js';
import Truck from '../models/truck.js';
import { addTruck } from '../resolvers/truck.js';
import { addDriver } from '../resolvers/driver.js';

export const resolvers = {

    Query: {
        truck: async (parent, { where }, context) => await Truck.find(where).populate().exec(),
        driver: async (parent, { where }, context) => await Driver.find(where).populate().exec(),
    },

    Mutation: {
        //Truck
        addTruck: (_, { name, letter, date, patent } ) => addTruck( name, letter, date, patent ),

        //Driver
        addDriver: (_, { firstName, lastName, birthday, dni } ) => addDriver( firstName, lastName, birthday, dni )
    }
}