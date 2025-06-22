import { useState } from "react";
import { Button } from "@/components/ui/button";
import ContactForm from "@/components/ContactForm";
import GeometricAnimation from "@/components/GeometricAnimation";

const Hero = () => {
  const [showContactForm, setShowContactForm] = useState(false);

  return (
    <section className="relative pt-32 pb-20 md:pt-40 md:pb-32 overflow-hidden">
      {/* Background Animation */}
      <GeometricAnimation />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Main Heading */}
          <h1 className="mercury-heading mb-8">
            The IND,
            <br />
            simplified.
          </h1>

          {/* Subheading */}
          <p className="mercury-subheading mb-12 max-w-2xl mx-auto">
            Symbia makes filing INDs a fast and clear process. Our AI takes all
            the tedious guesswork, planning, and document writing and replaces
            it with automation.
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
