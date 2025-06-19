
import React from 'react';
import { Globe, Shield, Palette, Clock } from 'lucide-react';

const WhatsIncludedSection = () => {
  return (
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
  );
};

export default WhatsIncludedSection;
