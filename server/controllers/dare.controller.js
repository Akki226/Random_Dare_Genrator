import Dare from "../mongodb/models/Dare.js"
import mongoose from "mongoose";
import * as dotenv from "dotenv";

dotenv.config();

const getAllDares = async (req, res) => {
    try{
        const dares = await Dare.find({}).limit(req.query._end);

        res.status(200).json(dares);

    }catch(error){res.status(500).json({ message: error.message });}
};

const updateDare = async (req, res) => {
    try {
        const dares = await Dare.findById(req.params.id);
        dares.status = req.body.status;
        await dares.save();
        res.json({ success: true, dare });
    }catch (error) {
        res.status(500).json({ success: false, message: error.message });
      }

};

export{
    getAllDares,
    updateDare
}
