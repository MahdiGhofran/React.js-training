import React from 'react';
import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';

export default function HighchartsExample() {
  // Ensure data is valid and numeric
  const data = [1, 3, 2, 4, 5].filter(value => 
    typeof value === 'number' && !isNaN(value) && isFinite(value)
  );

  const options = {
    chart: {
      type: 'line',
      backgroundColor: '#ffffff'
    },
    title: {
      text: 'Sample Line Chart',
      style: { color: '#333' }
    },
    xAxis: {
      categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May'],
      title: { text: 'Month' }
    },
    yAxis: {
      title: { text: 'Value' },
      min: 0
    },
    series: [{
      name: 'Data Series',
      data: data,
      color: '#2196f3'
    }],
    accessibility: {
      enabled: false
    },
    credits: {
      enabled: false
    },
    plotOptions: {
      line: {
        marker: {
          enabled: true
        }
      }
    }
  };

  return (
    <div>
      <h2>Highcharts Example</h2>
      {data.length > 0 ? (
        <HighchartsReact 
          highcharts={Highcharts}
          options={options}
        />
      ) : (
        <p>No valid data available</p>
      )}
    </div>
  );
}
