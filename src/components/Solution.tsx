import { FileText, ClipboardList, Search, CheckCircle } from "lucide-react";

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
              Symbia tells you what you need to account for in your pre-clinical
              experiments and drafts your dense regulatory reports for you. You
              can receive the majority of your regulatory support from one
              source and launch months earlier.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-12 mb-16">
            <div className="flex items-start space-x-5">
              <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center mt-1">
                <ClipboardList size={22} className="text-accent" />
              </div>
              <div>
                <h3 className="text-xl font-medium mb-3">Fill Background</h3>
                <p className="text-muted-foreground">
                  Fill out a therapeutic profile, which helps Symbia provide
                  study recommendations and write your IND docs with the highest
                  scientific relevancy.
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-5">
              <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center mt-1">
                <Search size={22} className="text-accent" />
              </div>
              <div>
                <h3 className="text-xl font-medium mb-3">
                  Pre-clinical Guidance
                </h3>
                <p className="text-muted-foreground">
                  Upload past experimental data and papers and obtain a
                  customized list of pre-clinical experiments.
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-5">
              <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center mt-1">
                <FileText size={22} className="text-accent" />
              </div>
              <div>
                <h3 className="text-xl font-medium mb-3">Obtain Drafts</h3>
                <p className="text-muted-foreground">
                  Import your pre-clinical data from Google Drive or Benchling
                  and receive first CTD/protocol/IB drafts in minutes.
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-5">
              <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center mt-1">
                <CheckCircle size={22} className="text-accent" />
              </div>
              <div>
                <h3 className="text-xl font-medium mb-3">
                  Proactive Compliance
                </h3>
                <p className="text-muted-foreground">
                  Upload your pre-clinical data and Symbia flags potential
                  missing data points. Obtain your protocol and Symbia flags
                  what could be called out for clinical hold.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Solution;
