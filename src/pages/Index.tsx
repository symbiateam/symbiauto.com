
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import Problem from '@/components/Problem';
import Solution from '@/components/Solution';
import Team from '@/components/Team';
import Pricing from '@/components/Pricing';
import Progress from '@/components/Progress';
import CTA from '@/components/CTA';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <Problem />
      <Solution />
      <Team />
      <Pricing />
      <Progress />
      <CTA />
      <Footer />
    </div>
  );
};

export default Index;
