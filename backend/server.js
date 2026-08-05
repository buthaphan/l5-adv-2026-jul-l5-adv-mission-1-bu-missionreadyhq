import express from "express";
import cors from "cors";
import dotenv from "dotenv";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5002;

//Middleware
app.use(express.json());
app.use(cors());

// Developer Note:
// Verify the backend server is running and responding.
app.get("/health", (req, res) => {
  res.status(200).json({
    status: "OK",
    message: "Backend is running",
  });
});

//Start Server
const server = app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});

// Catch startup or runtime server errors
server.on("error", (error) => {
  if (error.code === "EADDRINUSE") {
    console.error(
      `[Error] Port ${PORT} is already in use. Please close that process or use a different port.`,
    );
  } else {
    console.error(`[Server Error]`, error);
  }
  process.exit(1); // Stop the application safely
});
