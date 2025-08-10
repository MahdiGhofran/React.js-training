import React from 'react';
import { Bar } from '@visx/shape';
import { Group } from '@visx/group';

export default function VisxExample() {
  const data = [25, 40, 60, 35, 80];
  
  // Validate data to ensure no NaN values
  const validData = data.filter(value => 
    typeof value === 'number' && 
    !isNaN(value) && 
    isFinite(value) && 
    value >= 0
  );

  const barWidth = 30;
  const barSpacing = 10;
  const chartHeight = 100;

  if (validData.length === 0) {
    return (
      <div>
        <h2>visx Example</h2>
        <p>No valid data available</p>
      </div>
    );
  }

  return (
    <div>
      <h2>visx Example</h2>
      <svg 
        width={validData.length * (barWidth + barSpacing)} 
        height={chartHeight}
        style={{ border: '1px solid #e0e0e0', borderRadius: '4px' }}
      >
        <Group>
          {validData.map((value, index) => (
            <Bar
              key={index}
              x={index * (barWidth + barSpacing)}
              y={chartHeight - value}
              width={barWidth}
              height={value}
              fill="#2196f3"
              stroke="#1976d2"
              strokeWidth={1}
            />
          ))}
        </Group>
      </svg>
    </div>
  );
}
