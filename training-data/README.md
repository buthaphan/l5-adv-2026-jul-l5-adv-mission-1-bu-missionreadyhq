# Training Data

This folder contains the image dataset used to train the Azure Custom Vision model for the Turners Vehicle Classifier project.

## Dataset Structure

```
training-data/
├── SUV/
├── Sedan/
├── Hatchback/
├── Wagon/
├── Ute/
├── Van/
├── Coupe/
└── Convertible/
```

Each folder represents a single vehicle body type and is used as a classification tag during model training.

## Dataset Summary

| Vehicle Type | Images |
|--------------|-------:|
| SUV | 50 |
| Sedan | 50 |
| Hatchback | 50 |
| Wagon | 50 |
| Ute | 50 |
| Van | 50 |
| Coupe | 50 |
| Convertible | 50 |
| **Total** | **400** |

## Image Selection Guidelines

The dataset was collected to include a variety of:

- Vehicle manufacturers
- Vehicle models
- Colours
- Viewing angles
- Lighting conditions
- Backgrounds

These variations help improve the model's ability to generalise when classifying unseen vehicle images.

## Notes

- Images are organised by vehicle body type.
- Folder names match the Azure Custom Vision tags.
- This dataset represents the first iteration of the training data and may be expanded in future versions to improve model performance.
