# MediaPipe Vision Models

Download the following model files and place them in this directory:

## Required Models

1. **Pose Landmarker Lite**

   - URL: https://storage.googleapis.com/mediapipe-models/pose_landmarker/pose_landmarker_lite/float16/latest/pose_landmarker_lite.task
   - Save as: `pose_landmarker_lite.task`

2. **Hand Landmarker**
   - URL: https://storage.googleapis.com/mediapipe-models/hand_landmarker/hand_landmarker/float16/latest/hand_landmarker.task
   - Save as: `hand_landmarker.task`

## Download Commands

```bash
cd public/models

# Download Pose Landmarker
curl -O https://storage.googleapis.com/mediapipe-models/pose_landmarker/pose_landmarker_lite/float16/latest/pose_landmarker_lite.task

# Download Hand Landmarker
curl -O https://storage.googleapis.com/mediapipe-models/hand_landmarker/hand_landmarker/float16/latest/hand_landmarker.task
```

## Model Variants

### Pose Landmarker

- **Lite**: Fast, good for real-time (recommended)
- **Full**: Balanced accuracy and speed
- **Heavy**: Best accuracy, slower

### Hand Landmarker

- Only one variant available (float16)

After downloading, the directory should contain:

- `pose_landmarker_lite.task` (~5MB)
- `hand_landmarker.task` (~4MB)
