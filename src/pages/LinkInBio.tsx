
import React from 'react';
import { ExternalLink, Mail, Instagram } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import StarBackground from '@/components/StarBackground';

const LinkInBio = () => {
  const navigate = useNavigate();

  const scrollToContact = () => {
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-humble-navy text-white relative">
      <StarBackground />
      
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-humble-navy/90 backdrop-blur-md border-b border-white/10">
        <div className="container mx-auto px-6 py-4">
          <div className="flex justify-between items-center">
            <button
              onClick={() => navigate('/')}
              className="flex items-center"
            >
              <h1 className="text-xl md:text-2xl font-bold">
                <span className="text-white">Humble</span>
                <span className="bg-gradient-to-r from-humble-pink-500 via-humble-purple-500 to-humble-blue-500 bg-clip-text text-transparent">Studio</span>
              </h1>
            </button>
            
            <div className="flex space-x-6 items-center">
              <button onClick={() => navigate('/')} className="text-white/80 hover:text-white transition-colors">Home</button>
              <button onClick={() => navigate('/inquiry')} className="text-white/80 hover:text-white transition-colors">Inquiry</button>
              <button 
                onClick={scrollToContact}
                className="px-5 py-2 rounded-full bg-gradient-to-r from-humble-pink-500 via-humble-purple-500 to-humble-blue-500 text-white font-medium hover:from-humble-pink-600 hover:via-humble-purple-600 hover:to-humble-blue-600 transition-all"
              >
                Contact
              </button>
            </div>
          </div>
        </div>
      </nav>
      
      {/* Main Content */}
      <div className="pt-32 pb-24 relative z-10">
        <div className="container mx-auto px-6 max-w-2xl">
          
          {/* Header */}
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 font-space-grotesk">
              Latest Work, Case Studies & Digital Builds
            </h1>
            <p className="text-xl text-white/80 font-light">
              Beautiful websites built with AI and delivered fast
            </p>
          </div>

          {/* Featured Buttons */}
          <div className="space-y-6 mb-20">
            <h2 className="text-2xl font-semibold text-white mb-8 text-center">See Live Work</h2>
            
            {/* Digital CV */}
            <a
              href="https://rosiebiemans.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-between w-full p-6 bg-humble-charcoal/30 backdrop-blur-sm rounded-2xl border border-white/10 hover:border-humble-pink-500/50 transition-all duration-300 group"
            >
              <div className="flex items-center gap-4">
                <span className="text-2xl">🔥</span>
                <div>
                  <div className="text-lg font-semibold text-white">Digital CV</div>
                  <div className="text-white/60 text-sm">Personal branding site</div>
                </div>
              </div>
              <ExternalLink className="h-5 w-5 text-white/60 group-hover:text-humble-pink-500 transition-colors" />
            </a>

            {/* Shen Taxi & Tours */}
            <a
              href="https://shentaxiandtours.humblestudio.ai/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-between w-full p-6 bg-humble-charcoal/30 backdrop-blur-sm rounded-2xl border border-white/10 hover:border-humble-purple-500/50 transition-all duration-300 group"
            >
              <div className="flex items-center gap-4">
                <span className="text-2xl">🚗</span>
                <div>
                  <div className="text-lg font-semibold text-white">Shen Taxi & Tours</div>
                  <div className="text-white/60 text-sm">Local business website</div>
                </div>
              </div>
              <ExternalLink className="h-5 w-5 text-white/60 group-hover:text-humble-purple-500 transition-colors" />
            </a>

            {/* Nonna's Table */}
            <a
              href="https://nonnas-table.humblestudio.ai/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-between w-full p-6 bg-humble-charcoal/30 backdrop-blur-sm rounded-2xl border border-white/10 hover:border-humble-blue-500/50 transition-all duration-300 group"
            >
              <div className="flex items-center gap-4">
                <span className="text-2xl">🌊</span>
                <div>
                  <div className="text-lg font-semibold text-white">Nonna's Table</div>
                  <div className="text-white/60 text-sm">Restaurant landing page</div>
                </div>
              </div>
              <ExternalLink className="h-5 w-5 text-white/60 group-hover:text-humble-blue-500 transition-colors" />
            </a>
          </div>

          {/* Contact Section */}
          <div id="contact" className="text-center">
            <h2 className="text-2xl font-semibold text-white mb-8">📩 Contact</h2>
            
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-humble-charcoal/30 backdrop-blur-sm p-6 rounded-2xl border border-white/10 hover:border-humble-pink-500/50 transition-all duration-300">
                <div className="flex items-center gap-4 text-white/80">
                  <div className="w-12 h-12 rounded-full bg-humble-charcoal flex items-center justify-center">
                    <Mail size={20} className="text-humble-pink-500" />
                  </div>
                  <div className="flex-1">
                    <div className="text-sm text-white/60">Email</div>
                    <a 
                      href="mailto:hi@humblestudio.ai"
                      className="text-white hover:text-humble-pink-400 transition-colors"
                    >
                      hi@humblestudio.ai
                    </a>
                  </div>
                </div>
              </div>
              
              <div className="bg-humble-charcoal/30 backdrop-blur-sm p-6 rounded-2xl border border-white/10 hover:border-humble-pink-500/50 transition-all duration-300">
                <a href="https://instagram.com/humblestudio.ai" target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 text-white/80 hover:text-white transition-colors">
                  <div className="w-12 h-12 rounded-full bg-humble-charcoal flex items-center justify-center">
                    <Instagram size={20} className="text-humble-pink-500" />
                  </div>
                  <div>
                    <div className="text-sm text-white/60">Instagram</div>
                    <div>@humblestudio.ai</div>
                  </div>
                </a>
              </div>
            </div>

            <div className="mt-12">
              <a
                href="/inquiry"
                className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-humble-pink-500 via-humble-purple-500 to-humble-blue-500 text-white rounded-2xl font-semibold text-lg hover:opacity-90 transition-opacity"
              >
                Start Your Project
                <ExternalLink className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LinkInBio;
