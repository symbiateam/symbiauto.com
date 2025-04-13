
import { Button } from '@/components/ui/button';

const Hero = () => {
  return (
    <section className="relative pt-32 pb-20 md:pt-40 md:pb-32">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          {/* Main Heading */}
          <h1 className="mercury-heading mb-8">
            Clinical trial approvals.
            <br />
            Simplified.
          </h1>
          
          {/* Subheading */}
          <p className="mercury-subheading mb-12 max-w-2xl mx-auto">
            Making clinical trial approval less expensive and faster through
            AI-powered protocol preparation.
          </p>
          
          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button className="bg-accent hover:bg-accent/90 text-white px-8 py-6 text-base font-medium rounded-full">
              Schedule Demo
            </Button>
            <Button variant="outline" className="border-foreground text-foreground hover:bg-foreground/5 px-8 py-6 text-base font-medium rounded-full">
              Learn More
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
