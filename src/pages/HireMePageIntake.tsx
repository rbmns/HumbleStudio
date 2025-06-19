
import React, { useEffect } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

// Add type definition for the Tally object
declare global {
  interface Window {
    Tally?: {
      loadEmbeds: () => void;
    };
  }
}

const HireMePageIntake = () => {
  useEffect(() => {
    // Set page title and meta tags
    document.title = "Digital CV Intake Form | HumbleStudio";
    
    // Update meta description
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', "Fill in your details to create your tailored digital CV website.");
    }

    // Load Tally script dynamically
    const script = document.createElement('script');
    script.src = 'https://tally.so/widgets/embed.js';
    script.async = true;
    script.onload = () => {
      // Execute Tally.loadEmbeds once script is loaded
      if (window.Tally) {
        window.Tally.loadEmbeds();
      }
    };
    document.body.appendChild(script);
    
    return () => {
      // Cleanup on unmount
      document.body.removeChild(script);
    };
  }, []);

  return (
    <div className="min-h-screen bg-humble-charcoal">
      <Navbar />
      <div className="container mx-auto px-4 md:px-6 py-16 md:py-24">
        <h1 className="text-3xl md:text-4xl font-bold mb-8 text-center text-white">Digital CV Intake Form</h1>
        
        <div className="max-w-4xl mx-auto mb-16">
          <iframe
            data-tally-src="https://tally.so/embed/3EebEL?alignLeft=1&hideTitle=1&transparentBackground=1&dynamicHeight=1"
            width="100%"
            height="600"
            frameBorder="0"
            marginHeight={0}
            marginWidth={0}
            title="Digital CV Intake Form"
            className="bg-transparent"
          ></iframe>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default HireMePageIntake;
