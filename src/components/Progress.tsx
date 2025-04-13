
import { Button } from '@/components/ui/button';
import { CheckCircle, Clock, Target } from 'lucide-react';

const Progress = () => {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-medium mb-6">Our Progress</h2>
            <p className="text-xl text-muted-foreground">
              We've started just 2.5 weeks ago and already achieved significant milestones.
            </p>
          </div>
          
          <div className="space-y-6 mb-16">
            {/* Timeline Item 1 */}
            <div className="flex">
              <div className="mr-4">
                <div className="w-8 h-8 rounded-full bg-white border-2 border-accent flex items-center justify-center">
                  <CheckCircle size={16} className="text-accent" />
                </div>
              </div>
              <div>
                <h3 className="text-lg font-medium mb-1">Idea Validation</h3>
                <p className="text-muted-foreground mb-1">
                  Validated our concept with executives from In8Bio, Elevation, 
                  Pyxis Oncology, and former FDA reviewers.
                </p>
                <span className="text-sm text-accent">Completed</span>
              </div>
            </div>
            
            {/* Timeline Item 2 */}
            <div className="flex">
              <div className="mr-4">
                <div className="w-8 h-8 rounded-full bg-white border-2 border-accent flex items-center justify-center">
                  <CheckCircle size={16} className="text-accent" />
                </div>
              </div>
              <div>
                <h3 className="text-lg font-medium mb-1">First MVP</h3>
                <p className="text-muted-foreground mb-1">
                  Developed an initial platform that can analyze protocol drafts
                  and provide revision comments based on FDA guidelines.
                </p>
                <span className="text-sm text-accent">Completed</span>
              </div>
            </div>
            
            {/* Timeline Item 3 */}
            <div className="flex">
              <div className="mr-4">
                <div className="w-8 h-8 rounded-full bg-white border-2 border-accent flex items-center justify-center">
                  <Clock size={16} className="text-accent" />
                </div>
              </div>
              <div>
                <h3 className="text-lg font-medium mb-1">Data Moat Development</h3>
                <p className="text-muted-foreground mb-1">
                  Currently engaging with ex-FDA reviewers to build our proprietary
                  database of real FDA comments and protocols.
                </p>
                <span className="text-sm text-accent">In Progress</span>
              </div>
            </div>
            
            {/* Timeline Item 4 */}
            <div className="flex">
              <div className="mr-4">
                <div className="w-8 h-8 rounded-full bg-white border-2 border-foreground/30 flex items-center justify-center">
                  <Target size={16} className="text-foreground/50" />
                </div>
              </div>
              <div>
                <h3 className="text-lg font-medium mb-1">Full-Time Development</h3>
                <p className="text-muted-foreground mb-1">
                  Seeking $300K funding to go full-time for 12 months, further
                  develop our database, and enhance our AI platform.
                </p>
                <span className="text-sm text-muted-foreground">Next Step</span>
              </div>
            </div>
          </div>
          
          {/* Funding request */}
          <div className="bg-white rounded-lg p-6 border border-border">
            <h3 className="text-xl font-medium mb-6 text-center">Our Ask: $300K</h3>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              <div className="bg-secondary/50 p-4 rounded-lg text-center">
                <p className="text-lg font-medium text-foreground mb-1">$190K</p>
                <p className="text-sm text-muted-foreground">Full-time development</p>
              </div>
              
              <div className="bg-secondary/50 p-4 rounded-lg text-center">
                <p className="text-lg font-medium text-foreground mb-1">$100K</p>
                <p className="text-sm text-muted-foreground">FDA expertise</p>
              </div>
              
              <div className="bg-secondary/50 p-4 rounded-lg text-center">
                <p className="text-lg font-medium text-foreground mb-1">$10K</p>
                <p className="text-sm text-muted-foreground">Infrastructure</p>
              </div>
            </div>
            
            <div className="flex justify-center">
              <Button className="bg-accent hover:bg-accent/90 text-white rounded-full">
                Investor Contact
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Progress;
