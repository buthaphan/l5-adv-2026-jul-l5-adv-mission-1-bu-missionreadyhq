# Turners AI Vehicle Recognition

An AI-powered full-stack web application that recognises vehicle body types from uploaded images using Microsoft Azure AI services.

This project was developed as part of the Mission Ready Level 5 Advanced Software Development programme for the Turners AI assignment. It demonstrates how multiple AI providers can be integrated into a maintainable full-stack application through a common service architecture.

---

## Project Highlights

- Upload a vehicle image through a React web application.
- Analyse the image using Azure AI services.
- Support multiple AI providers through a configurable provider architecture.
- Display the predicted vehicle body type with a confidence score.
- Allow users to confirm the prediction before continuing.
- Train and evaluate a custom Azure Custom Vision model using a curated image dataset.

---

## Business Problem

Turners would like to simplify the insurance quotation process by reducing the amount of information customers need to enter manually.

By recognising a vehicle from an uploaded image, the application helps pre-populate vehicle information before the customer continues to the insurance quotation process.

This prototype focuses on vehicle recognition only and does not calculate insurance premiums.

---

## Features

- Vehicle image upload
- AI-powered vehicle classification
- Confidence score display
- Customer confirmation step
- Configurable AI provider selection
- Modular backend architecture
- Error handling for invalid uploads and AI service failures

---

## AI Architecture

The application supports multiple Azure AI services through a common provider interface.

### Azure OpenAI GPT-5.1

Provides:

- Vehicle body type
- Vehicle make
- Vehicle model
- Confidence score
- Explanation of the prediction

### Azure Custom Vision

Provides:

- Vehicle body type
- Confidence score

The active provider is selected using the `AI_PROVIDER` environment variable without changing the application code.

---

## Machine Learning

An Azure Custom Vision classification model was trained using a curated vehicle image dataset.

### Current Training Dataset

- 8 vehicle body types
- 100 training images per class
- 800 training images total

Vehicle classes:

- Convertible
- Coupe
- Hatchback
- Sedan
- SUV
- Ute
- Van
- Wagon

The model was retrained using an expanded dataset and evaluated using Azure Custom Vision performance metrics to compare improvements between training iterations.

---

## Technology Stack

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

### AI Services

- Azure AI Foundry
- Azure OpenAI GPT-5.1
- Azure Custom Vision

---

## Architecture

```text
React Frontend
        │
        ▼
Express REST API
        │
        ▼
AI Provider Service
        │
   ┌────┴─────────────┐
   │                  │
   ▼                  ▼
Azure OpenAI    Azure Custom Vision
        │                  │
        └───────┬──────────┘
                ▼
      VehiclePrediction
                │
                ▼
         React Frontend
```

---

## Project Structure

```text
turners-ai-vehicle-recognition/
│
├── backend/
│   ├── controllers/
│   ├── models/
│   ├── prompts/
│   ├── routes/
│   ├── services/
│   └── app.js
│
├── frontend/
│
├── training-data/
│
├── docs/
│
└── README.md
```

---

## Configuration

The active AI provider is selected using the environment variable:

```env
AI_PROVIDER=openai
```

or

```env
AI_PROVIDER=customvision
```

Changing the provider does not require any code changes.

---

## Current Status

### Completed

- Full-stack application
- Image upload
- Azure OpenAI integration
- Azure Custom Vision integration
- AI provider abstraction
- Custom Vision model training
- Model evaluation
- Confidence score display

### In Progress

- Image URL support
- Independent testing using the reserved test dataset
- Model improvements through additional training iterations

---

## Future Improvements

- Improve Custom Vision model accuracy with additional training data.
- Add vehicle make and model recognition to the Custom Vision workflow.
- Evaluate the model using the reserved test dataset.
- OCR licence plate recognition.
- Vehicle registration lookup.
- Insurance quotation integration.

---

## Lessons Learned

This project provided practical experience in:

- Integrating multiple Azure AI services into a single application.
- Designing a provider-based architecture to support interchangeable AI services.
- Building and evaluating a custom image classification model.
- Understanding that increasing dataset size alone does not guarantee higher model accuracy.
- Iteratively improving a machine learning model through data collection and evaluation.

---

## Author

**Banphot Uthaphan**

