
import React from 'react';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="py-12 bg-humble-gray-900 relative">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col md:flex-row items-center justify-between mb-8 pb-8 border-b border-humble-gray-800">
          <div className="flex items-center gap-2 mb-6 md:mb-0">
            <img src="/lovable-uploads/f1c45144-63a0-4f95-8d0c-21b19d944045.png" alt="HumbleStudio.ai Logo" className="h-8" />
            <span className="font-bold text-xl">HumbleStudio<span className="text-humble-purple-500">.ai</span></span>
          </div>
          
          <div className="flex flex-wrap justify-center gap-8">
            <a href="#about" className="text-white/70 hover:text-white transition-colors">About</a>
            <a href="#services" className="text-white/70 hover:text-white transition-colors">Services</a>
            <a href="#how-it-works" className="text-white/70 hover:text-white transition-colors">Process</a>
            <a href="#portfolio" className="text-white/70 hover:text-white transition-colors">Portfolio</a>
            <a href="#contact" className="text-white/70 hover:text-white transition-colors">Contact</a>
          </div>
        </div>
        
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div className="text-white/60 mb-4 md:mb-0">
            &copy; {currentYear} HumbleStudio.ai. All rights reserved.
          </div>
          
          <div className="flex items-center gap-4">
            <a href="#" className="text-white/60 hover:text-white transition-colors">Privacy Policy</a>
            <div className="w-1 h-1 rounded-full bg-humble-gray-700"></div>
            <a href="#" className="text-white/60 hover:text-white transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
      
      <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-humble-purple-500 via-humble-pink-500 to-humble-yellow-400"></div>
    </footer>
  );
};

export default Footer;
