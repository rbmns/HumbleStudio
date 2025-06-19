import React, { useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
const HireMePageThanksStep2 = () => {
  const [searchParams] = useSearchParams();
  const ref = searchParams.get('ref');
  useEffect(() => {
    // Set page title and meta tags
    document.title = "Thank You - Next Steps | HumbleStudio";

    // Update meta description
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', "Thanks for your interest. Let's continue building your personal CV website together.");
    }
  }, []);

  // Build the intake form URL with ref parameter if it exists
  const intakeFormUrl = ref ? `/hire-me-page/intake?ref=${encodeURIComponent(ref)}` : '/hire-me-page/intake';
  return <div className="min-h-screen bg-humble-charcoal">
      <Navbar />
      <div className="container mx-auto px-4 md:px-6 py-16 md:py-24">
        {/* Hero Section */}
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-white leading-tight">
            🎉 You're In — Let's Build Your Site
          </h1>
          
          <p className="text-xl md:text-2xl text-white/80 mb-12 leading-relaxed max-w-3xl mx-auto">Thanks for your interest, I'll be in touch very soon.</p>
        </div>

        {/* Body Section */}
        <div className="max-w-3xl mx-auto">
          <div className="bg-humble-charcoal/50 backdrop-blur-sm rounded-2xl p-8 md:p-12 border border-humble-gray-700/50 mb-8">
            <div className="mb-8">
              <h2 className="text-2xl md:text-3xl font-bold mb-4 text-white">
                Already want to start immediately?
              </h2>
              
              <p className="text-lg text-white/70 mb-8 leading-relaxed">
                Fill in some details about your job preferences and style so we can create your tailored digital CV.
              </p>
              
              <p className="text-lg text-white/70 mb-8 leading-relaxed">
                When you're ready, click the button below to begin.
              </p>
              
              <a href={intakeFormUrl} className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-gradient-to-r from-humble-pink-500 via-humble-purple-500 to-humble-blue-500 text-white font-medium hover:from-humble-pink-600 hover:via-humble-purple-600 hover:to-humble-blue-600 transition-all duration-300 text-lg hover:scale-105" data-gtm="continue-to-intake-form">
                Continue to Intake Form
                <ArrowRight size={20} />
              </a>
            </div>
            
            <p className="text-white/60 text-base leading-relaxed border-t border-humble-gray-700/30 pt-6">
              Prefer to do it later? No problem. You'll receive a follow-up email with your personal link to continue.
            </p>
          </div>
          
          {/* Text Footer */}
          {ref && <div className="text-center">
              <p className="text-white/60 text-sm">
                If you were referred by someone, your code has been saved.
              </p>
            </div>}
        </div>
      </div>
      <Footer />
    </div>;
};
export default HireMePageThanksStep2;