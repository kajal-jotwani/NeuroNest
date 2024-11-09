// src/pages/MemoryMatch.jsx
import React, { useState, useEffect } from 'react';

const shuffleArray = (array) => array.sort(() => Math.random() - 0.5);

const MemoryMatch = () => {
  const [cards, setCards] = useState([]);
  const [flippedIndices, setFlippedIndices] = useState([]);
  const [matchedPairs, setMatchedPairs] = useState(0);

  const cardImages = [
    '/images/card1.jpg', '/images/card2.jpg', '/images/card3.jpg', '/images/card4.jpg', 
    '/images/card1.jpg', '/images/card2.jpg', '/images/card3.jpg', '/images/card4.jpg'
  ];

  useEffect(() => {
    setCards(shuffleArray(cardImages));
  }, []);

  const handleCardClick = (index) => {
    if (flippedIndices.length === 2) return;
    setFlippedIndices([...flippedIndices, index]);
  };

  useEffect(() => {
    if (flippedIndices.length === 2) {
      const [first, second] = flippedIndices;
      if (cards[first] === cards[second]) {
        setMatchedPairs(matchedPairs + 1);
      }
      setTimeout(() => setFlippedIndices([]), 1000);
    }
  }, [flippedIndices]);

  return (
    <div className="memory-match">
      <h1>Memory Match</h1>
      <div className="cards-container">
        {cards.map((image, index) => (
          <div
            key={index}
            className="card"
            onClick={() => handleCardClick(index)}
            style={{
              backgroundColor: flippedIndices.includes(index) || matchedPairs === cards.length / 2
                ? 'transparent'
                : '#ddd'
            }}
          >
            {flippedIndices.includes(index) || matchedPairs === cards.length / 2 ? (
              <img src={image} alt="Card" />
            ) : (
              <div className="card-back">?</div>
            )}
          </div>
        ))}
      </div>
      <div className="matched-count">Matched Pairs: {matchedPairs}</div>
    </div>
  );
};

export default MemoryMatch;
