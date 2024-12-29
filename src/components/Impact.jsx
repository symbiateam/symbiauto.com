import React from 'react';

const STATS = [
  {percent: "30", text: "faster trial completion"},
  {percent: "25", text: "lower costs"},
  {percent: "90", text: "less CRA time spent on SDV"}
];

const Impact = () => (
  <section id="impact" className="section-container">
    <div className="max-w-6xl mx-auto">
      <h2 className="section-title">Impact</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {STATS.map((stat, i) => (
          <div key={i} className="text-center">
            <div className="impact-stat">
              <div className="absolute inset-0 flex items-center justify-center text-4xl font-bold">
                {stat.percent}%
              </div>
            </div>
            <p>{stat.text}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default Impact;