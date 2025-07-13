import React, { useState } from 'react';
import { Box, CssBaseline, ThemeProvider } from '@mui/material';
import { AnimatePresence } from 'framer-motion';

import theme from './theme'; // make sure you created this in src/theme.js

import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Hero from './components/Hero';
import About from './components/About';
import Work from './components/Work';
import Contact from './components/Contact';
import Loader from './components/Loader';

const App = () => {
  const [currentPage, setCurrentPage] = useState('hero');
  const pageOrder = ['hero', 'about', 'work', 'contact'];

  const handleNextPage = () => {
    const currentIndex = pageOrder.indexOf(currentPage);
    const nextIndex = (currentIndex + 1) % pageOrder.length;
    setCurrentPage(pageOrder[nextIndex]);
  };

  const renderPage = () => {
    const sharedProps = { handleNextPage };
    switch (currentPage) {
      case 'hero':
        return <Hero key="hero" {...sharedProps} />;
      case 'about':
        return <About key="about" {...sharedProps} />;
      case 'work':
        return <Work key="work" {...sharedProps} />;
      case 'contact':
        return <Contact key="contact" {...sharedProps} />;
      default:
        return <Hero key="default" {...sharedProps} />;
    }
  };

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Box
        sx={{
          minHeight: '100vh',
          display: 'flex',
          flexDirection: 'column',
          bgcolor: 'background.default',
          color: 'text.primary',
        }}
      >
        <Loader />
        <Navbar onNavigate={setCurrentPage} currentPage={currentPage} />
        <Box
          sx={{
            flex: 1,
            position: 'relative',
            overflow: 'hidden',
          }}
        >
          <AnimatePresence mode="wait">{renderPage()}</AnimatePresence>
        </Box>
        <Footer />
      </Box>
    </ThemeProvider>
  );
};

export default App;
