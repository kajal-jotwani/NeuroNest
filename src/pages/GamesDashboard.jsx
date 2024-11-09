import React from "react";
import GameCard from "../components/GameCard";
import { useNavigate } from "react-router-dom";
import "./GamesDashboard.css"; // Import the CSS file

const GamesDashboard = () => {
  const navigate = useNavigate();
  
  const games = [
    {
      name: "Reaction Time Tester",
      image: '/images/bg2.jpg', 
      description: "Test and improve your reaction time with this fun game.",
      route: "/reaction-time-tester",
    },
    {
      name: "Memory Match",
      image: "/images/match.jpg",
      description: "Boost your memory by matching pairs in this classic game.",
      route: "/memory-match",
    },
    {
      name: "Puzzle Slider",
      image: "/images/puzzle-game.jpg",
      description: "Solve puzzles and improve problem-solving skills.",
      route: "/puzzle-slider",
    },
    {
      name: "Number Sequence Memory",
      image: "/images/math-challenge.jpg",
      description: "Enhance your math skills with fun challenges.",
      route: "/number-sequence-memory",
    },
    {
      name: "Color Mixing Game",
      image: "/images/maze-runner.jpg",
      description: "Find your way through the maze in this exciting game.",
      route: "/color-mixing-game",
    },
    {
      name: "Shape Sorter",
      image: "/images/word-search.jpg",
      description: "Find hidden words in the word search puzzle.",
      route: "/Shape-sorter", // Make sure this is the correct route
    },
   
  ];

  return (
    <div className="games-dashboard">
      <h1 className="text-3xl font-bold mb-6 text-center">Games Dashboard</h1>
      <div className="games-grid">
        {games.map((game) => (
          <GameCard
            key={game.name}
            name={game.name}
            image={game.image}
            description={game.description}
            onStart={() => navigate(game.route)} // This navigates to the correct route
          />
        ))}
      </div>
    </div>
  );
};

export default GamesDashboard;
