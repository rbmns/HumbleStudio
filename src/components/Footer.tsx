
import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="py-12 bg-humble-charcoal relative">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col md:flex-row items-center justify-between mb-8 pb-8 border-b border-humble-gray-800">
          <div className="flex items-center gap-2 mb-6 md:mb-0">
            <h2 className="font-bold text-xl">
              <span className="text-white">Humble</span>
              <span className="bg-gradient-to-r from-humble-pink-500 via-humble-purple-500 to-humble-blue-500 bg-clip-text text-transparent">Studio</span>
            </h2>
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
            <Link to="/privacy-policy" className="text-white/60 hover:text-white transition-colors">Privacy Policy</Link>
            <div className="w-1 h-1 rounded-full bg-humble-gray-700"></div>
            <Link to="/terms-of-service" className="text-white/60 hover:text-white transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
      
      <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-humble-pink-500 via-humble-purple-500 to-humble-blue-500"></div>
    </footer>
  );
};

export default Footer;
