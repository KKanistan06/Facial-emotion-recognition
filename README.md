# Cross-Cultural Facial Emotion Recognition Research

🔍 **Current Status**

This is ongoing research on Cross-Cultural Facial Emotion Recognition using Transfer Learning. At present, we have finalized our methodology and collected two benchmark datasets (Indian and Japanese). Model training and evaluation will begin in the next phase of the study.

---

📚 **Contents**

- [Introduction](#introduction)
- [Dataset Collection](#dataset-collection)
- [Proposed Methodology](#proposed-methodology)
- [Planned Experiments](#planned-experiments)
- [Directory Structure](#directory-structure)
- [Contributing](#contributing)
- [License](#license)

---

## Introduction

Facial Emotion Recognition (FER) has applications in human-computer interaction, mental health monitoring, and security. Cultural differences can significantly impact how emotions are expressed and perceived. Our research aims to:

1. Explore cross-cultural generalization of deep CNNs.
2. Fine-tune ResNet-18 and VGG-16 models on Indian and Japanese facial expression datasets.
3. Identify challenges in adapting models across cultural domains.

🔖 Research Phase: **Methodology defined & Data collected**

---

## Dataset Collection

We have assembled two curated datasets:

- **Indian Facial Expression Dataset (IFED)** 🇮🇳
  - 600+ images across six basic emotions: Angry, Disgust, Fear, Happy, Sad, Surprise.
  - Controlled lab conditions, diverse age and gender.

- **JAFFE (Japanese Female Facial Expression)** 🇯🇵
  - 213 images from ten Japanese female models, same six emotions.
  - Standard poses with neutral backgrounds.

All images are cropped to face regions and resized to 224×224 pixels for consistency.

---

## Proposed Methodology

Our transfer learning framework involves:

1. **Preprocessing:**
   - Face detection & alignment with dlib.
   - Resize to 224×224 pixels.
   - Normalize intensity values in [0,1].

2. **Data Augmentation:**
   - Random horizontal flips 🔄
   - Rotations (±15°) 🔄
   - Brightness & contrast changes 🎨

3. **Model Selection:**
   - **ResNet-18**: Residual connections for deeper training ease.
   - **VGG-16**: Deep architecture with small convolutional filters.

4. **Transfer Learning Strategy:**
   - Stage 1: Freeze base layers, train classifier heads.
   - Stage 2: Unfreeze top blocks, fine-tune end-to-end.

5. **Evaluation Plan:**
   - Metrics: Accuracy, Precision, Recall, F1-Score, Confusion Matrix.
   - Cross-cultural tests: Indian→Japanese and Japanese→Indian.

---

## Planned Experiments 🧪

1. **Baseline Training:**
   - Train ResNet-18 and VGG-16 on individual datasets separately.
2. **Cross-Cultural Adaptation:**
   - Fine-tune models from one cultural dataset to the other.
3. **Analysis:**
   - Compare performance drops.
   - Investigate domain shift mitigation techniques (e.g., adversarial adaptation).

---

## Directory Structure 📁

```
cross-cultural-fer/
├── data/              # Collected IFED and JAFFE datasets
├── src/               # Scripts for preprocessing and model definition
├── notebooks/         # Planning and exploratory notebooks
├── reports/           # Methodology documentation and progress reports
├── requirements.txt   # Python dependencies
└── README.md          # This file
```

---

## Contributing 🤝

Your feedback and code contributions are welcome! Please:

1. Fork this repository 🍴
2. Create a feature branch 🌿
3. Submit a Pull Request 📬

---

## License 📄

This work is licensed under the MIT License. See [LICENSE](LICENSE) for details.

✨ Stay tuned as we embark on training and evaluation! ✨
