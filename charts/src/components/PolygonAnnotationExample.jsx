import React from 'react';
import { PolygonAnnotation } from 'polygon-annotation';

export default function PolygonAnnotationExample() {
  return (
    <div>
      <h2>Polygon Annotation Example</h2>
      <div style={{ 
        border: '1px solid #e0e0e0', 
        borderRadius: '4px', 
        padding: '10px',
        backgroundColor: '#f9f9f9'
      }}>
        <PolygonAnnotation 
          bgImage="https://via.placeholder.com/400x300/2196f3/ffffff?text=Polygon+Annotation"
          style={{ 
            width: '100%', 
            height: '300px',
            border: '1px solid #ccc',
            borderRadius: '4px'
          }}
        />
        <p style={{ 
          marginTop: '10px', 
          fontSize: '14px', 
          color: '#666',
          textAlign: 'center'
        }}>
          Click and drag to create polygon annotations on the image above
        </p>
      </div>
    </div>
  );
}