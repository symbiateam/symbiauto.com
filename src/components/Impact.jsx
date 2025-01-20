import React from 'react';
import checkIcon from '../assets/check.png';
import moneyIcon from '../assets/money.png';
import clockIcon from '../assets/clock.png';

export default function Impact() {
  const stats = [
    { number: "30%", text: "reduction in trial time", icon: checkIcon },
    { number: "15%", text: "lower costs", icon: moneyIcon },
    { number: "90%", text: "less CRA time spent on SDV", icon: clockIcon }
  ];
  //check
  return (
    <section id="impact" className="bg-gray-50 py-16">
      <div className="max-w-4xl mx-auto px-8">
        <h2 className="text-4xl font-bold mb-10 text-center">Impact</h2>
        <div className="space-y-8">
          {stats.map((stat) => (
            <div key={stat.number} className="flex items-center gap-8">
              <div className="w-24 h-24 flex items-center justify-center">
                <img 
                  src={stat.icon} 
                  alt={stat.text} 
                  className={`h-25 ${stat.text.includes('lower costs') ? 'w-32' : 'w-28'}`}
                />
              </div>
              <div className="bg-navy-900 text-white p-8 rounded flex-1">
                <span className="text-5xl font-bold mr-4">{stat.number}</span>
                <span className="text-2xl">{stat.text}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}