import React from 'react';

const LoadingSpinner = () => {
  return (
    <div className="loading-container">
      <div className="loading-spinner">
        <div className="spinner"></div>
      </div>
      <h3>Analyzing Image...</h3>
      <p>Our AI is processing your image to detect emotions</p>
      <div className="loading-steps">
        <div className="step active">📸 Image Processing</div>
        <div className="step active">🧠 Feature Extraction</div>
        <div className="step active">🎭 Emotion Detection</div>
      </div>
    </div>
  );
};

export default LoadingSpinner;
