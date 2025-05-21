
import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMobileMenuOpen(false);
    }
  };

  return (
    <nav 
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        isScrolled ? 'bg-humble-gray-900/90 backdrop-blur-md py-3 shadow-lg' : 'bg-transparent py-5'
      }`}
    >
      <div className="container mx-auto px-4 md:px-6 flex justify-between items-center">
        <div className="flex items-center">
          <h1 className="text-xl md:text-2xl font-bold">
            <span className="text-white">Humble</span>
            <span className="bg-gradient-to-r from-humble-blue-500 to-humble-purple-500 bg-clip-text text-transparent">Studio</span>
          </h1>
        </div>
        
        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-8 items-center">
          <button onClick={() => scrollToSection('about')} className="text-white/80 hover:text-white transition-colors">About</button>
          <button onClick={() => scrollToSection('services')} className="text-white/80 hover:text-white transition-colors">Services</button>
          <button onClick={() => scrollToSection('how-it-works')} className="text-white/80 hover:text-white transition-colors">Process</button>
          <button onClick={() => scrollToSection('portfolio')} className="text-white/80 hover:text-white transition-colors">Portfolio</button>
          <button 
            onClick={() => scrollToSection('contact')} 
            className="px-5 py-2 rounded-full bg-gradient-to-r from-humble-blue-500 to-humble-purple-500 text-white font-medium hover:from-humble-blue-600 hover:to-humble-purple-600 transition-all"
          >
            Contact
          </button>
        </div>
        
        {/* Mobile Menu Toggle */}
        <button 
          className="md:hidden text-white"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>
      
      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-humble-gray-900/95 backdrop-blur-md shadow-lg">
          <div className="container mx-auto px-4 py-4 flex flex-col space-y-4">
            <button onClick={() => scrollToSection('about')} className="text-white/80 hover:text-white transition-colors py-2">About</button>
            <button onClick={() => scrollToSection('services')} className="text-white/80 hover:text-white transition-colors py-2">Services</button>
            <button onClick={() => scrollToSection('how-it-works')} className="text-white/80 hover:text-white transition-colors py-2">Process</button>
            <button onClick={() => scrollToSection('portfolio')} className="text-white/80 hover:text-white transition-colors py-2">Portfolio</button>
            <button 
              onClick={() => scrollToSection('contact')} 
              className="px-5 py-2 rounded-full bg-gradient-to-r from-humble-blue-500 to-humble-purple-500 text-white font-medium hover:from-humble-blue-600 hover:to-humble-purple-600 transition-all"
            >
              Contact
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
