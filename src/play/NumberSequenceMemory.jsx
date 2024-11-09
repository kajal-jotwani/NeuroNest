import React, { useState, useEffect } from 'react';

const NumberSequenceMemory = () => {
  const [sequence, setSequence] = useState([]);
  const [userInput, setUserInput] = useState([]);
  const [message, setMessage] = useState('Memorize the sequence');
  const [isGameOver, setIsGameOver] = useState(false);

  const generateSequence = () => {
    const newSequence = [...sequence, Math.floor(Math.random() * 10)];
    setSequence(newSequence);
    setMessage('Memorize and then enter the sequence');
    setUserInput([]);
  };

  const handleInput = (number) => {
    if (isGameOver) return;
    const newInput = [...userInput, number];
    setUserInput(newInput);

    if (newInput.length === sequence.length) {
      if (newInput.join('') === sequence.join('')) {
        setMessage('Correct! New sequence coming...');
        generateSequence();
      } else {
        setMessage('Game Over! Try Again!');
        setIsGameOver(true);
      }
    }
  };

  useEffect(() => {
    if (!isGameOver) {
      const timer = setTimeout(() => {
        generateSequence();
      }, 3000);
      return () => clearTimeout(timer);
    }
  }, [sequence]);

  return (
    <div>
      <h1>Number Sequence Memory</h1>
      <p>{message}</p>
      {sequence.length > 0 && <p>{sequence.join(' ')}</p>}
      {!isGameOver && !sequence.length && (
        <button onClick={generateSequence}>Start</button>
      )}
      {!isGameOver && (
        <div>
          {[0, 1, 2, 3, 4, 5, 6, 7, 8, 9].map((number) => (
            <button key={number} onClick={() => handleInput(number)}>
              {number}
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

export default NumberSequenceMemory;
