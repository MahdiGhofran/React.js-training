import React from 'react';
import ReactECharts from 'echarts-for-react';

export default function EChartsExample() {
  // Ensure data is valid
  const data = [10, 20, 30].filter(value => 
    typeof value === 'number' && !isNaN(value) && isFinite(value)
  );

  const option = {
    title: {
      text: 'Sample Bar Chart',
      left: 'center',
      textStyle: { color: '#333' }
    },
    tooltip: {
      trigger: 'axis'
    },
    xAxis: {
      type: 'category',
      data: ['A', 'B', 'C'],
      axisLabel: { color: '#666' }
    },
    yAxis: {
      type: 'value',
      axisLabel: { color: '#666' }
    },
    series: [
      {
        type: 'bar',
        data: data,
        itemStyle: {
          color: '#4caf50'
        }
      },
    ],
    grid: {
      left: '10%',
      right: '10%',
      bottom: '15%',
      top: '20%'
    }
  };

  return (
    <div>
      <h2>ECharts Example</h2>  
      {data.length > 0 ? (
        <ReactECharts 
          option={option} 
          style={{ height: 300, width: '100%' }}
          notMerge={true}
          lazyUpdate={true}
        />
      ) : (
        <p>No valid data available</p>
      )}
    </div>
  ); 
}
