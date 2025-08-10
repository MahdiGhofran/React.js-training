import React from 'react';
import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import '@testing-library/jest-dom';
import PolygonAnnotationExample from '../components/PolygonAnnotationExample';

describe('PolygonAnnotationExample', () => {
  it('renders chart title', () => {
    render(<PolygonAnnotationExample />);
    expect(screen.getByText(/Polygon Annotation Example/i)).toBeInTheDocument();
  });
});
