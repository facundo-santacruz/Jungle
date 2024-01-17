import mongoose, { Schema } from 'mongoose';

const DriverSchema = new Schema({
    firstName: { 
        type: Schema.Types.String
    },
    lastName: { 
        type: Schema.Types.String
    },
    birthday: {
        type: Schema.Types.String
    },
    dni : {
        type: Schema.Types.String,
        maxLength: 8
    },
})

const Driver = mongoose.model('Driver', DriverSchema);

export default Driver;