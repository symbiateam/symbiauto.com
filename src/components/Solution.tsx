// No icons needed for the new design

const Solution = () => {
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
            <p className="text-xl text-muted-foreground">
              Symbia is an AI platform that accelerates IND filings. It tells
              you what IND-enabling studies you need, flags compliance issues
              early, and drafts dense documents. Users can get comprehensive
              regulatory support and submit months faster.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-x-8 gap-y-12 mb-16">
            <div className="group">
              <div className="h-1 w-0 bg-accent mb-6 transition-all duration-300 group-hover:w-1/2"></div>
              <h3 className="text-xl font-medium mb-3 text-accent">
                Plan IND-enabling studies
              </h3>
              <p className="text-muted-foreground">
                Upload your drug-candidate profile and any existing nonclinical
                data to instantly get a customized roadmap of the necessary
                IND-enabling. Helps with faster decision-making.
              </p>
            </div>

            <div className="group">
              <div className="h-1 w-0 bg-accent mb-6 transition-all duration-300 group-hover:w-1/2"></div>
              <h3 className="text-xl font-medium mb-3 text-accent">
                Auto draft documents
              </h3>
              <p className="text-muted-foreground">
                Sync your non-clinical data from Google Drive or Benchling to
                instantly generate draft CTD non-clinical modules, IBs, FDA
                briefing packs. (CMC drafts available when you add manufacturing
                data.)
              </p>
            </div>

            <div className="group">
              <div className="h-1 w-0 bg-accent mb-6 transition-all duration-300 group-hover:w-1/2"></div>
              <h3 className="text-xl font-medium mb-3 text-accent">
                Proactive Compliance
              </h3>
              <p className="text-muted-foreground">
                Upload your nonclinical data and/or protocol drafts and Symbia
                flags potential issues.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Solution;
