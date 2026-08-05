// Developer Note:
// Configures Multer to receive uploaded images in memory.
// Images are stored temporarily and later sent to Azure OpenAI.

import multer from "multer";

// Store uploaded files in memory instead of saving them to disk.
const storage = multer.memoryStorage();

// Accept a single uploaded image named "image".
const upload = multer({
  storage,
});

export default upload;
