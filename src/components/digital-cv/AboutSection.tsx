
import React from 'react';
import { User } from 'lucide-react';
import { Link } from 'react-router-dom';

const AboutSection = () => {
  return (
    <div className="max-w-5xl mx-auto mb-20">
      <div className="bg-humble-charcoal/50 backdrop-blur-sm rounded-2xl p-8 md:p-12 border border-humble-gray-700/50 text-center">
        <div className="flex items-center justify-center gap-3 mb-6">
          <div className="w-16 h-16 rounded-full bg-humble-pink-500/20 flex items-center justify-center">
            <User size={28} className="text-humble-pink-500" />
          </div>
          <h2 className="text-2xl md:text-3xl font-bold text-white">
            Built by <span className="bg-gradient-to-r from-humble-pink-500 to-humble-purple-500 bg-clip-text text-transparent">Experience</span>
          </h2>
        </div>
        
        <div className="max-w-3xl mx-auto space-y-4 text-white/80 text-lg leading-relaxed">
          <p>
            Your Digital CV is built by <Link 
              to="/about" 
              className="text-white font-medium hover:text-humble-pink-400 transition-colors underline"
              data-gtm="hire-me-page-about-link"
            >
              Rosie Biemans
            </Link>, creative producer and founder of HumbleStudio, with 15+ years of agency experience delivering digital projects for brands and professionals.
          </p>
          
          <p>
            Every Digital CV is crafted with a focus on clear, modern design that showcases your experience in the best possible light while ensuring compatibility with modern hiring processes.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutSection;
