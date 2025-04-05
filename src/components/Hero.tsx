
import { ArrowDown, Check } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Hero = () => {
  return (
    <section className="relative pt-32 pb-20 overflow-hidden">
      {/* Background gradient */}
      <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-primary/5 to-transparent -z-10"></div>
      
      {/* Floating circles decoration */}
      <div className="absolute top-20 right-10 w-64 h-64 bg-accent/10 rounded-full blur-3xl -z-10"></div>
      <div className="absolute bottom-10 left-10 w-80 h-80 bg-primary/10 rounded-full blur-3xl -z-10"></div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center text-center">
          {/* Badge */}
          <div className="inline-flex items-center px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6">
            <span>Revolutionizing Clinical Trial Approval</span>
          </div>
          
          {/* Heading */}
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-foreground max-w-4xl mb-6 text-balance">
            Making Clinical Trial Approval <span className="gradient-text">Faster</span> and <span className="gradient-text">Less Expensive</span>
          </h1>
          
          {/* Subheading */}
          <p className="text-xl text-foreground/70 max-w-2xl mb-8 text-balance">
            Symbia is an AI platform that automates the protocol preparation process, 
            reducing costs and improving quality for biotech companies.
          </p>
          
          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 mb-12">
            <Button className="bg-primary hover:bg-primary/90 text-white px-8 py-6 text-lg">
              Schedule Demo
            </Button>
            <Button variant="outline" className="border-primary text-primary hover:bg-primary/5 px-8 py-6 text-lg">
              Learn More
            </Button>
          </div>
          
          {/* Key Benefits */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl w-full">
            <div className="flex items-start space-x-3">
              <div className="flex-shrink-0 w-6 h-6 bg-primary/10 rounded-full flex items-center justify-center mt-1">
                <Check size={16} className="text-primary" />
              </div>
              <div>
                <h3 className="font-medium text-foreground">Reduce Costs</h3>
                <p className="text-sm text-foreground/70">5x cheaper than traditional consultants</p>
              </div>
            </div>
            <div className="flex items-start space-x-3">
              <div className="flex-shrink-0 w-6 h-6 bg-primary/10 rounded-full flex items-center justify-center mt-1">
                <Check size={16} className="text-primary" />
              </div>
              <div>
                <h3 className="font-medium text-foreground">Speed Up Approval</h3>
                <p className="text-sm text-foreground/70">Anticipate FDA feedback before submission</p>
              </div>
            </div>
            <div className="flex items-start space-x-3">
              <div className="flex-shrink-0 w-6 h-6 bg-primary/10 rounded-full flex items-center justify-center mt-1">
                <Check size={16} className="text-primary" />
              </div>
              <div>
                <h3 className="font-medium text-foreground">Expert Quality</h3>
                <p className="text-sm text-foreground/70">Built with real FDA insights</p>
              </div>
            </div>
          </div>
          
          {/* Scroll indicator */}
          <div className="mt-16 animate-bounce">
            <a href="#problem" aria-label="Scroll down">
              <ArrowDown size={24} className="text-primary" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
