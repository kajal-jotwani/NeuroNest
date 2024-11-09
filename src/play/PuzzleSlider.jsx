// src/pages/PuzzleSlider.jsx
import React, { useState } from 'react';

const PuzzleSlider = () => {
  const [puzzle, setPuzzle] = useState([1, 2, 3, 4, 5, 6, 7, 8, null]);

  const shufflePuzzle = () => {
    setPuzzle(puzzle.sort(() => Math.random() - 0.5));
  };

  const handleClick = (index) => {
    if (puzzle[index] === null) return;
    const newPuzzle = [...puzzle];
    const emptyIndex = newPuzzle.indexOf(null);
    [newPuzzle[index], newPuzzle[emptyIndex]] = [newPuzzle[emptyIndex], newPuzzle[index]];
    setPuzzle(newPuzzle);
  };

  return (
    <div>
      <h1>Puzzle Slider</h1>
      <div className="puzzle-grid">
        {puzzle.map((piece, index) => (
          <div key={index} className="puzzle-piece" onClick={() => handleClick(index)}>
            {piece}
          </div>
        ))}
      </div>
      <button onClick={shufflePuzzle}>Shuffle</button>
    </div>
  );
};

export default PuzzleSlider;
