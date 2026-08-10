# Model Evaluation

This document records the training iterations and evaluation results for the Azure Custom Vision model used in the Turners AI Vehicle Recognition project.

The purpose of these evaluations is to compare different training datasets and measure how changes affect model performance.

---

# Iteration 1

## Training Dataset

- 8 vehicle body types
- 50 training images per class
- 400 training images total

## Performance

| Metric | Result |
|--------|-------:|
| Precision | 78.8% |
| Recall | 65.0% |
| Average Precision (AP) | 75.6% |

### Observations

- Van achieved the strongest performance.
- Sedan had the lowest recall (30%).
- Hatchback and Sedan were frequently confused.
- The model successfully demonstrated the feasibility of vehicle body type classification.

---

# Iteration 2

## Training Dataset

- 8 vehicle body types
- 100 training images per class
- 800 training images total

## Performance

| Metric | Result |
|--------|-------:|
| Precision | 75.0% |
| Recall | 66.7% |
| Average Precision (AP) | 81.4% |

### Observations

- Increasing the dataset improved the overall Average Precision.
- Recall improved slightly.
- Sedan and Ute classification improved noticeably.
- Some classes, including Hatchback and Coupe, became more difficult to classify accurately.

---

# Comparison

| Metric | Iteration 1 | Iteration 2 | Change |
|--------|------------:|------------:|-------:|
| Training Images | 400 | 800 | +400 |
| Precision | 78.8% | 75.0% | -3.8% |
| Recall | 65.0% | 66.7% | +1.7% |
| Average Precision | 75.6% | 81.4% | +5.8% |

---

# Discussion

Increasing the training dataset from 400 to 800 images did not improve every metric. While overall precision decreased slightly, Average Precision and Recall improved.

This suggests that increasing the amount of training data helped the model better generalise across vehicle classes, although some visually similar classes remain challenging.

The results also demonstrate that dataset quality and diversity are as important as dataset size when training an image classification model.

---

# Future Work

Future improvements may include:

- Expanding the dataset with additional vehicle images.
- Improving the diversity of similar vehicle classes such as Sedan, Hatchback and SUV.
- Evaluating the model using the reserved test dataset.
- Investigating image quality and label consistency.
- Comparing additional training iterations.
