
import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();
  const isHomePage = location.pathname === '/';

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    // If on homepage, scroll to section
    if (isHomePage) {
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
        setIsMobileMenuOpen(false);
      }
    } else {
      // If not on homepage, navigate to homepage with hash
      window.location.href = `/#${id}`;
    }
  };

  const handleContactClick = () => {
    // GTM tracking
    if (typeof window !== 'undefined' && (window as any).dataLayer) {
      (window as any).dataLayer.push({
        event: 'button_click',
        button_name: 'contact_navbar',
        page_location: window.location.href
      });
    }
  };

  const handleNavClick = (navItem: string) => {
    // GTM tracking
    if (typeof window !== 'undefined' && (window as any).dataLayer) {
      (window as any).dataLayer.push({
        event: 'nav_click',
        nav_item: navItem,
        page_location: window.location.href
      });
    }
  };

  return (
    <nav 
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        isScrolled ? 'bg-humble-charcoal/90 backdrop-blur-md py-3 shadow-lg' : 'bg-transparent py-5'
      }`}
    >
      <div className="container mx-auto px-4 md:px-6 flex justify-between items-center">
        <Link to="/" onClick={() => handleNavClick('home_logo')} className="flex items-center">
          <h1 className="text-xl md:text-2xl font-bold">
            <span className="text-white">Humble</span>
            <span className="bg-gradient-to-r from-humble-pink-500 via-humble-purple-500 to-humble-blue-500 bg-clip-text text-transparent">Studio</span>
          </h1>
        </Link>
        
        {/* Desktop Menu - hidden on screens smaller than lg */}
        <div className="hidden lg:flex space-x-8 items-center">
          <Link to="/" onClick={() => handleNavClick('home')} className="text-white/80 hover:text-white transition-colors">Home</Link>
          <Link to="/about" onClick={() => handleNavClick('about')} className="text-white/80 hover:text-white transition-colors">About</Link>
          <Link to="/work" onClick={() => handleNavClick('work')} className="text-white/80 hover:text-white transition-colors">Work</Link>
          <Link to="/website-packages" onClick={() => handleNavClick('packages')} className="text-white/80 hover:text-white transition-colors">Packages</Link>
          <Link 
            to="/inquiry"
            onClick={handleContactClick}
            className="px-5 py-2 rounded-full bg-gradient-to-r from-humble-pink-500 via-humble-purple-500 to-humble-blue-500 text-white font-medium hover:from-humble-pink-600 hover:via-humble-purple-600 hover:to-humble-blue-600 transition-all"
          >
            Contact
          </Link>
        </div>
        
        {/* Mobile Menu Toggle - visible on screens smaller than lg */}
        <button 
          className="lg:hidden text-white"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>
      
      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="lg:hidden absolute top-full left-0 w-full bg-humble-charcoal/95 backdrop-blur-md shadow-lg">
          <div className="container mx-auto px-4 py-4 flex flex-col space-y-4">
            <Link to="/" onClick={() => {handleNavClick('home_mobile'); setIsMobileMenuOpen(false);}} className="text-white/80 hover:text-white transition-colors py-2">Home</Link>
            <Link to="/about" onClick={() => {handleNavClick('about_mobile'); setIsMobileMenuOpen(false);}} className="text-white/80 hover:text-white transition-colors py-2">About</Link>
            <Link to="/work" onClick={() => {handleNavClick('work_mobile'); setIsMobileMenuOpen(false);}} className="text-white/80 hover:text-white transition-colors py-2">Work</Link>
            <Link to="/website-packages" onClick={() => {handleNavClick('packages_mobile'); setIsMobileMenuOpen(false);}} className="text-white/80 hover:text-white transition-colors py-2">Packages</Link>
            <Link 
              to="/inquiry"
              onClick={() => {handleContactClick(); setIsMobileMenuOpen(false);}}
              className="px-5 py-2 rounded-full bg-gradient-to-r from-humble-pink-500 via-humble-purple-500 to-humble-blue-500 text-white font-medium hover:from-humble-pink-600 hover:via-humble-purple-600 hover:to-humble-blue-600 transition-all text-center"
            >
              Contact
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
