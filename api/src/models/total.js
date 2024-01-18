import mongoose, { Schema } from 'mongoose';


const TotalSchema = new Schema({
    driver: { 
        type: Schema.Types.ObjectId,
        ref: "Driver"
    },
    quantity: { 
        type: Schema.Types.Number,
        default: 0
    },
    hour: {
        type: Schema.Types.String
    },
})

const Total = mongoose.model('Total', TotalSchema);

export default Total;