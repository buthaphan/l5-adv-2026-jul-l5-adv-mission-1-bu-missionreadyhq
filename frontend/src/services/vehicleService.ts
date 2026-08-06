import apiClient from "../api/axiosClient";

// Sends a vehicle image to the backend for AI analysis.
async function analyseVehicle(file: File) {
  const formData = new FormData();

  // Adds the selected image to the request.
  formData.append("image", file);

  const response = await apiClient.post("/analyse", formData);

  return response.data;
}

export { analyseVehicle };
