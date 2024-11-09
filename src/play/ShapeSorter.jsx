import React, { useState, useEffect } from 'react';
import { Button, Typography, Box, Paper, Snackbar } from '@mui/material';
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles({
  container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    height: '100vh',
    background: 'linear-gradient(135deg, #ffcc00, #f44336, #3f51b5)',
    backgroundSize: '400% 400%',
    animation: 'gradientBackground 10s ease infinite',
  },
  title: {
    fontSize: '36px',
    fontWeight: 'bold',
    marginBottom: '20px',
    color: 'white',
    textShadow: '2px 2px 5px rgba(0, 0, 0, 0.3)',
  },
  buttonsContainer: {
    display: 'flex',
    gap: '20px',
    marginBottom: '30px',
  },
  shapeButton: {
    padding: '15px 30px',
    fontSize: '18px',
    fontWeight: 'bold',
    cursor: 'pointer',
    textTransform: 'none',
    borderRadius: '50px',
  },
  message: {
    fontSize: '24px',
    fontWeight: 'bold',
    color: 'white',
    textAlign: 'center',
    marginBottom: '20px',
  },
  shapeDisplay: {
    width: '100px',
    height: '100px',
    marginTop: '30px',
    borderRadius: '8px',
    transition: 'all 0.3s ease-in-out',
  },
  shapeCircle: {
    backgroundColor: '#ffcc00',
    borderRadius: '50%',
  },
  shapeSquare: {
    backgroundColor: '#f44336',
  },
  shapeTriangle: {
    backgroundColor: '#3f51b5',
    clipPath: 'polygon(50% 0%, 0% 100%, 100% 100%)',
  },
  shapeContainer: {
    display: 'flex',
    justifyContent: 'center',
    gap: '20px',
  },
  shapeBox: {
    width: '120px',
    height: '120px',
    borderRadius: '8px',
    background: '#f2f2f2',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    fontSize: '24px',
    cursor: 'pointer',
  },
  quizMessage: {
    fontSize: '20px',
    color: '#fff',
    fontWeight: 'bold',
  },
});

const ShapeSorter = () => {
  const classes = useStyles();
  const [selectedShape, setSelectedShape] = useState('');
  const [message, setMessage] = useState('');
  const [correctCount, setCorrectCount] = useState(0);
  const [level, setLevel] = useState(1);
  const [snackMessage, setSnackMessage] = useState('');
  const [openSnackbar, setOpenSnackbar] = useState(false);

  // Shapes to be sorted in each level
  const shapeOptions = ['circle', 'square', 'triangle'];

  // Shape selected to place
  const currentShape = shapeOptions[level % shapeOptions.length];

  useEffect(() => {
    setMessage(`Sort the ${currentShape} into the correct area!`);
  }, [level, currentShape]);

  const handleShapeClick = (shape) => {
    if (shape === currentShape) {
      setCorrectCount(correctCount + 1);
      setSnackMessage('Correct! Great job!');
      setOpenSnackbar(true);
      setLevel(level + 1); // Increase level after correct answer
    } else {
      setSnackMessage('Oops! Try again!');
      setOpenSnackbar(true);
    }
  };

  const handleShapeHover = (shape) => {
    if (shape === currentShape) {
      setMessage(`Place the ${currentShape} in the box.`);
    }
  };

  const handleCloseSnackbar = () => {
    setOpenSnackbar(false);
  };

  return (
    <Box className={classes.container}>
      <Typography className={classes.title}>Shape Sorter Game</Typography>
      <Typography className={classes.quizMessage}>{message}</Typography>

      <Box className={classes.shapeContainer}>
        {/* Shape options for user to click */}
        {shapeOptions.map((shape) => (
          <Paper
            key={shape}
            className={classes.shapeBox}
            onClick={() => handleShapeClick(shape)}
            onMouseEnter={() => handleShapeHover(shape)}
          >
            {shape === 'circle' && '🟠'}
            {shape === 'square' && '🟥'}
            {shape === 'triangle' && '🔺'}
          </Paper>
        ))}
      </Box>

      <Snackbar
        open={openSnackbar}
        autoHideDuration={2000}
        onClose={handleCloseSnackbar}
        message={snackMessage}
      />

      <Typography variant="h6" color="white" style={{ marginTop: '30px' }}>
        Correct Sorts: {correctCount} | Level: {level}
      </Typography>
    </Box>
  );
};

export default ShapeSorter;
