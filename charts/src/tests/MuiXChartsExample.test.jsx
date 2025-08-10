import React from 'react';
import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import '@testing-library/jest-dom';
import MuiXChartsExample from '../components/MuiXChartsExample';

describe('MuiXChartsExample', () => {
  it('renders chart title', () => {
    render(<MuiXChartsExample />);
    expect(screen.getByText(/MUI X Charts Example/i)).toBeInTheDocument();
  });
});
