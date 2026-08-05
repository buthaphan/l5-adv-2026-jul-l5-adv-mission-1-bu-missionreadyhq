// Developer Note:
// Defines API routes for vehicle analysis.

import express from "express";
import { analyseVehicleImage } from "../controllers/vehicleController.js";

const router = express.Router();

// Analyse a vehicle image.
router.post("/analyse", analyseVehicleImage);

export default router;
