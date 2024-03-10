import mongoose, { Schema } from "mongoose";
import moment from "moment";

const TruckTransportSchema = new Schema({
    truck: { 
        type: Schema.Types.ObjectId, 
        required: true,
        ref: "Truck"
    },
    date: {
        type: Schema.Types.String,
        default: moment(moment.now()).format("DD/MM/YYYY")
    },
    arrival: [{
            type: Schema.Types.ObjectId,
            ref: "Detail"
    }],
    departure: [{
        type: Schema.Types.ObjectId,
        ref: "Detail"
    }],
    fuel: {
        type: Schema.Types.ObjectId,
        ref: "Fuel"
    },
    }
)

const TruckTransport = mongoose.model('TruckTransport', TruckTransportSchema);

export default TruckTransport;