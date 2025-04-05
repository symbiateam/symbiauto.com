
import { Mail } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="py-12 bg-foreground/5">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <span className="text-2xl font-bold text-primary">Symbia</span>
            </div>
            <p className="text-foreground/60 max-w-md">
              Making clinical trial approval less expensive and faster through
              AI-powered protocol preparation.
            </p>
          </div>
          
          <div className="mt-8 md:mt-0">
            <div className="flex items-center space-x-2 mb-4">
              <Mail size={18} className="text-primary" />
              <a href="mailto:contact@symbia.ai" className="text-foreground/80 hover:text-primary transition-colors">
                contact@symbia.ai
              </a>
            </div>
            <p className="text-foreground/60 text-sm">
              &copy; {new Date().getFullYear()} Symbia. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
