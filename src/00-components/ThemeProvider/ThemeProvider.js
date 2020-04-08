// Core
import React from 'react';
// Components
import { ThemeProvider as MuiThemeProvider } from '@material-ui/core/styles';
// Styles
import defaultTheme from 'styles/defaultTheme';


const ThemeProvider = ({
  children,
  theme = defaultTheme,
}) => (
  <MuiThemeProvider theme={theme}>{children}</MuiThemeProvider>
);

export default ThemeProvider;
