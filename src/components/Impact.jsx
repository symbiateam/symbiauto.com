import React from 'react';

const Impact = () => (
  <section id="impact" className="min-h-screen pt-24 px-4">
    <div className="max-w-6xl mx-auto">
      <h2 className="text-4xl font-bold mb-8 text-center">Impact</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {[
          {percent: "30", text: "faster trial completion"},
          {percent: "25", text: "lower costs"},
          {percent: "90", text: "less CRA time spent on SDV"}
        ].map((stat, i) => (
          <div key={i} className="text-center">
            <div className="relative w-32 h-32 mx-auto mb-4">
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