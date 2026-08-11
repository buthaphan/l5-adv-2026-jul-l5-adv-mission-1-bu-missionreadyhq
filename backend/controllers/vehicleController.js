// Handles vehicle analysis requests.
// Coordinates the request, AI service, and HTTP response.

import { analyseVehicle } from "../services/aiProviderService.js";

async function analyseVehicleImage(req, res) {
	try {
		// The uploaded image will be provided by Multer.
		// Validate that an image was uploaded before calling the AI service.
		// This prevents invalid requests from reaching the service layer.
		const file = req.file;

		if (!file) {
			return res.status(400).json({
				success: false,
				message: "Please upload a vehicle image.",
			});
		}
		// Send the image to the AI service.
		const prediction = await analyseVehicle(file);

		// Return the prediction to the frontend.
		res.status(200).json(prediction);
	} catch (error) {
		console.error("Vehicle analysis failed:", error);

		res.status(500).json({
			success: false,
			message: "Failed to analyse vehicle image.",
		});
	}
}

export { analyseVehicleImage };
