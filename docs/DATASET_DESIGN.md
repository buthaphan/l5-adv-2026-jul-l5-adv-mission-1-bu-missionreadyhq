# Dataset Design

## Objective

Create a balanced image dataset for training an Azure Custom Vision classification model capable of recognising common vehicle body types.

---

## Vehicle Categories

The model classifies the following vehicle body types:

- Convertible
- Coupe
- Hatchback
- Sedan
- SUV
- Ute
- Van
- Wagon

---

## Training Dataset

The current training dataset consists of:

- **100 images per category**
- **8 vehicle categories**
- **800 training images**

---

## Image Selection Guidelines

Training images were selected to include a variety of:

- Vehicle manufacturers
- Vehicle models
- Colours
- Viewing angles
- Lighting conditions
- Backgrounds

The aim was to improve the model's ability to generalise to unseen vehicle images.

---

## Dataset Structure

```text
training-data/
├── train/
├── validation/
├── test/
└── README.md
```

Only the **train** dataset has been used to train the Azure Custom Vision model during this project.

The **validation** and **test** datasets have been retained for future evaluation.

---

## Progress

### Completed

- Selected eight vehicle body type categories.
- Increased the training dataset from 50 to 100 images per category.
- Trained multiple Azure Custom Vision iterations.
- Compared model performance using Azure Custom Vision evaluation metrics.

---

## Future Improvements

- Evaluate the model using the reserved test dataset.
- Expand the dataset with additional vehicle images.
- Improve image diversity for similar vehicle categories.
- Continue refining the model through additional training iterations.
