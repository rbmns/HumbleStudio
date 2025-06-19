
import React from 'react';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const FooterCta = () => {
  const handleGetHireMePageClick = () => {
    // GTM tracking
    if (typeof window !== 'undefined' && (window as any).dataLayer) {
      (window as any).dataLayer.push({
        event: 'button_click',
        button_name: 'get_hire_me_page_footer',
        page_location: window.location.href
      });
    }
  };

  return (
    <div className="max-w-4xl mx-auto text-center">
      <div className="bg-gradient-to-br from-humble-pink-500/10 to-humble-purple-500/10 backdrop-blur-sm rounded-2xl p-8 md:p-12 border border-humble-pink-500/20">
        <h2 className="text-2xl md:text-3xl font-bold mb-4 text-white">
          Ready to Get Hired?
        </h2>
        
        <p className="text-white/70 mb-8 text-lg">
          Get your professional Hire Me Page and stand out from the crowd.
        </p>
        
        <Link 
          to="/hire-me-page/start"
          onClick={handleGetHireMePageClick}
          className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-gradient-to-r from-humble-pink-500 via-humble-purple-500 to-humble-blue-500 text-white font-medium hover:from-humble-pink-600 hover:via-humble-purple-600 hover:to-humble-blue-600 transition-all duration-300 text-lg hover:scale-105"
          data-gtm="hire-me-page-footer-cta"
        >
          Get Your Hire Me Page
          <ArrowRight size={20} />
        </Link>
      </div>
    </div>
  );
};

export default FooterCta;
