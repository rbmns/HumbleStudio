
import React, { useEffect } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { Helmet } from 'react-helmet';

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
    // Ensure the Tally script is loaded and executed
    if (window.Tally) {
      window.Tally.loadEmbeds();
    }
  }, []);

  return (
    <div className="min-h-screen bg-humble-gray-900">
      <Helmet>
        {/* Primary Meta Tags */}
        <title>HumbleStudio intake form</title>
        <meta name="title" content="HumbleStudio intake form" />
        <meta name="description" content="Ready for Your Free Website? Let's get started. This quick form helps us build a beautiful site that fits you." />

        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://tally.so/r/wzvRe8" />
        <meta property="og:title" content="HumbleStudio intake form" />
        <meta property="og:description" content="Ready for Your Free Website? Let's get started. This quick form helps us build a beautiful site that fits you." />
        <meta property="og:image" content="https://metatags.io/images/meta-tags.png" />

        {/* Twitter */}
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://tally.so/r/wzvRe8" />
        <meta property="twitter:title" content="HumbleStudio intake form" />
        <meta property="twitter:description" content="Ready for Your Free Website? Let's get started. This quick form helps us build a beautiful site that fits you." />
        <meta property="twitter:image" content="https://metatags.io/images/meta-tags.png" />
      </Helmet>
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
