import mongoose from "mongoose";

const PlayerSchema = new mongoose.Schema({
    name: { type: String, required: true },
});

const playerModel = mongoose.model("Players", PlayerSchema);

export default playerModel;