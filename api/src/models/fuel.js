import mongoose, { Schema } from "mongoose";
import moment from "moment";

const FuelSchema = new Schema({
    quantity: {
        type: Schema.Types.Number,
    },
    hour: {
        type: Schema.Types.String,
    },
})
    
const Fuel = mongoose.model('Fuel', FuelSchema);

export default Fuel;
