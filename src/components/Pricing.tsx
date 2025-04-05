
import { Check } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Pricing = () => {
  return (
    <section id="pricing" className="py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Tiered Subscription Model</h2>
          <p className="text-xl text-foreground/70 max-w-2xl mx-auto">
            We offer flexible pricing based on trial size and complexity,
            with significant cost savings compared to traditional consultants.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {/* Phase 1 Plan */}
          <div className="relative bg-white border border-border rounded-xl shadow-md overflow-hidden transition-all duration-300 hover:shadow-lg">
            <div className="absolute -right-10 -top-10 w-20 h-20 bg-primary/5 rounded-full"></div>
            <div className="absolute -left-10 -bottom-10 w-20 h-20 bg-primary/5 rounded-full"></div>
            
            <div className="relative p-8">
              <h3 className="text-xl font-bold mb-2">Phase 1 Trials</h3>
              <div className="flex items-baseline mb-6">
                <span className="text-4xl font-bold">$50K-$100K</span>
                <span className="text-foreground/60 ml-2">per trial</span>
              </div>
              
              <div className="space-y-3 mb-8">
                <div className="flex items-start space-x-3">
                  <Check size={18} className="text-primary flex-shrink-0 mt-0.5" />
                  <span className="text-foreground/80">Protocol drafting assistance</span>
                </div>
                <div className="flex items-start space-x-3">
                  <Check size={18} className="text-primary flex-shrink-0 mt-0.5" />
                  <span className="text-foreground/80">Regulatory compliance review</span>
                </div>
                <div className="flex items-start space-x-3">
                  <Check size={18} className="text-primary flex-shrink-0 mt-0.5" />
                  <span className="text-foreground/80">Common issues flagging</span>
                </div>
                <div className="flex items-start space-x-3">
                  <Check size={18} className="text-primary flex-shrink-0 mt-0.5" />
                  <span className="text-foreground/80">Basic study design recommendations</span>
                </div>
              </div>
              
              <div className="bg-foreground/5 p-4 rounded-md mb-6">
                <p className="text-sm font-medium text-foreground/80">Save up to 80% compared to traditional consultants</p>
              </div>
              
              <Button className="w-full bg-primary hover:bg-primary/90">Contact for Quote</Button>
            </div>
          </div>
          
          {/* Phase 2-3 Plan */}
          <div className="relative bg-gradient-to-br from-primary/10 to-accent/5 border border-primary/30 rounded-xl shadow-md overflow-hidden transition-all duration-300 hover:shadow-lg">
            <div className="absolute -right-10 -top-10 w-20 h-20 bg-primary/10 rounded-full"></div>
            <div className="absolute -left-10 -bottom-10 w-20 h-20 bg-accent/10 rounded-full"></div>
            
            <div className="relative p-8">
              <div className="absolute top-4 right-4 px-3 py-1 bg-primary text-white text-xs font-medium rounded-full">
                Popular
              </div>
              
              <h3 className="text-xl font-bold mb-2">Phase 2-3 Trials</h3>
              <div className="flex items-baseline mb-6">
                <span className="text-4xl font-bold">$250K-$300K</span>
                <span className="text-foreground/60 ml-2">per trial</span>
              </div>
              
              <div className="space-y-3 mb-8">
                <div className="flex items-start space-x-3">
                  <Check size={18} className="text-primary flex-shrink-0 mt-0.5" />
                  <span className="text-foreground/80">Everything in Phase 1</span>
                </div>
                <div className="flex items-start space-x-3">
                  <Check size={18} className="text-primary flex-shrink-0 mt-0.5" />
                  <span className="text-foreground/80">Advanced protocol optimization</span>
                </div>
                <div className="flex items-start space-x-3">
                  <Check size={18} className="text-primary flex-shrink-0 mt-0.5" />
                  <span className="text-foreground/80">Comprehensive regulatory analysis</span>
                </div>
                <div className="flex items-start space-x-3">
                  <Check size={18} className="text-primary flex-shrink-0 mt-0.5" />
                  <span className="text-foreground/80">Historical precedent mapping</span>
                </div>
                <div className="flex items-start space-x-3">
                  <Check size={18} className="text-primary flex-shrink-0 mt-0.5" />
                  <span className="text-foreground/80">Priority support</span>
                </div>
              </div>
              
              <div className="bg-primary/10 p-4 rounded-md mb-6">
                <p className="text-sm font-medium text-foreground/80">Save up to 75% compared to traditional consultants</p>
              </div>
              
              <Button className="w-full bg-primary hover:bg-primary/90">Contact for Quote</Button>
            </div>
          </div>
        </div>
        
        {/* Enterprise */}
        <div className="mt-12 bg-foreground/5 rounded-xl p-8 max-w-4xl mx-auto">
          <div className="text-center mb-6">
            <h3 className="text-2xl font-bold">Enterprise Solutions</h3>
            <p className="text-foreground/70">For biotech companies running multiple clinical trials</p>
          </div>
          
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="space-y-2">
              <div className="flex items-start space-x-3">
                <Check size={18} className="text-primary flex-shrink-0 mt-0.5" />
                <span className="text-foreground/80">Custom pricing model</span>
              </div>
              <div className="flex items-start space-x-3">
                <Check size={18} className="text-primary flex-shrink-0 mt-0.5" />
                <span className="text-foreground/80">Multiple trial support</span>
              </div>
              <div className="flex items-start space-x-3">
                <Check size={18} className="text-primary flex-shrink-0 mt-0.5" />
                <span className="text-foreground/80">Dedicated account manager</span>
              </div>
            </div>
            
            <Button className="bg-primary hover:bg-primary/90 min-w-40">Schedule Consultation</Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
