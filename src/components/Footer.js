import React from 'react';
import { Box, Typography } from '@mui/material';

const Footer = () => {
  return (
    <Box
      component="footer"
      sx={{
        py: 2,
        px: 3,
        textAlign: 'center',
        background: 'linear-gradient(to right, #000000, #1a0033)',
        borderTop: '1px solid #222',
      }}
    >
      <Typography
        variant="body2"
        sx={{
          color: '#00ffff',
          textShadow: '0 0 20px #00ffff',
          fontFamily: "'Orbitron', sans-serif",
        }}
      >
        &copy; {new Date().getFullYear()} Moseiba Marine. All rights reserved.
      </Typography>
    </Box>
  );
};

export default Footer;
