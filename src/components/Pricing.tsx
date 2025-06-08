
import React from 'react';
import { ArrowRight, Star, Sparkles } from 'lucide-react';

const Pricing = () => {
  return (
    <section className="py-16">
      <div className="container mx-auto px-4 md:px-6">
        <div className="relative bg-humble-charcoal/50 rounded-2xl overflow-hidden p-8 md:p-12">
          <div className="absolute inset-0 bg-gradient-to-br from-humble-purple-500/20 to-humble-pink-500/20 backdrop-blur-sm"></div>
          
          <div className="relative z-10 max-w-6xl mx-auto">
            {/* Header */}
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">📦 Website Packages</h2>
              <p className="text-white/80 text-lg leading-relaxed max-w-2xl mx-auto">
                Targeting small starters, creatives, and freelancers. Beautiful websites built with AI, styled by a human 💜
              </p>
            </div>

            {/* Pricing Tiers - Desktop Grid / Mobile Stack */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 mb-12">
              
              {/* Tier 1 - Starter Site */}
              <div className="relative bg-humble-charcoal/50 rounded-xl p-6 border border-humble-pink-500/30 hover:border-humble-pink-500/50 transition-all duration-300">
                {/* Limited Offer Badge */}
                <div className="absolute -top-3 left-4">
                  <div className="bg-gradient-to-r from-humble-pink-500 to-humble-purple-500 text-white text-xs font-bold px-3 py-1 rounded-full flex items-center gap-1">
                    <Sparkles className="h-3 w-3" />
                    Limited Offer
                  </div>
                </div>
                
                <div className="pt-4">
                  <h3 className="text-xl font-bold text-humble-pink-500 mb-2">🌱 Starter Site</h3>
                  <p className="text-white/70 text-sm mb-4">Perfect for freelancers, creatives & small starters</p>
                  
                  <div className="mb-6">
                    <div className="text-3xl font-bold text-humble-pink-500 mb-1">€49</div>
                    <div className="text-xs text-white/60">✨ Temporary offer</div>
                  </div>

                  <div className="space-y-3 mb-6">
                    <div className="flex items-start gap-2 text-white/80 text-sm">
                      <span className="text-humble-pink-500 mt-0.5">✓</span>
                      <span>1-page website with up to 4 sections</span>
                    </div>
                    <div className="flex items-start gap-2 text-white/80 text-sm">
                      <span className="text-humble-pink-500 mt-0.5">✓</span>
                      <span>Mobile-friendly & fast loading</span>
                    </div>
                    <div className="flex items-start gap-2 text-white/80 text-sm">
                      <span className="text-humble-pink-500 mt-0.5">✓</span>
                      <span>Call-to-action buttons (WhatsApp, Calendly, socials)</span>
                    </div>
                    <div className="flex items-start gap-2 text-white/80 text-sm">
                      <span className="text-humble-pink-500 mt-0.5">✓</span>
                      <span>External links integrated</span>
                    </div>
                    <div className="flex items-start gap-2 text-white/80 text-sm">
                      <span className="text-humble-pink-500 mt-0.5">✓</span>
                      <span>Delivered in 1–2 days</span>
                    </div>
                    <div className="flex items-start gap-2 text-white/80 text-sm">
                      <span className="text-humble-pink-500 mt-0.5">✓</span>
                      <span>Simple, clean design</span>
                    </div>
                    <div className="flex items-start gap-2 text-white/80 text-sm">
                      <span className="text-humble-pink-500 mt-0.5">✓</span>
                      <span>Built with AI, styled by a human 💜</span>
                    </div>
                  </div>

                  {/* Example Projects */}
                  <div className="bg-humble-charcoal/40 rounded-lg p-4 mb-4 border border-humble-pink-500/20">
                    <div className="text-xs text-humble-pink-300 font-medium mb-2">Examples:</div>
                    <div className="space-y-1">
                      <a 
                        href="/case-studies/digital-cv" 
                        className="block text-xs text-white/70 hover:text-humble-pink-300 transition-colors"
                      >
                        → Digital Resume Site
                      </a>
                    </div>
                  </div>

                  <div className="text-xs text-white/60 italic leading-relaxed">
                    Just getting started? This gives you everything you need to look pro online — without the overwhelm or cost.
                  </div>
                </div>
              </div>

              {/* Tier 2 - Standard Site */}
              <div className="relative bg-humble-charcoal/50 rounded-xl p-6 border border-humble-purple-500/30 hover:border-humble-purple-500/50 transition-all duration-300">
                <div className="pt-4">
                  <h3 className="text-xl font-bold text-humble-purple-500 mb-2">💼 Standard Site</h3>
                  <p className="text-white/70 text-sm mb-4">Great for small service businesses & creators</p>
                  
                  <div className="mb-6">
                    <div className="text-3xl font-bold text-humble-purple-500">From €99</div>
                  </div>

                  <div className="space-y-3 mb-6">
                    <div className="flex items-start gap-2 text-white/80 text-sm">
                      <span className="text-humble-purple-500 mt-0.5">✓</span>
                      <span>All Tier 1 features</span>
                    </div>
                    <div className="flex items-start gap-2 text-white/80 text-sm">
                      <span className="text-humble-purple-500 mt-0.5">✓</span>
                      <span>Up to 4–5 custom sections</span>
                    </div>
                    <div className="flex items-start gap-2 text-white/80 text-sm">
                      <span className="text-humble-purple-500 mt-0.5">✓</span>
                      <span>Custom layout per section</span>
                    </div>
                    <div className="flex items-start gap-2 text-white/80 text-sm">
                      <span className="text-humble-purple-500 mt-0.5">✓</span>
                      <span>Contact form integration</span>
                    </div>
                    <div className="flex items-start gap-2 text-white/80 text-sm">
                      <span className="text-humble-purple-500 mt-0.5">✓</span>
                      <span>Basic brand styling (colors, fonts)</span>
                    </div>
                    <div className="flex items-start gap-2 text-white/80 text-sm">
                      <span className="text-humble-purple-500 mt-0.5">✓</span>
                      <span>Delivered in 2–4 days</span>
                    </div>
                    <div className="flex items-start gap-2 text-white/80 text-sm">
                      <span className="text-humble-purple-500 mt-0.5">✓</span>
                      <span>Support to tweak & update your content</span>
                    </div>
                  </div>

                  <div className="text-xs text-white/60 italic leading-relaxed">
                    A more tailored site to showcase what you do — and start converting visitors into clients.
                  </div>
                </div>
              </div>

              {/* Tier 3 - Custom Site */}
              <div className="relative bg-humble-charcoal/50 rounded-xl p-6 border border-humble-blue-500/30 hover:border-humble-blue-500/50 transition-all duration-300">
                <div className="pt-4">
                  <h3 className="text-xl font-bold text-humble-blue-500 mb-2">✨ Custom Site</h3>
                  <p className="text-white/70 text-sm mb-4">For those ready to stand out</p>
                  
                  <div className="mb-6">
                    <div className="text-3xl font-bold text-humble-blue-500">€249–€500</div>
                  </div>

                  <div className="space-y-3 mb-6">
                    <div className="flex items-start gap-2 text-white/80 text-sm">
                      <span className="text-humble-blue-500 mt-0.5">✓</span>
                      <span>All Tier 2 features</span>
                    </div>
                    <div className="flex items-start gap-2 text-white/80 text-sm">
                      <span className="text-humble-blue-500 mt-0.5">✓</span>
                      <span>Fully custom layout & advanced design</span>
                    </div>
                    <div className="flex items-start gap-2 text-white/80 text-sm">
                      <span className="text-humble-blue-500 mt-0.5">✓</span>
                      <span>Features like galleries, booking tools, etc.</span>
                    </div>
                    <div className="flex items-start gap-2 text-white/80 text-sm">
                      <span className="text-humble-blue-500 mt-0.5">✓</span>
                      <span>Stronger brand identity</span>
                    </div>
                    <div className="flex items-start gap-2 text-white/80 text-sm">
                      <span className="text-humble-blue-500 mt-0.5">✓</span>
                      <span>Copywriting support</span>
                    </div>
                    <div className="flex items-start gap-2 text-white/80 text-sm">
                      <span className="text-humble-blue-500 mt-0.5">✓</span>
                      <span>Revisions + 1-on-1 support call</span>
                    </div>
                  </div>

                  {/* Example Projects */}
                  <div className="bg-humble-charcoal/40 rounded-lg p-4 mb-4 border border-humble-blue-500/20">
                    <div className="text-xs text-humble-blue-300 font-medium mb-2">Examples:</div>
                    <div className="space-y-1">
                      <a 
                        href="/case-studies/nonnas-table" 
                        className="block text-xs text-white/70 hover:text-humble-blue-300 transition-colors"
                      >
                        → Nonna's Table Restaurant
                      </a>
                    </div>
                  </div>

                  <div className="text-xs text-white/60 italic leading-relaxed">
                    You've got a vision. I'll help bring it to life online — simply and beautifully.
                  </div>
                </div>
              </div>
            </div>

            {/* Important Note */}
            <div className="bg-humble-charcoal/30 rounded-lg p-6 mb-8 border border-humble-gray-700/30">
              <div className="flex items-start gap-3">
                <span className="text-2xl">💡</span>
                <div>
                  <p className="text-white/80 text-sm leading-relaxed">
                    <strong className="text-white">Note:</strong> Prices exclude domain name & hosting (usually ±€10–20/year). I'll help you set it up — no stress.
                  </p>
                </div>
              </div>
            </div>

            {/* Footer CTA */}
            <div className="text-center pt-8 border-t border-humble-gray-700/30">
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
