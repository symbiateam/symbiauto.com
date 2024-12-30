import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Problem from './components/Problem';
import Product from './components/Product';
import Process from './components/Process';
import Impact from './components/Impact';
import BackToTop from './components/BackToTop';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <Problem />
      <Product />
      <Process />
      <Impact />
      <BackToTop />
      <Footer />
    </div>
  );
}