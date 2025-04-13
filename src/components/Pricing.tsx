
import { Check } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Pricing = () => {
  return (
    <section id="pricing" className="py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-medium mb-6">Pricing</h2>
            <p className="text-xl text-muted-foreground">
              We offer flexible pricing based on trial size and complexity,
              with significant cost savings compared to traditional consultants.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Phase 1 Plan */}
            <div className="bg-white border border-border rounded-lg p-6">
              <h3 className="text-xl font-medium mb-2">Phase 1 Trials</h3>
              <div className="flex items-baseline mb-6">
                <span className="text-3xl font-medium">$50K-$100K</span>
                <span className="text-muted-foreground ml-2">per trial</span>
              </div>
              
              <div className="space-y-3 mb-8">
                <div className="flex items-start space-x-3">
                  <Check size={18} className="text-accent flex-shrink-0 mt-0.5" />
                  <span className="text-muted-foreground">Protocol drafting assistance</span>
                </div>
                <div className="flex items-start space-x-3">
                  <Check size={18} className="text-accent flex-shrink-0 mt-0.5" />
                  <span className="text-muted-foreground">Regulatory compliance review</span>
                </div>
                <div className="flex items-start space-x-3">
                  <Check size={18} className="text-accent flex-shrink-0 mt-0.5" />
                  <span className="text-muted-foreground">Common issues flagging</span>
                </div>
              </div>
              
              <Button className="w-full bg-accent hover:bg-accent/90 text-white rounded-full">Contact for Quote</Button>
            </div>
            
            {/* Phase 2-3 Plan */}
            <div className="bg-white border border-border rounded-lg p-6 relative">
              <div className="absolute top-4 right-4 px-3 py-1 bg-accent text-white text-xs font-medium rounded-full">
                Popular
              </div>
              
              <h3 className="text-xl font-medium mb-2">Phase 2-3 Trials</h3>
              <div className="flex items-baseline mb-6">
                <span className="text-3xl font-medium">$250K-$300K</span>
                <span className="text-muted-foreground ml-2">per trial</span>
              </div>
              
              <div className="space-y-3 mb-8">
                <div className="flex items-start space-x-3">
                  <Check size={18} className="text-accent flex-shrink-0 mt-0.5" />
                  <span className="text-muted-foreground">Everything in Phase 1</span>
                </div>
                <div className="flex items-start space-x-3">
                  <Check size={18} className="text-accent flex-shrink-0 mt-0.5" />
                  <span className="text-muted-foreground">Advanced protocol optimization</span>
                </div>
                <div className="flex items-start space-x-3">
                  <Check size={18} className="text-accent flex-shrink-0 mt-0.5" />
                  <span className="text-muted-foreground">Comprehensive regulatory analysis</span>
                </div>
                <div className="flex items-start space-x-3">
                  <Check size={18} className="text-accent flex-shrink-0 mt-0.5" />
                  <span className="text-muted-foreground">Priority support</span>
                </div>
              </div>
              
              <Button className="w-full bg-accent hover:bg-accent/90 text-white rounded-full">Contact for Quote</Button>
            </div>
          </div>
          
          {/* Enterprise */}
          <div className="mt-12 bg-secondary/50 rounded-lg p-6">
            <div className="text-center mb-6">
              <h3 className="text-xl font-medium">Enterprise Solutions</h3>
              <p className="text-muted-foreground">For biotech companies running multiple clinical trials</p>
            </div>
            
            <div className="flex flex-col md:flex-row items-center justify-between gap-6">
              <div className="space-y-2">
                <div className="flex items-start space-x-3">
                  <Check size={18} className="text-accent flex-shrink-0 mt-0.5" />
                  <span className="text-muted-foreground">Custom pricing model</span>
                </div>
                <div className="flex items-start space-x-3">
                  <Check size={18} className="text-accent flex-shrink-0 mt-0.5" />
                  <span className="text-muted-foreground">Multiple trial support</span>
                </div>
              </div>
              
              <Button className="bg-accent hover:bg-accent/90 text-white min-w-40 rounded-full">Schedule Consultation</Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
