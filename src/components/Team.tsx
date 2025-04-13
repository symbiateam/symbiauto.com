
import { Linkedin, Github } from 'lucide-react';

const Team = () => {
  return (
    <section id="team" className="py-20 bg-secondary/50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-medium mb-6">Our Team</h2>
            <p className="text-xl text-muted-foreground">
              We're uniquely positioned to solve this problem with our combined 
              expertise in artificial intelligence and healthcare regulatory processes.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Team member 1 */}
            <div className="bg-white rounded-lg p-6">
              <div className="flex flex-col items-center text-center">
                <div className="w-24 h-24 bg-accent/10 rounded-full mb-4 flex items-center justify-center">
                  <span className="text-accent text-xl font-medium">AS</span>
                </div>
                <h3 className="text-lg font-medium mb-1">Ashley</h3>
                <p className="text-accent font-medium mb-3">Chief Executive Officer</p>
                <div className="flex space-x-2 mb-4">
                  <a href="#" className="text-muted-foreground hover:text-accent">
                    <Linkedin size={18} />
                  </a>
                  <a href="#" className="text-muted-foreground hover:text-accent">
                    <Github size={18} />
                  </a>
                </div>
              </div>
              
              <div className="space-y-2 mt-4">
                <p className="text-sm text-muted-foreground">• Caltech Computer Science</p>
                <p className="text-sm text-muted-foreground">• Built AI algorithm for lung disease detection</p>
                <p className="text-sm text-muted-foreground">• Led clinical study with regulatory filings</p>
              </div>
            </div>
            
            {/* Team member 2 */}
            <div className="bg-white rounded-lg p-6">
              <div className="flex flex-col items-center text-center">
                <div className="w-24 h-24 bg-accent/10 rounded-full mb-4 flex items-center justify-center">
                  <span className="text-accent text-xl font-medium">AO</span>
                </div>
                <h3 className="text-lg font-medium mb-1">Aoi</h3>
                <p className="text-accent font-medium mb-3">Chief Technology Officer</p>
                <div className="flex space-x-2 mb-4">
                  <a href="#" className="text-muted-foreground hover:text-accent">
                    <Linkedin size={18} />
                  </a>
                  <a href="#" className="text-muted-foreground hover:text-accent">
                    <Github size={18} />
                  </a>
                </div>
              </div>
              
              <div className="space-y-2 mt-4">
                <p className="text-sm text-muted-foreground">• Harvard Biology & Computer Science</p>
                <p className="text-sm text-muted-foreground">• Research on ML drug design and disease modeling</p>
                <p className="text-sm text-muted-foreground">• Internship experience at Merck</p>
              </div>
            </div>
          </div>
          
          {/* Advisors */}
          <div className="mt-16">
            <h3 className="text-xl font-medium text-center mb-8">Advisors & Partners</h3>
            <div className="flex flex-wrap justify-center items-center gap-8">
              <div className="flex flex-col items-center">
                <div className="w-16 h-16 bg-white rounded-full mb-2 flex items-center justify-center">
                  <span className="text-foreground/60 font-medium">FDA</span>
                </div>
                <p className="text-sm font-medium">Ex-FDA Reviewers</p>
              </div>
              <div className="flex flex-col items-center">
                <div className="w-16 h-16 bg-white rounded-full mb-2 flex items-center justify-center">
                  <span className="text-foreground/60 font-medium">IN8</span>
                </div>
                <p className="text-sm font-medium">In8Bio</p>
              </div>
              <div className="flex flex-col items-center">
                <div className="w-16 h-16 bg-white rounded-full mb-2 flex items-center justify-center">
                  <span className="text-foreground/60 font-medium">EL</span>
                </div>
                <p className="text-sm font-medium">Elevation</p>
              </div>
              <div className="flex flex-col items-center">
                <div className="w-16 h-16 bg-white rounded-full mb-2 flex items-center justify-center">
                  <span className="text-foreground/60 font-medium">PX</span>
                </div>
                <p className="text-sm font-medium">Pyxis Oncology</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Team;
