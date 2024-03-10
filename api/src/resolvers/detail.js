import Driver from "../models/driver.js";
import Truck from "../models/truck.js";
import TruckTransport from "../models/truckTransport.js";
import Movement from "../models/detail.js";
import Detail from "../models/detail.js";
import moment from "moment";

export const addDetail = async ( truckTransport, id_driver , kind, quantity ) => {
    console.log(truckTransport);
    const dayTruck = await TruckTransport.findById(truckTransport);
    const driver = await Driver.findById(id_driver);
    if (!driver) throw new Error ('No existe el Conductor');
    const hour = moment().format('HH:mm:ss A').toString(); 
    const detail =  await Detail.create({driver: id_driver, quantity, hour})
    // if ( !truck ) throw new Error("Movimiento (Entrada/Salida) de camión no creado.")
    if ( kind == "arrival" ){
        // CREATE MOVEMENT
        await TruckTransport.findByIdAndUpdate(detail._id, {
            $push: {
                arrival : detail._id,
            }
        })
    } else if (kind == "departure") {
        await TruckTransport.findByIdAndUpdate(detail._id, {
            $push: {
                departure : detail._id,
            }
        })
    }
    return TruckTransport.findOne( {_id: truckTransport} ).populate('fuel', 'driver', 'detail')
}

// Get all movements of a specific truck in a specific day
export const addDetailDriver = async ( id_driver, id_total ) => {
    const total = await Total.findById(id_total);
    if (!total) throw new Error ('No existe movimiento de Camión');
    const driver = await Driver.findById(id_driver);
    if (!driver) throw new Error ('Conductor Inexistente.')
    await Total.findByIdAndUpdate(id_total, {driver});
    return await Total.findById(id_total).populate('driver')
}