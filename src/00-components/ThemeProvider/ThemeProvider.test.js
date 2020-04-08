// Core
import React from 'react';
// Testing
import { render } from '@testing-library/react';
// Components
import Typography from '@material-ui/core/Typography';
import ThemeProvider from './ThemeProvider';


test('render without errors', () => {
  render(
    <ThemeProvider>
      <Typography>Hello World</Typography>
    </ThemeProvider>,
  );
});
