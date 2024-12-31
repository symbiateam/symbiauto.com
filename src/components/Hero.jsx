import React, { useState } from 'react';
import WaitlistDialog from './WaitlistDialog';

export default function Hero() {
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  
  return (
    <div className="relative bg-navy-900 py-32">
      <div className="absolute inset-0">
        <div className="h-full w-full network-visualization" />
      </div>
      <div className="relative z-10 px-12">
        <div className="max-w-2xl pl-16">
          <h1 className="text-6xl font-light text-white leading-tight mb-8">
            Accelerate your trials with Automatic Source Document Verification.
          </h1>
          <button 
            onClick={() => setIsDialogOpen(true)}
            className="bg-cyan-400 text-navy-900 px-8 py-4 text-xl hover:bg-cyan-300 transition-colors"
          >
            Join waitlist
          </button>
        </div>
      </div>
      <WaitlistDialog 
        isOpen={isDialogOpen} 
        onClose={() => setIsDialogOpen(false)} 
      />
    </div>
  );
}