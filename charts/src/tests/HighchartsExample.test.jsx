import React from 'react';
import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import '@testing-library/jest-dom';
import HighchartsExample from '../components/HighchartsExample';

describe('HighchartsExample', () => {
  it('renders chart title', () => {
    render(<HighchartsExample />);
    expect(screen.getByText(/Highcharts Example/i)).toBeInTheDocument();
  });
});
