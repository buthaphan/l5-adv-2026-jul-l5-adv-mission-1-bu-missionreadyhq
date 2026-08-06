import apiClient from "../api/axiosClient";
import type { VehiclePrediction } from "../types/vehiclePrediction";

// Sends a vehicle image to the backend for AI analysis.
async function analyseVehicle(file: File): Promise<VehiclePrediction> {
  const formData = new FormData();

  // Adds the selected image to the request.
  formData.append("image", file);

  const response = await apiClient.post<VehiclePrediction>(
    "/analyse",
    formData,
  );

  return response.data;
}

export { analyseVehicle };
