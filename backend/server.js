// Configures and starts the Express backend application.

import "dotenv/config";
import express from "express";
import cors from "cors";

import vehicleRoutes from "./routes/vehicleRoutes.js";

const app = express();
const PORT = process.env.PORT || 5002;

// Register application middleware.
app.use(express.json());
app.use(cors());

app.use("/api/vehicle", vehicleRoutes);

// Verify the backend server is running and responding.
app.get("/health", (req, res) => {
	res.status(200).json({
		status: "OK",
		message: "Backend is running",
	});
});

// Start the Express server.
const server = app.listen(PORT, () => {
	console.log(`Server running on http://localhost:${PORT}`);
});

// Catch startup or runtime server errors.
server.on("error", (error) => {
	if (error.code === "EADDRINUSE") {
		console.error(
			`[Error] Port ${PORT} is already in use. Please close that process or use a different port.`,
		);
	} else {
		console.error(`[Server Error]`, error);
	}
	// Stop the application safely
	process.exit(1);
});
