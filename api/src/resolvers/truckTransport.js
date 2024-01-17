import moment from "moment";
import Driver from "../models/driver.js";
import Truck from "../models/truck.js";
import TruckTransport from "../models/truckTransport.js";
import Movement from "../models/movement.js";
import Total from "../models/total.js";

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
        // const { _id } = total
        // await movement.arrival.push({ _id })
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
        // const { _id } = total
        // await movement.arrival.push({ _id })
        await Movement.findByIdAndUpdate(movement._id, {
            $push: {
                departure : total._id,
            }
        })
        console.log(movement);
    }
    return TruckTransport.findOne( {_id: truckTransport} ).populate('movements')

}