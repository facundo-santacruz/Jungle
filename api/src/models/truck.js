import mongoose, { Schema } from 'mongoose';

const TruckSchema = new Schema({
    name: { 
        type: Schema.Types.String, ref: 'Name',
        unique: true
    },
    letter: {
        type: Schema.Types.String, ref: 'Letter',
        maxLength: 1,
        unique: true
    },
    date: {
        type: Schema.Types.String, ref: "Birthday"
    },
    patent: {
        type: Schema.Types.String, ref: "Patent",
        unique: true,
        maxLength: 7,
    },
    
})

const Truck = mongoose.model('Truck', TruckSchema);

export default Truck;