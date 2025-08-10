import React from 'react';
import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import '@testing-library/jest-dom';
import EChartsExample from '../components/EChartsExample';

describe('EChartsExample', () => {
  it('renders chart title', () => {
    render(<EChartsExample />);
    expect(screen.getByText(/ECharts Example/i)).toBeInTheDocument();
  });
});
