import React from 'react';
import { render, fireEvent, waitFor } from '@testing-library/react';
import PollItem from '../components/PollItem';

test('renders a couple of poll items', () => {
    const { getByText } = render(<PollItem name='Europa Universalis IV' key='0' id='0' />)
    expect(getByText(/Europa Universalis IV/i) && getByText(/0 votes/i)).toBeInTheDocument();
})

test('pressing vote adds a vote', () => {
    const { getByText, getByTestId } = render(<PollItem name='Europa Universalis IV' key='0' id='0' />)
    fireEvent.click(getByTestId(/0/i))
    expect(getByText(/1 vote/i)).toBeInTheDocument();
})