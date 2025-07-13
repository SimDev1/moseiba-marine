import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    mode: 'dark',
    background: {
      default: '#0a0a0a',
      paper: '#121212',
    },
    primary: {
      main: '#00ffff', // neon cyan
    },
    secondary: {
      main: '#ff00ff', // neon pink
    },
    text: {
      primary: '#ffffff',
      secondary: '#9e9e9e',
    },
  },
  typography: {
    fontFamily: "'Orbitron', sans-serif", // Optional: futuristic font
  },
});

export default theme;
