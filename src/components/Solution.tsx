
import { FileText, ShieldCheck, Sparkles, Upload } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Solution = () => {
  return (
    <section id="solution" className="py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Our Solution</h2>
          <p className="text-xl text-foreground/70 max-w-2xl mx-auto">
            Symbia is an AI platform that automates protocol preparation, 
            making clinical trial approval faster and less expensive.
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          {/* Left side - Platform features */}
          <div className="space-y-6">
            <div className="feature-card">
              <div className="flex items-center space-x-4 mb-4">
                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                  <Upload size={20} className="text-primary" />
                </div>
                <h3 className="text-xl font-semibold">Upload & Generate</h3>
              </div>
              <p className="text-foreground/70 ml-14">
                Upload your research data and get a scientifically rigorous draft that 
                complies with the latest FDA regulations, tailored to your specific drug type.
              </p>
            </div>
            
            <div className="feature-card">
              <div className="flex items-center space-x-4 mb-4">
                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                  <FileText size={20} className="text-primary" />
                </div>
                <h3 className="text-xl font-semibold">Review & Improve</h3>
              </div>
              <p className="text-foreground/70 ml-14">
                Upload your existing protocol draft and receive intelligent feedback on 
                potential issues that might trigger FDA revisions.
              </p>
            </div>
            
            <div className="feature-card">
              <div className="flex items-center space-x-4 mb-4">
                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                  <ShieldCheck size={20} className="text-primary" />
                </div>
                <h3 className="text-xl font-semibold">Proactive Compliance</h3>
              </div>
              <p className="text-foreground/70 ml-14">
                Address potential issues before submission, drastically reducing the 
                likelihood of revisions and delays in the approval process.
              </p>
            </div>
            
            <div className="feature-card">
              <div className="flex items-center space-x-4 mb-4">
                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                  <Sparkles size={20} className="text-primary" />
                </div>
                <h3 className="text-xl font-semibold">Expertise-Driven AI</h3>
              </div>
              <p className="text-foreground/70 ml-14">
                Our AI is trained on successful study designs, up-to-date FDA guidelines, 
                and a database of real FDA comments, providing superior advice compared to traditional consultants.
              </p>
            </div>
          </div>
          
          {/* Right side - Visual representation */}
          <div className="relative bg-gradient-to-br from-primary/5 to-accent/5 rounded-xl p-8 flex items-center justify-center">
            <div className="absolute inset-0 overflow-hidden">
              <div className="absolute -right-10 -top-10 w-40 h-40 bg-primary/10 rounded-full blur-2xl"></div>
              <div className="absolute -left-10 -bottom-10 w-40 h-40 bg-accent/10 rounded-full blur-2xl"></div>
            </div>
            
            <div className="relative z-10 bg-white/80 backdrop-blur-sm rounded-xl shadow-lg p-6 max-w-md w-full">
              <div className="flex items-center justify-between mb-6">
                <h4 className="font-semibold">Protocol Analysis</h4>
                <div className="px-3 py-1 rounded-full bg-green-100 text-green-800 text-xs font-medium">
                  AI Powered
                </div>
              </div>
              
              <div className="space-y-4 mb-6">
                <div className="p-3 bg-foreground/5 rounded-lg">
                  <p className="text-sm text-foreground/80">
                    <span className="font-medium text-red-500">Issue detected:</span> Section 3.2 - 
                    Inclusion criteria needs more specific biomarker definition to comply with new FDA oncology guidance.
                  </p>
                </div>
                
                <div className="p-3 bg-foreground/5 rounded-lg">
                  <p className="text-sm text-foreground/80">
                    <span className="font-medium text-amber-500">Suggestion:</span> Consider additional 
                    safety monitoring for the dose escalation protocol based on recent similar trial feedback.
                  </p>
                </div>
                
                <div className="p-3 bg-foreground/5 rounded-lg">
                  <p className="text-sm text-foreground/80">
                    <span className="font-medium text-green-500">Strength:</span> Statistical analysis plan 
                    is well-designed and aligns with FDA expectations for primary endpoint justification.
                  </p>
                </div>
              </div>
              
              <div className="flex justify-end">
                <Button size="sm" className="bg-primary hover:bg-primary/90">View Full Analysis</Button>
              </div>
            </div>
          </div>
        </div>
        
        {/* Our difference */}
        <div className="bg-foreground/5 rounded-xl p-8 md:p-10">
          <h3 className="text-2xl font-bold mb-6 text-center">Why We're Different</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white rounded-lg p-6 shadow-sm">
              <h4 className="font-semibold mb-3">Proprietary Data Moat</h4>
              <p className="text-foreground/70 text-sm">
                We're building a unique database of real FDA comments and protocols through
                strategic partnerships with biotech companies and ex-FDA reviewers.
              </p>
            </div>
            
            <div className="bg-white rounded-lg p-6 shadow-sm">
              <h4 className="font-semibold mb-3">Specialized Focus</h4>
              <p className="text-foreground/70 text-sm">
                Unlike competitors that rely on generic foundation models, we deeply understand
                the nuanced FDA guidelines that are only learned from past experience.
              </p>
            </div>
            
            <div className="bg-white rounded-lg p-6 shadow-sm">
              <h4 className="font-semibold mb-3">Regulatory Expertise</h4>
              <p className="text-foreground/70 text-sm">
                Our team combines technical AI knowledge with hands-on regulatory experience,
                allowing us to build algorithms that truly understand regulatory nuances.
              </p>
            </div>
            
            <div className="bg-white rounded-lg p-6 shadow-sm">
              <h4 className="font-semibold mb-3">Continuous Improvement</h4>
              <p className="text-foreground/70 text-sm">
                Our system learns from each interaction, continuously improving its
                recommendations based on new regulatory trends and feedback patterns.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Solution;
