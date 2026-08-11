// Configures Multer to receive uploaded images in memory.
// Images are stored temporarily and later sent to Azure OpenAI.

import multer from "multer";

// Store uploaded files in memory instead of saving them to disk.
const storage = multer.memoryStorage();

// Configure Multer to accept a single uploaded image.
const upload = multer({
	storage,
});

export default upload;
