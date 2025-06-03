// No icons needed for the new design

const Solution = () => {
  return (
    <section id="solution" className="py-20 bg-gradient-to-b from-secondary/10 to-background relative overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-medium mb-6">
              Our Solution
            </h2>
            <p className="text-xl text-muted-foreground">
              Symbia provides an end-end AI support platform for INDs/CTAs. It
              makes filing them fast and straightforward. It tells you what you
              need to account for in your pre-clinical experiments, flags
              compliance issues, and drafts your dense regulatory reports. You
              can receive the majority of your regulatory support from one
              source and submit months earlier.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-12 mb-16">
            <div className="group">
              <div className="h-1 w-0 bg-accent mb-6 transition-all duration-300 group-hover:w-1/2"></div>
              <h3 className="text-xl font-medium mb-3 text-accent">Fill Background</h3>
              <p className="text-muted-foreground">
                Fill out a therapeutic profile, which ensures Symbia can
                deliver with scientific accuracy.
              </p>
            </div>

            <div className="group">
              <div className="h-1 w-0 bg-accent mb-6 transition-all duration-300 group-hover:w-1/2"></div>
              <h3 className="text-xl font-medium mb-3 text-accent">
                Pre-clinical Guidance
              </h3>
              <p className="text-muted-foreground">
                Upload your research data to receive tailored guidance on
                optimal pre-clinical experiments for your therapeutic
                candidate.
              </p>
            </div>

            <div className="group">
              <div className="h-1 w-0 bg-accent mb-6 transition-all duration-300 group-hover:w-1/2"></div>
              <h3 className="text-xl font-medium mb-3 text-accent">Obtain Drafts</h3>
              <p className="text-muted-foreground">
                Import your pre-clinical data from Google Drive (and soon
                Benchling) and receive first CTD/protocol drafts in minutes.
              </p>
            </div>

            <div className="group">
              <div className="h-1 w-0 bg-accent mb-6 transition-all duration-300 group-hover:w-1/2"></div>
              <h3 className="text-xl font-medium mb-3 text-accent">
                Proactive Compliance
              </h3>
              <p className="text-muted-foreground">
                Upload your pre-clinical data and/or protocols and Symbia flags
                potential issues.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Solution;
