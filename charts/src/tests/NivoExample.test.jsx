import React from 'react';
import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import '@testing-library/jest-dom';
import NivoExample from '../components/NivoExample';

describe('NivoExample', () => {
  it('renders chart title', () => {
    render(<NivoExample />);
    expect(screen.getByText(/nivo Example/i)).toBeInTheDocument();
  });
});
