import React from 'react';

export default function Product() {
    const features = [
      "Eliminate manual cross-referencing between source docs and EDC",
      "Ensure heightened accuracy and compliance",
      "Review any source document format in any template",
      "Integrate easily with existing eSource and EDC systems",
      "Reduce CRA workload"
    ];
  
    return (
      <section id="product" className="bg-gray-50 py-20">
        <div className="max-w-4xl mx-auto px-8">
          <h2 className="text-4xl font-bold mb-8 text-center">Product</h2>
          <p className="text-xl text-center mb-12">We use AI to SDV thousands of data points in seconds:</p>
          <div className="flex flex-col space-y-4">
            {features.map((feature, index) => (
              <div key={index} className="bg-navy-900 p-6 rounded-lg text-white text-center">
                {feature}
              </div>
            ))}
          </div>
        </div>
      </section>
    );
}