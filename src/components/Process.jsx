import React from 'react';

const Process = () => (
  <section id="process" className="min-h-screen pt-24 px-4">
    <div className="max-w-6xl mx-auto">
      <h2 className="text-4xl font-bold mb-8 text-center">Process - How it works</h2>
      <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
        {[
          {num: "01", text: "Connect to systems (Epic, RAVE, Florence) to access source documents and EDC data."},
          {num: "02", text: "Wait for the AI to analyze and cross-references all data points"},
          {num: "03", text: "Receive a line-by-line discrepancy report for easy review and correction."},
          {num: "04", text: "Obtain auto-generated customizable compliance reports"}
        ].map((step, i) => (
          <div key={i} className="text-center">
            <div className="text-6xl text-blue-300 mb-4">{step.num}</div>
            <p>{step.text}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default Process;