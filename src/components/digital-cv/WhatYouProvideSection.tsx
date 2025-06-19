
import React from 'react';
import { FileText, Palette, Check } from 'lucide-react';

const WhatYouProvideSection = () => {
  return (
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
  );
};

export default WhatYouProvideSection;
