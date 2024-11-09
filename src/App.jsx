import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/home';
import Games from './pages/games';
import ReactionTimeTester from './play/ReactionTimeTester';
import MemoryMatch from './play/MemoryMatch';
import PuzzleSlider from './play/PuzzleSlider';
import NumberSequenceMemory from './play/NumberSequenceMemory';
import ColorMixingGame from './play/ColorMixingGame'; 
import ShapeSorter from "./play/ShapeSorter";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/games" element={<Games />} />
        <Route path="/reaction-time-tester" element={<ReactionTimeTester />} />
        <Route path="/memory-match" element={<MemoryMatch />} />
        <Route path="/puzzle-slider" element={<PuzzleSlider />} />
        <Route path="/number-sequence-memory" element={<NumberSequenceMemory />} />
        <Route path="/color-mixing-game" element={<ColorMixingGame />} />
        <Route path="/Shape-sorter" element={<ShapeSorter />} />
      </Routes>
    </Router>
  );
};

export default App;
