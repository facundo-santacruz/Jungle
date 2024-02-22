import mongoose, { Schema } from 'mongoose';


const DetailSchema = new Schema({
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

const Detail = mongoose.model('Total', DetailSchema);

export default Detail;