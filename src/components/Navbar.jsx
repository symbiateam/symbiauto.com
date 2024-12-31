import React from 'react';
import symbiaLogo from '../assets/symbia-logo.svg';

export default function Navbar() {
  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <nav className="fixed top-0 w-full bg-white z-50 shadow-lg">
      <div className="flex justify-between items-center px-8 py-6 max-w-7xl mx-auto">
        <img src={symbiaLogo} alt="Symbia" className="h-10" />
        <div className="flex gap-12">
          {['problem', 'product', 'process', 'impact'].map((section) => (
            <button
              key={section}
              onClick={() => scrollToSection(section)}
              className="text-gray-800 hover:text-cyan-500 capitalize text-lg"
            >
              {section}
            </button>
          ))}
        </div>
      </div>
    </nav>
  );
}