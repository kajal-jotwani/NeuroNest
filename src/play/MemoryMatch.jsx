// src/pages/MemoryMatch.jsx
import React, { useState, useEffect } from 'react';
import './MemoryMatch.css';

const shuffleArray = (array) => array.sort(() => Math.random() - 0.5);

const MemoryMatch = () => {
  const [cards, setCards] = useState([]);
  const [flippedIndices, setFlippedIndices] = useState([]);
  const [matchedIndices, setMatchedIndices] = useState([]);
  const [matchedPairs, setMatchedPairs] = useState(0);
  const [message, setMessage] = useState('');

  const cardImages = [
    '🧩', '🍄', '🌼', '🍒', '🧩', '🍄', '🌼', '🍒'
  ];

  useEffect(() => {
    setCards(shuffleArray(cardImages));
  }, []);

  const handleCardClick = (index) => {
    if (flippedIndices.length === 2 || matchedIndices.includes(index)) return;
    setFlippedIndices([...flippedIndices, index]);
  };

  useEffect(() => {
    if (flippedIndices.length === 2) {
      const [first, second] = flippedIndices;
      if (cards[first] === cards[second]) {
        setMatchedIndices([...matchedIndices, first, second]);
        setMatchedPairs(matchedPairs + 1);
        setMessage('Matched!');
      } else {
        setMessage('Try Again!');
      }
      setTimeout(() => {
        setFlippedIndices([]);
        setMessage('');
      }, 1000);
    }
  }, [flippedIndices]);

  return (
  <div className="games-dashboard">
    <div className="memory-match-container">
      <div className="game-card">
        <h1>Memory Match</h1>
        <p className="game-message">{message}</p>
        <div className="cards-container">
          {cards.map((image, index) => (
            <div
              key={index}
              className={`card ${flippedIndices.includes(index) || matchedIndices.includes(index) ? 'flipped' : ''}`}
              onClick={() => handleCardClick(index)}
            >
              {flippedIndices.includes(index) || matchedIndices.includes(index) ? (
                <div className="card-front">{image}</div>
              ) : (
                <div className="card-back">?</div>
              )}
            </div>
          ))}
        </div>
        <div className="matched-count">Matched Pairs: {matchedPairs}</div>
      </div>
    </div>
    </div>
  );
};

export default MemoryMatch;
