# AI Evaluation

## Objective

Identify the most suitable Azure AI service for recognising vehicle body types within the Turners AI Vehicle Recognition prototype.

---

## AI Services Evaluated

During development, two Azure AI services were integrated and evaluated.

### Azure OpenAI GPT-5.1

Azure OpenAI was initially selected to rapidly validate the concept without creating a custom machine learning model.

#### Advantages

- No training dataset required.
- Able to identify vehicle body type, make and model.
- Can provide reasoning for its predictions.
- Very flexible for rapid prototyping.

#### Limitations

- Predictions are generated rather than based on a dedicated classification model.
- Responses can vary between requests.
- Less suitable for a consistent image classification task.

---

### Azure Custom Vision

Azure Custom Vision was later integrated to evaluate a dedicated image classification approach.

#### Advantages

- Trained specifically for the required vehicle body types.
- Produces consistent classifications.
- Fast prediction times.
- Confidence scores are generated from a custom-trained model.

#### Limitations

- Requires collecting and maintaining a labelled training dataset.
- Model performance depends heavily on dataset quality and diversity.
- Currently recognises vehicle body type only.

---

## Final Decision

Azure Custom Vision was selected as the primary AI provider because the project focuses on recognising predefined vehicle body types.

The application architecture was intentionally designed to support multiple AI providers through a common provider interface.

As a result:

- Azure Custom Vision is the recommended provider for production use within this prototype.
- Azure OpenAI remains integrated as an alternative provider for comparison, experimentation and future development.

The active provider can be changed using the `AI_PROVIDER` environment variable without modifying the application code.

---

## Lessons Learned

Evaluating multiple Azure AI services demonstrated that different AI approaches are appropriate for different problems.

While Azure OpenAI provided an excellent solution for rapid prototyping and richer responses, Azure Custom Vision offered a more suitable approach for a dedicated image classification task once a labelled dataset had been created.

Designing the application around a provider abstraction allowed both services to coexist while keeping the rest of the application independent of the chosen AI implementation.
