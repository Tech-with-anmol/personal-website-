// components/Snowfall.js
import React from 'react';
import Snowfall from 'react-snowfall';

const SnowfallComponent = () => {
  return (
    <div style={{ position: 'fixed', top: 0, left: 0, width: '100vw', height: '100vh', pointerEvents: 'none' }}>
      <Snowfall />
    </div>
  );
};

export default SnowfallComponent;
