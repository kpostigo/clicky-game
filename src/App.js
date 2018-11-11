import React, { Component } from 'react';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import teal from '@material-ui/core/colors/teal';
import pink from '@material-ui/core/colors/pink';
import Root from './components/Root';

const theme = createMuiTheme({
  palette: {
    primary: pink,
    secondary: teal,
  },
  typography: {
    useNextVariants: true,
  },
});

const App = () => (
  <MuiThemeProvider theme={theme}>
    <Root />
  </MuiThemeProvider>
);

export default App;
