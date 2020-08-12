import React from 'react';
import { render } from '@testing-library/react';
import Poll from '../components/Poll';

test('renders a title', () => {
    const { getByText } = render(<Poll title="poll title" />);
    const pollTitle = getByText(/poll title/i)
    expect(pollTitle).toBeInTheDocument();
})

test('renders game entry field/s', () => {
    const { getByLabelText } = render(<Poll title="poll title" />)
    const gameTitleEntry = getByLabelText(/Enter New Game/i)
    expect(gameTitleEntry).toBeInTheDocument();
})

// test('adds new game to the poll', () => {

// })