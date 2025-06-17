import React from 'react';
const About = () => {
  return <section id="about" className="section-padding relative bg-humble-charcoal/50 backdrop-blur-sm">
      <div className="container mx-auto px-4 md:px-6">
        <h2 className="section-title text-center">About Humble Studio</h2>
        
        <div className="max-w-3xl mx-auto mt-12">
          <div>
            <h3 className="text-2xl font-semibold mb-4 text-center">I'm <span className="bg-gradient-to-r from-humble-pink-500 to-humble-purple-500 bg-clip-text text-transparent">Rosie</span> — the face behind HumbleStudio.</h3>
            <p className="text-white/80 mb-6 leading-relaxed text-base sm:text-lg text-center">After 10+ years working as a producer building digital products with top-tier global designers, developers, and creatives, I’ve learned what tasteful, high-quality output truly means. 
I know how to recognize a team’s strengths, identify where support is needed, and drive projects to achieve the best results while maintaining a clear creative vision. 

Now, with AI as my sidekick, I’ve flipped the script — offering beautiful, fast websites for small businesses, without the big agency price tag.</p>
            
            <div className="w-full h-[2px] bg-gradient-to-r from-humble-pink-500 via-humble-purple-500 to-humble-blue-500 my-8 opacity-30"></div>
            
            <p className="text-white/80 leading-relaxed mb-8 text-center text-lg sm:text-xl font-light">At HumbleStudio.ai, I combine that eye for quality with daily knowledge of AI tools. I use automation to move fast — and bring in humans where it's needed.</p>
            
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mt-10">
              <div className="bg-humble-charcoal/50 backdrop-blur-sm p-6 rounded-xl border border-humble-gray-700/50 hover:border-humble-pink-500/50 transition-all duration-300 text-center">
                <div className="w-12 h-12 rounded-full bg-humble-pink-500/20 flex items-center justify-center mx-auto mb-4">
                  <span className="text-humble-pink-500 font-bold text-xl">10+</span>
                </div>
                <h4 className="font-medium text-white mb-2">Years Experience</h4>
                <p className="text-white/60 text-sm sm:text-base">Building digital products for global teams</p>
              </div>
              
              <div className="bg-humble-charcoal/50 backdrop-blur-sm p-6 rounded-xl border border-humble-gray-700/50 hover:border-humble-purple-500/50 transition-all duration-300 text-center">
                <div className="w-12 h-12 rounded-full bg-humble-purple-500/20 flex items-center justify-center mx-auto mb-4">
                  <span className="text-humble-purple-500 font-bold text-xl">50+</span>
                </div>
                <h4 className="font-medium text-white mb-2">Happy Clients</h4>
                <p className="text-white/60 text-sm sm:text-base">Delivering exceptional customer experiences</p>
              </div>
              
              <div className="bg-humble-charcoal/50 backdrop-blur-sm p-6 rounded-xl border border-humble-gray-700/50 hover:border-humble-blue-500/50 transition-all duration-300 text-center">
                <div className="w-12 h-12 rounded-full bg-humble-blue-500/20 flex items-center justify-center mx-auto mb-4">
                  <span className="text-humble-blue-500 font-bold text-xl">100+</span>
                </div>
                <h4 className="font-medium text-white mb-2">Websites Launched</h4>
                <p className="text-white/60 text-sm sm:text-base">From simple landing pages to complex platforms</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>;
};
export default About;