import React from 'react';
import { render, fireEvent, waitFor } from '@testing-library/react';
import GameList from '../components/GameList';

test('gameList renders multiple games', () => {{
    const gameTestNames = ['Europa Universalis IV', 'Crusader Kings II'];
    const { getByText } = render(<GameList gameNames={gameTestNames} />);
    expect(getByText(/Europa Universalis IV/i) && getByText(/Crusader Kings II/i)).toBeInTheDocument();
}})