import Truck  from '../models/truck.js';
import Fuel  from '../models/fuel.js';
import TruckTransport from '../models/truckTransport.js';
import moment from 'moment';

export const loadGasoline = async( id_truck, id_truckTransport, quantity, hour ) => {
    if (!id_truck) throw new Error('No se paso ningun código de camión.'); 
    // if (!quantity ) throw new Error('Valor distinto a número o menor que 0.');
    if (parseInt(quantity)> 90 || parseInt(quantity)< 0) throw new Error('Los camiones no pueden cargar mas de 80 lts o menos de 0.');
    const truck = await Truck.findById(id_truck);
    if(!truck) throw new Error(`El Camión con el ID ${id} no existe`)
    const truckTransport = await TruckTransport.findById(id_truckTransport);
    if (!truckTransport)throw new Error("El Camión " + truck.name + " no llego todavía a Puerto Macúco");
    if (!hour) hour = moment(moment.now()).format("hh:mm:ss A") 
    const fuel = await Fuel.create({quantity, hour});
console.log(quantity);
    await TruckTransport.findByIdAndUpdate(id_truckTransport, {
        $push: {
            fuel: fuel._id
        }
    })
    return await TruckTransport.findById(id_truckTransport)
}
        