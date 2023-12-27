import mongoose, { Schema } from 'mongoose';

const TruckSchema = new Schema({
    id: {
        type: Number,
        unique: true,
        required: true,
    },
    name: [{ 
        type: Schema.Types.String, ref: 'Name'
    }],
    letter: [{
        type: Schema.Types.Array, ref: 'Letter'
    }],
    date: {
        type: Schema.Types.Date, ref: "Date"
    },

    
})

const Truck = mongoose.model('Truck', TruckSchema);

export default Truck;