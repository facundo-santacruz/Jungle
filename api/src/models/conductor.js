import mongoose, { Schema } from 'mongoose';

const DriverSchema = new Schema({
    id: {
        type: Number,
        unique: true,
        required: true,
    },
    name: [{ 
        type: Schema.Types.String, ref: 'Name'
    }],
    birthday: {
        type: Schema.Types.Date, ref: "Birthday"
    },
    
})

const Driver = mongoose.model('Conductor', DriverSchema);

export default Driver;