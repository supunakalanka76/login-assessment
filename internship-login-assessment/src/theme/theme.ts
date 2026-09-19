import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    mode: 'light',

    background: {
      default: '#ffffff',
      paper: '#ffffff',
    },

    text: {
      primary: '#111111',
      secondary: '#6b6b6b',
    },

    primary: {
      main: '#000000',
      contrastText: '#ffffff',
    },
  },

  typography: {
    fontFamily: '"Inter", "Roboto", "Helvetica", "Arial", sans-serif',
  },

  shape: {
    borderRadius: 12,
  },
});

export default theme;