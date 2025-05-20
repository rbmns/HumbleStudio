
import React from 'react';

const About = () => {
  return (
    <section id="about" className="section-padding relative bg-humble-gray-900/50 backdrop-blur-sm">
      <div className="container mx-auto px-4 md:px-6">
        <h2 className="section-title text-center">About Humble Studio</h2>
        
        <div className="max-w-3xl mx-auto mt-12">
          <div>
            <h3 className="text-2xl font-semibold mb-4 text-center">I'm <span className="bg-gradient-to-r from-humble-blue-400 to-humble-green-500 bg-clip-text text-transparent">Rosie</span> — the face behind HumbleStudio.</h3>
            <p className="text-white/80 mb-6 leading-relaxed text-base sm:text-lg">
              After 10+ years building digital products with global teams as an agile project manager, I decided to flip the script. With AI as my sidekick, I'm now offering beautiful, fast websites for small businesses — without the big agency price tag.
            </p>
            
            <div className="w-full h-[2px] bg-gradient-to-r from-humble-blue-500 to-humble-green-500 my-8 opacity-30"></div>
            
            <p className="text-white/80 leading-relaxed mb-8 text-center text-lg sm:text-xl font-light">
              HumbleStudio is my creative playground, and you're invited.
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mt-10">
              <div className="bg-humble-gray-800/50 backdrop-blur-sm p-6 rounded-xl border border-humble-gray-700/50 hover:border-humble-blue-500/50 transition-all duration-300 text-center">
                <div className="w-12 h-12 rounded-full bg-humble-blue-500/20 flex items-center justify-center mx-auto mb-4">
                  <span className="text-humble-blue-400 font-bold text-xl">10+</span>
                </div>
                <h4 className="font-medium text-white mb-2">Years Experience</h4>
                <p className="text-white/60 text-sm sm:text-base">Building digital products for global teams</p>
              </div>
              
              <div className="bg-humble-gray-800/50 backdrop-blur-sm p-6 rounded-xl border border-humble-gray-700/50 hover:border-humble-green-500/50 transition-all duration-300 text-center">
                <div className="w-12 h-12 rounded-full bg-humble-green-500/20 flex items-center justify-center mx-auto mb-4">
                  <span className="text-humble-green-400 font-bold text-xl">50+</span>
                </div>
                <h4 className="font-medium text-white mb-2">Happy Clients</h4>
                <p className="text-white/60 text-sm sm:text-base">Delivering exceptional customer experiences</p>
              </div>
              
              <div className="bg-humble-gray-800/50 backdrop-blur-sm p-6 rounded-xl border border-humble-gray-700/50 hover:border-humble-purple-500/50 transition-all duration-300 text-center">
                <div className="w-12 h-12 rounded-full bg-humble-purple-500/20 flex items-center justify-center mx-auto mb-4">
                  <span className="text-humble-purple-400 font-bold text-xl">100+</span>
                </div>
                <h4 className="font-medium text-white mb-2">Websites Launched</h4>
                <p className="text-white/60 text-sm sm:text-base">From simple landing pages to complex platforms</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
