
import Truck from "../models/truck.js";
import TruckTransport from "../models/truckTransport.js";
import moment from "moment";
import Detail from "../models/detail.js";

// Function to see if the truck starts to work this day
export const addTruckDay = async ( truck ) => {
    const date = moment(moment.now()).format("DD/MM/YYYY");
    console.log(truck);
    const truckFile = await TruckTransport.findOne( {truck, date} ).populate( '[arrival.detail] [departure.detail] truck' ); 
    console.log(truckFile)
    if (truckFile){
        return truckFile;  
    }else {
        await TruckTransport.create({ truck });
    }
     return await TruckTransport.findOne( {truck, date} ).populate( 'arrival.detail departure.detail truck' )

}

export const deleteTruckDay = async ( id_truckTransport ) => {
    const truck = await TruckTransport.findById(id_truckTransport);
    if (!truck) throw new Error("Transporte Diario no existe")
    return await TruckTransport.findById(id_truckTransport);
}

export const updateTruckDay = async ( id_truck, id_truckTransport ) => {
    if (!id_truck || !id_truckTransport ) throw new Error('Valores no cargados');
    const truckTransport = await TruckTransport.findById(id_truckTransport);
    if (!truckTransport) throw new Error('Movimiento de camión no cargado ala Base de Datos');
    const truck = await Truck.findById(id_truck);
    if (!truck) throw new Error(" El camión cargado no existe en la Base de Dtaos.")
    await TruckTransport.findByIdAndUpdate(id_truckTransport, {truck: id_truck})
    return await TruckTransport.findById(id_truckTransport).populate('truck').populate('movements').populate("fuel").exec();
}

export const addQuantityTruck = async ( id_total, quantity ) => {
    const total = await Detail.findById(id_total);
    if (!total) throw new Error ("Código no existe.");
    if (!total.driver) throw new Error ("No hay ningún conductor asignado a este camión.");
    if (parseInt(quantity) > 30) throw new Error ("No es posible enviar a más de 30 personas en un camón.")
    if (parseInt(quantity) < 0) throw new Error ("No es posible enviar a menos de 0 personas.")
    if (!quantity || typeof quantity === "string") quantity = 0;
    quantity = parseInt(quantity);
    const hour = moment(moment.now()).format("hh:mm:ss")
    if (!total.hour) {
        await Detail.findByIdAndUpdate(id_total, { quantity, hour})
    } else {
        await Detail.findByIdAndUpdate(id_total, { quantity })
    }
    return Detail.findById(id_total).populate('driver').exec()
}

    