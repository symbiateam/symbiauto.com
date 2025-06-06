import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Solution from "@/components/Solution";
import Team from "@/components/Team";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <Solution />
      <Team />
      <CTA />
      <Footer />
    </div>
  );
};

export default Index;
