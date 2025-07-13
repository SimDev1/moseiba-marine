import React from 'react';
import {
  Box,
  Container,
  Typography,
  IconButton,
  Stack,
  Link,
} from '@mui/material';
import { motion } from 'framer-motion';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import FacebookIcon from '@mui/icons-material/Facebook';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import EmailIcon from '@mui/icons-material/Email';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import TelegramIcon from '@mui/icons-material/Telegram';
import { Typewriter } from 'react-simple-typewriter';
import PageIndicator from './PageIndicator';

const Hero = ({ handleNextPage }) => {
  return (
    <motion.div
      key="hero"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.6 }}
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
        <Container sx={{ textAlign: 'center', pb: 12 }}>
          {/* Heading */}
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.8, type: 'spring' }}
          >
            <Typography
              variant="h2"
              gutterBottom
              sx={{
                color: '#00ffff',
                textShadow: '0 0 10px #00ffff',
                fontFamily: "'Orbitron', sans-serif",
              }}
            >
              Hi, I’m Amadi-Ibeh Moses Obum
            </Typography>
          </motion.div>

          {/* Profile Picture */}
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.7, duration: 0.8, type: 'spring' }}
          >
            <Box
              sx={{
                mt: 2,
                mb: 3,
                width: 160,
                height: 160,
                mx: 'auto',
                borderRadius: '50%',
                overflow: 'hidden',
                border: '4px solid transparent',
                backgroundImage:
                  'linear-gradient(#0a0a0a, #0a0a0a), radial-gradient(circle, #00ffff 0%, #000 100%)',
                backgroundOrigin: 'border-box',
                backgroundClip: 'content-box, border-box',
                boxShadow: '0 0 20px #00ffff',
              }}
            >
              <img
                src="/profile_obum.png"
                alt="Moseiba Profile"
                style={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover',
                  display: 'block',
                }}
              />
            </Box>
          </motion.div>

          {/* Typewriter Text */}
          <motion.div
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 1, duration: 0.7 }}
          >
            <Typography
              variant="h5"
              sx={{
                fontFamily: "'Orbitron', sans-serif",
                mb: 3,
                height: '4em',
                fontWeight: 'bold',
                fontSize: '1.3rem',
                background: 'linear-gradient(90deg, #e5f7f8, #ffffff)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
                textFillColor: 'transparent',
              }}
            >
              <Typewriter
                words={[
                  'A seasoned Marine Engineer with over 15 years of hands-on experience...',
                  '...in the diagnosis, maintenance, and repair of marine propulsion systems and auxiliary machinery.',
                  '...I specialize in servicing both inboard and outboard engines, ensuring seaworthy reliability and peak operational efficiency',
                  '...Beyond the marine sector, I also expertly handle the repair and maintenance of residential and industrial power-generating sets',
                ]}
                loop={0}
                cursor
                cursorStyle="|"
                typeSpeed={70}
                deleteSpeed={40}
                delaySpeed={1500}
              />
            </Typography>
          </motion.div>

          {/* Social Icons */}
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 1.8, duration: 0.6 }}
          >
            <Stack direction="row" justifyContent="center" spacing={4} mb={2}>
              <Link href="https://facebook.com/moseibaimo" target="_blank">
                <FacebookIcon
                  sx={{
                    fontSize: 30,
                    color: '#00ffff',
                    transition: 'transform 0.3s',
                    '&:hover': {
                      transform: 'scale(1.2)',
                      color: '#33eaff',
                      textShadow: '0 0 8px #00ffff',
                    },
                  }}
                />
              </Link>
              <Link href="https://linkedin.com" target="_blank">
                <LinkedInIcon
                  sx={{
                    fontSize: 30,
                    color: '#00ffff',
                    transition: 'transform 0.3s',
                    '&:hover': {
                      transform: 'scale(1.2)',
                      color: '#33eaff',
                      textShadow: '0 0 8px #00ffff',
                    },
                  }}
                />
              </Link>
              <Link href="mailto:obumking@yahoo.com" target="_blank">
                <EmailIcon
                  sx={{
                    fontSize: 30,
                    color: '#00ffff',
                    transition: 'transform 0.3s',
                    '&:hover': {
                      transform: 'scale(1.2)',
                      color: '#33eaff',
                      textShadow: '0 0 8px #00ffff',
                    },
                  }}
                />
              </Link>
            </Stack>
          </motion.div>

          {/* WhatsApp + Telegram + Pagination */}
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 2.4, duration: 0.6 }}
          >
            <Box sx={{ position: 'relative', pb: 10 }}>
              <Stack direction="column" alignItems="center" spacing={2} mt={2}>
                <Link
                  href="https://wa.me/2348059925946"
                  target="_blank"
                  underline="none"
                >
                  <Box
                    sx={{
                      backgroundColor: '#111',
                      color: '#25D366',
                      px: 3,
                      py: 1,
                      borderRadius: '30px',
                      fontWeight: 'bold',
                      boxShadow: '0 0 10px #25D366',
                      fontFamily: "'Orbitron', sans-serif",
                      display: 'flex',
                      alignItems: 'center',
                      gap: 1,
                      transition: '0.3s',
                      '&:hover': {
                        backgroundColor: '#000',
                        boxShadow: '0 0 15px #25D366',
                      },
                    }}
                  >
                    <WhatsAppIcon />
                    WhatsApp me
                  </Box>
                </Link>

                <Link
                  href="https://t.me/yourusername"
                  target="_blank"
                  underline="none"
                >
                  <Box
                    sx={{
                      backgroundColor: '#111',
                      color: '#0088cc',
                      px: 3,
                      py: 1,
                      borderRadius: '30px',
                      fontWeight: 'bold',
                      boxShadow: '0 0 10px #0088cc',
                      fontFamily: "'Orbitron', sans-serif",
                      display: 'flex',
                      alignItems: 'center',
                      gap: 1,
                      transition: '0.3s',
                      '&:hover': {
                        backgroundColor: '#000',
                        boxShadow: '0 0 15px #0088cc',
                      },
                    }}
                  >
                    <TelegramIcon />
                    Telegram me
                  </Box>
                </Link>
              </Stack>

              <Box
                sx={{
                  position: 'absolute',
                  bottom: -60,
                  left: '50%',
                  transform: 'translateX(-50%)',
                  zIndex: 1,
                  '@media (max-width: 600px)': {
                    bottom: -50,
                  },
                }}
              >
                <PageIndicator currentPage="hero" />
              </Box>
            </Box>
          </motion.div>
        </Container>

        {/* Next Page Button */}
        <motion.div
          initial={{ x: 20, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ delay: 2.8, duration: 0.5 }}
        >
          <IconButton
            onClick={handleNextPage}
            sx={{
              position: 'absolute',
              right: 24,
              top: '50%',
              transform: 'translateY(-50%)',
              color: '#00ffff',
              backgroundColor: '#111',
              boxShadow: '0 0 12px #00ffff',
              zIndex: 2,
              '&:hover': {
                backgroundColor: '#000',
                color: '#00e6e6',
                boxShadow: '0 0 20px #00ffff',
              },
              '@media (max-width: 600px)': {
                top: '40%',
                transform: 'translateY(-40%)',
                right: 12,
              },
            }}
          >
            <ChevronRightIcon />
          </IconButton>
        </motion.div>
      </Box>
    </motion.div>
  );
};

export default Hero;
