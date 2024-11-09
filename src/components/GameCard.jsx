import React from "react";
import "./GameCard.css";

const GameCard = ({ name, image, description, onStart }) => (
  <div className="game-card border rounded-lg p-4 shadow-lg">
    <h2 className="text-lg font-bold mb-2">{name}</h2>
    <img src={image} alt={name} className="w-full h-40 object-cover mb-2" />
    <p className="text-sm mb-4">{description}</p>
    <button
      className="bg-blue-500 text-white py-2 px-4 rounded"
      onClick={onStart}
    >
      Let's Start
    </button>
  </div>
);

export default GameCard;
