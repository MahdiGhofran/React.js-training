import React from 'react';
import ErrorBoundary from './components/ErrorBoundary';
import RechartsExample from './components/RechartsExample';
import MuiXChartsExample from './components/MuiXChartsExample';
import EChartsExample from './components/EChartsExample';
import HighchartsExample from './components/HighchartsExample';
import VisxExample from './components/VisxExample';
import NivoExample from './components/NivoExample';
import LightweightChartsExample from './components/LightweightChartsExample';
import KonvaExample from './components/KonvaExample';
import PolygonAnnotationExample from './components/PolygonAnnotationExample';
import './App.css';

export default function App() {
  return (
    <div className="App">
      <div className="chart-container">
        <h1 className="page-title">React Chart Examples</h1>
        
        <div className="chart-section">
          <h2>Recharts</h2>
          <div className="chart-content">
            <ErrorBoundary>
              <RechartsExample />
            </ErrorBoundary>
          </div>
        </div>
        
        <div className="chart-section">
          <h2>MUI X Charts</h2>
          <div className="chart-content">
            <ErrorBoundary>
              <MuiXChartsExample />
            </ErrorBoundary>
          </div>
        </div>
        
        <div className="chart-section">
          <h2>Apache ECharts</h2>
          <div className="chart-content">
            <ErrorBoundary>
              <EChartsExample />
            </ErrorBoundary>
          </div>
        </div>
        
        <div className="chart-section">
          <h2>Highcharts</h2>
          <div className="chart-content">
            <ErrorBoundary>
              <HighchartsExample />
            </ErrorBoundary>
          </div>
        </div>
        
        <div className="chart-section">
          <h2>visx</h2>
          <div className="chart-content">
            <ErrorBoundary>
              <VisxExample />
            </ErrorBoundary>
          </div>
        </div>
        
        <div className="chart-section">
          <h2>nivo</h2>
          <div className="chart-content">
            <ErrorBoundary>
              <NivoExample />
            </ErrorBoundary>
          </div>
        </div>
        
        <div className="chart-section">
          <h2>Lightweight Charts</h2>
          <div className="chart-content">
            <ErrorBoundary>
              <LightweightChartsExample />
            </ErrorBoundary>
          </div>
        </div>
        
        <div className="chart-section">
          <h2>react-konva</h2>
          <div className="chart-content">
            <ErrorBoundary>
              <KonvaExample />
            </ErrorBoundary>
          </div>
        </div>
        
        <div className="chart-section">
          <h2>polygon-annotation</h2>
          <div className="chart-content">
            <ErrorBoundary>
              <PolygonAnnotationExample />
            </ErrorBoundary>
          </div>
        </div>
      </div>
    </div>
  );
}
