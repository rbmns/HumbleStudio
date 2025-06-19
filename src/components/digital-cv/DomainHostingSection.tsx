
import React from 'react';
import { Globe, ChevronDown } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from '@/components/ui/collapsible';

const DomainHostingSection = () => {
  return (
    <div className="max-w-4xl mx-auto mb-8">
      <div className="bg-humble-charcoal/20 backdrop-blur-sm rounded-lg p-4 border border-humble-gray-700/30">
        <div className="flex items-center gap-2 mb-3">
          <Globe size={16} className="text-humble-purple-500" />
          <span className="text-white/80 text-sm">
            * Domain & hosting not included (€10–€20/year)
          </span>
        </div>

        <Collapsible>
          <CollapsibleTrigger className="flex items-center gap-2 text-humble-pink-500 hover:text-humble-pink-400 transition-colors text-sm">
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
                Free options may be possible — <Link to="/inquiry" className="text-humble-pink-500 hover:text-humble-pink-400 transition-colors underline">contact me for advice</Link>
              </p>
            </div>
          </CollapsibleContent>
        </Collapsible>
      </div>
    </div>
  );
};

export default DomainHostingSection;
