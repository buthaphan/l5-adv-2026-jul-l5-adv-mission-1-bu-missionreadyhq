/*
 * Selects the configured AI provider for vehicle analysis.
 */

import { analyseVehicle as analyseWithOpenAI } from "./azureOpenAIService.js";

/*
 * Analyses a vehicle image using the configured AI provider.
 */
async function analyseVehicle(file) {
	switch (process.env.AI_PROVIDER) {
		case "openai":
			return analyseWithOpenAI(file);

		default:
			throw new Error("Unsupported AI provider.");
	}
}

export { analyseVehicle };
