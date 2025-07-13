import React from 'react';
import {
  AppBar,
  Toolbar,
  Button,
  Typography,
} from '@mui/material';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import { motion } from 'framer-motion';

const pageOrder = ['hero', 'about', 'work', 'contact'];
const pageTitles = {
  hero: 'Home',
  about: 'About Me',
  work: 'My Work',
  contact: 'Contact Me',
};

const Navbar = ({ onNavigate, currentPage }) => {
  const currentIndex = pageOrder.indexOf(currentPage);
  const previousIndex = (currentIndex - 1 + pageOrder.length) % pageOrder.length;
  const previousPage = pageOrder[previousIndex];

  return (
    <AppBar
      position="sticky" // Changed from "static" to "sticky"
      elevation={0}
      sx={{
        background: 'linear-gradient(to right, #0a0a0a, #111122, #1a0033)',
        borderBottom: '1px solid #222',
        zIndex: 1300, // Ensure it stays above all content
      }}
    >
      <Toolbar
        sx={{
          display: 'flex',
          justifyContent: 'space-between',
          px: 3,
        }}
      >
        <Typography
          variant="h6"
          sx={{
            color: '#00ffff',
            textShadow: '0 0 8px #00ffff',
            fontWeight: 'bold',
            fontFamily: "'Orbitron', sans-serif",
          }}
        >
          Moseiba Marine
        </Typography>

        <motion.div
          initial={{ x: 50, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <Button
            onClick={() => onNavigate(previousPage)}
            startIcon={
              <ArrowBackIosNewIcon sx={{ color: '#39ff14' }} />
            }
            sx={{
              color: '#39ff14',
              fontWeight: 'bold',
              textTransform: 'none',
              fontFamily: "'Orbitron', sans-serif",
              fontSize: '1rem',
              '&:hover': {
                color: '#33cc11',
                textShadow: '0 0 5px #33cc11',
              },
            }}
          >
            {pageTitles[previousPage]}
          </Button>
        </motion.div>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
