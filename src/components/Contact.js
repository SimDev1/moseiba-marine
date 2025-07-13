import React, { useState } from 'react';
import {
  Box,
  Container,
  Typography,
  Button,
  IconButton,
  TextField,
  Stack,
} from '@mui/material';
import { motion } from 'framer-motion';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import PageIndicator from './PageIndicator';

const Contact = ({ handleNextPage }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = e => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = e => {
    e.preventDefault();
    const { name, email, message } = formData;
    const mailtoLink = `mailto:moseiba@example.com?subject=Message from ${name}&body=Name: ${name}%0AEmail: ${email}%0A%0A${message}`;
    window.location.href = mailtoLink;
  };

  return (
    <motion.div
      key="contact"
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
        <Container maxWidth="sm" sx={{ textAlign: 'center' }}>
          <Typography
            variant="h4"
            gutterBottom
            sx={{
              color: '#00ffff',
              textShadow: '0 0 10px #00ffff',
              fontFamily: "'Orbitron', sans-serif",
            }}
          >
            Contact Me
          </Typography>

          <Typography variant="body1" sx={{ color: '#cccccc', mb: 4 }}>
           I specialize in servicing inboard and outboard engines. Residential & industrial power-generating sets. Send me a message.
          </Typography>

          {/* Contact Form */}
          <Box
            component="form"
            onSubmit={handleSubmit}
            sx={{
              display: 'flex',
              flexDirection: 'column',
              gap: 2,
              mb: 3,
            }}
          >
            <TextField
              name="name"
              label="Your Name"
              variant="outlined"
              fullWidth
              required
              onChange={handleChange}
              InputProps={{
                style: { color: '#fff' },
              }}
              InputLabelProps={{ style: { color: '#9e9e9e' } }}
              sx={{
                '& .MuiOutlinedInput-root': {
                  '& fieldset': {
                    borderColor: '#00ffff',
                  },
                  '&:hover fieldset': {
                    borderColor: '#33eaff',
                  },
                  '&.Mui-focused fieldset': {
                    borderColor: '#33eaff',
                  },
                },
              }}
            />
            <TextField
              name="email"
              label="Your Email"
              variant="outlined"
              fullWidth
              required
              type="email"
              onChange={handleChange}
              InputProps={{
                style: { color: '#fff' },
              }}
              InputLabelProps={{ style: { color: '#9e9e9e' } }}
              sx={{
                '& .MuiOutlinedInput-root': {
                  '& fieldset': {
                    borderColor: '#00ffff',
                  },
                  '&:hover fieldset': {
                    borderColor: '#33eaff',
                  },
                  '&.Mui-focused fieldset': {
                    borderColor: '#33eaff',
                  },
                },
              }}
            />
            <TextField
              name="message"
              label="Your Message"
              variant="outlined"
              fullWidth
              required
              multiline
              rows={4}
              onChange={handleChange}
              InputProps={{
                style: { color: '#fff' },
              }}
              InputLabelProps={{ style: { color: '#9e9e9e' } }}
              sx={{
                '& .MuiOutlinedInput-root': {
                  '& fieldset': {
                    borderColor: '#00ffff',
                  },
                  '&:hover fieldset': {
                    borderColor: '#33eaff',
                  },
                  '&.Mui-focused fieldset': {
                    borderColor: '#33eaff',
                  },
                },
              }}
            />

            <Button
              type="submit"
              variant="contained"
              sx={{
                backgroundColor: '#00ffff',
                color: '#000',
                textTransform: 'none',
                fontWeight: 'bold',
                fontFamily: "'Orbitron', sans-serif",
                boxShadow: '0 0 12px #00ffff',
                '&:hover': {
                  backgroundColor: '#00dddd',
                  boxShadow: '0 0 20px #00ffff',
                },
              }}
            >
              Send Email
            </Button>
          </Box>

          {/* WhatsApp Button */}
          <Stack direction="row" justifyContent="center" mt={2}>
            <Button
              startIcon={<WhatsAppIcon />}
              href="https://wa.me/2348059925946?text=Hello%20Moses!%20I%20would%20like%20to%20connect%20with%20you."
              target="_blank"
              sx={{
                color: '#00ff99',
                border: '1px solid #00ff99',
                fontFamily: "'Orbitron', sans-serif",
                '&:hover': {
                  backgroundColor: '#001f1f',
                  borderColor: '#00ffff',
                },
              }}
            >
              Message on WhatsApp
            </Button>
          </Stack>
        </Container>

        {/* Next Page */}
        <IconButton
          onClick={handleNextPage}
          sx={{
            position: 'absolute',
            right: 16,
            top: '50%',
            transform: 'translateY(-50%)',
            color: '#00ffff',
            backgroundColor: '#111',
            boxShadow: '0 0 12px #00ffff',
            '&:hover': {
              color: '#00dddd',
              backgroundColor: '#000',
              boxShadow: '0 0 20px #00ffff',
            },
          }}
        >
          <ChevronRightIcon />
        </IconButton>

<Box
  sx={{
    position: 'absolute',
    bottom: { xs: 5, sm: 10, md: 10 }, // Increased spacing on all screen sizes
    left: '50%',
    transform: 'translateX(-50%)',
    zIndex: 1,
  }}
>
  <PageIndicator currentPage="contact" />
</Box>




      </Box>
    </motion.div>
  );
};

export default Contact;
