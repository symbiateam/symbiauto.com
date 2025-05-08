import { Button } from "@/components/ui/button";
import { CheckCircle } from "lucide-react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const Progress = () => {
  return (
    <section className="py-20 bg-secondary/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-medium mb-6">
              Our Progress
            </h2>
            <p className="text-xl text-muted-foreground">
              Symbia began in April 2025, and we're fast. Here are demos of what
              we've made so far.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-start">
            {/* Video Tabs */}
            <div className="space-y-4">
              <Tabs defaultValue="ctd-generator" className="w-full">
                <TabsList className="grid w-full grid-cols-2">
                  <TabsTrigger value="ctd-generator">CTD Generator</TabsTrigger>
                  <TabsTrigger value="protocol-reviewer">
                    Protocol Reviewer
                  </TabsTrigger>
                </TabsList>
                <TabsContent value="ctd-generator" className="mt-4">
                  <div className="aspect-video bg-black/5 rounded-lg shadow-md overflow-hidden">
                    {/* Replace with your actual YouTube video ID */}
                    <iframe
                      className="w-full h-full"
                      src="https://www.youtube.com/embed/GBOEgBYMEyo"
                      title="CTD Generator Demo"
                      frameBorder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                    ></iframe>
                  </div>
                  <p className="text-sm text-muted-foreground mt-2">
                    CTD Generator Demo: See how Symbia automatically generates
                    Module 2 documentation.
                  </p>
                </TabsContent>
                <TabsContent value="protocol-reviewer" className="mt-4">
                  <div className="aspect-video bg-black/5 rounded-lg shadow-md overflow-hidden">
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
                  <p className="text-sm text-muted-foreground mt-2">
                    Protocol Reviewer Demo: Watch how Symbia analyzes protocols
                    and flags potential clinical hold issues.
                  </p>
                </TabsContent>
              </Tabs>
            </div>

            {/* Progress Bullets */}
            <div className="space-y-6">
              <div className="space-y-4">
                <div className="flex items-start">
                  <div className="w-6 h-6 rounded-full bg-accent/10 flex items-center justify-center mr-3 mt-0.5">
                    <CheckCircle size={14} className="text-accent" />
                  </div>
                  <p className="text-muted-foreground">
                    <span className="font-medium text-foreground">
                      CTD Generator:
                    </span>{" "}
                    We can generate certain CTDs of Module 2. We are currently
                    working on the rest of Module 2 and 3.
                  </p>
                </div>

                <div className="flex items-start">
                  <div className="w-6 h-6 rounded-full bg-accent/10 flex items-center justify-center mr-3 mt-0.5">
                    <CheckCircle size={14} className="text-accent" />
                  </div>
                  <p className="text-muted-foreground">
                    <span className="font-medium text-foreground">
                      Protocol Reviewer:
                    </span>{" "}
                    We can analyze protocols and provide feedback that would
                    have potentially caused a clinical hold.
                  </p>
                </div>

                <div className="flex items-start">
                  <div className="w-6 h-6 rounded-full bg-accent/10 flex items-center justify-center mr-3 mt-0.5">
                    <CheckCircle size={14} className="text-accent" />
                  </div>
                  <p className="text-muted-foreground">
                    <span className="font-medium text-foreground">
                      Validation:
                    </span>{" "}
                    The quality and accuracy of our CTDs and protocol feedback
                    have been reviewed by a former FDA reviewer. It is going
                    well, and we are continuously making improvements.
                  </p>
                </div>
              </div>

              <div className="mt-8"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Progress;
