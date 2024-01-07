import mongoose, { Schema } from 'mongoose';

const TruckSchema = new Schema({
    name: { 
        type: Schema.Types.String,
        unique: true
    },
    letter: {
        type: Schema.Types.String,
        maxLength: 1,
        unique: true
    },
    date: {
        type: Schema.Types.String,
    },
    patent: {
        type: Schema.Types.String,
        unique: true,
        maxLength: 7,
    },
    
})

const Truck = mongoose.model('Truck', TruckSchema);

export default Truck;