// Selects the configured AI provider and delegates
// the vehicle analysis request.

import { analyseVehicle as analyseWithOpenAI } from "./azureOpenAIService.js";
import { analyseVehicle as analyseWithCustomVision } from "./customVisionService.js";

// Analyse a vehicle image using the configured AI provider.
async function analyseVehicle(file) {
	const provider = process.env.AI_PROVIDER;

	switch (provider) {
		case "openai":
			return analyseWithOpenAI(file);
		case "customvision":
			return analyseWithCustomVision(file);

		default:
			throw new Error(
				`Unsupported AI provider: ${process.env.AI_PROVIDER}`,
			);
	}
}

export { analyseVehicle };
