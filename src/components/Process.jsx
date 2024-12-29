import React from 'react';

const STEPS = [
  {num: "01", text: "Connect to systems (Epic, RAVE, Florence) to access source documents and EDC data."},
  {num: "02", text: "Wait for the AI to analyze and cross-references all data points"},
  {num: "03", text: "Receive a line-by-line discrepancy report for easy review and correction."},
  {num: "04", text: "Obtain auto-generated customizable compliance reports"}
];

const Process = () => (
  <section id="process" className="section-container">
    <div className="max-w-6xl mx-auto">
      <h2 className="section-title">Process - How it works</h2>
      <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
        {STEPS.map((step, i) => (
          <div key={i} className="text-center">
            <div className="process-number">{step.num}</div>
            <p>{step.text}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default Process;