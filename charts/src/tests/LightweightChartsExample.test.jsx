import React from 'react';
import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import '@testing-library/jest-dom';
import LightweightChartsExample from '../components/LightweightChartsExample';

describe('LightweightChartsExample', () => {
  it('renders chart title', () => {
    render(<LightweightChartsExample />);
    expect(screen.getByText(/Lightweight Charts Example/i)).toBeInTheDocument();
  });
});
