import express from "express";

import {
   
    getAllplayer,

   
    
   
    
} from "../controllers/player.controller.js";

const router = express.Router();

router.route("/").get(getAllplayer);


export default router;