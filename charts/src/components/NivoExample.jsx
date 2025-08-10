import React from 'react';
import { ResponsiveBar } from '@nivo/bar';

export default function NivoExample() {
  const data = [
    { country: 'AD', value: 10 },
    { country: 'AE', value: 20 },
    { country: 'AF', value: 15 },
    { country: 'AG', value: 25 },
    { country: 'AI', value: 30 },
  ];

  // Validate data to ensure no NaN values
  const validData = data.filter(item => 
    typeof item.value === 'number' && 
    !isNaN(item.value) && 
    isFinite(item.value)
  );

  if (validData.length === 0) {
    return (
      <div style={{ height: 300 }}>
        <h2>nivo Example</h2>
        <p>No valid data available</p>
      </div>
    );
  }

  return (
    <div style={{ height: 300 }}>
      <h2>nivo Example</h2>
      <ResponsiveBar
        data={validData}
        keys={['value']}
        indexBy="country"
        margin={{ top: 20, right: 20, bottom: 20, left: 40 }}
        padding={0.3}
        colors={{ scheme: 'nivo' }}
        axisBottom={{ 
          tickSize: 5, 
          tickPadding: 5, 
          tickRotation: 0, 
          legend: 'Country', 
          legendPosition: 'middle', 
          legendOffset: 32 
        }}
        axisLeft={{ 
          tickSize: 5, 
          tickPadding: 5, 
          tickRotation: 0, 
          legend: 'Value', 
          legendPosition: 'middle', 
          legendOffset: -40 
        }}
        labelSkipWidth={12}
        labelSkipHeight={12}
        labelTextColor={{ from: 'color', modifiers: [['darker', 1.6]] }}
        animate={true}
        motionStiffness={90}
        motionDamping={15}
      />
    </div>
  );
}
