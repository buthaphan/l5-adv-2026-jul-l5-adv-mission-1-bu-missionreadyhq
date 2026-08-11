// Sends a vehicle image to the backend API
// and returns the AI prediction

import apiClient from "../api/axiosClient";
import type { VehiclePrediction } from "../types/vehiclePrediction";

async function analyseVehicle(file: File): Promise<VehiclePrediction> {
	const formData = new FormData();

	// Add the uploaded image to the multipart form data.
	formData.append("image", file);

	const response = await apiClient.post<VehiclePrediction>(
		"/analyse",
		formData,
	);

	return response.data;
}

export { analyseVehicle };
