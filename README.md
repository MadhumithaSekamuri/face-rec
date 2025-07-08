
# Face-X: AI-Powered Smart Attendance System

## Overview

**Face-X** is an AI-driven smart attendance system that uses **deep learning-based face recognition** to automate and streamline attendance marking in classrooms, offices, and restricted-access environments. The system captures real-time video, detects and recognizes faces using Convolutional Neural Networks (CNNs), and logs attendance in a centralized database—eliminating the need for manual entry, RFID swipes, or biometric touch devices.

---

## Features

* Real-time face detection and recognition from video streams
* High-accuracy **CNN-based deep learning** model for recognition
* Attendance logs automatically updated and exportable
* Absent notifications sent via email
* Continually learns new faces via dataset updates

---

## AI and ML Architecture

### 1. **Face Detection**

* **Algorithm:** Haar Cascades or CNN-based frontal face detector
* **Library:** OpenCV / Dlib
* **Process:**

  * Convert video stream into frames (1 frame/sec recommended)
  * Detect face using pre-trained classifiers
  * Extract and normalize facial region for consistent model input

### 2. **Face Recognition**

* **Model:** Pre-trained CNN (similar to FaceNet or VGG-Face architecture)
* **Techniques:**

  * Feature vector embedding of faces (128-D or 512-D vectors)
  * Cosine Similarity / Euclidean Distance for face matching
* **Frameworks:** TensorFlow / Keras / PyTorch

### 3. **Training**

* Dataset comprises labeled face images of known individuals
* Faces are aligned and augmented (rotation, lighting, scaling)
* Model learns to map each identity to a unique feature space

### 4. **Prediction**

* New face is encoded to feature vector
* Vector compared to stored embeddings using:

  * **Threshold matching** for identity verification
  * If distance < δ (e.g., 0.6), label as known individual
  * Otherwise, labeled as “Unknown” or added to dataset after admin review

---

## System Architecture

```plaintext
[Camera Input]
     ↓
[Frame Extraction (1 FPS)]
     ↓
[Face Detection via CNN]
     ↓
[Face Alignment + Preprocessing]
     ↓
[Face Recognition via CNN Embedding]
     ↓
[Compare with Known Embeddings]
     ↓
[Attendance Logged to Database]
     ↓
[Email Sent if Absent]
```

---

## Modules

| Module              | Description                                              |
| ------------------- | -------------------------------------------------------- |
| `capture_video.py`  | Captures real-time video from webcam and extracts frames |
| `face_detect.py`    | Uses CNN/Haar for face detection                         |
| `face_recognize.py` | Generates embeddings and matches them with known users   |
| `attendance.py`     | Logs recognized user’s attendance in CSV/SQL database    |
| `notifier.py`       | Sends emails to absentees                                |

---

## Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/yourusername/face-x-attendance.git
   cd face-x-attendance
   ```

2. Install dependencies:

   ```bash
   pip install -r requirements.txt
   ```

3. Run the application:

   ```bash
   python main.py
   ```

---

## Requirements

* Python 3.7+
* OpenCV
* NumPy, Pandas
* TensorFlow / Keras
* face\_recognition (Dlib-based)
* Flask (if using Web UI)
* SMTP for email notifications

---

## Results

* **Training Accuracy:** \~98%
* **Validation Accuracy:** \~95%
* **Inference Time:** \~200ms per face on CPU (faster on GPU)
* **Tested Dataset:** Custom student dataset (\~50 identities)

<p align="center">
  <img src="assets/accuracy_chart.png" alt="Accuracy Graph" width="500">
</p>

---

## Future Work

*  Add GPU acceleration using TensorRT
*  Improve spoof protection (e.g., 3D depth, liveness detection)
*  Add web-based dashboard for attendance analytics
*  Deploy mobile app for real-time face marking

---

## References

1. [FaceNet: A Unified Embedding for Face Recognition](https://arxiv.org/abs/1503.03832)
2. OpenCV documentation
3. "Smart Attendance System using Face Recognition", Madhumitha et al., 2024
4. Dlib + face\_recognition library

---

## License

MIT License. See [LICENSE](LICENSE) for more details.


