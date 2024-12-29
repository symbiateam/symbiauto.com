import React from 'react';

const Product = () => (
  <section id="product" className="min-h-screen pt-24 px-4">
    <div className="max-w-6xl mx-auto">
      <h2 className="text-4xl font-bold mb-8 text-center">Product</h2>
      <div className="text-center mb-8">
        <p className="text-xl mb-8">We use AI to SDV thousands of data points in seconds:</p>
        <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
          {[
            "Eliminate manual cross-referencing between source docs and EDC",
            "Ensure heightened accuracy and compliance",
            "Review any source document format in any template",
            "Integrate easily with existing eSource and EDC systems",
            "Reduce CRA workload"
          ].map((text, i) => (
            <div key={i} className="bg-yellow-200 p-4 rounded-lg">
              <p>{text}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  </section>
);

export default Product;