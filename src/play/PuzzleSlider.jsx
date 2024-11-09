import React, { useState } from 'react';
import './PuzzleSlider.css'; // Add some CSS for styling

const PuzzleSlider = () => {
  const [puzzle, setPuzzle] = useState([1, 2, 3, 4, 5, 6, 7, 8, null]);

  const shufflePuzzle = () => {
    const shuffledPuzzle = [...puzzle];
    // Shuffle puzzle array using Fisher-Yates algorithm
    for (let i = shuffledPuzzle.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffledPuzzle[i], shuffledPuzzle[j]] = [shuffledPuzzle[j], shuffledPuzzle[i]];
    }
    setPuzzle(shuffledPuzzle);
  };

  const handleClick = (index) => {
    const emptyIndex = puzzle.indexOf(null);
    // Allow the move if the tile is adjacent to the empty spot
    const isAdjacent =
      index === emptyIndex - 1 || // Left
      index === emptyIndex + 1 || // Right
      index === emptyIndex - 3 || // Above
      index === emptyIndex + 3;   // Below

    if (isAdjacent) {
      const newPuzzle = [...puzzle];
      [newPuzzle[index], newPuzzle[emptyIndex]] = [newPuzzle[emptyIndex], newPuzzle[index]];
      setPuzzle(newPuzzle);
    }
  };

  return (
    <div>
      <h1>Puzzle Slider</h1>
      <div className="puzzle-grid">
        {puzzle.map((piece, index) => (
          <div 
            key={index} 
            className={`puzzle-piece ${piece === null ? 'empty' : ''}`} 
            onClick={() => handleClick(index)}
          >
            {piece}
          </div>
        ))}
      </div>
      <button onClick={shufflePuzzle}>Shuffle</button>
    </div>
  );
};

export default PuzzleSlider;
