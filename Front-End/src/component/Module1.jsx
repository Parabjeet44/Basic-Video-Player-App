// Module1.jsx
import React, { useState } from 'react';
import SimpleVideoPlayer from './videoPlayer';
import ProgressBar from '../assets/ProgressBar';

const Module1 = () => {
  const [progress, setProgress] = useState(0);
  const [lastUpdateTime, setLastUpdateTime] = useState(null);

  const handleProgressUpdate = (newProgress) => {
    setProgress(newProgress);
    setLastUpdateTime(new Date().toISOString());
  };

  return (
    <div>
      <h1>Module 1</h1>
      <div style={{ width: '600px', margin: '0 auto' }}>
        <SimpleVideoPlayer 
          src="/Video1.mp4" 
          onProgressUpdate={handleProgressUpdate} 
        />
        <div className="mt-4">
          <p>Progress: {progress.toFixed(2)}% completed</p>
          <p>Last Update: {lastUpdateTime || 'Not updated yet'}</p>
          <ProgressBar progress={progress} />
        </div>
      </div>
    </div>
  );
};

export default Module1;

