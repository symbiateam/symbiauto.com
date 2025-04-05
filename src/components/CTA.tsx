
import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

const CTA = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-primary to-accent text-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Join Us in Transforming Clinical Trial Approval
          </h2>
          
          <p className="text-xl text-white/90 mb-10 max-w-2xl mx-auto">
            Biotech companies are fighting to cut costs and launch before competitors.
            We want to make clinical trial approval less expensive and faster.
          </p>
          
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button className="bg-white text-primary hover:bg-white/90 px-6 py-3 text-lg">
              <span>Schedule Demo</span>
              <ArrowRight size={16} className="ml-2" />
            </Button>
            
            <Button variant="outline" className="border-white text-white hover:bg-white/10 px-6 py-3 text-lg">
              Investor Contact
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;
