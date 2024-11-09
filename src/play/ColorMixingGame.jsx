import React, { useState } from 'react';
import { Button, Box, Typography, Card, CardContent, Stack, Divider, Snackbar, Alert } from '@mui/material';

const ColorMixingGame = () => {
  const [color1, setColor1] = useState('');
  const [color2, setColor2] = useState('');
  const [result, setResult] = useState('');
  const [openSnackbar, setOpenSnackbar] = useState(false);

  // Define colors
  const colors = ['red', 'blue', 'yellow', 'green', 'purple', 'orange', 'pink', 'cyan', 'brown', 'violet'];

  const mixColors = () => {
    // Define combinations in both directions
    const combinations = {
      'red+blue': 'purple',
      'blue+red': 'purple',
      'red+yellow': 'orange',
      'yellow+red': 'orange',
      'blue+yellow': 'green',
      'yellow+blue': 'green',
      'pink+yellow': 'peach',
      'yellow+pink': 'peach',
      'cyan+blue': 'light blue',
      'blue+cyan': 'light blue',
      'red+red': 'red',
      'blue+blue': 'blue',
      'yellow+yellow': 'yellow',
      'pink+pink': 'pink',
      'cyan+cyan': 'cyan',
      'brown+brown': 'brown',
      'violet+violet': 'violet',
    };

    const combinationKey1 = `${color1}+${color2}`;
    const combinationKey2 = `${color2}+${color1}`; // Allow reverse combinations

    if (combinations[combinationKey1]) {
      setResult(combinations[combinationKey1]);
    } else if (combinations[combinationKey2]) {
      setResult(combinations[combinationKey2]);
    } else {
      setResult('Try another combination');
    }

    setOpenSnackbar(true);
  };

  const resetColors = () => {
    setColor1('');
    setColor2('');
    setResult('');
  };

  const colorButton = (color) => (
    <Button
      variant="contained"
      onClick={() => {
        if (!color1) {
          setColor1(color);
        } else if (!color2) {
          setColor2(color);
        }
      }}
      sx={{
        backgroundColor: color,
        color: 'white',
        width: '80px', // Set a fixed width for the button
        height: '80px', // Set a fixed height for the button
        fontSize: '1.2rem',
        '&:hover': {
          backgroundColor: color,
          opacity: 0.85,
        },
        borderRadius: '50%',
        boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.1)',
        transition: 'all 0.3s ease',
        margin: '8px', // Add spacing between buttons
        textTransform: 'none', // Prevent text from transforming to uppercase
      }}
    >
      {color.charAt(0).toUpperCase()}
    </Button>
  );

  return (
    <Box
      display="flex"
      justifyContent="center"
      alignItems="center"
      minHeight="100vh"
      bgcolor="#f0f4f8"
      p={2}
    >
      <Card sx={{ width: 600, padding: 3, boxShadow: 8, borderRadius: 8, backgroundColor: '#fff' }}>
        <CardContent>
          <Typography variant="h3" component="div" gutterBottom textAlign="center" sx={{ color: '#ff6f61', fontWeight: 'bold' }}>
            Color Mixing Game
          </Typography>
          <Typography variant="h5" component="div" textAlign="center" sx={{ color: '#555', mb: 3 }}>
            Mix and match the colors!
          </Typography>

          <Stack direction="row" justifyContent="center" spacing={3} mb={3}>
            <Box>
              <Typography variant="h6" component="div" textAlign="center" sx={{ color: '#444' }}>
                Choose Color 1
              </Typography>
              <Box
                display="grid"
                gridTemplateColumns="repeat(2, 1fr)" // Create 3 columns
                gap={2}
                justifyItems="center"
                sx={{
                  marginTop: 1,
                  overflow: 'hidden', // Prevent overflow if the grid is too large
                  maxWidth: '300px', // Limit the width
                }}
              >
                {colors.slice(0, 5).map((color) => colorButton(color))}
              </Box>
            </Box>

            <Box>
              <Typography variant="h6" component="div" textAlign="center" sx={{ color: '#444' }}>
                Choose Color 2
              </Typography>
              <Box
                display="grid"
                gridTemplateColumns="repeat(3, 1fr)" // Create 3 columns
                gap={2}
                justifyItems="center"
                sx={{
                  marginTop: 1,
                  overflow: 'hidden', // Prevent overflow if the grid is too large
                  maxWidth: '300px', // Limit the width
                }}
              >
                {colors.slice(5).map((color) => colorButton(color))}
              </Box>
            </Box>
          </Stack>

          <Divider sx={{ marginY: 2 }} />
          <Stack direction="row" justifyContent="center" spacing={3}>
            <Button
              variant="contained"
              onClick={mixColors}
              sx={{
                bgcolor: '#ff6f61',
                color: 'white',
                paddingX: 4,
                paddingY: 1.5,
                borderRadius: 5,
                '&:hover': {
                  bgcolor: '#ff6f61',
                  opacity: 0.9,
                },
                fontSize: '1.2rem',
                boxShadow: '0px 4px 12px rgba(0, 0, 0, 0.1)',
                transition: 'all 0.3s ease',
              }}
            >
              Mix Colors
            </Button>
            <Button
              variant="outlined"
              onClick={resetColors}
              sx={{
                paddingX: 4,
                paddingY: 1.5,
                borderRadius: 5,
                fontSize: '1.2rem',
                borderColor: '#ff6f61',
                color: '#ff6f61',
                '&:hover': {
                  backgroundColor: '#ff6f61',
                  color: 'white',
                },
                boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.1)',
              }}
            >
              Try Again
            </Button>
          </Stack>

          <Typography variant="h6" component="div" textAlign="center" mt={3} sx={{ color: '#555' }}>
            Selected Colors: {color1 || 'None'} & {color2 || 'None'}
          </Typography>
          <Typography
            variant="h5"
            component="div"
            textAlign="center"
            mt={3}
            sx={{
              fontWeight: 'bold',
              color: result === 'Try another combination' ? '#7f8c8d' : result,
              fontSize: '1.5rem',
              transition: 'color 0.3s ease',
            }}
          >
            Result: {result || 'Choose two colors'}
          </Typography>
        </CardContent>
      </Card>

      <Snackbar open={openSnackbar} autoHideDuration={3000} onClose={() => setOpenSnackbar(false)}>
        <Alert onClose={() => setOpenSnackbar(false)} severity={result === 'Try another combination' ? 'error' : 'success'}>
          {result}
        </Alert>
      </Snackbar>
    </Box>
  );
};

export default ColorMixingGame;
