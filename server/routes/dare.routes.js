import express from "express";

import {
   
    getAllDares,

   
    updateDare,
   
    
} from "../controllers/dare.controller.js";

const router = express.Router();

router.route("/").get(getAllDares);
router.route("/:id").patch(updateDare);

export default router;
