import moment from "moment";
import Driver from "../models/driver.js";
import Truck from "../models/truck.js";
import TruckTransport from "../models/truckTransport.js";


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