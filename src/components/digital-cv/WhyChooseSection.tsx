
import React from 'react';
import { Shield, Star, Target } from 'lucide-react';

const WhyChooseSection = () => {
  return (
    <div className="max-w-5xl mx-auto mb-20">
      <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center text-white">
        Why Choose a <span className="bg-gradient-to-r from-humble-pink-500 to-humble-blue-500 bg-clip-text text-transparent">Hire Me Page?</span>
      </h2>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="bg-humble-charcoal/30 backdrop-blur-sm p-6 rounded-xl border border-humble-gray-700/50 text-center hover:border-humble-pink-500/50 transition-all duration-300">
          <div className="w-16 h-16 rounded-full bg-humble-pink-500/20 flex items-center justify-center mx-auto mb-4">
            <Shield size={24} className="text-humble-pink-500" />
          </div>
          <h3 className="font-semibold text-white mb-3 text-lg">Professional First Impression</h3>
          <p className="text-white/70">Clean, modern design that makes you stand out from other applicants</p>
        </div>
        
        <div className="bg-humble-charcoal/30 backdrop-blur-sm p-6 rounded-xl border border-humble-gray-700/50 text-center hover:border-humble-purple-500/50 transition-all duration-300">
          <div className="w-16 h-16 rounded-full bg-humble-purple-500/20 flex items-center justify-center mx-auto mb-4">
            <Star size={24} className="text-humble-purple-500" />
          </div>
          <h3 className="font-semibold text-white mb-3 text-lg">Perfect for Job Applications</h3>
          <p className="text-white/70">Ideal for "Open to work" posts, job applications, and LinkedIn bios</p>
        </div>
        
        <div className="bg-humble-charcoal/30 backdrop-blur-sm p-6 rounded-xl border border-humble-gray-700/50 text-center hover:border-humble-blue-500/50 transition-all duration-300">
          <div className="w-16 h-16 rounded-full bg-humble-blue-500/20 flex items-center justify-center mx-auto mb-4">
            <Target size={24} className="text-humble-blue-500" />
          </div>
          <h3 className="font-semibold text-white mb-3 text-lg">Quick & Simple</h3>
          <p className="text-white/70">24-hour delivery with everything you need to showcase your skills</p>
        </div>
      </div>
    </div>
  );
};

export default WhyChooseSection;
