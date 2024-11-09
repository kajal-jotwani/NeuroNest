// src/pages/ReactionTimeTester.jsx
import React, { useState } from 'react';
import { Button, Typography, Box } from '@mui/material';
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles((theme) => ({
  container: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100vh',
    backgroundColor: '#e3f2fd', // Lighter background color
    fontFamily: 'Roboto, sans-serif',
    padding: '20px',
  },
  header: {
    fontSize: '2.5rem',
    color: '#333',
    marginBottom: '30px',
    textAlign: 'center',
    fontWeight: 'bold',
    textShadow: '2px 2px 4px rgba(0, 0, 0, 0.2)',
  },
  message: {
    fontSize: '1.75rem',
    fontWeight: 'bold',
    padding: '15px 25px',
    borderRadius: '12px',
    marginBottom: '30px',
    transition: 'background-color 0.4s ease, color 0.4s ease',
    backgroundColor: '#ffffff',
    color: '#444',
    boxShadow: '0px 5px 15px rgba(0, 0, 0, 0.1)',
  },
  clickNow: {
    backgroundColor: '#ff5722', // Attention-grabbing color for "Click NOW!"
    color: '#ffffff',
    animation: 'pulse 1s infinite',
  },
  reactionTime: {
    fontSize: '1.5rem',
    fontWeight: 'bold',
    margin: '20px',
    padding: '10px 20px',
    backgroundColor: '#4caf50',
    color: '#ffffff',
    borderRadius: '12px',
    boxShadow: '0px 5px 15px rgba(0, 0, 0, 0.2)',
  },
  button: {
    fontSize: '1.2rem',
    fontWeight: 'bold',
    color: '#ffffff',
    backgroundColor: '#007bff',
    padding: '15px 40px',
    margin: '10px',
    borderRadius: '10px',
    boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.3)',
    transition: 'background-color 0.3s, transform 0.1s ease',
    '&:hover': {
      backgroundColor: '#0056b3',
    },
    '&:active': {
      transform: 'scale(0.95)',
      backgroundColor: '#004bb1',
    },
  },
  buttonContainer: {
    display: 'flex',
    gap: '15px',
  },
  // Adding animation for the "Click NOW!" message
  '@keyframes pulse': {
    '0%, 100%': {
      transform: 'scale(1)',
    },
    '50%': {
      transform: 'scale(1.1)',
    },
  },
}));

const ReactionTimeTester = () => {
  const [message, setMessage] = useState('Click to start');
  const [reactionTime, setReactionTime] = useState(null);
  const [startTime, setStartTime] = useState(null);
  const classes = useStyles();

  const startTest = () => {
    setMessage('Wait for it...');
    const randomDelay = Math.floor(Math.random() * 5000) + 1000;
    setStartTime(Date.now());
    setTimeout(() => {
      setMessage('Click NOW!');
    }, randomDelay);
  };

  const handleClick = () => {
    if (message === 'Click NOW!') {
      const endTime = Date.now();
      setReactionTime(endTime - startTime);
      setMessage('Test again');
    }
  };

  return (
    <Box className={classes.container}>
      <Typography className={classes.header}>Reaction Time Tester</Typography>
      <Typography className={`${classes.message} ${message === 'Click NOW!' ? classes.clickNow : ''}`}>
        {message}
      </Typography>
      {reactionTime && (
        <Typography className={classes.reactionTime}>Reaction Time: {reactionTime}ms</Typography>
      )}
      <Box className={classes.buttonContainer}>
        <Button variant="contained" className={classes.button} onClick={startTest}>
          Start Test
        </Button>
        <Button variant="contained" className={classes.button} onClick={handleClick}>
          Click
        </Button>
      </Box>
    </Box>
  );
};

export default ReactionTimeTester;
