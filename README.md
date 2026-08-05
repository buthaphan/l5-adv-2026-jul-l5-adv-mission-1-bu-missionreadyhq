# Turners AI Vehicle Recognition

## Project Overview

This project is an AI-powered full-stack prototype developed for Turners as part of a software development assignment.

The application allows users to upload an image of a vehicle, uses Azure OpenAI GPT-5.1 to identify the vehicle, and returns the predicted vehicle type. The prediction can then be confirmed by the user before continuing to the insurance quoting process.

**Note:** This prototype identifies the vehicle only. It does not calculate insurance premiums.

---

## Business Problem

Turners would like to simplify the insurance quotation process by reducing the amount of information customers need to enter manually.

By recognising the vehicle from an uploaded image, the application improves the customer experience and prepares the information required for the next stage of the insurance workflow.

---

## Objectives

- Build a cloud-based AI solution using Microsoft Azure.
- Recognise vehicle types from uploaded images.
- Integrate Azure OpenAI into a full-stack application.
- Build a maintainable and scalable architecture.
- Allow customers to verify the AI prediction.

---

## Tech Stack

### Frontend

- React
- TypeScript
- Vite
- Axios

### Backend

- Node.js
- Express
- Multer
- dotenv

### AI

- Azure AI Foundry
- Azure OpenAI GPT-5.1

---

## Project Structure

```text
turners-ai-vehicle-recognition/

├── backend/
├── frontend/
├── docs/
└── README.md
```

---

## Current Status

🚧 In Development

### Completed

- Business analysis
- Stakeholder analysis
- Azure AI service selection
- Azure AI Foundry project
- GPT-5.1 Playground validation
- Initial project setup

### In Progress

- Backend API

---

## Planned Features

- Upload vehicle image
- AI vehicle recognition
- Display prediction
- Customer confirmation
- Confidence indicator
- Error handling

---

## Architecture

```text
React
    │
    ▼
Express API
    │
    ▼
Azure OpenAI GPT-5.1
    │
    ▼
Prediction JSON
    │
    ▼
React UI
```

---

## Future Improvements

- Licence plate OCR integration
- Vehicle registration lookup
- Insurance premium calculation
- Vehicle history integration
- Additional AI validation

---

## Author

Banphot Uthaphan
