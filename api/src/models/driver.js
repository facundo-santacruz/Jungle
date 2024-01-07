import mongoose, { Schema } from 'mongoose';

const DriverSchema = new Schema({
    firstName: { 
        type: Schema.Types.String, ref: 'First Name'
    },
    lastName: { 
        type: Schema.Types.String, ref: 'Last Name'
    },
    birthday: {
        type: Schema.Types.String, ref: "Birthday"
    },
    dni : {
        type: Schema.Types.String, ref: "DNI",
        maxLength: 8
    },
})

const Driver = mongoose.model('Driver', DriverSchema);

export default Driver;