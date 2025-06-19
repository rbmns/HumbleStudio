
import React from 'react';
import { ArrowRight, Clock, Target } from 'lucide-react';
import { Link } from 'react-router-dom';

const PricingSection = () => {
  return (
    <div className="max-w-4xl mx-auto mb-12">
      <div className="bg-gradient-to-br from-humble-pink-500/10 to-humble-purple-500/10 backdrop-blur-sm rounded-2xl p-8 border border-humble-pink-500/20">
        <div className="text-center mb-8">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">
            Digital CV Package
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

        <div className="text-center">
          <Link 
            to="/hire-me-page"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-gradient-to-r from-humble-pink-500 via-humble-purple-500 to-humble-blue-500 text-white font-medium hover:from-humble-pink-600 hover:via-humble-purple-600 hover:to-humble-blue-600 transition-all duration-300 text-lg hover:scale-105"
            data-gtm="digital-cv-pricing-cta"
          >
            Get Your Digital CV
            <ArrowRight size={20} />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default PricingSection;
