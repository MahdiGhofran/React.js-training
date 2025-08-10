// vitest.setup.js
import React from 'react';
import { vi } from 'vitest';

/**
 * DOM shims
 */
if (typeof globalThis.matchMedia !== 'function') {
  // basic polyfill used by some libs (lightweight-charts / fancy-canvas)
  globalThis.matchMedia = (query) => ({
    matches: false,
    media: query,
    addListener: () => {},
    removeListener: () => {},
    addEventListener: () => {},
    removeEventListener: () => {},
    onchange: null,
    dispatchEvent: () => false,
  });
}

// minimal getContext polyfill for canvas usage (if any lib tries it)
if (!HTMLCanvasElement.prototype.getContext) {
  HTMLCanvasElement.prototype.getContext = () => ({
    measureText: () => ({ width: 0 }),
    fillRect: () => {},
    drawImage: () => {},
    getImageData: () => ({ data: [] }),
  });
}

/**
 * Simple helper to create a React stub component.
 * We return a simple <div data-mock="name"> so tests can inspect DOM if needed.
 */
const mockReactComponent = (name) => (props) =>
  React.createElement('div', { 'data-mock': name, ...props });

/**
 * Mock heavy chart libraries that cause runtime errors in node/jsdom.
 * Add more vi.mock entries for other libs you use.
 */
vi.mock('echarts-for-react', () => ({ __esModule: true, default: mockReactComponent('echarts-for-react') }));
vi.mock('echarts', () => ({ __esModule: true, init: () => ({}) })); // if echarts gets required

vi.mock('highcharts', () => ({ __esModule: true, default: {} }));
vi.mock('highcharts-react-official', () => ({ __esModule: true, default: mockReactComponent('highcharts-react') }));

vi.mock('react-konva', () => ({
  __esModule: true,
  Stage: mockReactComponent('Stage'),
  Layer: mockReactComponent('Layer'),
  Rect: mockReactComponent('Rect'),
}));

// Konva / node-canvas native dependency -> mock konva too
vi.mock('konva', () => ({ __esModule: true, default: {} }));

// lightweight-charts: return an object with addLineSeries
vi.mock('lightweight-charts', () => ({
  __esModule: true,
  createChart: (el, opts) => ({
    addLineSeries: () => ({
      setData: () => {},
      applyOptions: () => {},
    }),
    timeScale: {
      fitContent: () => {},
    },
  }),
}));

// MUI charts / styling engine
vi.mock('@mui/x-charts/LineChart', () => ({ __esModule: true, LineChart: mockReactComponent('LineChart') }));
// avoid @emotion/styled missing error by providing a tiny shim
vi.mock('@emotion/styled', () => {
  const styled = (tag) => (props) => React.createElement(tag, props);
  return { __esModule: true, default: styled, styled };
});

// Nivo, recharts, visx, polygon-annotation
vi.mock('@nivo/bar', () => ({ __esModule: true, ResponsiveBar: mockReactComponent('ResponsiveBar') }));
vi.mock('recharts', () => ({
  __esModule: true,
  LineChart: mockReactComponent('RechartsLineChart'),
  Line: mockReactComponent('RechartsLine'),
  XAxis: mockReactComponent('XAxis'),
  YAxis: mockReactComponent('YAxis'),
  Tooltip: mockReactComponent('Tooltip'),
  CartesianGrid: mockReactComponent('CartesianGrid'),
}));
vi.mock('@visx/shape', () => ({ __esModule: true, Bar: mockReactComponent('VisxBar') }));
vi.mock('@visx/group', () => ({ __esModule: true, Group: mockReactComponent('VisxGroup') }));

vi.mock('polygon-annotation', () => ({ __esModule: true, default: mockReactComponent('polygon-annotation') }));

// Some TS compiled libraries import 'tslib' — provide a minimal mock
vi.mock('tslib', () => ({
  __esModule: true,
  __importStar: (mod) => mod,
  __importDefault: (mod) => mod && mod.__esModule ? mod.default : mod,
}));
