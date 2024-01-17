import mongoose, { Schema }  from "mongoose";

const MovementSchema = new Schema({
    arrival: {
        type: Schema.Types.ObjectId,
        ref: "Total"
    },
    departure: {
        type: Schema.Types.ObjectId,
        ref: "Total"
    }
})

const Movement = mongoose.model('Movement', MovementSchema);

export default Movement;