import React, { useState } from "react";
import ContactForm from "./ContactForm";

const Solution = () => {
  const [isContactFormOpen, setIsContactFormOpen] = useState(false);
  return (
    <section
      id="solution"
      className="py-20 bg-gradient-to-b from-secondary/10 to-background relative overflow-hidden"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-medium mb-6">
              What can Symbia do for you?
            </h2>
          </div>

          <div className="flex flex-col gap-12 mb-16">
            {/* Import Section */}
            <div className="flex items-start">
              <div className="flex-shrink-0 mr-6">
                <div className="w-16 h-16 rounded-full bg-accent flex items-center justify-center text-background text-2xl font-bold shadow-lg">
                  1
                </div>
              </div>
              <div>
                <h3 className="text-2xl font-medium mb-4 text-accent flex items-center">
                  Import
                </h3>
                <ul className="list-disc ml-5 space-y-2 text-muted-foreground">
                  <li>
                    No need to spend time searching for relevant source
                    documents. Symbia crawls through Google Drive and fishes for
                    the relevant documents it needs to prepare first drafts
                  </li>
                </ul>
              </div>
            </div>

            {/* Generate Section */}
            <div className="flex items-start">
              <div className="flex-shrink-0 mr-6">
                <div className="w-16 h-16 rounded-full bg-accent flex items-center justify-center text-background text-2xl font-bold shadow-lg">
                  2
                </div>
              </div>
              <div>
                <h3 className="text-2xl font-medium mb-4 text-accent flex items-center">
                  Generate
                </h3>
                <ul className="list-disc ml-5 space-y-2 text-muted-foreground">
                  <li>
                    Fill out a therapeutic profile (e.g. indication, modality,
                    RoA, etc.)
                  </li>
                  <li>
                    Select which documents you want to generate (preIND briefing
                    packet, CTD submodules, etc.)
                  </li>
                  <li>Received QC'd drafts of documents in minutes</li>
                </ul>
              </div>
            </div>

            {/* Review Section */}
            <div className="flex items-start">
              <div className="flex-shrink-0 mr-6">
                <div className="w-16 h-16 rounded-full bg-accent flex items-center justify-center text-background text-2xl font-bold shadow-lg">
                  3
                </div>
              </div>
              <div>
                <h3 className="text-2xl font-medium mb-4 text-accent flex items-center">
                  Review
                </h3>
                <ul className="list-disc ml-5 space-y-2 text-muted-foreground">
                  <li>
                    Highlight parts of the output draft and ask our Symbia chat
                    to make a specific change for you
                  </li>
                  <li>
                    Import new information and update the draft accordingly
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Customization Banner */}
          <div className="mt-16 p-8 bg-accent/10 rounded-2xl border border-accent/30 shadow-md relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-accent/5 rounded-full -mr-16 -mt-16"></div>
            <div className="absolute bottom-0 left-0 w-24 h-24 bg-accent/5 rounded-full -ml-12 -mb-12"></div>
            <div className="relative z-10">
              <h3 className="text-2xl font-medium mb-4 text-accent">
                Customization for Your Needs
              </h3>
              <p className="text-lg text-foreground leading-relaxed">
                Do you have your own templates? Only drafting certain documents?
                Using different formatted source documents? Working with a
                specific indication, modality, etc.?
                <span className="font-medium">
                  {" "}
                  No worries, we will work hand-in-hand to customize this
                  platform for you!
                </span>
              </p>
              <div className="mt-6">
                <button
                  className="px-6 py-2 bg-accent text-background font-medium rounded-lg hover:bg-accent/90 transition-colors duration-300 shadow-sm"
                  onClick={() => setIsContactFormOpen(true)}
                >
                  Get in Touch
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Contact Form Dialog */}
      <ContactForm
        isOpen={isContactFormOpen}
        onClose={() => setIsContactFormOpen(false)}
        buttonType="demo"
      />
    </section>
  );
};

export default Solution;
