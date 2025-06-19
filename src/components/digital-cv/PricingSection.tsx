
import React from 'react';
import { ArrowRight, Clock, Target, Globe, ChevronDown } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from '@/components/ui/collapsible';

const PricingSection = () => {
  return (
    <div className="max-w-4xl mx-auto mb-12">
      <div className="bg-gradient-to-br from-humble-pink-500/10 to-humble-purple-500/10 backdrop-blur-sm rounded-2xl p-8 border border-humble-pink-500/20">
        <div className="text-center mb-8">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">
            Hire Me Page
          </h2>
          <div className="text-5xl font-bold text-white mb-2">€49</div>
          <p className="text-white/70 text-lg">
            A clean CV-style page for job seekers and freelancers applying for work.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-8">
          <div>
            <h3 className="text-xl font-semibold text-white mb-4">Includes:</h3>
            <ul className="space-y-2 text-white/80">
              <li className="flex items-start gap-2">
                <span className="text-humble-pink-500 mt-1">•</span>
                <span>Short intro / profile</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-humble-pink-500 mt-1">•</span>
                <span>Key skills & experience</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-humble-pink-500 mt-1">•</span>
                <span>2–3 work samples or links</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-humble-pink-500 mt-1">•</span>
                <span>Resume upload</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-humble-pink-500 mt-1">•</span>
                <span>Contact CTA</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-humble-pink-500 mt-1">•</span>
                <span>Simple styling</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-humble-pink-500 mt-1">•</span>
                <span>Mobile-optimized</span>
              </li>
            </ul>
          </div>

          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-full bg-humble-purple-500/20 flex items-center justify-center">
                <Clock size={16} className="text-humble-purple-500" />
              </div>
              <div>
                <div className="text-white font-medium">Delivery: 24h</div>
                <div className="text-white/60 text-sm">Quick turnaround</div>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-full bg-humble-blue-500/20 flex items-center justify-center">
                <Target size={16} className="text-humble-blue-500" />
              </div>
              <div>
                <div className="text-white font-medium">Perfect for:</div>
                <div className="text-white/60 text-sm">"Open to work" posts, job apps, LinkedIn bios</div>
              </div>
            </div>
          </div>
        </div>

        {/* Domain & Hosting Section */}
        <div className="mb-8">
          <div className="bg-humble-charcoal/30 backdrop-blur-sm rounded-lg p-4 border border-humble-gray-700/30">
            <div className="flex items-center gap-2 mb-3">
              <Globe size={16} className="text-humble-purple-500" />
              <span className="text-white/80 text-sm">
                * Domain & hosting not included (€10–€20/year)
              </span>
            </div>

            <Collapsible>
              <CollapsibleTrigger 
                className="flex items-center gap-2 text-humble-pink-500 hover:text-humble-pink-400 transition-colors text-sm"
                data-gtm="hire-me-page-domain-hosting-expand"
              >
                <span>Learn more about domain & hosting</span>
                <ChevronDown size={14} className="transition-transform group-data-[state=open]:rotate-180" />
              </CollapsibleTrigger>
              <CollapsibleContent className="mt-3 space-y-3 text-white/70 text-sm">
                <p className="text-white/90 font-medium">
                  To get your personal website online — and keep it online — you'll need two things:
                </p>
                
                <div className="space-y-3">
                  <div>
                    <h4 className="text-white font-semibold mb-1">• A domain name</h4>
                    <p className="text-xs">This is your web address, like yourname.com. It's what people type to find your site.</p>
                  </div>
                  
                  <div>
                    <h4 className="text-white font-semibold mb-1">• Hosting</h4>
                    <p className="text-xs">This is the service that stores your site and makes it accessible 24/7.</p>
                  </div>
                </div>
                
                <div className="pt-2 border-t border-humble-gray-700/50 space-y-2">
                  <p className="text-xs">
                    Most paid options cost around €10–€20 per year, and I'll help you choose the right setup and set it up for you.
                  </p>
                  <p className="text-xs">
                    Free options may be possible — <Link 
                      to="/inquiry" 
                      className="text-humble-pink-500 hover:text-humble-pink-400 transition-colors underline"
                      data-gtm="hire-me-page-domain-hosting-inquiry"
                    >contact me for advice</Link>
                  </p>
                </div>
              </CollapsibleContent>
            </Collapsible>
          </div>
        </div>

        <div className="text-center">
          <Link 
            to="/hire-me-page"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-gradient-to-r from-humble-pink-500 via-humble-purple-500 to-humble-blue-500 text-white font-medium hover:from-humble-pink-600 hover:via-humble-purple-600 hover:to-humble-blue-600 transition-all duration-300 text-lg hover:scale-105"
            data-gtm="hire-me-page-pricing-cta"
          >
            Get Your Hire Me Page
            <ArrowRight size={20} />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default PricingSection;
