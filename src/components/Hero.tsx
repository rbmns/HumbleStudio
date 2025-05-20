
import { useEffect, useRef } from 'react';
import { ArrowRight } from 'lucide-react';

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
    <div ref={heroRef} className="relative min-h-screen flex items-center justify-center px-4 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-radial from-humble-purple-600/20 to-transparent opacity-30"></div>
      
      <div className="max-w-4xl mx-auto text-center z-10 mt-16">
        <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight tracking-tight">
          <span className="gradient-text animate-pulse-slow">HumbleStudio.ai</span>
        </h1>
        
        <div className="w-full max-w-lg mx-auto h-[2px] bg-gradient-to-r from-humble-purple-500 to-humble-pink-500 mb-8 opacity-70"></div>
        
        <h2 className="text-2xl md:text-3xl lg:text-4xl mb-8 text-white/90 leading-relaxed">
          Beautiful Websites. <span className="whitespace-nowrap">Built with AI.</span> <span className="whitespace-nowrap">Delivered in a Day.</span>
        </h2>
        
        <p className="text-xl mb-10 text-white/80">
          You've got a business. I'll get it online — fast, functional, and designed to impress.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center mt-10">
          <a
            href="https://form.typeform.com/to/iwNqCI7O"
            target="_blank"
            rel="noopener noreferrer"
            className="px-8 py-3 rounded-full button-gradient text-white font-medium text-lg flex items-center justify-center gap-2 hover:scale-105 transition-all duration-300"
          >
            Book a Free Site
            <ArrowRight size={18} />
          </a>
          <button 
            onClick={() => scrollToSection('how-it-works')}
            className="px-8 py-3 rounded-full bg-white/10 hover:bg-white/20 text-white font-medium text-lg transition-all duration-300"
          >
            How It Works
          </button>
        </div>
      </div>
      
      <div 
        onClick={() => scrollToSection('about')} 
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce cursor-pointer"
      >
        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-white/70" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      </div>
    </div>
  );
};

export default Hero;
