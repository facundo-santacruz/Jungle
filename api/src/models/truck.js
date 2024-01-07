import mongoose, { Schema } from 'mongoose';

const TruckSchema = new Schema({
    id: {
        type: Number,
        unique: true,
        required: true,
    },
    name: [{ 
        type: Schema.Types.String, ref: 'First name'
    }],
    letter: [{
        type: Schema.Types.String, ref: 'Letter',
        length: 1,
    }],
    date: {
        type: Schema.Types.Date, ref: "Birthday"
    },
    patent:{
        type: Schema.Types.String, ref: "Patent"
    }
    
})

const Truck = mongoose.model('Truck', TruckSchema);

export default Truck;