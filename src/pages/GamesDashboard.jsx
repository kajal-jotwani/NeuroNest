import React from "react";
import GameCard from "../components/GameCard";
import { useNavigate } from "react-router-dom";
import "./GamesDashboard.css"; // Import the CSS file
import { Typography, styled } from "@mui/material";

const Title = styled(Typography)(({ theme }) => ({
  fontSize: "64px",
  color: "#000336",
  fontWeight: "bold",
  margin: theme.spacing(4, 0, 4, 0),
  [theme.breakpoints.down("sm")]: {
    fontSize: "40px",
  },
}));

const GamesDashboard = () => {
  const navigate = useNavigate();
  
  const games = [
    {
      name: "Reaction Time Tester",
      image: '/bg2.jpg', 
      description: "Test and improve your reaction time with this fun game.",
      route: "/reaction-time-tester",
    },
    {
      name: "Memory Match",
      image: "match.jpg",
      description: "Boost your memory by matching pairs in this classic game.",
      route: "/memory-match",
    },
    {
      name: "Puzzle Slider",
      image: "/slider.jpeg",
      description: "Solve puzzles and improve problem-solving skills.",
      route: "/puzzle-slider",
    },
    {
      name: "Number Sequence Memory",
      image: "/number.png",
      description: "Enhance your math skills with fun challenges.",
      route: "/number-sequence-memory",
    },
    {
      name: "Color Mixing Game",
      image: "/color.jpeg",
      description: "Find your way through the maze in this exciting game.",
      route: "/color-mixing-game",
    },
    {
      name: "Shape Sorter",
      image: "/sorter.jpeg",
      description: "Find hidden words in the word search puzzle.",
      route: "/Shape-sorter", 
    },
   
  ];

  return (
    <div className="games-dashboard">
                  <Title variant="h2">Games Dashboard</Title>
      <div className="games-grid">
        {games.map((game) => (
          <GameCard
            key={game.name}
            name={game.name}
            image={game.image}
            description={game.description}
            onStart={() => navigate(game.route)} 
          />
        ))}
      </div>
    </div>
  );
};

export default GamesDashboard;
