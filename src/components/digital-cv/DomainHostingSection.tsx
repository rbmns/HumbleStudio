
import React from 'react';
import { Globe, Check, ChevronDown } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from '@/components/ui/collapsible';

const DomainHostingSection = () => {
  return (
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
  );
};

export default DomainHostingSection;
