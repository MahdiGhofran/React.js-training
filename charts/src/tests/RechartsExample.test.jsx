import React from 'react';
import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import '@testing-library/jest-dom';
import RechartsExample from '../components/RechartsExample';

describe('RechartsExample', () => {
  it('renders chart title', () => {
    render(<RechartsExample />);
    expect(screen.getByText(/Recharts Example/i)).toBeInTheDocument();
  });
});
