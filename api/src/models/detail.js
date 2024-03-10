import mongoose, { Schema } from 'mongoose';


const DetailSchema = new Schema({
    driver: { 
        type: Schema.Types.ObjectId,
        ref: "Driver"
    },
    quantity: { 
        type: Schema.Types.Number,
        default: 30
    },
    hour: {
        type: Schema.Types.String
    },
})

const Detail = mongoose.model('Detail', DetailSchema);

export default Detail;