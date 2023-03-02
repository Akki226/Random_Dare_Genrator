import mongoose from "mongoose";

const DareSchema = new mongoose.Schema({
    title: { type: String, required: true },
    description: { type: String, required: true },
    isMovie: { type: Boolean, required: true },
    status: { type: Boolean, required: true }
});

const dareModel = mongoose.model("Dare", DareSchema);

export default dareModel;