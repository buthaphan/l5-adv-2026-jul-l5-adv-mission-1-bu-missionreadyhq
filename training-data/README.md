# Training Data

This folder contains the vehicle image dataset used to train the Azure Custom Vision model for the Turners AI Vehicle Recognition project.

> **Note:** The image files are excluded from version control using `.gitignore`. Only the dataset structure and documentation are stored in this repository.

---

## Dataset Structure

```text
training-data/
├── train/
│   ├── Convertible/
│   ├── Coupe/
│   ├── Hatchback/
│   ├── Sedan/
│   ├── SUV/
│   ├── Ute/
│   ├── Van/
│   └── Wagon/
│
├── validation/
│   ├── Convertible/
│   ├── Coupe/
│   ├── Hatchback/
│   ├── Sedan/
│   ├── SUV/
│   ├── Ute/
│   ├── Van/
│   └── Wagon/
│
├── test/
│   ├── Convertible/
│   ├── Coupe/
│   ├── Hatchback/
│   ├── Sedan/
│   ├── SUV/
│   ├── Ute/
│   ├── Van/
│   └── Wagon/
│
└── README.md
```

---

## Training Dataset

The Azure Custom Vision model (Iteration 2) was trained using the images contained in the **train** folder.

| Vehicle Type | Training Images |
|--------------|----------------:|
| Convertible | 100 |
| Coupe | 100 |
| Hatchback | 100 |
| Sedan | 100 |
| SUV | 100 |
| Ute | 100 |
| Van | 100 |
| Wagon | 100 |
| **Total** | **800** |

---

## Image Selection

The training images include a variety of:

- Vehicle manufacturers
- Vehicle models
- Colours
- Viewing angles
- Lighting conditions
- Backgrounds

The aim was to improve the model's ability to classify vehicle body types under different real-world conditions.

---

## Dataset Source

The dataset was obtained from **Kaggle** and was already organised into separate **train**, **validation**, and **test** folders.

For this project, **only the images in the `train` folder** were uploaded to Azure Custom Vision and used for model training.

The `validation` and `test` folders supplied with the dataset have been retained for potential future evaluation but were **not used** during this stage of the project.

---

## Notes

- Folder names match the Azure Custom Vision classification tags.
- Image files are excluded from Git using `.gitignore`.
- The Azure Custom Vision model was retrained using an expanded dataset of **800 training images** (100 images for each of the 8 vehicle body types).
- Future iterations may use the reserved validation and test datasets to independently evaluate model performance.
