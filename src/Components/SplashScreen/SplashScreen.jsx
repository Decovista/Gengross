import React, { useEffect, useState } from 'react';
import './SplashScreen.css';

function SplashScreen({ onFinish }) {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress(prev => {
        if (prev >= 100) {
          clearInterval(interval);
          setTimeout(onFinish, 150); 
          return 100;
        }
        return prev + 2; 
      });
    }, 40); 

    return () => clearInterval(interval);
  }, [onFinish]);

  return (
    <div className="splash-container">
      <div className="splash-content">
        <h1 className="splash-title">Gengross</h1>
        <div className="progress-bar">
          <div className="progress-fill" style={{ width: `${progress}%` }}></div>
        </div>
      </div>
    </div>
  );
}

export default SplashScreen;
