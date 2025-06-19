
import React from 'react';
import { Shield, Star, Target } from 'lucide-react';

const WhyChooseSection = () => {
  return (
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
            <Target size={24} className="text-humble-blue-500" />
          </div>
          <h3 className="font-semibold text-white mb-3 text-lg">Tailored to You</h3>
          <p className="text-white/70">Customized for your target role and career aspirations — perfectly aligned with your goals</p>
        </div>
      </div>
    </div>
  );
};

export default WhyChooseSection;
