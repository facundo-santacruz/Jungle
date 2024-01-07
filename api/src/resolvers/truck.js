import Truck from '../models/truck.js';

//AGREGAR CAMIÓN
export const addTruck = async( name, letter, date, patent ) => {
    const truck = Truck.create({ name, letter, date, patent });
    console.log(truck);
    return await truck;
};