
import React from 'react';

const About = () => {
  return (
    <section id="about" className="section-padding relative">
      <div className="container mx-auto px-4 md:px-6">
        <h2 className="section-title text-center">About Me</h2>
        
        <div className="grid md:grid-cols-2 gap-12 items-center mt-12">
          <div className="order-2 md:order-1">
            <h3 className="text-2xl font-semibold mb-4">Hi, I'm <span className="gradient-text">Rosie</span> — the face behind HumbleStudio.</h3>
            <p className="text-white/80 mb-6 leading-relaxed">
              After 10+ years building digital products with global teams as an agile project manager, I decided to flip the script. With AI as my sidekick, I'm now offering beautiful, fast websites for small businesses — without the big agency price tag.
            </p>
            <p className="text-white/80 leading-relaxed">
              HumbleStudio is my creative playground, and you're invited.
            </p>
            
            <div className="mt-8 flex flex-wrap gap-4">
              <div className="flex items-center gap-2">
                <div className="h-2 w-2 rounded-full bg-humble-purple-500"></div>
                <span className="text-white/70">10+ Years Experience</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="h-2 w-2 rounded-full bg-humble-pink-500"></div>
                <span className="text-white/70">50+ Happy Clients</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="h-2 w-2 rounded-full bg-humble-yellow-400"></div>
                <span className="text-white/70">100+ Websites Launched</span>
              </div>
            </div>
          </div>
          
          <div className="order-1 md:order-2 flex justify-center">
            <div className="relative">
              <div className="w-64 h-64 sm:w-80 sm:h-80 rounded-full overflow-hidden border-4 border-humble-gray-800 shadow-xl">
                <img 
                  src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158" 
                  alt="Founder of Humble Studio" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -top-4 -right-4 bg-humble-gray-800 rounded-full p-4 shadow-lg">
                <div className="w-16 h-16 rounded-full bg-gradient-to-br from-humble-purple-500 to-humble-pink-500 flex items-center justify-center text-white font-bold text-lg">
                  10+
                </div>
              </div>
              <div className="absolute -bottom-2 left-0 w-full h-4 bg-gradient-to-r from-humble-purple-500 to-humble-pink-500 blur-xl opacity-70"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
