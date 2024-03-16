import Driver from "../models/driver.js";
import Truck from "../models/truck.js";
import TruckTransport from "../models/truckTransport.js";
import Movement from "../models/detail.js";
import Detail from "../models/detail.js";
import moment from "moment";

export const addDetail = async ( truckTransport, id_driver , kind, quantity ) => {
    const dayTruck = await TruckTransport.findById(truckTransport).populate("truck");
    if (!dayTruck) throw new Error ('El Movimiento del Camión ' + dayTruck.truck.name + "noesta en la BD.");
    const driver = await Driver.findById(id_driver);
    if (!driver) throw new Error ('No existe el Conductor');
    const hour = moment().format('HH:mm:ss A').toString(); 
    const detail =  await Detail.create({driver: id_driver, quantity, hour})
    // if ( !truck ) throw new Error("Movimiento (Entrada/Salida) de camión no creado.")
    console.log(kind == "arrival");
    if ( kind == "arrival" ){
        // CREATE MOVEMENT
        await TruckTransport.findByIdAndUpdate(truckTransport, {
            $push: {
                arrival : detail._id,
            }
        })
    } else if (kind == "departure") {
        await TruckTransport.findByIdAndUpdate(truckTransport, {
            $push: {
                departure : detail._id,
            }
        })
    }
    return Detail.findOne( {_id: detail._id} ).populate('driver')
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