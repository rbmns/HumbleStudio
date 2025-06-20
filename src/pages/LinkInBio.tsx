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

  const openCalendly = () => {
    // @ts-ignore - Calendly is loaded externally
    if (window.Calendly) {
      // @ts-ignore
      window.Calendly.initPopupWidget({
        url: 'https://calendly.com/r-a-biemans/30min?background_color=0a1128&text_color=ffffff&primary_color=ff9933'
      });
    }
  };

  const handleDigitalCVCaseStudy = () => {
    navigate('/work/digital-resume-site');
  };

  const handleShenTaxiCaseStudy = () => {
    navigate('/work/shen-taxi-tours');
  };

const handleSurfInstructorCaseStudy = () => {
  navigate('/work/surf-instructor');
};

  return (
    <>
      {/* Calendly CSS and JS */}
      <link href="https://assets.calendly.com/assets/external/widget.css" rel="stylesheet" />
      <script src="https://assets.calendly.com/assets/external/widget.js" type="text/javascript" async></script>
      
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
              
              <div className="hidden md:flex space-x-6 items-center">
                <button onClick={() => navigate('/')} className="text-white/80 hover:text-white transition-colors">Home</button>
                <button onClick={() => navigate('/work')} className="text-white/80 hover:text-white transition-colors">Work</button>
                <button onClick={() => navigate('/inquiry')} className="text-white/80 hover:text-white transition-colors">Inquiry</button>
                <button 
                  onClick={scrollToContact}
                  className="px-5 py-2 rounded-full bg-gradient-to-r from-humble-pink-500 via-humble-purple-500 to-humble-blue-500 text-white font-medium hover:from-humble-pink-600 hover:via-humble-purple-600 hover:to-humble-blue-600 transition-all"
                >
                  Contact
                </button>
              </div>
              
              {/* Mobile menu button */}
              <div className="md:hidden">
                <button 
                  onClick={scrollToContact}
                  className="px-3 py-2 rounded-full bg-gradient-to-r from-humble-pink-500 via-humble-purple-500 to-humble-blue-500 text-white font-medium hover:from-humble-pink-600 hover:via-humble-purple-600 hover:to-humble-blue-600 transition-all text-sm"
                >
                  Contact
                </button>
              </div>
            </div>
          </div>
        </nav>
        
        {/* Main Content */}
        <div className="pt-24 pb-16 relative z-10">
          <div className="container mx-auto px-6 max-w-2xl">
            
            {/* Hero Section */}
            <div className="text-center mb-12">
              {/* Small Wordmark */}
              <div className="mb-4">
                <h1 className="text-2xl md:text-3xl font-bold font-inter">
                  <span className="text-white">Humble</span>
                  <span className="bg-gradient-to-r from-humble-pink-500 via-humble-purple-500 to-humble-blue-500 bg-clip-text text-transparent">Studio</span>
                </h1>
              </div>
              
              {/* Tagline */}
              <p className="text-lg md:text-xl text-white/80 font-inter">
                Beautiful. Affordable. Ready in a Day.
              </p>
            </div>

            {/* Main Action Links */}
            <div className="space-y-4 mb-16">
              
            
                {/* Packages */}
              <button
                onClick={() => navigate('/website-packages')}
                className="flex items-center justify-between w-full p-5 bg-humble-charcoal/30 backdrop-blur-sm rounded-2xl border border-white/10 hover:border-humble-pink-500/50 transition-all duration-300 group"
              >
                <div className="flex items-center gap-4">
                  <span className="text-2xl">📦</span>
                  <div className="text-left">
                    <div className="text-lg font-semibold text-white">See Packages</div>
                    <div className="text-white/60 text-sm">Need a Website? Start Here</div>
                  </div>
                </div>
                <ExternalLink className="h-5 w-5 text-white/60 group-hover:text-humble-pink-500 transition-colors" />
              </button>
              
              {/* See My Work */}
              <button
                onClick={() => navigate('/work')}
                className="flex items-center justify-between w-full p-5 bg-humble-charcoal/30 backdrop-blur-sm rounded-2xl border border-white/10 hover:border-humble-pink-500/50 transition-all duration-300 group"
              >
                <div className="flex items-center gap-4">
                  <span className="text-2xl">💼</span>
                  <div className="text-left">
                    <div className="text-lg font-semibold text-white">See My Work</div>
                    <div className="text-white/60 text-sm">Portfolio & case studies</div>
                  </div>
                </div>
                <ExternalLink className="h-5 w-5 text-white/60 group-hover:text-humble-pink-500 transition-colors" />
              </button>

              {/* Book a Free Call */}
              <button
                onClick={openCalendly}
                className="flex items-center justify-between w-full p-5 bg-humble-charcoal/30 backdrop-blur-sm rounded-2xl border border-white/10 hover:border-humble-purple-500/50 transition-all duration-300 group"
              >
                <div className="flex items-center gap-4">
                  <span className="text-2xl">📞</span>
                  <div className="text-left">
                    <div className="text-lg font-semibold text-white">Book a Free Call</div>
                    <div className="text-white/60 text-sm">30-minute consultation</div>
                  </div>
                </div>
                <ExternalLink className="h-5 w-5 text-white/60 group-hover:text-humble-purple-500 transition-colors" />
              </button>

             

              {/* Start a Project */}
              <button
                onClick={() => navigate('/inquiry')}
                className="flex items-center justify-between w-full p-5 bg-humble-charcoal/30 backdrop-blur-sm rounded-2xl border border-white/10 hover:border-humble-blue-500/50 transition-all duration-300 group"
              >
                <div className="flex items-center gap-4">
                  <span className="text-2xl">🚀</span>
                  <div className="text-left">
                    <div className="text-lg font-semibold text-white">Start a Project</div>
                    <div className="text-white/60 text-sm">Get your website built</div>
                  </div>
                </div>
                <ExternalLink className="h-5 w-5 text-white/60 group-hover:text-humble-blue-500 transition-colors" />
              </button>
            </div>

            {/* Featured Projects */}
            <div className="mb-16">
              <h2 className="text-xl font-semibold text-white mb-6 text-center">Featured Projects</h2>
              
              <div className="space-y-4">
                {/* Digital CV */}
                <div className="flex gap-2">
                  <a
                    href="https://rosiebiemans.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 flex items-center justify-between p-4 bg-humble-charcoal/30 backdrop-blur-sm rounded-xl border border-white/10 hover:border-humble-pink-500/50 transition-all duration-300 group"
                  >
                    <div className="flex items-center gap-3">
                      <span className="text-xl">🔥</span>
                      <div>
                        <div className="text-base font-semibold text-white">Digital CV</div>
                        <div className="text-white/60 text-xs">Personal branding site</div>
                      </div>
                    </div>
                    <ExternalLink className="h-4 w-4 text-white/60 group-hover:text-humble-pink-500 transition-colors" />
                  </a>
                  <button
                    onClick={handleDigitalCVCaseStudy}
                    className="px-4 py-4 bg-humble-charcoal/30 backdrop-blur-sm rounded-xl border border-white/10 hover:border-humble-pink-500/50 transition-all duration-300 text-white/60 hover:text-humble-pink-500"
                  >
                    <span className="text-sm font-medium">Case Study</span>
                  </button>
                </div>

                {/* Shen Taxi & Tours */}
                <div className="flex gap-2">
                  <a
                    href="https://shentaxiandtours.humblestudio.ai/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 flex items-center justify-between p-4 bg-humble-charcoal/30 backdrop-blur-sm rounded-xl border border-white/10 hover:border-humble-purple-500/50 transition-all duration-300 group"
                  >
                    <div className="flex items-center gap-3">
                      <span className="text-xl">🚗</span>
                      <div>
                        <div className="text-base font-semibold text-white">Shen Taxi & Tours</div>
                        <div className="text-white/60 text-xs">Local business website</div>
                      </div>
                    </div>
                    <ExternalLink className="h-4 w-4 text-white/60 group-hover:text-humble-purple-500 transition-colors" />
                  </a>
                  <button
                    onClick={handleShenTaxiCaseStudy}
                    className="px-4 py-4 bg-humble-charcoal/30 backdrop-blur-sm rounded-xl border border-white/10 hover:border-humble-purple-500/50 transition-all duration-300 text-white/60 hover:text-humble-purple-500"
                  >
                    <span className="text-sm font-medium">Case Study</span>
                  </button>
                </div>

                {/* Nonna's Table */}
                <div className="flex gap-2">
                  <a
                    href="https://nonnas-table.humblestudio.ai/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 flex items-center justify-between p-4 bg-humble-charcoal/30 backdrop-blur-sm rounded-xl border border-white/10 hover:border-humble-blue-500/50 transition-all duration-300 group"
                  >
                    <div className="flex items-center gap-3">
                      <span className="text-xl">🍝</span>
                      <div>
                        <div className="text-base font-semibold text-white">Nonna's Table</div>
                        <div className="text-white/60 text-xs">Restaurant landing page</div>
                      </div>
                    </div>
                    <ExternalLink className="h-4 w-4 text-white/60 group-hover:text-humble-blue-500 transition-colors" />
                  </a>
                  <button
                    onClick={handleNonnasCaseStudy}
                    className="px-4 py-4 bg-humble-charcoal/30 backdrop-blur-sm rounded-xl border border-white/10 hover:border-humble-blue-500/50 transition-all duration-300 text-white/60 hover:text-humble-blue-500"
                  >
                    <span className="text-sm font-medium">Case Study</span>
                  </button>
                </div>
              </div>
            </div>

            {/* Contact Section */}
            <div id="contact" className="text-center">
              <h2 className="text-xl font-semibold text-white mb-6">📩 Contact</h2>
              
              <div className="grid md:grid-cols-2 gap-4">
                <div className="bg-humble-charcoal/30 backdrop-blur-sm p-4 rounded-xl border border-white/10 hover:border-humble-pink-500/50 transition-all duration-300">
                  <div className="flex items-center gap-3 text-white/80 text-left md:text-center">
                    <div className="w-10 h-10 rounded-full bg-humble-charcoal flex items-center justify-center flex-shrink-0">
                      <Mail size={16} className="text-humble-pink-500" />
                    </div>
                    <div className="flex-1 text-left">
                      <div className="text-xs text-white/60">Email</div>
                      <a 
                        href="mailto:hi@humblestudio.ai"
                        className="text-white hover:text-humble-pink-400 transition-colors text-sm"
                      >
                        hi@humblestudio.ai
                      </a>
                    </div>
                  </div>
                </div>
                
                <div className="bg-humble-charcoal/30 backdrop-blur-sm p-4 rounded-xl border border-white/10 hover:border-humble-pink-500/50 transition-all duration-300">
                  <a href="https://instagram.com/humblestudio.ai" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 text-white/80 hover:text-white transition-colors">
                    <div className="w-10 h-10 rounded-full bg-humble-charcoal flex items-center justify-center">
                      <Instagram size={16} className="text-humble-pink-500" />
                    </div>
                    <div className="text-left">
                      <div className="text-xs text-white/60">Instagram</div>
                      <div className="text-sm">@humblestudio.ai</div>
                    </div>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default LinkInBio;
