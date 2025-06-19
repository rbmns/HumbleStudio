
import React from 'react';
import { ArrowRight, Globe } from 'lucide-react';
import { Link } from 'react-router-dom';

const HeroSection = () => {
  return (
    <div className="max-w-4xl mx-auto text-center mb-20">
      <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-white leading-tight">
        Your <span className="bg-gradient-to-r from-humble-pink-500 to-humble-purple-500 bg-clip-text text-transparent">Hire Me Page</span>
      </h1>
      
      <p className="text-xl md:text-2xl text-white/80 mb-8 leading-relaxed">
        A clean CV-style page for job seekers and freelancers applying for work.
      </p>
      
      <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-4">
        <Link 
          to="/hire-me-page"
          className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-gradient-to-r from-humble-pink-500 via-humble-purple-500 to-humble-blue-500 text-white font-medium hover:from-humble-pink-600 hover:via-humble-purple-600 hover:to-humble-blue-600 transition-all duration-300 text-lg hover:scale-105"
          data-gtm="hire-me-page-hero-cta"
        >
          Get Your Hire Me Page
          <ArrowRight size={20} />
        </Link>
        
        <a 
          href="https://rosiebiemans.com/"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 px-6 py-3 rounded-full border border-white/20 text-white hover:border-humble-pink-500/50 hover:bg-humble-pink-500/10 transition-all duration-300"
          data-gtm="hire-me-page-example-link"
        >
          See Example
          <Globe size={18} />
        </a>
      </div>
      
      <p className="text-white/60 text-sm mt-4">
        Were you referred? Use your referral code or special link — referrers may receive a small commission.
      </p>
    </div>
  );
};

export default HeroSection;
