import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const Progress = () => {
  return (
    <section className="py-20 bg-gradient-to-b from-background to-secondary/10 relative overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-medium mb-6">
              Our Progress
            </h2>
            <p className="text-xl text-muted-foreground">
              Symbia began in April 2025, and we're fast.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-start">
            {/* Video Tabs */}
            <div className="space-y-4">
              <Tabs defaultValue="ctd-generator" className="w-full">
                <TabsList className="grid w-full grid-cols-2 bg-secondary/20">
                  <TabsTrigger value="ctd-generator" className="data-[state=active]:bg-accent data-[state=active]:text-white">CTD Generator</TabsTrigger>
                  <TabsTrigger value="protocol-reviewer" className="data-[state=active]:bg-accent data-[state=active]:text-white">
                    Protocol Reviewer
                  </TabsTrigger>
                </TabsList>
                <TabsContent value="ctd-generator" className="mt-6">
                  <div className="aspect-video rounded-lg overflow-hidden border border-accent/20 hover:border-accent/40 transition-colors">
                    {/* Replace with your actual YouTube video ID */}
                    <iframe
                      className="w-full h-full"
                      src="https://www.youtube.com/embed/VYPSnqp6erE"
                      title="CTD Generator Demo"
                      frameBorder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                    ></iframe>
                  </div>
                  <p className="text-sm text-muted-foreground mt-3">
                    CTD Generator Demo: See how Symbia automatically generates
                    section 2.6.6. Fully synthetic study reports were used.
                  </p>
                </TabsContent>
                <TabsContent value="protocol-reviewer" className="mt-6">
                  <div className="aspect-video rounded-lg overflow-hidden border border-accent/20 hover:border-accent/40 transition-colors">
                    {/* Replace with your actual YouTube video ID */}
                    <iframe
                      className="w-full h-full"
                      src="https://www.youtube.com/embed/cntsbjN7ki8"
                      title="Protocol Reviewer Demo"
                      frameBorder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                    ></iframe>
                  </div>
                  <p className="text-sm text-muted-foreground mt-3">
                    Protocol Reviewer Demo: Watch how Symbia analyzes protocols
                    and flags potential clinical hold issues. A fully synthetic
                    protocol was used.
                  </p>
                </TabsContent>
              </Tabs>
            </div>

            {/* Progress Bullets */}
            <div className="space-y-6">
              <div className="space-y-8">
                <div className="group">
                  <div className="h-1 w-0 bg-accent mb-4 transition-all duration-300 group-hover:w-1/3"></div>
                  <h3 className="text-lg font-medium mb-2 text-accent">CTD Generator</h3>
                  <p className="text-muted-foreground">
                    We can generate certain CTDs of Module 2. We are currently
                    working on the rest of Module 2 and 3.
                  </p>
                </div>

                <div className="group">
                  <div className="h-1 w-0 bg-accent mb-4 transition-all duration-300 group-hover:w-1/3"></div>
                  <h3 className="text-lg font-medium mb-2 text-accent">Protocol Reviewer</h3>
                  <p className="text-muted-foreground">
                    We can analyze protocols and provide feedback that would
                    have potentially caused a clinical hold.
                  </p>
                </div>

                <div className="group">
                  <div className="h-1 w-0 bg-accent mb-4 transition-all duration-300 group-hover:w-1/3"></div>
                  <h3 className="text-lg font-medium mb-2 text-accent">Validation</h3>
                  <p className="text-muted-foreground">
                    The quality and accuracy of our CTDs and protocol feedback
                    have been reviewed by a former FDA reviewer. It is going
                    well, and we are continuously making improvements.
                  </p>
                </div>
                
                <div className="group">
                  <div className="h-1 w-0 bg-accent mb-4 transition-all duration-300 group-hover:w-1/3"></div>
                  <h3 className="text-lg font-medium mb-2 text-accent">Tools in Progress</h3>
                  <p className="text-muted-foreground">
                    We're actively building a pre-clinical experiment planner.
                    Please reach out for a demo!
                  </p>
                </div>
                
                <div className="group">
                  <div className="h-1 w-0 bg-accent mb-4 transition-all duration-300 group-hover:w-1/3"></div>
                  <h3 className="text-lg font-medium mb-2 text-accent">Expansion</h3>
                  <p className="text-muted-foreground">
                    We're working to expand, so that our platform can support
                    clinical trials in other continents and for medical devices.
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

export default Progress;
