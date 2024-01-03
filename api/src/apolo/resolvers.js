import Driver from '../models/driver.js';
import Truck from '../models/truck.js';

export const resolvers = {

    Query: {
         truck: async (parent, { where }, context) => await Driver.find(where).populate().exec(),
    },
}