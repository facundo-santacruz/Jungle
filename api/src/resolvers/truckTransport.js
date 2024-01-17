import moment from "moment";
import Driver from "../models/driver.js";
import Truck from "../models/truck.js";
import TruckTransport from "../models/truckTransport.js";
import Movement from "../models/movement.js";

// Function to see if the truck starts to work this day
export const addTruckDay = async (  truck   ) => {
    const date = moment(moment.now()).format("DD/MM/YYYY")
    const truckFile = await TruckTransport.findOne( {truck: truck, date: date} );
    await console.log(truckFile);
    if (truckFile){
        return truckFile.populate('truck')
    }
    const response = await TruckTransport.create({ truck })
    return await response.populate('truck')
}

export const addMovement = async ( truckTransport, type ) => {
    console.log(truckTransport);
    // if ( !truck ) throw new Error("Movimiento (Entrada/Salida) de camión no creado.")
    // if ( type == "arrival" ){
        const movement = await Movement.create({});
        await TruckTransport.findByIdAndUpdate({_id: truckTransport}, {
            $push:{ movements : movement._id },
        })
    // }
}