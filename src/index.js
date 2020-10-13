import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { createMuiTheme, ThemeProvider } from '@material-ui/core';

const theme = createMuiTheme({
  palette: {
    type: 'light',
    primary: {
      main: '#ffd31d',
    },
    secondary: {
      main: '#d63447',
    },
  },
});

ReactDOM.render(
  <ThemeProvider theme={theme}>
    <App />
  </ThemeProvider>,

  document.getElementById('root')
);
