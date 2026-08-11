// Creates a reusable Axios client for communicating
// with the backend API.

import axios from "axios";

// Read the backend API URL from the application's
// environment configuration.
const axiosClient = axios.create({
	baseURL: import.meta.env.VITE_API_URL,
});

export default axiosClient;
