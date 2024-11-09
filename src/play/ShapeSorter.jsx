// src/pages/ShapeSorter.jsx
import React, { useState } from 'react';

const ShapeSorter = () => {
  const [selectedShape, setSelectedShape] = useState('');
  const [message, setMessage] = useState('');

  const handleShapeClick = (shape) => {
    if (shape === 'circle' || shape === 'square' || shape === 'triangle') {
      setSelectedShape(shape);
      setMessage(`You selected: ${shape}`);
    }
  };

  return (
    <div>
      <h1>Shape Sorter</h1>
      <div>
        <button onClick={() => handleShapeClick('circle')}>Circle</button>
        <button onClick={() => handleShapeClick('square')}>Square</button>
        <button onClick={() => handleShapeClick('triangle')}>Triangle</button>
      </div>
      <p>{message}</p>
    </div>
  );
};

export default ShapeSorter;
