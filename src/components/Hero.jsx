import React from 'react';
import NetworkVisualization from './NetworkVisualization';

const Hero = () => (
  <div className="hero-section">
    <div className="max-w-6xl mx-auto px-4">
      <div className="flex justify-between items-start pt-32 pb-48">
        <div className="w-3/5">
          <h1 className="text-6xl font-bold text-white leading-tight">
            Accelerate your trials with Automatic Source Document Verification.
          </h1>
        </div>
        <div className="w-2/5">
          <NetworkVisualization />
        </div>
      </div>
    </div>
  </div>
);

export default Hero;