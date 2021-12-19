// import { ThemeOptions } from '@material-ui/core/styles/createMuiTheme';
import { createMuiTheme } from '@material-ui/core/styles';
export const themeOptions= createMuiTheme ({
  palette: {
    type: 'light',
    primary: {
      main: '#ff5722',
    },
    secondary: {
      main: '#9c27b0',
      contrastText: 'rgba(255,255,255,0.9)',
    },
    success: {
      main: '#0fa015',
    },
  },
  typography: {
    fontFamily: '"Sen",  sans-serif',
  },
});