import { createMuiTheme, Theme } from '@material-ui/core/styles';
import { red, lightBlue } from '@material-ui/core/colors';

// Create a theme instance.
const theme: Theme = createMuiTheme({
  palette: {
    primary: {
      main: '#f5f5f5',
    },
    secondary: {
      main: '#1da1f2',
    },
    error: {
      main: red.A400,
    },
    background: {
      default: '#0e0e16',
    },
  },
  typography: {
    fontFamily: [
      'Nunito Sans',
      '-apple-system',
      'BlinkMacSystemFont',
      '"Segoe UI"',
      'Roboto',
      '"Helvetica Neue"',
      'Arial',
      'sans-serif',
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ].join(','),
  }
});

export default theme;