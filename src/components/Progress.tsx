
import { Button } from '@/components/ui/button';
import { ArrowRight, CheckCircle, Clock, Target } from 'lucide-react';

const Progress = () => {
  return (
    <section className="py-20 bg-foreground/5">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Our Progress</h2>
          <p className="text-xl text-foreground/70 max-w-2xl mx-auto">
            We're moving fast, having started just 2.5 weeks ago and already achieved significant milestones.
          </p>
        </div>
        
        <div className="relative max-w-4xl mx-auto">
          {/* Timeline line */}
          <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-0.5 bg-primary/30 -ml-px"></div>
          
          {/* Timeline items */}
          <div className="space-y-12">
            {/* Item 1 */}
            <div className="relative">
              <div className="flex flex-col md:flex-row items-start gap-8">
                <div className="md:w-1/2 md:text-right order-2 md:order-1">
                  <h3 className="text-xl font-bold mb-2">Idea Validation</h3>
                  <p className="text-foreground/70">
                    Validated our concept with executives from In8Bio, Elevation, 
                    Pyxis Oncology, and former FDA reviewers.
                  </p>
                </div>
                
                <div className="z-10 relative md:absolute md:left-1/2 md:-ml-4 order-1 md:order-none">
                  <div className="w-8 h-8 rounded-full bg-white border-2 border-primary flex items-center justify-center">
                    <CheckCircle size={16} className="text-primary" />
                  </div>
                </div>
                
                <div className="md:w-1/2 order-3">
                  <span className="text-sm text-foreground/60">Completed</span>
                </div>
              </div>
            </div>
            
            {/* Item 2 */}
            <div className="relative">
              <div className="flex flex-col md:flex-row items-start gap-8">
                <div className="md:w-1/2 order-2 md:order-1">
                  <span className="text-sm text-foreground/60">Completed</span>
                </div>
                
                <div className="z-10 relative md:absolute md:left-1/2 md:-ml-4 order-1 md:order-none">
                  <div className="w-8 h-8 rounded-full bg-white border-2 border-primary flex items-center justify-center">
                    <CheckCircle size={16} className="text-primary" />
                  </div>
                </div>
                
                <div className="md:w-1/2 md:text-left order-3">
                  <h3 className="text-xl font-bold mb-2">First MVP</h3>
                  <p className="text-foreground/70">
                    Developed an initial platform that can analyze protocol drafts
                    and provide revision comments based on FDA guidelines.
                  </p>
                </div>
              </div>
            </div>
            
            {/* Item 3 */}
            <div className="relative">
              <div className="flex flex-col md:flex-row items-start gap-8">
                <div className="md:w-1/2 md:text-right order-2 md:order-1">
                  <h3 className="text-xl font-bold mb-2">Data Moat Development</h3>
                  <p className="text-foreground/70">
                    Currently engaging with ex-FDA reviewers to build our proprietary
                    database of real FDA comments and protocols.
                  </p>
                </div>
                
                <div className="z-10 relative md:absolute md:left-1/2 md:-ml-4 order-1 md:order-none">
                  <div className="w-8 h-8 rounded-full bg-white border-2 border-accent flex items-center justify-center">
                    <Clock size={16} className="text-accent" />
                  </div>
                </div>
                
                <div className="md:w-1/2 order-3">
                  <span className="text-sm text-foreground/60">In Progress</span>
                </div>
              </div>
            </div>
            
            {/* Item 4 */}
            <div className="relative">
              <div className="flex flex-col md:flex-row items-start gap-8">
                <div className="md:w-1/2 order-2 md:order-1">
                  <span className="text-sm text-foreground/60">Next Step</span>
                </div>
                
                <div className="z-10 relative md:absolute md:left-1/2 md:-ml-4 order-1 md:order-none">
                  <div className="w-8 h-8 rounded-full bg-white border-2 border-foreground/30 flex items-center justify-center">
                    <Target size={16} className="text-foreground/50" />
                  </div>
                </div>
                
                <div className="md:w-1/2 md:text-left order-3">
                  <h3 className="text-xl font-bold mb-2">Full-Time Development</h3>
                  <p className="text-foreground/70">
                    Seeking $300K funding to go full-time for 12 months, further
                    develop our database, and enhance our AI platform.
                  </p>
                </div>
              </div>
            </div>
          </div>
          
          {/* Funding request */}
          <div className="mt-16 pt-12 border-t border-border">
            <div className="bg-white rounded-xl shadow-md p-8">
              <h3 className="text-2xl font-bold mb-6 text-center">Our Ask: $300K</h3>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                <div className="bg-foreground/5 p-4 rounded-lg text-center">
                  <p className="text-lg font-bold text-primary mb-1">$190K</p>
                  <p className="text-sm text-foreground/70">Full-time development for 12 months</p>
                </div>
                
                <div className="bg-foreground/5 p-4 rounded-lg text-center">
                  <p className="text-lg font-bold text-primary mb-1">$100K</p>
                  <p className="text-sm text-foreground/70">FDA expertise acquisition</p>
                </div>
                
                <div className="bg-foreground/5 p-4 rounded-lg text-center">
                  <p className="text-lg font-bold text-primary mb-1">$10K</p>
                  <p className="text-sm text-foreground/70">Infrastructure and services</p>
                </div>
              </div>
              
              <div className="flex justify-center">
                <Button className="bg-primary hover:bg-primary/90">
                  <span>Investor Contact</span>
                  <ArrowRight size={16} className="ml-2" />
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Progress;
