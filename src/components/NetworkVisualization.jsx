import React from 'react';

const NetworkVisualization = () => (
  <svg viewBox="0 0 400 400" className="w-full">
    <circle cx="200" cy="200" r="180" fill="none" stroke="white" strokeWidth="1" opacity="0.2" />
    <g>
      {[
        { x: 150, y: 150, color: 'white' },
        { x: 250, y: 160, color: 'white' },
        { x: 200, y: 250, color: '#FFD700' },
        { x: 300, y: 200, color: 'white' },
        { x: 160, y: 300, color: '#FFD700' },
        { x: 100, y: 200, color: 'white' },
        { x: 270, y: 280, color: '#FFD700' }
      ].map((node, i) => (
        <g key={i}>
          <circle cx={node.x} cy={node.y} r="8" fill={node.color} />
          {i > 0 && (
            <line
              x1={node.x}
              y1={node.y}
              x2={200}
              y2={200}
              stroke="white"
              strokeWidth="1"
              opacity="0.3"
            />
          )}
        </g>
      ))}
    </g>
  </svg>
);

export default NetworkVisualization;