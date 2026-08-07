// Developer Note:
// Handles vehicle analysis requests.
// Coordinates the request, AI service, and HTTP response.

import { analyseVehicle } from '../services/aiProviderService.js'

async function analyseVehicleImage(req, res) {
	try {
		// The uploaded image will be provided by Multer.
		const file = req.file;

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
