
import React from 'react';

const FreeOffer = () => {
  return (
    <section className="py-16">
      <div className="container mx-auto px-4 md:px-6">
        <div className="relative bg-humble-gray-800/50 rounded-2xl overflow-hidden p-8 md:p-12">
          <div className="absolute inset-0 bg-gradient-to-br from-humble-purple-600/20 to-humble-pink-600/20 backdrop-blur-sm"></div>
          
          <div className="relative z-10 max-w-3xl mx-auto text-center">
            <span className="inline-block bg-gradient-to-r from-humble-purple-500 to-humble-pink-500 text-white px-4 py-1 rounded-full text-sm font-medium mb-6">Limited Time Offer</span>
            
            <h2 className="text-3xl md:text-4xl font-bold mb-6">I'm offering free websites to early clients. Want in?</h2>
            
            <p className="text-white/80 text-lg mb-8 leading-relaxed">
              While I build my portfolio, I'm offering fully functional websites — for free — to a limited number of small businesses.
              If you've been meaning to get online, this is your sign.
            </p>
            
            <div className="grid gap-6 sm:grid-cols-3 text-center mb-8">
              <div className="bg-humble-gray-900/50 rounded-lg p-4">
                <div className="text-3xl font-bold text-humble-purple-500 mb-2">5</div>
                <div className="text-white/70">Spots Available</div>
              </div>
              <div className="bg-humble-gray-900/50 rounded-lg p-4">
                <div className="text-3xl font-bold text-humble-pink-500 mb-2">24hr</div>
                <div className="text-white/70">Turnaround Time</div>
              </div>
              <div className="bg-humble-gray-900/50 rounded-lg p-4">
                <div className="text-3xl font-bold text-humble-yellow-400 mb-2">100%</div>
                <div className="text-white/70">Satisfaction</div>
              </div>
            </div>
            
            <a 
              href="https://form.typeform.com/to/iwNqCI7O"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-3 rounded-full button-gradient text-white font-medium text-lg hover:scale-105 transition-all duration-300 inline-flex items-center justify-center"
            >
              Claim Your Spot
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FreeOffer;
