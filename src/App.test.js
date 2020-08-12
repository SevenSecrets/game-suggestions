import React from 'react';
import { render } from '@testing-library/react';
import App from './App';

test('renders poll', () => {
  const { getByText } = render(<App />);
  const pollElement = getByText(/Create a Poll/i);
  expect(pollElement).toBeInTheDocument();
});
