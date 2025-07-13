// PageIndicator.jsx
import React from 'react';
import { Box } from '@mui/material';

const PageIndicator = ({ currentPage }) => {
  const pages = ['hero', 'about', 'work', 'contact'];

  return (
    <Box
      sx={{
        display: 'flex',
        gap: 1.5,
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      {pages.map((page) => (
        <Box
          key={page}
          sx={{
            width: currentPage === page ? 14 : 10,
            height: currentPage === page ? 14 : 10,
            borderRadius: '50%',
            backgroundColor: currentPage === page ? '#00ffff' : '#666',
            transition: 'all 0.3s ease',
            boxShadow: currentPage === page ? '0 0 8px #00ffff' : 'none',
          }}
        />
      ))}
    </Box>
  );
};

export default PageIndicator;
