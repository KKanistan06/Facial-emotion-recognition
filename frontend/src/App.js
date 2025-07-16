import React, { useState } from 'react';
import './App.css';
import ImageUpload from './components/ImageUpload';
import ResultDisplay from './components/ResultDisplay';
import LoadingSpinner from './components/LoadingSpinner';

function App() {
  const [result, setResult] = useState(null);
  const [loading, setLoading] = useState(false);
  const [uploadedImage, setUploadedImage] = useState(null);

  const handleImageUpload = async (file) => {
    setLoading(true);
    setResult(null);
    
    // Create preview URL
    const imageUrl = URL.createObjectURL(file);
    setUploadedImage(imageUrl);

    const formData = new FormData();
    formData.append('image', file);

    try {
      const response = await fetch('http://localhost:5000/api/predict', {
        method: 'POST',
        body: formData,
      });

      if (!response.ok) {
        throw new Error('Failed to analyze image');
      }

      const data = await response.json();
      setResult(data);
    } catch (error) {
      console.error('Error:', error);
      alert('Error analyzing image. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  const handleReset = () => {
    setResult(null);
    setUploadedImage(null);
    setLoading(false);
  };

  return (
    <div className="App">
      <header className="app-header">
        <h1>🎭 Emotion Recognition AI</h1>
        <p>Upload an image to detect facial emotions with confidence levels</p>
        <div className="model-info">
          <span className="badge">ResNet50</span>
          <span className="badge">96.43% Accuracy</span>
          <span className="badge">Cross-Cultural</span>
        </div>
      </header>

      <main className="app-main">
        <div className="container">
          {!uploadedImage && !loading && (
            <ImageUpload onImageUpload={handleImageUpload} />
          )}

          {loading && <LoadingSpinner />}

          {uploadedImage && result && (
            <ResultDisplay 
              result={result} 
              imageUrl={uploadedImage}
              onReset={handleReset}
            />
          )}
        </div>
      </main>

      <footer className="app-footer">
        <p>Powered by Advanced ResNet50 with Attention Mechanisms</p>
      </footer>
    </div>
  );
}

export default App;
