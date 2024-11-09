import React, { useState, useEffect } from 'react';
import { Button, Typography, Box, Card, CardContent } from '@mui/material';
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles({
  root: {
    textAlign: 'center',
    padding: '20px',
    maxWidth: '600px',
    margin: 'auto',
  },
  sequenceContainer: {
    margin: '20px 0',
    fontSize: '24px',
    fontWeight: 'bold',
    letterSpacing: '2px',
  },
  buttonContainer: {
    display: 'grid',
    gridTemplateColumns: 'repeat(5, 1fr)',
    gap: '15px',
    marginTop: '20px',
  },
  gameOverCard: {
    backgroundColor: '#f44336',
    color: 'white',
  },
  successCard: {
    backgroundColor: '#4CAF50',
    color: 'white',
  },
  startButton: {
    marginTop: '20px',
  },
  numberButton: {
    '&:hover': {
      backgroundColor: '#1976d2',  // Blue color on hover
      color: 'white',
    },
  },
});

const NumberSequenceMemory = () => {
  const classes = useStyles();
  const [sequence, setSequence] = useState([]);
  const [userInput, setUserInput] = useState([]);
  const [message, setMessage] = useState('Memorize the sequence');
  const [isGameOver, setIsGameOver] = useState(false);
  const [isSequenceVisible, setIsSequenceVisible] = useState(false);

  const generateSequence = () => {
    const newSequence = [...sequence, Math.floor(Math.random() * 10)];
    setSequence(newSequence);
    setMessage('Memorize and then enter the sequence');
    setUserInput([]);
    setIsSequenceVisible(true);
  };

  const handleInput = (number) => {
    if (isGameOver) return;
    const newInput = [...userInput, number];
    setUserInput(newInput);

    if (newInput.length === sequence.length) {
      if (newInput.join('') === sequence.join('')) {
        setMessage('Correct! New sequence coming...');
        setIsSequenceVisible(false);
        generateSequence();
      } else {
        setMessage('Game Over! Try Again!');
        setIsGameOver(true);
      }
    }
  };

  useEffect(() => {
    if (!isGameOver && sequence.length > 0 && isSequenceVisible) {
      const timer = setTimeout(() => {
        setIsSequenceVisible(false);
        setMessage('Now, enter the sequence');
      }, 3000);
      return () => clearTimeout(timer);
    }
  }, [sequence, isSequenceVisible, isGameOver]);

  return (
    <div className={classes.root}>
      <Typography variant="h4" gutterBottom>
        Number Sequence Memory
      </Typography>

      <Typography variant="h6" color="textSecondary">
        {message}
      </Typography>

      {/* Display sequence only when it's visible */}
      {isSequenceVisible && sequence.length > 0 && (
        <Box className={classes.sequenceContainer}>
          <Card variant="outlined">
            <CardContent>
              <Typography variant="h5">{sequence.join(' ')}</Typography>
            </CardContent>
          </Card>
        </Box>
      )}

      {/* Game Over or Success message */}
      {isGameOver && (
        <Card className={classes.gameOverCard}>
          <CardContent>
            <Typography variant="h5" align="center">
              Game Over! Try Again!
            </Typography>
          </CardContent>
        </Card>
      )}

      {!isGameOver && sequence.length === 0 && (
        <Button
          variant="contained"
          color="primary"
          className={classes.startButton}
          onClick={generateSequence}
        >
          Start
        </Button>
      )}

      {/* Input buttons */}
      {!isGameOver && !isSequenceVisible && (
        <Box className={classes.buttonContainer}>
          {[0, 1, 2, 3, 4, 5, 6, 7, 8, 9].map((number) => (
            <Button
              key={number}
              variant="outlined"
              color="primary"
              className={classes.numberButton} // Apply hover effect here
              onClick={() => handleInput(number)}
              size="large"
            >
              {number}
            </Button>
          ))}
        </Box>
      )}
    </div>
  );
};

export default NumberSequenceMemory;
