import { AlertTriangle, Clock, PuzzleIcon } from "lucide-react";

const Problem = () => {
  return (
    <section id="problem" className="py-20 bg-gradient-to-b from-background to-secondary/10 relative overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-medium mb-6">
              The Challenge
            </h2>
            <p className="text-xl text-muted-foreground">
              INDs are a nightmare. But the support system doesn't make it less so...
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {/* Challenge 1 */}
            <div className="group">
              <div className="h-1 w-0 bg-accent mb-6 transition-all duration-300 group-hover:w-1/2"></div>
              <h3 className="text-lg font-medium mb-3 text-accent">Fragmented support</h3>
              <p className="text-muted-foreground">
                The IND contains multiple parts, calling for different domain experts to provide advice and draft the IND.
              </p>
            </div>

            {/* Challenge 2 */}
            <div className="group">
              <div className="h-1 w-0 bg-accent mb-6 transition-all duration-300 group-hover:w-1/2"></div>
              <h3 className="text-lg font-medium mb-3 text-accent">Time-consuming</h3>
              <p className="text-muted-foreground">
                Drafting the different components manually takes months, pushing back the launch date.
              </p>
            </div>

            {/* Challenge 3 */}
            <div className="group">
              <div className="h-1 w-0 bg-accent mb-6 transition-all duration-300 group-hover:w-1/2"></div>
              <h3 className="text-lg font-medium mb-3 text-accent">Hit-or-miss advice</h3>
              <p className="text-muted-foreground">
                It's common for startups to suffer from outdated or unsuited advice from consultants.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Problem;
