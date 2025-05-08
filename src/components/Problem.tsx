import { AlertTriangle, Clock, PuzzleIcon } from "lucide-react";

const Problem = () => {
  return (
    <section id="problem" className="py-20 bg-secondary/50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-medium mb-6">
              The Challenge
            </h2>
            <p className="text-xl text-muted-foreground">
              INDs are a nightmare. But the support system doesn't make it less
              so...
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Challenge 1 */}
            <div className="bg-white p-6 rounded-lg">
              <div className="w-10 h-10 rounded-full bg-accent/10 flex items-center justify-center mb-4">
                <PuzzleIcon size={20} className="text-accent" />
              </div>
              <h3 className="text-lg font-medium mb-2">Fragmented support</h3>
              <p className="text-muted-foreground">
                The IND contains multiple parts, calling for different domain
                experts to provide advice and draft the CTA.
              </p>
            </div>

            {/* Challenge 2 */}
            <div className="bg-white p-6 rounded-lg">
              <div className="w-10 h-10 rounded-full bg-accent/10 flex items-center justify-center mb-4">
                <Clock size={20} className="text-accent" />
              </div>
              <h3 className="text-lg font-medium mb-2">Slow</h3>
              <p className="text-muted-foreground">
                Drafting the different components manually takes months, pushing
                back the launch date.
              </p>
            </div>

            {/* Challenge 3 */}
            <div className="bg-white p-6 rounded-lg">
              <div className="w-10 h-10 rounded-full bg-accent/10 flex items-center justify-center mb-4">
                <AlertTriangle size={20} className="text-accent" />
              </div>
              <h3 className="text-lg font-medium mb-2">Hit-or-miss advice</h3>
              <p className="text-muted-foreground">
                It's a common for startups to suffer from outdated or unsuited
                advice from consultants.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Problem;
