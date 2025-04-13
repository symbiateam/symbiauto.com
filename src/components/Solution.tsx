
import { FileText, ShieldCheck, Sparkles, Upload } from 'lucide-react';

const Solution = () => {
  return (
    <section id="solution" className="py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-medium mb-6">Our Solution</h2>
            <p className="text-xl text-muted-foreground">
              Symbia is an AI platform that automates protocol preparation, 
              making clinical trial approval faster and less expensive.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            <div className="space-y-8">
              <div className="flex items-start space-x-4">
                <div className="w-10 h-10 rounded-full bg-accent/10 flex items-center justify-center mt-1">
                  <Upload size={20} className="text-accent" />
                </div>
                <div>
                  <h3 className="text-lg font-medium mb-2">Upload & Generate</h3>
                  <p className="text-muted-foreground">
                    Upload your research data and get a scientifically rigorous draft that 
                    complies with the latest FDA regulations.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="w-10 h-10 rounded-full bg-accent/10 flex items-center justify-center mt-1">
                  <FileText size={20} className="text-accent" />
                </div>
                <div>
                  <h3 className="text-lg font-medium mb-2">Review & Improve</h3>
                  <p className="text-muted-foreground">
                    Upload your existing protocol draft and receive intelligent feedback on 
                    potential issues that might trigger FDA revisions.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="w-10 h-10 rounded-full bg-accent/10 flex items-center justify-center mt-1">
                  <ShieldCheck size={20} className="text-accent" />
                </div>
                <div>
                  <h3 className="text-lg font-medium mb-2">Proactive Compliance</h3>
                  <p className="text-muted-foreground">
                    Address potential issues before submission, drastically reducing the 
                    likelihood of revisions and delays.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="w-10 h-10 rounded-full bg-accent/10 flex items-center justify-center mt-1">
                  <Sparkles size={20} className="text-accent" />
                </div>
                <div>
                  <h3 className="text-lg font-medium mb-2">Expertise-Driven AI</h3>
                  <p className="text-muted-foreground">
                    Our AI is trained on successful study designs, FDA guidelines, 
                    and a database of real FDA comments.
                  </p>
                </div>
              </div>
            </div>
            
            <div className="bg-secondary/50 rounded-lg p-6">
              <h4 className="font-medium mb-4">Protocol Analysis</h4>
              
              <div className="space-y-4">
                <div className="p-4 bg-white rounded-lg">
                  <p className="text-sm">
                    <span className="font-medium text-red-500">Issue detected:</span> Section 3.2 - 
                    Inclusion criteria needs more specific biomarker definition.
                  </p>
                </div>
                
                <div className="p-4 bg-white rounded-lg">
                  <p className="text-sm">
                    <span className="font-medium text-amber-500">Suggestion:</span> Consider additional 
                    safety monitoring for the dose escalation protocol.
                  </p>
                </div>
                
                <div className="p-4 bg-white rounded-lg">
                  <p className="text-sm">
                    <span className="font-medium text-green-500">Strength:</span> Statistical analysis plan 
                    is well-designed and aligns with FDA expectations.
                  </p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white p-6 rounded-lg">
              <h4 className="font-medium mb-3">Proprietary Data Moat</h4>
              <p className="text-muted-foreground text-sm">
                We're building a unique database of real FDA comments and protocols through
                strategic partnerships with biotech companies and ex-FDA reviewers.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg">
              <h4 className="font-medium mb-3">Regulatory Expertise</h4>
              <p className="text-muted-foreground text-sm">
                Our team combines technical AI knowledge with hands-on regulatory experience,
                allowing us to build algorithms that truly understand regulatory nuances.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Solution;
