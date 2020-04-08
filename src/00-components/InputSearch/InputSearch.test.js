// Core
import React from 'react';
// Testing
import { render, fireEvent } from '@testing-library/react';
// Components
import InputSearch from './InputSearch';


describe('InputSearch', () => {
  beforeAll(() => {
    jest.spyOn(console, 'error');
    console.error.mockImplementation(() => {});
  });

  afterAll(() => {
    console.error.mockRestore();
  });

  it('render without errors', () => {
    render(<InputSearch />);
  });

  it('render without errors when rendered with hasChanged', () => {
    render(<InputSearch hasChanged />);
  });

  it('should call the prop onChange when the input it\'s modified', () => {
    const handleChange = jest.fn();
    const { getByLabelText } = render(<InputSearch value="" onChange={handleChange} />);
    const input = getByLabelText('input');

    fireEvent.change(input, { target: { value: 'X' } });

    expect(handleChange).toHaveBeenCalledTimes(1);
  });

  it('should call the prop onClear when the button it\'s clicked and the input has content', () => {
    const handleClear = jest.fn();
    const { getByLabelText } = render(<InputSearch value="Monty" hasChanged onClear={handleClear} onChange={() => {}} />);
    const button = getByLabelText('button');

    fireEvent.click(button, {
      screenX: 41,
      screenY: 55,
    });

    expect(handleClear).toHaveBeenCalledTimes(1);
  });

  it('should call the prop onSubmit when the focus is in the input, the key ENTER is pressed and has content', () => {
    const handleSubmit = jest.fn();
    const { getByLabelText } = render(<InputSearch value="Python" hasChanged onSubmit={handleSubmit} onChange={() => {}} />);
    const button = getByLabelText('button');

    fireEvent.click(button, {
      screenX: 0,
      screenY: 0,
    });

    expect(handleSubmit).toHaveBeenCalledTimes(1);
  });

  it('should not render the button when the prop isLoading is true', () => {
    const { queryByLabelText } = render(<InputSearch value="Python" isLoading={true} onChange={(evt) => {evt.preventDefault();}} />);
    const button = queryByLabelText('button');

    expect(button).not.toBeInTheDocument();
  });
});

