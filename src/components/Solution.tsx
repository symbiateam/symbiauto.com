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
              Users can fast-track their IND and have their INDs submitted
              months earlier. It recommends specific IND-enabling studies and
              drafts and reviews dense IND documents.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-x-8 gap-y-12 mb-16">
            <div className="group">
              <div className="h-1 w-0 bg-accent mb-6 transition-all duration-300 group-hover:w-1/2"></div>
              <h3 className="text-xl font-medium mb-3 text-accent">
                Plan IND-enabling studies
              </h3>
              <p className="text-muted-foreground">
                Make faster decisions regarding what IND-enabling studies to
                conduct. Upload your drug-candidate profile and any existing
                nonclinical data to retrieve relevant literature and information
                on similar drugs. Also, instantly get a customized roadmap of
                the recommended IND-enabling studies.
              </p>
            </div>

            <div className="group">
              <div className="h-1 w-0 bg-accent mb-6 transition-all duration-300 group-hover:w-1/2"></div>
              <h3 className="text-xl font-medium mb-3 text-accent">
                Auto draft/review documents
              </h3>
              <p className="text-muted-foreground">
                Sync your nonclinical and CMC data from Google Drive or
                Benchling to instantly generate draft CTD modules, IBs, FDA
                briefing packs, etc. Automatically QC your documents, saving
                time and effort on manual review.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Solution;
