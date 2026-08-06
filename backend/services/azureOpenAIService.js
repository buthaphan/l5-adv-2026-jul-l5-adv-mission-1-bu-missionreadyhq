// Developer Note:
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

const deploymentName = process.env.AZURE_OPENAI_DEPLOYMENT;

// Analyse a vehicle image and return a VehiclePrediction.
async function analyseVehicle(file) {
  if (!file) {
    throw new Error("No image uploaded.");
  }

  // Convert the uploaded image into a Base64 string.
  const imageBase64 = file.buffer.toString("base64");

  //Call Azure OpenAI and pass the promt and image
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

  //Takecare of LLMs sometime accidentally wrap JSON in Markdown fences
  const json = response.output_text
    .replace(/```json/g, "")
    .replace(/```/g, "")
    .trim();

  const prediction = JSON.parse(json);

  //Assign the result to desired vehicle object
  return new VehiclePrediction(
    prediction.vehicleType,
    prediction.make,
    prediction.model,
    prediction.confidence,
    prediction.reason,
  );
}

export { analyseVehicle };
