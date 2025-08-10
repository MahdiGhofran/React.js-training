import React from 'react';
import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import '@testing-library/jest-dom';
import KonvaExample from '../components/KonvaExample';

describe('KonvaExample', () => {
  it('renders chart title', () => {
    render(<KonvaExample />);
    expect(screen.getByText(/Konva Example/i)).toBeInTheDocument();
  });
});
