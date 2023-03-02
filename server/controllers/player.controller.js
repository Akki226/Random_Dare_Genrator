import Players from "../mongodb/models/players.js"
import mongoose from "mongoose";
import * as dotenv from "dotenv";

dotenv.config();

const getAllplayer = async (req, res) => {
    try{
        const players = await Players.find({}).limit(req.query._end);

        res.status(200).json(players);

    }catch(error){res.status(500).json({ message: error.message });}
};



export{
    getAllplayer
}