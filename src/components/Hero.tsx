
import { useEffect, useRef } from 'react';
import { ArrowRight } from 'lucide-react';
import { SparklesCore } from './ui/sparkles';

const Hero = () => {
  const heroRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (!heroRef.current) return;
      const scrollY = window.scrollY;
      const opacity = 1 - Math.min(1, scrollY / 700);
      heroRef.current.style.opacity = opacity.toString();
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div ref={heroRef} className="relative min-h-screen flex items-center justify-center px-6 sm:px-4 overflow-hidden">
      {/* SparklesCore as background */}
      <div className="absolute inset-0 z-0">
        <SparklesCore
          id="heroSparkles"
          background="transparent"
          minSize={0.6}
          maxSize={1.4}
          particleDensity={100}
          className="w-full h-full"
          particleColor="#FF4B7C"
          speed={1}
        />
        
        {/* Gradients overlay */}
        <div className="absolute inset-0 bg-gradient-radial from-humble-pink-500/10 to-transparent opacity-30"></div>
      </div>
      
      <div className="max-w-4xl mx-auto text-center z-10">
        <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight tracking-tight">
          <span className="text-white">Humble</span>
          <span className="bg-gradient-to-r from-humble-pink-500 via-humble-purple-500 to-humble-blue-500 bg-clip-text text-transparent">Studio</span>
        </h1>
        
        <div className="w-full max-w-lg mx-auto h-[2px] bg-gradient-to-r from-humble-pink-500 via-humble-purple-500 to-humble-blue-500 mb-8 opacity-70"></div>
        
        <h2 className="text-2xl md:text-3xl lg:text-4xl mb-8 text-white/90 leading-relaxed">
          Beautiful Websites. <span className="whitespace-nowrap">Built with AI.</span> <span className="whitespace-nowrap">Delivered in a Day.</span>
        </h2>
        
        <p className="text-xl mb-10 text-white/80 max-w-2xl mx-auto">
          You've got a business. I'll get it online — fast, functional, and designed to impress.
        </p>
        
        <div className="flex flex-col sm:flex-row justify-center sm:gap-2 gap-3 mt-8 items-center">
          <a
            href="https://humblestudio.ai/inquiry"
            target="_blank"
            rel="noopener noreferrer"
            className="max-w-[240px] w-auto sm:w-auto px-8 py-2.5 sm:py-3 rounded-full button-gradient text-white font-medium text-lg flex items-center justify-center gap-2 hover:scale-105 transition-all duration-300 shadow-lg shadow-humble-pink-500/20"
          >
           Let's Talk
            <ArrowRight size={18} />
          </a>
          <button 
            onClick={() => scrollToSection('how-it-works')}
            className="max-w-[240px] w-auto sm:w-auto px-8 py-2.5 sm:py-3 rounded-full bg-white/10 hover:bg-white/20 text-white font-medium text-lg transition-all duration-300 backdrop-blur-sm"
          >
            How It Works
          </button>
        </div>
      </div>
      
      <div 
        onClick={() => scrollToSection('about')} 
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce cursor-pointer"
        aria-label="Scroll to About section"
      >
        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-white/70" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      </div>
    </div>
  );
};

export default Hero;
