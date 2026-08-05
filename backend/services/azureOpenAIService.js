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
  const response = await openai.responses.create({
    model: deploymentName,
    input: "Say 'Azure OpenAI connection successful.'",
  });

  console.log(response);

  return new VehiclePrediction("Unknown", null, null, 0);
}

export { analyseVehicle };
