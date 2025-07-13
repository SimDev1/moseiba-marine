import React, { useEffect, useState } from 'react';
import { Box, CircularProgress, Typography, Fade } from '@mui/material';
import { keyframes } from '@emotion/react';

const typewriter = keyframes`
  from { width: 0 }
  to { width: 100% }
`;

const blinkCaret = keyframes`
  from, to { border-color: transparent }
  50% { border-color: #00ffff }
`;

const Loader = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 4000); // Hide after 3 seconds
    return () => clearTimeout(timer);
  }, []);

  return (
    <Fade in={loading} unmountOnExit>
      <Box
        sx={{
          position: 'fixed',
          top: 0,
          left: 0,
          width: '100vw',
          height: '100vh',
          backgroundColor: '#0a0a0a',
          zIndex: 2000,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          flexDirection: 'column',
        }}
      >
        <CircularProgress
          size={80}
          thickness={5}
          sx={{
            color: '#00ffff',
            boxShadow: '0 0 20px #00ffff',
          }}
        />

        <Typography
          sx={{
            mt: 2,
            color: '#00ffff',
            fontFamily: "'Orbitron', sans-serif",
            textShadow: '0 0 10px #00ffff',
          }}
        >
          Loading...
        </Typography>

        <Box
          sx={{
            mt: 1,
            overflow: 'hidden',
            whiteSpace: 'nowrap',
            borderRight: '2px solid #00ffff',
            width: 'fit-content',
            fontFamily: "'Orbitron', sans-serif",
            fontSize: '1.5rem',
            color: '#00ffff',
            textShadow: '0 0 10px #00ffff',
            animation: `${typewriter} 2.5s steps(10) 1s forwards, ${blinkCaret} 1s step-end infinite`,
          }}
        >
          MOSEIBA MARINE
        </Box>
      </Box>
    </Fade>
  );
};

export default Loader;
