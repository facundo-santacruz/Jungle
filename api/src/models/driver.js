import mongoose, { Schema } from 'mongoose';

const DriverSchema = new Schema({
    id: {
        type: Number,
        unique: true,
        required: true,
    },
    first_name: [{ 
        type: Schema.Types.String, ref: 'Name'
    }],
    last_name: [{ 
        type: Schema.Types.String, ref: 'Name'
    }],
    birthday: {
        type: Schema.Types.Date, ref: "Birthday"
    },
    dni : {
        type: Schema.Types.String, ref: "DNI",
    },
})

const Driver = mongoose.model('Driver', DriverSchema);

export default Driver;