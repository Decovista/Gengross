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
    }, 60); 

    return () => clearInterval(interval);
  }, [onFinish]);

  return (
    <div className="splash-container">
    <span class="loader"></span>
    <h2>Gengross</h2>
    </div>
  );
}

export default SplashScreen;
