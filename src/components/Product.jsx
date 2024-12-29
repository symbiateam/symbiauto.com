import React from 'react';

const FEATURES = [
  "Eliminate manual cross-referencing between source docs and EDC",
  "Ensure heightened accuracy and compliance",
  "Review any source document format in any template",
  "Integrate easily with existing eSource and EDC systems",
  "Reduce CRA workload"
];

const Product = () => (
  <section id="product" className="section-container">
    <div className="max-w-6xl mx-auto">
      <h2 className="section-title">Product</h2>
      <p className="text-xl mb-8 text-center">We use AI to SDV thousands of data points in seconds:</p>
      <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
        {FEATURES.map((text, i) => (
          <div key={i} className="product-card">{text}</div>
        ))}
      </div>
    </div>
  </section>
);

export default Product;