
import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { ChevronDown, Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-white/90 backdrop-blur-md shadow-sm' : 'bg-transparent'}`}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <span className="text-2xl font-bold text-primary">Symbia</span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex md:items-center md:space-x-10">
            <a href="#solution" className="text-sm font-medium text-foreground/80 hover:text-primary transition-colors">
              Solution
            </a>
            <a href="#team" className="text-sm font-medium text-foreground/80 hover:text-primary transition-colors">
              Team
            </a>
            <a href="#pricing" className="text-sm font-medium text-foreground/80 hover:text-primary transition-colors">
              Pricing
            </a>
            <Button className="bg-primary hover:bg-primary/90">
              Contact Us
            </Button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-foreground hover:text-primary hover:bg-muted focus:outline-none"
            >
              <span className="sr-only">Open main menu</span>
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-white p-4 border-t">
          <div className="flex flex-col space-y-4 pt-2 pb-3">
            <a href="#solution" className="px-3 py-2 text-base font-medium text-foreground/80 hover:text-primary hover:bg-muted rounded-md">
              Solution
            </a>
            <a href="#team" className="px-3 py-2 text-base font-medium text-foreground/80 hover:text-primary hover:bg-muted rounded-md">
              Team
            </a>
            <a href="#pricing" className="px-3 py-2 text-base font-medium text-foreground/80 hover:text-primary hover:bg-muted rounded-md">
              Pricing
            </a>
            <Button className="bg-primary hover:bg-primary/90 w-full">
              Contact Us
            </Button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
