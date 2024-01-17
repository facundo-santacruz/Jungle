import mongoose, { Schema } from 'mongoose';


const TotalSchema = new Schema({
    driver: { 
        type: Schema.Types.ObjectId,
        ref: "Driver"
    },
    quantity: { 
        type: Schema.Types.Int
    },
    hour: {
        type: Schema.Types.Date
    },
})

const Total = mongoose.model('Total', TotalSchema);

export default Total;