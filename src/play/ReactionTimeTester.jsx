// src/pages/ReactionTimeTester.jsx
import React, { useState, useEffect } from 'react';

const ReactionTimeTester = () => {
  const [message, setMessage] = useState('Click to start');
  const [reactionTime, setReactionTime] = useState(null);
  const [startTime, setStartTime] = useState(null);

  const startTest = () => {
    setMessage('Wait for it...');
    const randomDelay = Math.floor(Math.random() * 5000) + 1000;
    setStartTime(Date.now());
    setTimeout(() => {
      setMessage('Click NOW!');
    }, randomDelay);
  };

  const handleClick = () => {
    if (message === 'Click NOW!') {
      const endTime = Date.now();
      setReactionTime(endTime - startTime);
      setMessage('Test again');
    }
  };

  return (
    <div>
      <h1>Reaction Time Tester</h1>
      <p>{message}</p>
      {reactionTime && <p>Reaction Time: {reactionTime}ms</p>}
      <button onClick={startTest}>Start Test</button>
      <button onClick={handleClick}>Click</button>
    </div>
  );
};

export default ReactionTimeTester;
