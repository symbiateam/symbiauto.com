import React from 'react';

const Navbar = ({ setIsWaitlistOpen }) => {
  const scrollToSection = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="nav-container">
      <div className="max-w-6xl mx-auto flex justify-between items-center">
        <div className="flex items-center space-x-2">
          <img src="/api/placeholder/40/40" alt="Symbia Logo" className="h-10" />
          <span className="text-2xl font-bold">Symbia</span>
        </div>
        <div className="flex items-center space-x-8">
          <div className="bg-white px-6 py-2 rounded">
            {['problem', 'product', 'process', 'impact'].map((section, i) => (
              <>
                <button onClick={() => scrollToSection(section)} className="nav-link">
                  {section.charAt(0).toUpperCase() + section.slice(1)}
                </button>
                {i < 3 && <span className="text-black mx-2">.</span>}
              </>
            ))}
          </div>
          <button onClick={() => setIsWaitlistOpen(true)} className="join-waitlist-btn">Join waitlist</button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;