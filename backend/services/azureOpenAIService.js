// Handles communication with Azure OpenAI.
// This service sends vehicle images to GPT-5.1 and returns a VehiclePrediction.

import OpenAI from "openai";

import VehiclePrediction from "../models/vehiclePrediction.js";
import vehicleAnalysisPrompt from "../prompts/vehicleAnalysisPrompt.js";

// Create the Azure OpenAI client.
const openai = new OpenAI({
	baseURL: process.env.AZURE_OPENAI_ENDPOINT,
	apiKey: process.env.AZURE_OPENAI_API_KEY,
});

//
const deploymentName = process.env.AZURE_OPENAI_DEPLOYMENT;

// Analyse a vehicle image and return a VehiclePrediction.
async function analyseVehicle(file) {
	if (!file) {
		throw new Error("No image uploaded.");
	}

	// Convert the uploaded image into a Base64 string.
	const imageBase64 = file.buffer.toString("base64");

	// Send the prompt and uploaded image to Azure OpenAI.
	const response = await openai.responses.create({
		model: deploymentName,
		input: [
			{
				role: "user",
				content: [
					{
						type: "input_text",
						text: vehicleAnalysisPrompt,
					},
					{
						type: "input_image",
						image_url: `data:${file.mimetype};base64,${imageBase64}`,
					},
				],
			},
		],
	});

	// Remove Markdown code fences before parsing the JSON response.
	// Large language models may occasionally wrap JSON in Markdown.
	const json = response.output_text
		.replace(/```json/g, "")
		.replace(/```/g, "")
		.trim();

	let prediction;

	try {
		prediction = JSON.parse(json);
	} catch {
		throw new Error("Azure OpenAI returned an invalid JSON response.");
	}

	// Validate the AI response before creating the prediction.
	// External AI services may return incomplete or unexpected data.
	if (!prediction.vehicleType || typeof prediction.confidence !== "number") {
		throw new Error("Invalid response received from Azure OpenAI.");
	}

	// Convert the Azure OpenAI response into the application's
	// shared prediction model.
	return new VehiclePrediction(
		prediction.vehicleType,
		prediction.make,
		prediction.model,
		prediction.confidence,
		prediction.reason,
	);
}

export { analyseVehicle };
