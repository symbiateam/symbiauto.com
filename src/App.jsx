import { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Problem from './components/Problem';
import Product from './components/Product';
import Process from './components/Process';
import Impact from './components/Impact';
import WaitlistDialog from './components/WaitlistDialog';
import './App.css'

function App() {
  const [isWaitlistOpen, setIsWaitlistOpen] = useState(false);

  return (
    <div className="bg-white">
      <Navbar setIsWaitlistOpen={setIsWaitlistOpen} />
      <Hero />
      <Problem />
      <Product />
      <Process />
      <Impact />
      <WaitlistDialog isOpen={isWaitlistOpen} setIsOpen={setIsWaitlistOpen} />
    </div>
  );
}

export default App;