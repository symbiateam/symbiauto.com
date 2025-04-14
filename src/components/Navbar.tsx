import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import ContactForm from "@/components/ContactForm";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [showContactForm, setShowContactForm] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-white/95 backdrop-blur-sm shadow-sm" : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <div className="flex items-center">
            <a href="/" className="flex items-center">
              <img src="/symbia-logo.svg" alt="Symbia Logo" className="h-8" />
            </a>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex md:items-center md:space-x-8">
            <a
              href="#solution"
              className="text-sm font-medium text-foreground/80 hover:text-accent transition-colors"
            >
              Solution
            </a>
            <a
              href="#team"
              className="text-sm font-medium text-foreground/80 hover:text-accent transition-colors"
            >
              Team
            </a>
            <Button
              className="bg-accent hover:bg-accent/90 text-white rounded-full"
              onClick={() => setShowContactForm(true)}
            >
              Request Early Access
            </Button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-foreground hover:text-accent hover:bg-muted focus:outline-none"
            >
              <span className="sr-only">Open main menu</span>
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-white border-t">
          <div className="flex flex-col space-y-4 pt-2 pb-3 px-4">
            <a
              href="#solution"
              className="px-3 py-2 text-base font-medium text-foreground/80 hover:text-accent hover:bg-muted rounded-md"
            >
              Solution
            </a>
            <a
              href="#team"
              className="px-3 py-2 text-base font-medium text-foreground/80 hover:text-accent hover:bg-muted rounded-md"
            >
              Team
            </a>
            <Button 
              className="bg-accent hover:bg-accent/90 text-white w-full rounded-full"
              onClick={() => {
                setShowContactForm(true);
                setIsMobileMenuOpen(false);
              }}
            >
              Request Early Access
            </Button>
          </div>
        </div>
      )}

      <ContactForm
        isOpen={showContactForm}
        onClose={() => setShowContactForm(false)}
        buttonType="access"
      />
    </nav>
  );
};

export default Navbar;
