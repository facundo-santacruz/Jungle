import Driver from "../models/driver.js";
import Truck from "../models/truck.js";
import TruckTransport from "../models/truckTransport.js";
import Movement from "../models/movement.js";
import Total from "../models/total.js";
import moment from "moment";

export const addMovement = async ( truckTransport, kind ) => {
    console.log(truckTransport);
    const dayTruck = await TruckTransport.findById(truckTransport);
    const movement = !dayTruck.movements ? await Movement.create({}) : await Movement.findById(dayTruck.movements)
    // if ( !truck ) throw new Error("Movimiento (Entrada/Salida) de camión no creado.")
    if ( kind == "arrival" ){
        // CREATE MOVEMENT
        await TruckTransport.findByIdAndUpdate(truckTransport, {
            movements: movement._id
        });
        const total = await Total.create({});
        await Movement.findByIdAndUpdate(movement._id, {
            $push: {
                arrival : total._id,
            }
        })
        console.log(movement);
    } else if (kind == "departure") {
        await TruckTransport.findByIdAndUpdate(truckTransport, {
            movements: movement._id
        });
        const total = await Total.create({});
        await Movement.findByIdAndUpdate(movement._id, {
            $push: {
                departure : total._id,
            }
        })
        console.log(movement);
    }
    return TruckTransport.findOne( {_id: truckTransport} ).populate('movements')
}

// Get all movements of a specific truck in a specific day
export const addMovementDriver = async ( id_driver, id_total ) => {
    const total = await Total.findById(id_total);
    if (!total) throw new Error ('No existe movimiento de Camión');
    const driver = await Driver.findById(id_driver);
    if (!driver) throw new Error ('Conductor Inexistente.')
    await Total.findByIdAndUpdate(id_total, {driver});
    return await Total.findById(id_total).populate('driver')
}