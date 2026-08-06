import axios from "axios";

// Creates a reusable Axios client for communicating with the backend API.
const axiosClient = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
});

export default axiosClient;
