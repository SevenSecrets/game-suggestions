import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import App from '../App';

test('renders poll creation form', () => {
  const { getByText } = render(<App />);
  const pollCreateElement = getByText(/Create a Poll/i);
  expect(pollCreateElement).toBeInTheDocument();
});

test('can fill and submit create a poll', () => {
  const { getByDisplayValue, getByLabelText, getByTestId } = render(<App />);
  const pollSubmit = getByDisplayValue(/create/i)
  const pollTitle = getByLabelText(/title/i)
  fireEvent.input(pollTitle, 'poll title')
  fireEvent.submit(pollSubmit)
  expect(getByTestId("poll")).toBeInTheDocument();
})
