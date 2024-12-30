import React from 'react';

export default function Impact() {
    const stats = [
      { number: "30%", text: "faster trial completion", icon: "⚡" },
      { number: "25%", text: "Lower costs", icon: "💰" },
      { number: "90%", text: "less CRA time spent on SDV", icon: "⏱️" }
    ];
  
    return (
      <section id="impact" className="bg-gray-50 py-16">
        <div className="max-w-4xl mx-auto px-8">
          <h2 className="text-4xl font-bold mb-10 text-center">Impact</h2>
          <div className="space-y-8">
            {stats.map((stat) => (
              <div key={stat.number} className="flex items-center gap-8">
                <div className="w-24 h-24 flex items-center justify-center text-4xl bg-cyan-400 rounded-full">
                  {stat.icon}
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