
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

const IntakeForm = () => {
  useEffect(() => {
    // Set page title and meta tags
    document.title = "HumbleStudio intake form";
    
    // Update meta description
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', "Ready for Your Free Website? Let's get started. This quick form helps us build a beautiful site that fits you.");
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
    <div className="min-h-screen bg-humble-gray-900">
      <Navbar />
      <div className="container mx-auto px-4 md:px-6 py-16 md:py-24">
        <h1 className="text-3xl md:text-4xl font-bold mb-8 text-center text-white">HumbleStudio Intake Form</h1>
        
        <div className="max-w-4xl mx-auto mb-16">
          <iframe
            data-tally-src="https://tally.so/embed/wzvRe8?alignLeft=1&hideTitle=1&transparentBackground=1&dynamicHeight=1"
            width="100%"
            height="600"
            frameBorder="0"
            marginHeight={0}
            marginWidth={0}
            title="HumbleStudio Intake Form"
            className="bg-transparent"
          ></iframe>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default IntakeForm;
