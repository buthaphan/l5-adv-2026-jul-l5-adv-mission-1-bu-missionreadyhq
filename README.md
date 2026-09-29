# Turners AI Vehicle Recognition

An AI-powered full-stack prototype that recognises vehicle body types from uploaded images using Microsoft Azure AI services.

The application demonstrates how multiple AI providers can be integrated through a common service architecture, allowing the active provider to be changed through configuration rather than application code.

## Project Overview

The application was developed as part of a vehicle recognition project for Turners. The underlying business idea is to reduce the amount of vehicle information customers need to enter manually during an insurance quotation workflow.

A customer uploads a vehicle image, the backend sends it to the selected AI provider, and the application displays the resulting vehicle prediction and confidence score.

This is a prototype focused on vehicle recognition. It does not calculate insurance premiums or provide a complete insurance quotation service.

## Key Features

- Upload a vehicle image through a React web application
- Drag-and-drop image upload
- Client-side image validation
- Server-side image validation and upload size limits
- AI-powered vehicle classification
- Confidence score display
- Customer confirmation of the prediction
- Azure OpenAI integration
- Azure Custom Vision integration
- Configurable AI provider selection
- Modular backend service architecture
- Error handling for upload and AI service failures

## AI Architecture

The application supports two AI providers through a common provider-selection service.

### Azure OpenAI

Azure OpenAI analyses the uploaded image and can provide:

- Vehicle body type
- Vehicle make
- Vehicle model
- Confidence score
- Explanation of the prediction

### Azure Custom Vision

Azure Custom Vision provides:

- Vehicle body type
- Confidence score

The active provider is selected using the `AI_PROVIDER` environment variable:

```env
AI_PROVIDER=openai
```

or:

```env
AI_PROVIDER=customvision
```

Changing the provider does not require changes to the application code.

## Machine Learning

An Azure Custom Vision classification model was trained using a curated vehicle image dataset.

### Training Dataset

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

The project increased the dataset from 50 to 100 training images per class and compared the resulting model metrics.

The validation and test datasets were retained separately and were not used for the Custom Vision training process.

## Model Evaluation

Two Custom Vision training iterations were documented.

| Iteration | Images per Class | Total Images | Precision | Recall |    AP |
| --------- | ---------------: | -----------: | --------: | -----: | ----: |
| 1         |               50 |          400 |     78.8% |  65.0% | 75.6% |
| 2         |              100 |          800 |     75.0% |  66.7% | 81.4% |

The results demonstrate that increasing the training dataset did not improve every metric. Precision decreased while recall and average precision improved.

Further model evaluation and additional training iterations were identified as areas for future development.

More detail is available in [`docs/MODEL_EVALUATION.md`](docs/MODEL_EVALUATION.md).

## Technology Stack

### Frontend

- React
- TypeScript
- Vite
- Axios
- Tailwind CSS

### Backend

- Node.js
- Express
- Multer
- dotenv

### AI Services

- Azure AI Foundry
- Azure OpenAI
- Azure Custom Vision

## Project Architecture

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
 └────────┬─────────┘
          ▼
  VehiclePrediction
          │
          ▼
   React Frontend
```

The backend separates HTTP handling from AI provider logic:

```text
Routes
  ↓
Controllers
  ↓
AI Provider Service
  ↓
Azure AI Services
```

This allows the application to support different AI providers without changing the controller or frontend workflow.

## Testing

The project includes a manual testing record covering:

- Image upload
- AI analysis
- Prediction results
- Error handling
- Responsive design
- Accessibility and UX

See [`TESTING.md`](TESTING.md) for the documented testing checklist and results.

## Project Documentation

The repository includes supporting documentation covering the development and evaluation process:

- [`docs/AI_DECISION.md`](docs/AI_DECISION.md) — comparison and selection of Azure AI approaches
- [`docs/DATASET_DESIGN.md`](docs/DATASET_DESIGN.md) — dataset structure, categories and training approach
- [`docs/MODEL_EVALUATION.md`](docs/MODEL_EVALUATION.md) — comparison of Custom Vision training iterations
- [`docs/turners-design-system.md`](docs/turners-design-system.md) — frontend design system
- [`TESTING.md`](TESTING.md) — manual testing record
- [`training-data/README.md`](training-data/README.md) — training dataset documentation

The training images themselves are excluded from the repository.

## Configuration

Create a `.env` file in the `backend` directory.

The active AI provider can be selected with:

```env
AI_PROVIDER=openai
```

or:

```env
AI_PROVIDER=customvision
```

The selected provider also requires its corresponding Azure service configuration.

API keys and other credentials should be stored in environment variables and must not be committed to Git.

## Project Structure

```text
turners-ai-vehicle-recognition/
│
├── backend/
│   ├── controllers/
│   ├── middleware/
│   ├── models/
│   ├── prompts/
│   ├── routes/
│   ├── services/
│   └── server.js
│
├── frontend/
│   └── src/
│       ├── components/
│       ├── services/
│       └── types/
│
├── docs/
├── training-data/
├── TESTING.md
└── README.md
```

## Lessons Learned

This project provided practical experience in:

- Integrating multiple Azure AI services into a full-stack application
- Designing a provider-based architecture for interchangeable AI services
- Building and evaluating a custom image classification model
- Working with curated image datasets
- Comparing model performance across training iterations
- Understanding that increasing dataset size alone does not guarantee improvement across every model metric
- Iteratively improving an AI solution through data collection and evaluation

## Project Status

The core prototype is complete, including:

- Full-stack application
- Image upload and validation
- Azure OpenAI integration
- Azure Custom Vision integration
- AI provider abstraction
- Custom Vision model training
- Model evaluation
- Prediction confidence display
- Manual testing

Potential future development includes:

- Independent evaluation using the reserved test dataset
- Additional model training iterations
- Additional training data and dataset diversity
- Vehicle make and model recognition using Custom Vision
- OCR licence plate recognition
- Vehicle registration lookup
- Integration with an insurance quotation workflow

## Author

**Banphot Uthaphan**

AI-Powered Full Stack Developer
