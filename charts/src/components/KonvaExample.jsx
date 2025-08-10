import React from 'react';
import { Stage, Layer, Rect, Circle, Text } from 'react-konva';

export default function KonvaExample() {
  return (
    <div>
      <h2>Konva Example</h2>
      <Stage width={400} height={300}>
        <Layer>
          {/* Background */}
          <Rect 
            x={0} 
            y={0} 
            width={400} 
            height={300} 
            fill="#f5f5f5" 
            stroke="#e0e0e0"
            strokeWidth={1}
          />
          
          {/* Red rectangle */}
          <Rect 
            x={20} 
            y={20} 
            width={100} 
            height={100} 
            fill="#f44336" 
            stroke="#d32f2f"
            strokeWidth={2}
            cornerRadius={8}
            shadowBlur={10}
            shadowColor="rgba(0,0,0,0.3)"
            shadowOffset={{ x: 2, y: 2 }}
          />
          
          {/* Blue circle */}
          <Circle 
            x={200} 
            y={70} 
            radius={50} 
            fill="#2196f3" 
            stroke="#1976d2"
            strokeWidth={2}
            shadowBlur={10}
            shadowColor="rgba(0,0,0,0.3)"
            shadowOffset={{ x: 2, y: 2 }}
          />
          
          {/* Green rectangle */}
          <Rect 
            x={280} 
            y={20} 
            width={100} 
            height={100} 
            fill="#4caf50" 
            stroke="#388e3c"
            strokeWidth={2}
            cornerRadius={8}
            shadowBlur={10}
            shadowColor="rgba(0,0,0,0.3)"
            shadowOffset={{ x: 2, y: 2 }}
          />
          
          {/* Text label */}
          <Text 
            x={20} 
            y={140} 
            text="React Konva Shapes" 
            fontSize={16} 
            fontFamily="Arial" 
            fill="#333"
          />
        </Layer>
      </Stage>
    </div>
  );
}
