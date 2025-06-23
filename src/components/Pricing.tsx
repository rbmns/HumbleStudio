
import React from 'react';
import { ArrowRight, Star, Sparkles } from 'lucide-react';
import { Link } from 'react-router-dom';

const Pricing = () => {
  return (
    <section className="py-16">
      <div className="container mx-auto px-4 md:px-6">
        <div className="relative bg-humble-charcoal/50 rounded-2xl overflow-hidden p-8 md:p-12">
          <div className="absolute inset-0 bg-gradient-to-br from-humble-purple-500/20 to-humble-pink-500/20 backdrop-blur-sm"></div>
          
          <div className="relative z-10 max-w-6xl mx-auto">
            {/* Header */}
            <div className="text-center mb-8">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">📦 Website Packages</h2>
              <p className="text-white/80 text-lg leading-relaxed max-w-2xl mx-auto mb-6">
                Targeting small starters, creatives, and freelancers. Beautiful websites built with AI, styled by a human 💜
              </p>
              
              {/* Compare Packages Button */}
              <Link 
                to="/website-packages"
                className="inline-flex items-center gap-2 bg-gradient-to-r from-humble-blue-500 to-humble-purple-500 text-white px-6 py-3 rounded-full font-medium text-lg hover:scale-105 transition-all duration-300"
              >
                Compare Packages
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>

            {/* Simplified Pricing Overview - Horizontal Cards */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              
              {/* Tier 1 - Starter Site */}
              <div className="bg-humble-charcoal/30 rounded-xl p-6 border border-humble-pink-500/30 text-center">
                <div className="flex items-center justify-center gap-2 mb-3">
                  <span className="text-2xl">🌱</span>
                  <h3 className="text-lg font-bold text-humble-pink-500">Starter Site</h3>
                </div>
                <div className="text-2xl font-bold text-humble-pink-500 mb-2">€49</div>
                <p className="text-white/70 text-sm mb-4">Perfect for freelancers & creatives</p>
                <div className="text-xs text-white/60 mb-4">1-page • 4 sections • 1-2 days</div>
                <Link 
                  to="/hire-me-page/start"
                  className="inline-flex items-center gap-1 bg-gradient-to-r from-humble-pink-500 to-humble-purple-500 text-white px-4 py-2 rounded-full font-medium text-sm hover:scale-105 transition-all duration-300"
                >
                  Get Started
                  <ArrowRight className="h-3 w-3" />
                </Link>
              </div>

              {/* Tier 2 - Standard Site */}
              <div className="bg-humble-charcoal/30 rounded-xl p-6 border border-humble-purple-500/30 text-center">
                <div className="flex items-center justify-center gap-2 mb-3">
                  <span className="text-2xl">💼</span>
                  <h3 className="text-lg font-bold text-humble-purple-500">Standard Site</h3>
                </div>
                <div className="text-2xl font-bold text-humble-purple-500 mb-2">From €99</div>
                <p className="text-white/70 text-sm mb-4">Great for small businesses</p>
                <div className="text-xs text-white/60 mb-4">Multi-section • Contact forms • 2-4 days</div>
                <Link 
                  to="/digital-business-card/intake"
                  className="inline-flex items-center gap-1 bg-gradient-to-r from-humble-blue-500 to-humble-purple-500 text-white px-4 py-2 rounded-full font-medium text-sm hover:scale-105 transition-all duration-300"
                >
                  Get Started
                  <ArrowRight className="h-3 w-3" />
                </Link>
              </div>

              {/* Tier 3 - Custom Site */}
              <div className="bg-humble-charcoal/30 rounded-xl p-6 border border-humble-blue-500/30 text-center">
                <div className="flex items-center justify-center gap-2 mb-3">
                  <span className="text-2xl">✨</span>
                  <h3 className="text-lg font-bold text-humble-blue-500">Custom Site</h3>
                </div>
                <div className="text-2xl font-bold text-humble-blue-500 mb-2">€249–€500</div>
                <p className="text-white/70 text-sm mb-4">For those ready to stand out</p>
                <div className="text-xs text-white/60 mb-4">Fully custom • Advanced features</div>
                <Link 
                  to="/inquiry"
                  className="inline-flex items-center gap-1 bg-gradient-to-r from-humble-blue-500 to-humble-purple-500 text-white px-4 py-2 rounded-full font-medium text-sm hover:scale-105 transition-all duration-300"
                >
                  Get Started
                  <ArrowRight className="h-3 w-3" />
                </Link>
              </div>
            </div>

            {/* Footer CTA */}
            <div className="text-center pt-6 border-t border-humble-gray-700/30">
              <p className="text-white/80 text-lg mb-6">
                Ready to get your beautiful website online?
              </p>
              <a 
                href="/inquiry" target="_blank"
                className="inline-flex items-center gap-2 bg-gradient-to-r from-humble-pink-500 to-humble-purple-500 text-white px-6 py-3 rounded-full font-medium text-lg hover:scale-105 transition-all duration-300"
              >
                Let's chat about your project
                <ArrowRight className="h-4 w-4" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
