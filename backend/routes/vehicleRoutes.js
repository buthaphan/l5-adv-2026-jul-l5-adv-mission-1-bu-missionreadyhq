// Developer Note:
// Defines API routes for vehicle analysis.

import express from "express";
import { analyseVehicleImage } from "../controllers/vehicleController.js";
import upload from "../middleware/uploadMiddleware.js";

const router = express.Router();

// Analyse a single uploaded vehicle image.
router.post(
  "/analyse",
  upload.single("image"),
  analyseVehicleImage,
);

export default router;
