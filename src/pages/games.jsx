import { Route, Routes } from "react-router-dom";
import GamesDashboard from './GamesDashboard';
import ReactionTimeTester from '../play/ReactionTimeTester';
import MemoryMatch from '../play/MemoryMatch';
import PuzzleSlider from '../play/PuzzleSlider';
import NumberSequenceMemory from '../play/NumberSequenceMemory';
import ColorMixingGame from '../play/ColorMixingGame'; 
import ShapeSorter from "../play/ShapeSorter";

const Games = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<GamesDashboard />} />
        <Route path="/reaction-time-tester" element={<ReactionTimeTester />} />
        <Route path="/memory-match" element={<MemoryMatch />} />
        <Route path="/puzzle-slider" element={<PuzzleSlider />} />
        <Route path="/number-sequence-memory" element={<NumberSequenceMemory />} />
        <Route path="/color-mixing-game" element={<ColorMixingGame />} />
        <Route path="/Shape-sorter" element={<ShapeSorter />} />
      </Routes>
    </div>
  );
};

export default Games;
