import React from 'react';
import {
  Box,
  Container,
  Typography,
  Grid,
  Paper,
  IconButton,
} from '@mui/material';
import { motion } from 'framer-motion';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import PageIndicator from './PageIndicator';

const projectData = [
  {
    title: 'Boat Propulsion Overhaul',
    description:
      'Comprehensive servicing and diagnostics of inboard and outboard propulsion systems for maximum marine reliability.',
    image: '/boat.jpg',
  },
  {
    title: 'Engine Optimization',
    description:
      'Complete engine tune-up to enhance fuel efficiency and operational performance in harsh marine environments.',
    image: '/engine.jpg',
  },
  {
    title: 'Lister Generator Repair',
    description:
      'Full restoration and parts replacement for high-capacity Lister diesel generators used in maritime operations.',
    image: '/lister.jpg',
  },
  {
    title: 'Portable Lister Maintenance',
    description:
      'Preventive maintenance and noise-reduction work on compact Lister units powering boats and dock facilities.',
    image: '/lister2.jpg',
  },
  {
    title: 'Heavy Duty Lister Servicing',
    description:
      'Inspection, rewiring, and cooling system upgrade on large-scale generator sets used in marine and offshore zones.',
    image: '/lister4.jpg',
  },
];

const Work = ({ handleNextPage }) => {
  return (
    <motion.div
      key="work"
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
          pb: { xs: 14, sm: 12, md: 10 }, // Extra bottom space for PageIndicator
        }}
      >
        <Container>
          <Typography
            variant="h4"
            gutterBottom
            sx={{ color: '#ff00ff', textShadow: '0 0 8px #ff00ff', textAlign: 'center' }}
          >
            Selected Work
          </Typography>

          <Grid container spacing={4} justifyContent="center">
            {projectData.map((project, index) => (
              <Grid item xs={12} sm={6} md={4} key={index}>
                <Paper
                  elevation={3}
                  sx={{
                    p: 2,
                    textAlign: 'center',
                    bgcolor: '#121212',
                    color: '#00ffff',
                    border: '1px solid #222',
                    boxShadow: '0 0 10px #00ffff22',
                  }}
                >
                  <Box
                    component="img"
                    src={project.image}
                    alt={project.title}
                    sx={{
                      width: '100%',
                      height: 240,
                      objectFit: 'cover',
                      borderRadius: 1,
                      mb: 2,
                    }}
                  />
                  <Typography variant="h6" gutterBottom>
                    {project.title}
                  </Typography>
                  <Typography variant="body2" sx={{ color: '#bbbbbb' }}>
                    {project.description}
                  </Typography>
                </Paper>
              </Grid>
            ))}
          </Grid>
        </Container>

        {/* Next Button */}
        <IconButton
          onClick={handleNextPage}
          sx={{
            position: 'absolute',
            right: 16,
            top: '50%',
            transform: 'translateY(-50%)',
            color: '#ff00ff',
            backgroundColor: '#111',
            boxShadow: '0 0 12px #ff00ff',
            '&:hover': {
              color: '#dd00dd',
              backgroundColor: '#000',
              boxShadow: '0 0 20px #ff00ff',
            },
          }}
        >
          <ChevronRightIcon />
        </IconButton>

        {/* Page Indicator */}
        <Box
          sx={{
            position: 'absolute',
            bottom: { xs: 90, sm: 70, md: 50 },
            left: '50%',
            transform: 'translateX(-50%)',
            zIndex: 1,
          }}
        >
          <PageIndicator currentPage="work" />
        </Box>
      </Box>
    </motion.div>
  );
};

export default Work;
