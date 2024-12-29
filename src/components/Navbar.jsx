import React from 'react';

const Navbar = ({ setIsWaitlistOpen }) => {
  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="fixed top-0 w-full bg-[#1B4E6B] text-white p-4 z-50">
      <div className="max-w-6xl mx-auto flex justify-between items-center">
        <div className="flex items-center space-x-2">
          <img src="/api/placeholder/40/40" alt="Symbia Logo" className="h-10" />
          <span className="text-2xl font-bold">Symbia</span>
        </div>
        <div className="flex items-center space-x-8">
          <div className="flex items-center space-x-3 bg-white rounded px-6 py-2">
            <button onClick={() => scrollToSection('problem')} className="text-black hover:text-gray-600">Problem</button>
            <span className="text-black">.</span>
            <button onClick={() => scrollToSection('product')} className="text-black hover:text-gray-600">Product</button>
            <span className="text-black">.</span>
            <button onClick={() => scrollToSection('process')} className="text-black hover:text-gray-600">Process</button>
            <span className="text-black">.</span>
            <button onClick={() => scrollToSection('impact')} className="text-black hover:text-gray-600">Impact</button>
          </div>
          <button
            onClick={() => setIsWaitlistOpen(true)}
            className="bg-blue-400/30 text-white px-6 py-2 rounded-full hover:bg-blue-400/40"
          >
            Join waitlist
          </button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;