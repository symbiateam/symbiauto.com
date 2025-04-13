
import { AlertTriangle, Clock, DollarSign } from 'lucide-react';

const Problem = () => {
  return (
    <section id="problem" className="py-20 bg-secondary/50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-medium mb-6">The Challenge</h2>
            <p className="text-xl text-muted-foreground">
              Biotech startups are fighting to cut costs and launch before competitors,
              but the clinical trial approval process is holding them back.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Challenge 1 */}
            <div className="bg-white p-6 rounded-lg">
              <div className="w-10 h-10 rounded-full bg-accent/10 flex items-center justify-center mb-4">
                <DollarSign size={20} className="text-accent" />
              </div>
              <h3 className="text-lg font-medium mb-2">Expensive Consultants</h3>
              <p className="text-muted-foreground">
                Traditional consultants charge premium rates for protocol drafting and review.
              </p>
            </div>
            
            {/* Challenge 2 */}
            <div className="bg-white p-6 rounded-lg">
              <div className="w-10 h-10 rounded-full bg-accent/10 flex items-center justify-center mb-4">
                <Clock size={20} className="text-accent" />
              </div>
              <h3 className="text-lg font-medium mb-2">Time-Consuming Process</h3>
              <p className="text-muted-foreground">
                Multiple revisions lead to significant delays in trial initiation.
              </p>
            </div>
            
            {/* Challenge 3 */}
            <div className="bg-white p-6 rounded-lg">
              <div className="w-10 h-10 rounded-full bg-accent/10 flex items-center justify-center mb-4">
                <AlertTriangle size={20} className="text-accent" />
              </div>
              <h3 className="text-lg font-medium mb-2">Outdated Advice</h3>
              <p className="text-muted-foreground">
                Many consultants provide templated advice that doesn't account for
                the latest FDA guidelines.
              </p>
            </div>
          </div>
          
          <div className="mt-12 bg-white p-6 rounded-lg">
            <blockquote className="text-muted-foreground italic border-l-4 border-accent pl-4">
              "I went through 5 revisions, delaying my clinical trial by 8 months because the 
              review committee had expectations that weren't explicitly stated in their guidelines."
            </blockquote>
            <p className="mt-3 text-right text-sm text-muted-foreground">- From customer interviews</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Problem;
