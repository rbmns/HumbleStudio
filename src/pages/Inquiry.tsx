
import React, { useEffect } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

    
    // Update meta description
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', "Ready for Your Free Website? Let's get started. This quick form helps us build a beautiful site that fits you.");
    }
  

  return (
    <div className="min-h-screen bg-humble-charcoal">
      <Navbar />
      <div className="container mx-auto px-4 md:px-6 py-16 md:py-24">
        <h1 className="text-3xl md:text-4xl font-bold mb-8 text-center text-white">HumbleStudio Intake Form</h1>
        <div data-tf-live="01JWPDVE76G8DJHJ0VWRH89HK7"></div><script src="//embed.typeform.com/next/embed.js"></script>
       
      </div>
      <Footer />
    </div>
  );
};

export default IntakeForm;
