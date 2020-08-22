import React from 'react';
import { render, fireEvent, waitFor } from '@testing-library/react';
import Poll from '../components/Poll';
import axios from 'axios';

jest.mock('axios');

test('renders a title', () => {
    const { getByText } = render(<Poll title="poll title" />);
    const pollTitle = getByText(/poll title/i);
    expect(pollTitle).toBeInTheDocument();
})

test('renders game entry field/s', () => {
    const { getByLabelText } = render(<Poll title="poll title" />);
    const gameTitleEntry = getByLabelText(/Enter New Game/i);
    expect(gameTitleEntry).toBeInTheDocument();
})

test('adds new game to the poll', async () => {
    axios.mockResolvedValue({ data: [{ name: "EU4" }] });
    const { getByText, getByLabelText, getByDisplayValue } = render(<Poll title="poll title" />);
    const newGameInput = getByLabelText(/enter new game/i);
    const newGameSubmit = getByDisplayValue(/add/i);
    fireEvent.input(newGameInput, "EU4");
    fireEvent.click(newGameSubmit);
    await waitFor(() => expect(getByText(/EU4/i)).toBeInTheDocument());
    const newGameAdded = getByText(/EU4/i);
    expect(newGameAdded).toBeInTheDocument();
})

test('new game has a button on it', async () => {
    axios.mockResolvedValue({data: [{name: "EU4" }] });
    const { getByText, getByLabelText, getByDisplayValue, getByTestId } = render(<Poll title="poll title" />);
    fireEvent.input(getByLabelText(/enter new game/i), "EU4");
    fireEvent.click(getByDisplayValue(/add/i));
    await waitFor(() => expect(getByText(/EU4/i)).toBeInTheDocument());
    const newGameButton = getByTestId(/0/i);
    expect(newGameButton).toBeInTheDocument();
})