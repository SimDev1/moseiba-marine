import React from 'react';
import {
  Box,
  Container,
  Typography,
  IconButton,
} from '@mui/material';
import { motion } from 'framer-motion';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import PageIndicator from './PageIndicator';

const About = ({ handleNextPage }) => {
  return (
    <motion.div
      key="about"
      initial={{ x: 300, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      exit={{ x: -300, opacity: 0 }}
      transition={{ duration: 0.5 }}
      style={{ width: '100%' }}
    >
      <Box
        sx={{
          minHeight: 'calc(100vh - 128px)',
          backgroundColor: '#0a0a0a',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          position: 'relative',
          px: 3,
        }}
      >
        <Container>
          <Typography
            variant="h4"
            gutterBottom
            sx={{
              color: '#39ff14',
              textShadow: '0 0 8px #39ff14',
            }}
          >
            About Me
          </Typography>
          <Typography
            variant="body1"
            sx={{ color: '#cccccc' }}
          >
        I am A seasoned Marine Engineer with over 15 years of hands-on experience in the diagnosis, maintenance, and repair of marine propulsion systems and auxiliary machinery.
        I specialize in servicing both inboard and outboard engines, ensuring seaworthy reliability and peak operational efficiency.
        Beyond the marine sector, I also expertly handle the repair and maintenance of residential and industrial power-generating sets,
        including diesel and petrol generators used in homes and corporate facilities.
        My work is driven by a commitment to engineering precision, equipment longevity, and operational safety.
          </Typography>
        </Container>

        <IconButton
          onClick={handleNextPage}
          sx={{
            position: 'absolute',
            right: 16,
            top: '50%',
            transform: 'translateY(-50%)',
            color: '#39ff14',
            backgroundColor: '#111',
            boxShadow: '0 0 12px #39ff14',
            '&:hover': {
              color: '#33cc11',
              backgroundColor: '#000',
              boxShadow: '0 0 20px #39ff14',
            },
          }}
        >
          <ChevronRightIcon />
        </IconButton>

<Box
  sx={{
    position: 'absolute',
    bottom: 20,
    left: '50%',
    transform: 'translateX(-50%)',
    zIndex: 1,
    '@media (max-width: 600px)': {
      bottom: 16,
    },
  }}
>
  <PageIndicator currentPage="about" />
</Box>
      </Box>
    </motion.div>
  );
};

export default About;
