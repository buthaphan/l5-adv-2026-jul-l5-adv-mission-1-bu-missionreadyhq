/*
 * Handles communication with Azure Custom Vision.
 * This service sends vehicle images to the published Custom Vision model
 * and returns a VehiclePrediction.
 */

import VehiclePrediction from "../models/vehiclePrediction.js";

/*
 * Analyse a vehicle image and return a VehiclePrediction.
 */
async function analyseVehicle(file) {
	if (!file) {
		throw new Error("No image uploaded.");
	}

	const response = await fetch(process.env.CUSTOM_VISION_PUBLISHED_NAME, {
		method: "POST",
		headers: {
			"Prediction-Key": process.env.CUSTOM_VISION_PREDICTION_KEY,
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

	// Convert the response into a JavaScript object.
	const result = await response.json();

	// Ensure Azure returned at least one prediction.
	if (!result.predictions || result.predictions.length === 0) {
		throw new Error("No predictions were returned by Azure Custom Vision.");
	}

	// Get the prediction with the highest confidence.
	const bestPrediction = result.predictions[0];

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
