import Truck from '../models/truck.js';

//AGREGAR CAMIÓN
export const addTruck = async( name, letter, date, patent ) => {
    return await Truck.create({ name, letter, date, patent });
};