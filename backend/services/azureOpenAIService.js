// Developer Note:
// Handles communication with Azure OpenAI.
// This service sends vehicle images to GPT-5.1 and returns a VehiclePrediction.

import OpenAI from "openai";
import {
  DefaultAzureCredential,
  getBearerTokenProvider,
} from "@azure/identity";

import VehiclePrediction from "../models/vehiclePrediction.js";

// Create an authentication provider using Microsoft Entra ID.
const tokenProvider = getBearerTokenProvider(
  new DefaultAzureCredential(),
  "https://ai.azure.com/.default",
);

// Create the Azure OpenAI client once when the application starts.
const openai = new OpenAI({
  baseURL: process.env.AZURE_OPENAI_ENDPOINT,
  apiKey: tokenProvider,
});

// Analyse a vehicle image and return a VehiclePrediction.
async function analyseVehicle(file) {
  // Developer Note:
  // Temporary placeholder response used to verify the backend architecture
  // before integrating Azure OpenAI.

  return new VehiclePrediction("Unknown", null, null, 0);
}

export { analyseVehicle };
