import React from 'react';

export default function Process() {
    const steps = [
      {
        number: "01",
        title: "Connect to systems",
        description: "Connect to systems (Epic, RAVE, Florence) to access source documents and EDC data."
      },
      {
        number: "02",
        title: "AI Analysis",
        description: "Wait for the AI to analyze and cross-references all data points"
      },
      {
        number: "03",
        title: "Review Report",
        description: "Receive a line-by-line discrepancy report for easy review and correction."
      },
      {
        number: "04",
        title: "Generate Reports",
        description: "Obtain auto-generated customizable compliance reports"
      }
    ];
  
    return (
      <section id="process" className="bg-white py-16">
        <div className="max-w-4xl mx-auto px-8">
          <h2 className="text-4xl font-bold mb-10 text-center">Process - How it works</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {steps.map((step) => (
              <div key={step.number} className="text-center">
                <div className="text-6xl text-cyan-400 mb-4">{step.number}</div>
                <h3 className="font-semibold mb-2">{step.title}</h3>
                <p className="text-gray-600">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
}