// Core
import React from 'react';
// Testing
import { render } from '@testing-library/react';
// Components
import App from './App';


describe('App', () => {

  test('render without errors', () => {
    render(<App />);
  });

});
