import { Mail } from "lucide-react";

const Footer = () => {
  return (
    <footer className="py-12 bg-secondary/50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto flex flex-col md:flex-row justify-between items-center">
          <div>
            <div className="mb-4">
              <span className="text-xl font-medium text-foreground">
                Symbia
              </span>
            </div>
            <p className="text-muted-foreground max-w-md">
              Assemble your IND with all the right tools in one place.
            </p>
          </div>

          <div className="mt-8 md:mt-0">
            <div className="flex items-center space-x-2 mb-4">
              <Mail size={18} className="text-accent" />
              <a
                href="mailto:contact@symbiauto.com"
                className="text-muted-foreground hover:text-accent transition-colors"
              >
                contact@symbiauto.com
              </a>
            </div>
            <p className="text-muted-foreground text-sm">
              &copy; {new Date().getFullYear()} Symbia Co. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
