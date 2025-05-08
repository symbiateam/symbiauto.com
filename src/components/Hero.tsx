import { useState } from "react";
import { Button } from "@/components/ui/button";
import ContactForm from "@/components/ContactForm";

const Hero = () => {
  const [showContactForm, setShowContactForm] = useState(false);

  return (
    <section className="relative pt-32 pb-20 md:pt-40 md:pb-32">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          {/* Main Heading */}
          <h1 className="mercury-heading mb-8">
            Your IND,
            <br />
            simplified.
          </h1>

          {/* Subheading */}
          <p className="mercury-subheading mb-12 max-w-2xl mx-auto">
            Assemble your IND with all the right tools in one place.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button
              className="bg-accent hover:bg-accent/90 text-white px-8 py-6 text-base font-medium rounded-full"
              onClick={() => setShowContactForm(true)}
            >
              Schedule Demo
            </Button>
          </div>
        </div>
      </div>

      <ContactForm
        isOpen={showContactForm}
        onClose={() => setShowContactForm(false)}
        buttonType="demo"
      />
    </section>
  );
};

export default Hero;
