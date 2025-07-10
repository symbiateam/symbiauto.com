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

          <div className="flex flex-col md:flex-row justify-between gap-8 mb-16">
            <div className="flex-1 group p-6 border rounded-xl shadow-sm hover:shadow-md transition-all duration-300">
              <h3 className="text-xl font-medium mb-3 text-accent">
                Plan IND-enabling studies
              </h3>
              <p className="text-muted-foreground">
                Make faster decisions regarding what IND-enabling studies to
                conduct. Upload your drug-candidate profile and any existing
                nonclinical data to retrieve relevant literature and information
                on similar drugs. Also, instantly get a customized roadmap of
                the recommended IND-enabling studies and a completion timeline.
              </p>
            </div>

            <div className="flex-1 group p-6 border rounded-xl shadow-sm hover:shadow-md transition-all duration-300">
              <h3 className="text-xl font-medium mb-3 text-accent">
                Auto draft/review documents
              </h3>
              <p className="text-muted-foreground">
                Sync your nonclinical and CMC data from Google Drive or
                Benchling to instantly generate draft CTD modules, IBs, FDA
                briefing packs, etc. Upload your documents and automatically
                receive QCed versions, saving time and effort on manual review.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Solution;
