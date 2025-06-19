
import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import StarBackground from '../components/StarBackground';
import { ArrowRight, Check, ChevronDown, User, Globe, Palette, FileText, Clock, Shield, Star, Zap } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from '@/components/ui/collapsible';

const DigitalCV = () => {
  return (
    <div className="min-h-screen relative overflow-x-hidden">
      <StarBackground />
      <Navbar />
      
      <main className="pt-24 pb-16">
        <div className="container mx-auto px-4 md:px-6">
          
          {/* Hero Section */}
          <div className="max-w-4xl mx-auto text-center mb-20">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-white leading-tight">
              Your CV, <span className="bg-gradient-to-r from-humble-pink-500 to-humble-purple-500 bg-clip-text text-transparent">Reimagined</span> for the Web
            </h1>
            
            <p className="text-xl md:text-2xl text-white/80 mb-8 leading-relaxed">
              A clean, personal website designed to pass ATS scans and leave a lasting impression.
            </p>
            
            <Link 
              to="/start-digital-cv"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-gradient-to-r from-humble-pink-500 via-humble-purple-500 to-humble-blue-500 text-white font-medium hover:from-humble-pink-600 hover:via-humble-purple-600 hover:to-humble-blue-600 transition-all duration-300 text-lg hover:scale-105"
              data-gtm="digital-cv-hero-cta"
            >
              Start Your Digital CV
              <ArrowRight size={20} />
            </Link>
            
            <p className="text-white/60 text-sm mt-4">
              Were you referred? Use your referral code or special link — referrers may receive a small commission.
            </p>
          </div>

          {/* Why Choose Digital CV Section */}
          <div className="max-w-5xl mx-auto mb-20">
            <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center text-white">
              Why Choose a <span className="bg-gradient-to-r from-humble-pink-500 to-humble-blue-500 bg-clip-text text-transparent">Digital CV?</span>
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-humble-charcoal/30 backdrop-blur-sm p-6 rounded-xl border border-humble-gray-700/50 text-center hover:border-humble-pink-500/50 transition-all duration-300">
                <div className="w-16 h-16 rounded-full bg-humble-pink-500/20 flex items-center justify-center mx-auto mb-4">
                  <Shield size={24} className="text-humble-pink-500" />
                </div>
                <h3 className="font-semibold text-white mb-3 text-lg">ATS-Friendly</h3>
                <p className="text-white/70">Built to pass through applicant tracking systems while maintaining visual appeal</p>
              </div>
              
              <div className="bg-humble-charcoal/30 backdrop-blur-sm p-6 rounded-xl border border-humble-gray-700/50 text-center hover:border-humble-purple-500/50 transition-all duration-300">
                <div className="w-16 h-16 rounded-full bg-humble-purple-500/20 flex items-center justify-center mx-auto mb-4">
                  <Star size={24} className="text-humble-purple-500" />
                </div>
                <h3 className="font-semibold text-white mb-3 text-lg">Stand Out</h3>
                <p className="text-white/70">Make a memorable first impression that sets you apart from other candidates</p>
              </div>
              
              <div className="bg-humble-charcoal/30 backdrop-blur-sm p-6 rounded-xl border border-humble-gray-700/50 text-center hover:border-humble-blue-500/50 transition-all duration-300">
                <div className="w-16 h-16 rounded-full bg-humble-blue-500/20 flex items-center justify-center mx-auto mb-4">
                  <Zap size={24} className="text-humble-blue-500" />
                </div>
                <h3 className="font-semibold text-white mb-3 text-lg">Always Updated</h3>
                <p className="text-white/70">Easy to update and share instantly — no more outdated PDF versions</p>
              </div>
            </div>
          </div>

          {/* What's Included Section */}
          <div className="max-w-5xl mx-auto mb-20">
            <div className="bg-humble-charcoal/50 backdrop-blur-sm rounded-2xl p-8 md:p-12 border border-humble-gray-700/50">
              <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">
                What's <span className="bg-gradient-to-r from-humble-blue-500 to-humble-purple-500 bg-clip-text text-transparent">Included</span>
              </h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-humble-pink-500/20 flex items-center justify-center mt-1 flex-shrink-0">
                    <Globe size={14} className="text-humble-pink-500" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-white mb-2">One-page personal site</h3>
                    <p className="text-white/70">Clean, focused layout that tells your professional story effectively</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-humble-purple-500/20 flex items-center justify-center mt-1 flex-shrink-0">
                    <Shield size={14} className="text-humble-purple-500" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-white mb-2">ATS-compatible layout</h3>
                    <p className="text-white/70">Structured to pass applicant tracking systems seamlessly</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-humble-blue-500/20 flex items-center justify-center mt-1 flex-shrink-0">
                    <Palette size={14} className="text-humble-blue-500" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-white mb-2">Tailored design and tone</h3>
                    <p className="text-white/70">Customized based on your target role and industry preferences</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-humble-pink-500/20 flex items-center justify-center mt-1 flex-shrink-0">
                    <Clock size={14} className="text-humble-pink-500" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-white mb-2">Mobile-friendly and fast-loading</h3>
                    <p className="text-white/70">Optimized for all devices with lightning-quick loading times</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* What You Provide Section */}
          <div className="max-w-4xl mx-auto mb-20">
            <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center text-white">
              What You <span className="bg-gradient-to-r from-humble-pink-500 to-humble-blue-500 bg-clip-text text-transparent">Provide</span>
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-humble-charcoal/30 backdrop-blur-sm p-6 rounded-xl border border-humble-gray-700/50">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-full bg-humble-pink-500/20 flex items-center justify-center">
                    <FileText size={20} className="text-humble-pink-500" />
                  </div>
                  <h3 className="font-semibold text-white text-xl">Content Form</h3>
                </div>
                <ul className="space-y-3 text-white/70">
                  <li className="flex items-start gap-2">
                    <Check size={16} className="text-humble-pink-500 mt-0.5 flex-shrink-0" />
                    <span>Your experience and key achievements</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check size={16} className="text-humble-pink-500 mt-0.5 flex-shrink-0" />
                    <span>Education and professional qualifications</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check size={16} className="text-humble-pink-500 mt-0.5 flex-shrink-0" />
                    <span>Contact information and location</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check size={16} className="text-humble-pink-500 mt-0.5 flex-shrink-0" />
                    <span>Target role and career aspirations</span>
                  </li>
                </ul>
              </div>
              
              <div className="bg-humble-charcoal/30 backdrop-blur-sm p-6 rounded-xl border border-humble-gray-700/50">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-full bg-humble-blue-500/20 flex items-center justify-center">
                    <Palette size={20} className="text-humble-blue-500" />
                  </div>
                  <h3 className="font-semibold text-white text-xl">Branding Form</h3>
                </div>
                <ul className="space-y-3 text-white/70">
                  <li className="flex items-start gap-2">
                    <Check size={16} className="text-humble-blue-500 mt-0.5 flex-shrink-0" />
                    <span>Design tone preferences (calm, bold, etc.)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check size={16} className="text-humble-blue-500 mt-0.5 flex-shrink-0" />
                    <span>Style guide and visual direction</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check size={16} className="text-humble-blue-500 mt-0.5 flex-shrink-0" />
                    <span>Color palette preferences</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check size={16} className="text-humble-blue-500 mt-0.5 flex-shrink-0" />
                    <span>Industry-specific considerations</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Domain & Hosting Section */}
          <div className="max-w-4xl mx-auto mb-20">
            <div className="bg-humble-charcoal/30 backdrop-blur-sm rounded-xl p-8 border border-humble-gray-700/50">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 rounded-full bg-humble-purple-500/20 flex items-center justify-center">
                  <Globe size={24} className="text-humble-purple-500" />
                </div>
                <h2 className="text-2xl md:text-3xl font-bold text-white">
                  Domain & <span className="bg-gradient-to-r from-humble-purple-500 to-humble-blue-500 bg-clip-text text-transparent">Hosting</span>
                </h2>
              </div>
              
              <div className="space-y-4 text-white/80 mb-6">
                <div className="flex items-start gap-2">
                  <Check size={16} className="text-humble-purple-500 mt-0.5 flex-shrink-0" />
                  <span>Not included in the base package</span>
                </div>
                <div className="flex items-start gap-2">
                  <Check size={16} className="text-humble-purple-500 mt-0.5 flex-shrink-0" />
                  <span>Usually costs €10–€20/year for a custom domain</span>
                </div>
                <div className="flex items-start gap-2">
                  <Check size={16} className="text-humble-purple-500 mt-0.5 flex-shrink-0" />
                  <span>Free options may be possible — <Link to="/inquiry" className="text-humble-pink-500 hover:text-humble-pink-400 transition-colors underline">contact me for advice</Link></span>
                </div>
                <div className="flex items-start gap-2">
                  <Check size={16} className="text-humble-purple-500 mt-0.5 flex-shrink-0" />
                  <span>I will set this up for you, no problem</span>
                </div>
              </div>

              <Collapsible>
                <CollapsibleTrigger className="flex items-center gap-2 text-humble-pink-500 hover:text-humble-pink-400 transition-colors font-medium">
                  <span>Learn more about domain names & hosting</span>
                  <ChevronDown size={16} className="transition-transform group-data-[state=open]:rotate-180" />
                </CollapsibleTrigger>
                <CollapsibleContent className="mt-4 space-y-4 text-white/70">
                  <p className="text-white/90 font-medium">
                    To get your personal website online — and keep it online — you'll need two things:
                  </p>
                  
                  <div className="space-y-4">
                    <div>
                      <h4 className="text-white font-semibold mb-2">• A domain name</h4>
                      <p>This is your web address, like yourname.com. It's what people type to find your site.</p>
                    </div>
                    
                    <div>
                      <h4 className="text-white font-semibold mb-2">• Hosting</h4>
                      <p>This is the service that stores your site and makes it accessible 24/7.</p>
                    </div>
                  </div>
                  
                  <p className="pt-2 border-t border-humble-gray-700/50">
                    These are not included in the base package, but I'll help you choose the right setup and set it up for you. Most paid options cost around €10–€20 per year, and there may also be free solutions available.
                  </p>
                </CollapsibleContent>
              </Collapsible>
            </div>
          </div>

          {/* About/Trust Section */}
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
                    data-gtm="digital-cv-about-link"
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

          {/* Footer CTA */}
          <div className="max-w-4xl mx-auto text-center">
            <div className="bg-gradient-to-br from-humble-pink-500/10 to-humble-purple-500/10 backdrop-blur-sm rounded-2xl p-8 md:p-12 border border-humble-pink-500/20">
              <h2 className="text-2xl md:text-3xl font-bold mb-4 text-white">
                Ready to Stand Out?
              </h2>
              
              <p className="text-white/70 mb-8 text-lg">
                Get a professional Digital CV that works as hard as you do.
              </p>
              
              <Link 
                to="/start-digital-cv"
                className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-gradient-to-r from-humble-pink-500 via-humble-purple-500 to-humble-blue-500 text-white font-medium hover:from-humble-pink-600 hover:via-humble-purple-600 hover:to-humble-blue-600 transition-all duration-300 text-lg hover:scale-105"
                data-gtm="digital-cv-footer-cta"
              >
                Start Your Digital CV
                <ArrowRight size={20} />
              </Link>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default DigitalCV;
