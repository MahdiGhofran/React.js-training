import * as React from 'react';
import { LineChart } from '@mui/x-charts/LineChart';

export default function MuiXChartsExample() {
  // Ensure data is properly formatted with numeric values and no NaN
  const data = [
    { month: 'Jan', value: 5 },
    { month: 'Feb', value: 10 },
    { month: 'Mar', value: 15 },
    { month: 'Apr', value: 12 },
    { month: 'May', value: 20 },
  ];

  // Validate data to ensure no NaN values
  const validData = data.filter(item => 
    typeof item.value === 'number' && 
    !isNaN(item.value) && 
    isFinite(item.value)
  );

  const xAxisData = validData.map(item => item.month);
  const seriesData = validData.map(item => item.value);

  // Only render if we have valid data
  if (validData.length === 0) {
    return (
      <div>
        <h2>MUI X Charts Example</h2>
        <p>No valid data available</p>
      </div>
    );
  }

  return (
    <div>
      <h2>MUI X Charts Example</h2>
      <LineChart
        width={400}
        height={300}
        xAxis={[{ 
          data: xAxisData,
          scaleType: 'band'
        }]}
        series={[{ 
          data: seriesData,
          area: true,
          color: '#1976d2'
        }]}
        margin={{ top: 20, right: 20, bottom: 30, left: 40 }}
        grid={{ vertical: true, horizontal: true }}
      />
    </div>
  );
}
