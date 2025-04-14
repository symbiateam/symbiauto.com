import { FileText, ShieldCheck, Sparkles, Upload } from "lucide-react";

const Solution = () => {
  return (
    <section id="solution" className="py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-medium mb-6">
              Our Solution
            </h2>
            <p className="text-xl text-muted-foreground">
              Symbia automates the majority of the IND preparation process at a
              fraction of the cost. It drafts the protocol and Investigator
              Brochure, identifies missing but crucial experiments, and flags
              potential FDA clinical hold issues.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            <div className="space-y-8">
              <div className="flex items-start space-x-4">
                <div className="w-10 h-10 rounded-full bg-accent/10 flex items-center justify-center mt-1">
                  <Upload size={20} className="text-accent" />
                </div>
                <div>
                  <h3 className="text-lg font-medium mb-2">
                    Upload & Generate
                  </h3>
                  <p className="text-muted-foreground">
                    Import your pre-clinical data from Google Drive or Dropbox
                    and get scientifically rigorous drafts that comply with the
                    latest FDA regulations.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-10 h-10 rounded-full bg-accent/10 flex items-center justify-center mt-1">
                  <FileText size={20} className="text-accent" />
                </div>
                <div>
                  <h3 className="text-lg font-medium mb-2">Review & Improve</h3>
                  <p className="text-muted-foreground">
                    Upload drafts and pre-clinical data and receive intelligent
                    feedback on potential issues and/or missing experiments that
                    might trigger clinical hold.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-10 h-10 rounded-full bg-accent/10 flex items-center justify-center mt-1">
                  <ShieldCheck size={20} className="text-accent" />
                </div>
                <div>
                  <h3 className="text-lg font-medium mb-2">
                    Proactive Compliance
                  </h3>
                  <p className="text-muted-foreground">
                    Address issues before submission, drastically reducing the
                    likelihood of revisions and delays.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-10 h-10 rounded-full bg-accent/10 flex items-center justify-center mt-1">
                  <Sparkles size={20} className="text-accent" />
                </div>
                <div>
                  <h3 className="text-lg font-medium mb-2">
                    Expertise-Driven AI
                  </h3>
                  <p className="text-muted-foreground">
                    We are working to build a database of protocols and IBs, for
                    our AI tool to reference.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-secondary/50 rounded-lg p-6">
              <h4 className="font-medium mb-4">Feedback</h4>

              <div className="space-y-4">
                <div className="p-4 bg-white rounded-lg">
                  <p className="text-sm">
                    <span className="font-medium text-red-500">
                      Issue detected:
                    </span>{" "}
                    Sections 3.1 and 5.4 of the Investigator’s Brochure
                    reference repeated-dose toxicity studies in rats but lack
                    immunotoxicity endpoints or a non-rodent model, limiting
                    understanding of potential immune-related risks.
                  </p>
                </div>

                <div className="p-4 bg-white rounded-lg">
                  <p className="text-sm">
                    <span className="font-medium text-amber-500">
                      Suggestion:
                    </span>{" "}
                    IB: Conduct an immunotoxicity study using a clinically
                    relevant non-rodent species to robustly evaluate immune
                    responses and enhance the Investigator’s Brochure’s safety
                    profile.
                  </p>
                </div>

                <div className="p-4 bg-white rounded-lg">
                  <p className="text-sm">
                    <span className="font-medium text-green-500">
                      Strength:
                    </span>{" "}
                    The protocol features a well-powered, randomized,
                    double-blind design with clear inclusion criteria,
                    minimizing bias and ensuring robust study outcomes.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Solution;
