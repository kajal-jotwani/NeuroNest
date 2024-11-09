import React from "react";
import { Route, Routes } from "react-router-dom";
import GamesDashboard from './GamesDashboard'; // Import the dashboard

const Games = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<GamesDashboard />} />
      </Routes>
    </div>
  );
};

export default Games;
