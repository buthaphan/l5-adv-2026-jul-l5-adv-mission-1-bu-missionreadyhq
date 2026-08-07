# AI Decision Log

## Objective

Build an AI model capable of classifying vehicle body types for the Turners Vehicle Analyser prototype.

## Options Considered

### Azure AI Vision

Pros
- Fast to integrate.
- No training dataset required.

Cons
- General-purpose model.
- Unable to reliably classify specific vehicle body types required by the project.

### Azure Custom Vision ✅ Selected

Pros
- Can be trained using project-specific images.
- Produces custom classifications.
- Easy to integrate with the existing backend.

Cons
- Requires image collection and model training.
- Performance depends on dataset quality.

## Decision

Azure Custom Vision was selected because the project requires recognising specific vehicle body types rather than relying on a generic vision model.

The additional effort required to build a training dataset provides a model that better matches the project requirements.
