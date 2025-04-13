
import { Button } from '@/components/ui/button';

const CTA = () => {
  return (
    <section className="py-20 bg-foreground text-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-medium mb-6">
            Join Us in Transforming Clinical Trial Approval
          </h2>
          
          <p className="text-xl text-white/80 mb-10">
            We want to make clinical trial approval less expensive and faster.
          </p>
          
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button className="bg-white text-foreground hover:bg-white/90 px-8 py-6 text-base font-medium rounded-full">
              Schedule Demo
            </Button>
            
            <Button variant="outline" className="border-white text-white hover:bg-white/10 px-8 py-6 text-base font-medium rounded-full">
              Investor Contact
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;
