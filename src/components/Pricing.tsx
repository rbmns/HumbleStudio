
import React from 'react';
import { ArrowRight } from 'lucide-react';

const Pricing = () => {
  return (
    <section className="py-16">
      <div className="container mx-auto px-4 md:px-6">
        <div className="relative bg-humble-charcoal/50 rounded-2xl overflow-hidden p-8 md:p-12">
          <div className="absolute inset-0 bg-gradient-to-br from-humble-purple-500/20 to-humble-pink-500/20 backdrop-blur-sm"></div>
          
          <div className="relative z-10 max-w-4xl mx-auto">
            {/* Header */}
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">💸 Pricing</h2>
              <h3 className="text-xl md:text-2xl text-white/90 mb-6">Beautiful websites. Built with AI. Delivered in a day.</h3>
              <p className="text-white/80 text-lg leading-relaxed">
                Whether you're just getting started or ready to grow, we've got a package for you.
              </p>
            </div>

            {/* Pricing Tiers */}
            <div className="space-y-8">
              {/* Starter Site */}
              <div className="bg-humble-charcoal/50 rounded-xl p-6 md:p-8 border border-humble-gray-700/30">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                  <div className="flex-1">
                    <h4 className="text-xl font-bold text-white mb-2">⚡ Starter Site</h4>
                    <p className="text-white/70 mb-4">Perfect for a simple one-pager with your key info, links, and contact.</p>
                    <div className="space-y-2">
                      <div className="flex items-center gap-2 text-white/80 text-sm">
                        <span className="text-humble-pink-500">✓</span>
                        1-page website
                      </div>
                      <div className="flex items-center gap-2 text-white/80 text-sm">
                        <span className="text-humble-pink-500">✓</span>
                        Mobile-friendly
                      </div>
                      <div className="flex items-center gap-2 text-white/80 text-sm">
                        <span className="text-humble-pink-500">✓</span>
                        Delivered in 1 day
                      </div>
                    </div>
                  </div>
                  <div className="text-right md:text-center md:min-w-[120px]">
                    <div className="text-2xl md:text-3xl font-bold text-humble-pink-500">€49</div>
                  </div>
                </div>
              </div>

              {/* Divider */}
              <div className="border-t border-humble-gray-700/30"></div>

              {/* Standard Site */}
              <div className="bg-humble-charcoal/50 rounded-xl p-6 md:p-8 border border-humble-gray-700/30">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                  <div className="flex-1">
                    <h4 className="text-xl font-bold text-white mb-2">💼 Standard Site</h4>
                    <p className="text-white/70 mb-4">A multi-section site to introduce your business, showcase your work, and invite bookings.</p>
                    <div className="space-y-2">
                      <div className="flex items-center gap-2 text-white/80 text-sm">
                        <span className="text-humble-purple-500">✓</span>
                        Up to 4 sections
                      </div>
                      <div className="flex items-center gap-2 text-white/80 text-sm">
                        <span className="text-humble-purple-500">✓</span>
                        Includes contact form
                      </div>
                      <div className="flex items-center gap-2 text-white/80 text-sm">
                        <span className="text-humble-purple-500">✓</span>
                        Basic styling & setup
                      </div>
                    </div>
                  </div>
                  <div className="text-right md:text-center md:min-w-[120px]">
                    <div className="text-2xl md:text-3xl font-bold text-humble-purple-500">€149</div>
                  </div>
                </div>
              </div>

              {/* Divider */}
              <div className="border-t border-humble-gray-700/30"></div>

              {/* Custom Site */}
              <div className="bg-humble-charcoal/50 rounded-xl p-6 md:p-8 border border-humble-gray-700/30">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                  <div className="flex-1">
                    <h4 className="text-xl font-bold text-white mb-2">✨ Custom Site</h4>
                    <p className="text-white/70 mb-4">Fully tailored to your brand. Ideal for creative pros, small teams, and service providers.</p>
                    <div className="space-y-2">
                      <div className="flex items-center gap-2 text-white/80 text-sm">
                        <span className="text-humble-blue-500">✓</span>
                        Custom layout
                      </div>
                      <div className="flex items-center gap-2 text-white/80 text-sm">
                        <span className="text-humble-blue-500">✓</span>
                        Advanced features (booking, galleries, etc.)
                      </div>
                      <div className="flex items-center gap-2 text-white/80 text-sm">
                        <span className="text-humble-blue-500">✓</span>
                        Brand styling & support
                      </div>
                    </div>
                  </div>
                  <div className="text-right md:text-center md:min-w-[120px]">
                    <div className="text-2xl md:text-3xl font-bold text-humble-blue-500">€250–500</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Footer */}
            <div className="text-center mt-12 pt-8 border-t border-humble-gray-700/30">
              <p className="text-white/80 text-lg mb-6">
                All sites are built with AI. Fast, clean, and optimized — just like your business.
              </p>
              <a 
                href="/inquiry"
                className="inline-flex items-center gap-2 bg-gradient-to-r from-humble-pink-500 to-humble-purple-500 text-white px-6 py-3 rounded-full font-medium text-lg hover:scale-105 transition-all duration-300"
              >
                Have something else in mind? Let's chat
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
