
import { Github, Linkedin } from 'lucide-react';

const Team = () => {
  return (
    <section id="team" className="py-20 bg-foreground/5">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Our Team</h2>
          <p className="text-xl text-foreground/70 max-w-2xl mx-auto">
            We're uniquely positioned to solve this problem with our combined 
            expertise in artificial intelligence and healthcare regulatory processes.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-4xl mx-auto">
          {/* Team member 1 */}
          <div className="bg-white rounded-xl shadow-md overflow-hidden">
            <div className="p-6">
              <div className="flex flex-col items-center text-center">
                <div className="w-32 h-32 bg-primary/10 rounded-full mb-4 flex items-center justify-center">
                  <span className="text-primary text-2xl font-bold">AS</span>
                </div>
                <h3 className="text-xl font-bold mb-1">Ashley</h3>
                <p className="text-primary font-medium mb-3">Chief Executive Officer</p>
                <div className="flex space-x-2 mb-4">
                  <a href="#" className="text-foreground/60 hover:text-primary">
                    <Linkedin size={18} />
                  </a>
                  <a href="#" className="text-foreground/60 hover:text-primary">
                    <Github size={18} />
                  </a>
                </div>
              </div>
              
              <div className="space-y-2 mt-4">
                <div className="flex items-start space-x-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2"></div>
                  <p className="text-sm text-foreground/70">Caltech Computer Science</p>
                </div>
                <div className="flex items-start space-x-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2"></div>
                  <p className="text-sm text-foreground/70">Built AI algorithm for lung disease detection</p>
                </div>
                <div className="flex items-start space-x-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2"></div>
                  <p className="text-sm text-foreground/70">Led clinical study with regulatory filings</p>
                </div>
              </div>
            </div>
          </div>
          
          {/* Team member 2 */}
          <div className="bg-white rounded-xl shadow-md overflow-hidden">
            <div className="p-6">
              <div className="flex flex-col items-center text-center">
                <div className="w-32 h-32 bg-primary/10 rounded-full mb-4 flex items-center justify-center">
                  <span className="text-primary text-2xl font-bold">AO</span>
                </div>
                <h3 className="text-xl font-bold mb-1">Aoi</h3>
                <p className="text-primary font-medium mb-3">Chief Technology Officer</p>
                <div className="flex space-x-2 mb-4">
                  <a href="#" className="text-foreground/60 hover:text-primary">
                    <Linkedin size={18} />
                  </a>
                  <a href="#" className="text-foreground/60 hover:text-primary">
                    <Github size={18} />
                  </a>
                </div>
              </div>
              
              <div className="space-y-2 mt-4">
                <div className="flex items-start space-x-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2"></div>
                  <p className="text-sm text-foreground/70">Harvard Biology & Computer Science</p>
                </div>
                <div className="flex items-start space-x-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2"></div>
                  <p className="text-sm text-foreground/70">Research on ML drug design and disease modeling</p>
                </div>
                <div className="flex items-start space-x-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2"></div>
                  <p className="text-sm text-foreground/70">Internship experience at Merck</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Advisors */}
        <div className="mt-16">
          <h3 className="text-2xl font-bold text-center mb-10">Advisors & Partners</h3>
          <div className="flex flex-wrap justify-center items-center gap-12">
            <div className="flex flex-col items-center">
              <div className="w-20 h-20 bg-foreground/10 rounded-full mb-3 flex items-center justify-center">
                <span className="text-foreground/60 font-bold">FDA</span>
              </div>
              <p className="text-sm font-medium">Ex-FDA Reviewers</p>
            </div>
            <div className="flex flex-col items-center">
              <div className="w-20 h-20 bg-foreground/10 rounded-full mb-3 flex items-center justify-center">
                <span className="text-foreground/60 font-bold">IN8</span>
              </div>
              <p className="text-sm font-medium">In8Bio</p>
            </div>
            <div className="flex flex-col items-center">
              <div className="w-20 h-20 bg-foreground/10 rounded-full mb-3 flex items-center justify-center">
                <span className="text-foreground/60 font-bold">EL</span>
              </div>
              <p className="text-sm font-medium">Elevation</p>
            </div>
            <div className="flex flex-col items-center">
              <div className="w-20 h-20 bg-foreground/10 rounded-full mb-3 flex items-center justify-center">
                <span className="text-foreground/60 font-bold">PX</span>
              </div>
              <p className="text-sm font-medium">Pyxis Oncology</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Team;
