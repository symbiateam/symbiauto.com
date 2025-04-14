import { AlertTriangle, Clock, DollarSign } from "lucide-react";

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
              The implications of a poorly developed IND increases chances of
              clinical hold or rejection, which delays launch date and adds
              unexpected cost. But, preparing a good IND application is time
              consuming and expensive.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Challenge 1 */}
            <div className="bg-white p-6 rounded-lg">
              <div className="w-10 h-10 rounded-full bg-accent/10 flex items-center justify-center mb-4">
                <DollarSign size={20} className="text-accent" />
              </div>
              <h3 className="text-lg font-medium mb-2">
                Expensive Consultants
              </h3>
              <p className="text-muted-foreground">
                Good consultants charge high rates for protocol & IB drafting
                and review.
              </p>
            </div>

            {/* Challenge 2 */}
            <div className="bg-white p-6 rounded-lg">
              <div className="w-10 h-10 rounded-full bg-accent/10 flex items-center justify-center mb-4">
                <Clock size={20} className="text-accent" />
              </div>
              <h3 className="text-lg font-medium mb-2">
                Time-Consuming Process
              </h3>
              <p className="text-muted-foreground">
                Months of drafting and internal revision lead to further IND
                approval date.
              </p>
            </div>

            {/* Challenge 3 */}
            <div className="bg-white p-6 rounded-lg">
              <div className="w-10 h-10 rounded-full bg-accent/10 flex items-center justify-center mb-4">
                <AlertTriangle size={20} className="text-accent" />
              </div>
              <h3 className="text-lg font-medium mb-2">Hit-or-miss advice</h3>
              <p className="text-muted-foreground">
                Without funds for good consultants, there's a larger risk of
                getting un-suited or outdated advice.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Problem;
