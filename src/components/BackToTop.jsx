import React from 'react';

export default function BackToTop() {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <div className="flex justify-center py-12">
      <button
        onClick={scrollToTop}
        className="w-12 h-12 rounded-full border-2 border-navy-900 flex items-center justify-center hover:bg-gray-100 transition-colors"
      >
        ↑
      </button>
    </div>
  );
}