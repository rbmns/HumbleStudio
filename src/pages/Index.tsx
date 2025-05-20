import { useEffect, useState } from 'react';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import About from '../components/About';
import Services from '../components/Services';
import HowItWorks from '../components/HowItWorks';
import FreeOffer from '../components/FreeOffer';
import Portfolio from '../components/Portfolio';
import Contact from '../components/Contact';
import Footer from '../components/Footer';
import CookieConsent from '../components/CookieConsent';
// We're keeping StarBackground for now but it will be less visible with our new sparkles
import StarBackground from '../components/StarBackground';

const Index = () => {
  const [showCookieConsent, setShowCookieConsent] = useState(false);

  useEffect(() => {
    // Update page title
    document.title = "HumbleStudio | Beautiful Websites. Built with AI.";
    
    // Check if user has already consented to cookies
    const hasConsented = localStorage.getItem('cookie-consent');
    if (!hasConsented) {
      setShowCookieConsent(true);
    }
  }, []);

  const handleCookieConsent = (accepted: boolean) => {
    localStorage.setItem('cookie-consent', accepted ? 'accepted' : 'declined');
    setShowCookieConsent(false);
  };

  return (
    <div className="min-h-screen relative overflow-x-hidden">
      <StarBackground />
      <Navbar />
      <Hero />
      <About />
      <Services />
      <HowItWorks />
      <FreeOffer />
      <Portfolio />
      <Contact />
      <Footer />
      {showCookieConsent && <CookieConsent onConsent={handleCookieConsent} />}
    </div>
  );
};

export default Index;
