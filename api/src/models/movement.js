import mongoose, { Schema }  from "mongoose";

const MovementSchema = new Schema({
    arrival: [{
        type: Schema.Types.ObjectId,
        ref: "Total",
        foreignField: "_id"
    }],
    departure: [{
        type: Schema.Types.ObjectId,
        ref: "Total",
        foreignField: "_id"
    }]
})

const Movement = mongoose.model('Movement', MovementSchema);

export default Movement;