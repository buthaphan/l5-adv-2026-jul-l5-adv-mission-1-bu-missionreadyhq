// Handles communication with Azure Custom Vision.
// This service sends vehicle images to the published model
// and returns a VehiclePrediction.

import VehiclePrediction from "../models/vehiclePrediction.js";

// Azure Custom Vision configuration.
const customVisionConfig = {
	endpoints: {
		image: process.env.CUSTOM_VISION_IMAGE_ENDPOINT,
		url: process.env.CUSTOM_VISION_URL_ENDPOINT,
	},
	predictionKey: process.env.CUSTOM_VISION_PREDICTION_KEY,
};

// Analyse a vehicle image and return a VehiclePrediction.
async function analyseVehicle(file) {
	if (!file) {
		throw new Error("No image uploaded.");
	}

	const response = await fetch(customVisionConfig.endpoints.image, {
		method: "POST",
		headers: {
			"Prediction-Key": customVisionConfig.predictionKey,
			"Content-Type": "application/octet-stream",
		},
		body: file.buffer,
	});

	// Throw an error if Azure returns an unsuccessful response.
	if (!response.ok) {
		const error = await response.text();

		throw new Error(
			`Azure Custom Vision request failed (${response.status}): ${error}`,
		);
	}

	// Parse the JSON response returned by Azure Custom Vision.
	const result = await response.json();

	// Ensure Azure returned at least one prediction.
	if (!result.predictions || result.predictions.length === 0) {
		throw new Error("No predictions were returned by Azure Custom Vision.");
	}

	// Azure returns predictions ordered by confidence,
	// so the first prediction represents the best match.
	const bestPrediction = result.predictions[0];

	// External AI services may return incomplete or unexpected data.
	if (
		!bestPrediction.tagName ||
		typeof bestPrediction.probability !== "number"
	) {
		throw new Error("Invalid response received from Azure Custom Vision.");
	}

	const reason =
		"This prototype currently classifies vehicle body types only. This trained Azure Custom Vision model has not yet been trained to recognise vehicle makes and models.";

	return new VehiclePrediction(
		bestPrediction.tagName === "Suv" ? "SUV" : bestPrediction.tagName,
		"Not trained yet",
		"Not trained yet",
		Number(bestPrediction.probability.toFixed(2)),
		reason,
	);
}

export { analyseVehicle };
