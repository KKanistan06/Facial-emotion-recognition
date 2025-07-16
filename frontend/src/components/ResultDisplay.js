import React from 'react';

const ResultDisplay = ({ result, imageUrl, onReset }) => {
  const getEmotionEmoji = (emotion) => {
    const emojis = {
      'Happy': '😊',
      'Sad': '😢',
      'Angry': '😠',
      'Fear': '😨',
      'Surprise': '😲',
      'Disgust': '🤢',
      'Neutral': '😐'
    };
    return emojis[emotion] || '😐';
  };

  return (
    <div className="result-container">
      <div className="result-header">
        <h2>Analysis Complete!</h2>
        <button className="reset-button" onClick={onReset}>
          🔄 Analyze Another Image
        </button>
      </div>

      <div className="result-content">
        <div className="image-section">
          <div className="uploaded-image">
            <img src={imageUrl} alt="Uploaded" />
          </div>
        </div>

        <div className="prediction-section">
          <div className="main-prediction">
            <div 
              className="emotion-badge"
              style={{ backgroundColor: result.color }}
            >
              <span className="emotion-emoji">
                {getEmotionEmoji(result.emotion)}
              </span>
              <span className="emotion-name">{result.emotion}</span>
            </div>
            <div className="confidence-score">
              <span className="confidence-label">Confidence</span>
              <span className="confidence-value">{result.confidence}%</span>
            </div>
          </div>

          <div className="all-predictions">
            <h4>All Emotion Probabilities</h4>
            <div className="probability-bars">
              {result.all_probabilities
                .sort((a, b) => b.probability - a.probability)
                .map((item, index) => (
                  <div key={index} className="probability-item">
                    <div className="probability-label">
                      <span className="emotion-emoji">
                        {getEmotionEmoji(item.emotion)}
                      </span>
                      <span>{item.emotion}</span>
                      <span className="percentage">{item.probability}%</span>
                    </div>
                    <div className="probability-bar">
                      <div 
                        className="probability-fill"
                        style={{ 
                          width: `${item.probability}%`,
                          backgroundColor: item.color 
                        }}
                      />
                    </div>
                  </div>
                ))}
            </div>
          </div>
        </div>
      </div>

      <div className="model-stats">
        <div className="stat-item">
          <span className="stat-label">Model</span>
          <span className="stat-value">ResNet50</span>
        </div>
        <div className="stat-item">
          <span className="stat-label">Accuracy</span>
          <span className="stat-value">96.43%</span>
        </div>
        <div className="stat-item">
          <span className="stat-label">Training</span>
          <span className="stat-value">Cross-Cultural</span>
        </div>
      </div>
    </div>
  );
};

export default ResultDisplay;
