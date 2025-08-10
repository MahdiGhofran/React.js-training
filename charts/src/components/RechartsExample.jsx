import React from 'react';
import { LineChart, Line, XAxis, YAxis, Tooltip, CartesianGrid, ResponsiveContainer } from 'recharts';

const data = [
  { name: 'Jan', uv: 300 },
  { name: 'Feb', uv: 200 },
  { name: 'Mar', uv: 400 },
  { name: 'Apr', uv: 350 },
  { name: 'May', uv: 500 },
];

export default function RechartsExample() {
  // Validate data to ensure no NaN values
  const validData = data.filter(item => 
    typeof item.uv === 'number' && 
    !isNaN(item.uv) && 
    isFinite(item.uv)
  );

  if (validData.length === 0) {
    return (
      <div>
        <h2>Recharts Example</h2>
        <p>No valid data available</p>
      </div>
    );
  }

  return (
    <div>
      <h2>Recharts Example</h2>
      <ResponsiveContainer width="100%" height={300}>
        <LineChart data={validData}>
          <CartesianGrid stroke="#ccc" strokeDasharray="3 3" />
          <XAxis 
            dataKey="name" 
            tick={{ fontSize: 12 }}
            axisLine={{ stroke: '#ccc' }}
          />
          <YAxis 
            tick={{ fontSize: 12 }}
            axisLine={{ stroke: '#ccc' }}
          />
          <Tooltip 
            contentStyle={{ 
              backgroundColor: '#fff', 
              border: '1px solid #ccc',
              borderRadius: '4px'
            }}
          />
          <Line 
            type="monotone" 
            dataKey="uv" 
            stroke="#8884d8" 
            strokeWidth={2}
            dot={{ fill: '#8884d8', strokeWidth: 2, r: 4 }}
            activeDot={{ r: 6, stroke: '#8884d8', strokeWidth: 2 }}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}
