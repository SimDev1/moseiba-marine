// src/components/Loader.jsx
import React, { useEffect, useState } from 'react';
import { Box, Typography, Fade } from '@mui/material';
import { keyframes } from '@emotion/react';
import Lottie from 'lottie-react';
import propellerAnimation from './propeller.json'; // ✅ Your animation

// 🔠 Typewriter animation
const typewriter = keyframes`
  from { width: 0 }
  to { width: 100% }
`;

// 🔁 Blinking cursor animation
const blinkCaret = keyframes`
  from, to { border-color: transparent }
  50% { border-color: #00ffff }
`;

const Loader = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 4000); // 4 seconds
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
        {/* 🌟 Neon Glowing Border Container */}
        <Box
          sx={{
            width: 180,
            height: 180,
            borderRadius: '50%',
            p: 2,
            background: 'radial-gradient(#001f1f, #000)',
            boxShadow: '0 0 25px 8px #00ffff, 0 0 50px 10px #00bfff inset',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <Lottie animationData={propellerAnimation} loop={true} style={{ width: '100%', height: '100%' }} />
        </Box>

        {/* ✍️ Loading Text */}
        <Typography
          sx={{
            mt: 2,
            color: '#00ffff',
            fontFamily: "'Orbitron', sans-serif",
            fontSize: '1.2rem',
            textShadow: '0 0 10px #00ffff',
          }}
        >
          Loading...
        </Typography>

        {/* 🔤 Typewriter Marine Brand */}
        <Box
          sx={{
            mt: 1,
            overflow: 'hidden',
            whiteSpace: 'nowrap',
            borderRight: '2px solid #00ffff',
            width: 'fit-content',
            fontFamily: "'Orbitron', sans-serif",
            fontSize: '1.6rem',
            color: '#00ffff',
            textShadow: '0 0 10px #00ffff',
            animation: `${typewriter} 2.5s steps(20) 1s forwards, ${blinkCaret} 1s step-end infinite`,
          }}
        >
          MOSEIBA MARINE
        </Box>
      </Box>
    </Fade>
  );
};

export default Loader;
