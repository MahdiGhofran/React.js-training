import React, { useEffect, useRef } from 'react';
import { createChart } from 'lightweight-charts';

export default function LightweightChartsExample() {
  const chartContainerRef = useRef(null);

  useEffect(() => {
    if (!chartContainerRef.current) return;

    try {
      console.log('Creating chart...');
      
      // In v5, we need to create the chart with series in the options
      const chart = createChart(chartContainerRef.current, {
        width: 400,
        height: 300,
        layout: {
          background: { color: '#ffffff' },
          textColor: '#333',
        },
        grid: {
          vertLines: { color: '#f0f0f0' },
          horzLines: { color: '#f0f0f0' },
        },
        // Add series directly in the chart options for v5
        series: [
          {
            type: 'line',
            data: [
              { time: '2025-01-01', value: 100 },
              { time: '2025-01-02', value: 105 },
              { time: '2025-01-03', value: 110 },
              { time: '2025-01-04', value: 108 },
              { time: '2025-01-05', value: 115 },
            ],
            options: {
              color: '#2196f3',
              lineWidth: 2,
            }
          }
        ]
      });

      console.log('Chart created:', chart);

      // Cleanup
      return () => {
        if (chart && typeof chart.remove === 'function') {
          chart.remove();
        }
      };
    } catch (error) {
      console.error('Error creating chart:', error);
    }
  }, []);

  return (
    <div>
      <h2>Lightweight Charts Example</h2>
      <div ref={chartContainerRef} />
    </div>
  );
}