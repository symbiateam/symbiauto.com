
import { AlertTriangle, Clock, DollarSign } from 'lucide-react';

const Problem = () => {
  return (
    <section id="problem" className="py-20 bg-foreground/5">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">The Challenge</h2>
          <p className="text-xl text-foreground/70 max-w-2xl mx-auto">
            Biotech startups are fighting to cut costs and launch before competitors,
            but the clinical trial approval process is holding them back.
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Challenge 1 */}
          <div className="bg-white rounded-xl shadow-md p-8 transition-all duration-300 hover:shadow-lg border border-border">
            <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-6">
              <DollarSign size={24} className="text-primary" />
            </div>
            <h3 className="text-xl font-semibold mb-3">Expensive Consultants</h3>
            <p className="text-foreground/70">
              Traditional consultants charge premium rates for protocol drafting and review,
              putting a heavy burden on startup budgets when they need capital the most.
            </p>
          </div>
          
          {/* Challenge 2 */}
          <div className="bg-white rounded-xl shadow-md p-8 transition-all duration-300 hover:shadow-lg border border-border">
            <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-6">
              <Clock size={24} className="text-primary" />
            </div>
            <h3 className="text-xl font-semibold mb-3">Time-Consuming Process</h3>
            <p className="text-foreground/70">
              Multiple rounds of revisions lead to significant delays in trial initiation,
              costing valuable time in the competitive race to market.
            </p>
          </div>
          
          {/* Challenge 3 */}
          <div className="bg-white rounded-xl shadow-md p-8 transition-all duration-300 hover:shadow-lg border border-border">
            <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-6">
              <AlertTriangle size={24} className="text-primary" />
            </div>
            <h3 className="text-xl font-semibold mb-3">Outdated Advice</h3>
            <p className="text-foreground/70">
              Many consultants provide templated advice that doesn't account for
              the latest FDA guidelines or specific nuances of innovative therapies.
            </p>
          </div>
        </div>
        
        <div className="mt-12 bg-white p-6 md:p-10 rounded-xl shadow-md border border-border">
          <h3 className="text-xl font-semibold mb-4">Customer Insight</h3>
          <blockquote className="text-foreground/80 italic border-l-4 border-primary pl-4">
            "I went through 5 revisions, delaying my clinical trial by 8 months because the 
            review committee had expectations that weren't explicitly stated in their guidelines. 
            Traditional consultants weren't able to anticipate these issues."
          </blockquote>
          <p className="mt-3 text-right text-sm text-foreground/60">- From customer interviews</p>
        </div>
      </div>
    </section>
  );
};

export default Problem;
