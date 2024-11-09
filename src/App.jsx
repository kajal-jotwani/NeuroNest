import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import { useAuth0 } from '@auth0/auth0-react';
import PropTypes from 'prop-types';

// import Navbar from './Navbar';
import Home from './pages/home';
import Games from './pages/games';
import ReactionTimeTester from './play/ReactionTimeTester';
import MemoryMatch from './play/MemoryMatch';
import PuzzleSlider from './play/PuzzleSlider';
import NumberSequenceMemory from './play/NumberSequenceMemory';
import ColorMixingGame from './play/ColorMixingGame';
import ShapeSorter from './play/ShapeSorter';

const App = () => {
  const { isAuthenticated } = useAuth0();

  // if (isLoading) return <div>Loading...</div>;

  const ProtectedRoute = ({ children }) => {
    if (!isAuthenticated) {
      return <Navigate to="/" />;
    }
    return children;
  };
  
  ProtectedRoute.propTypes = {
    children: PropTypes.node.isRequired,
  };

  return (
    <Router>
      {/* <Navbar /> */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route 
          path="/games" 
          element={
            // <ProtectedRoute>
              <Games />
            // </ProtectedRoute>
          } 
        />
        <Route path="/reaction-time-tester" element={<ReactionTimeTester />} />
        <Route path="/memory-match" element={<MemoryMatch />} />
        <Route path="/puzzle-slider" element={<PuzzleSlider />} />
        <Route path="/number-sequence-memory" element={<NumberSequenceMemory />} />
        <Route path="/color-mixing-game" element={<ColorMixingGame />} />
        <Route path="/shape-sorter" element={<ShapeSorter />} />
      </Routes>
    </Router>
  );
};

export default App;
