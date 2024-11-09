// src/pages/ColorMixingGame.jsx
import React, { useState } from 'react';

const ColorMixingGame = () => {
  const [color1, setColor1] = useState('');
  const [color2, setColor2] = useState('');
  const [result, setResult] = useState('');

  const mixColors = () => {
    if (color1 === 'red' && color2 === 'blue') {
      setResult('purple');
    } else if (color1 === 'red' && color2 === 'yellow') {
      setResult('orange');
    } else if (color1 === 'blue' && color2 === 'yellow') {
      setResult('green');
    } else {
      setResult('Try another combination');
    }
  };

  return (
    <div>
      <h1>Color Mixing Game</h1>
      <div>
        <button onClick={() => setColor1('red')}>Red</button>
        <button onClick={() => setColor1('blue')}>Blue</button>
        <button onClick={() => setColor1('yellow')}>Yellow</button>
      </div>
      <div>
        <button onClick={() => setColor2('red')}>Red</button>
        <button onClick={() => setColor2('blue')}>Blue</button>
        <button onClick={() => setColor2('yellow')}>Yellow</button>
      </div>
      <button onClick={mixColors}>Mix Colors</button>
      <p>Result: {result}</p>
    </div>
  );
};

export default ColorMixingGame;
