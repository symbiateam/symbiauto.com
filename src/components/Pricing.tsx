import { Check } from "lucide-react";
import { Button } from "@/components/ui/button";

const Pricing = () => {
  return (
    <section id="pricing" className="py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-medium mb-6">Pricing</h2>
            <p className="text-xl text-muted-foreground">
              We offer flexible pricing based on trial size and complexity, with
              significant cost savings compared to traditional consultants.
            </p>
          </div>

          {/* Enterprise */}
          <div className="mt-12 bg-secondary/50 rounded-lg p-6">
            <div className="text-center mb-6">
              <h3 className="text-xl font-medium">Enterprise Solutions</h3>
            </div>

            <div className="flex flex-col md:flex-row items-center justify-between gap-6">
              <div className="space-y-2">
                <div className="flex items-start space-x-3">
                  <Check
                    size={18}
                    className="text-accent flex-shrink-0 mt-0.5"
                  />
                  <span className="text-muted-foreground">
                    Custom pricing model
                  </span>
                </div>
                <div className="flex items-start space-x-3">
                  <Check
                    size={18}
                    className="text-accent flex-shrink-0 mt-0.5"
                  />
                  <span className="text-muted-foreground">
                    Multiple trial support
                  </span>
                </div>
              </div>

              <Button className="bg-accent hover:bg-accent/90 text-white min-w-40 rounded-full">
                Schedule Consultation
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
