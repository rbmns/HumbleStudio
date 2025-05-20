import { useEffect } from 'react';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import About from '../components/About';
import Services from '../components/Services';
import HowItWorks from '../components/HowItWorks';
import FreeOffer from '../components/FreeOffer';
import Portfolio from '../components/Portfolio';
import Contact from '../components/Contact';
import Footer from '../components/Footer';
// We're keeping StarBackground for now but it will be less visible with our new sparkles
import StarBackground from '../components/StarBackground';

const Index = () => {
  useEffect(() => {
    // Update page title
    document.title = "HumbleStudio | Beautiful Websites. Built with AI.";
  }, []);

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
    </div>
  );
};

export default Index;
