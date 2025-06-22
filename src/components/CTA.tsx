import { useState } from "react";
import { Button } from "@/components/ui/button";
import ContactForm from "@/components/ContactForm";

const CTA = () => {
  const [showContactForm, setShowContactForm] = useState(false);

  return (
    <section className="py-20 bg-foreground text-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-medium mb-6">
            Acclerate your IND filing.
          </h2>

          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button
              className="bg-white text-foreground hover:bg-white/90 px-8 py-6 text-base font-medium rounded-full"
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

export default CTA;
