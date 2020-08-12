import React from 'react';
import { render } from '@testing-library/react';
import Poll from '../components/Poll';

test('renders a title', () => {
    const { getByText } = render(<Poll title="poll title" />);
    const pollTitle = getByText(/poll title/i)
    expect(pollTitle).toBeInTheDocument();
})