import mongoose, { Schema } from "mongoose";
import moment from "moment";

const TruckTransportSchema = new Schema({
    truck: { 
        type: Schema.Types.ObjectId, 
        required: true,
        ref: "Truck"
    },
    date: {
        type: Schema.Types.Date,
        default: moment(moment.now()).format("DD/MM/YYYY")
    },
    movements: [{
        type: Schema.Types.ObjectId,
        ref: "Movement"
    }],
    fuel: [{
        type :  Schema.Types.ObjectId,
        ref: "Fuel"
    }]
})

const TruckTransport = moongose.model('TruckTransport', TruckTransportSchema);

export default TruckTransport;