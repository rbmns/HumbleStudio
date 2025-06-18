
import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import StarBackground from '../components/StarBackground';

const About = () => {
  return (
    <div className="min-h-screen relative overflow-x-hidden">
      <StarBackground />
      <Navbar />
      
      <main className="pt-24 pb-16">
        <div className="container mx-auto px-4 md:px-6">
          
          {/* Hero Section with Image */}
          <div className="max-w-6xl mx-auto mb-16">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              
              {/* Text Content */}
              <div className="order-2 lg:order-1">
                <h1 className="text-4xl md:text-5xl font-bold mb-6">
                  About <span className="bg-gradient-to-r from-humble-pink-500 to-humble-purple-500 bg-clip-text text-transparent">HumbleStudio</span>
                </h1>
                
                <div className="space-y-6 text-white/80 text-lg leading-relaxed">
                  <p>
                    HumbleStudio is a fast, focused web design service run by me — <span className="text-white font-medium">Roosje Biemans</span>, a senior creative producer with over a decade of experience delivering digital projects for agencies, artists, and small brands.
                  </p>
                  
                  <p>
                    I started HumbleStudio because too many people were stuck between DIY tools and expensive creative agencies. They had something to share — a story, an offer, a project — but no clear way to get it online quickly and professionally.
                  </p>
                </div>
              </div>
              
              {/* Image */}
              <div className="order-1 lg:order-2">
                <div className="relative">
                  <div className="absolute inset-0 bg-gradient-to-br from-humble-pink-500/20 to-humble-purple-500/20 rounded-2xl blur-xl"></div>
                  <div className="relative bg-humble-charcoal/50 backdrop-blur-sm rounded-2xl p-2 border border-humble-gray-700/50">
                    <img 
                      src="/lovable-uploads/6ecd6047-6122-476e-bb89-caeb1e260203.png"
                      alt="Roosje Biemans working in her studio"
                      className="w-full h-auto rounded-xl object-cover"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Approach Section */}
          <div className="max-w-4xl mx-auto mb-16">
            <div className="bg-humble-charcoal/50 backdrop-blur-sm rounded-2xl p-8 md:p-12 border border-humble-gray-700/50">
              <h2 className="text-2xl md:text-3xl font-bold mb-8 text-center">
                My <span className="bg-gradient-to-r from-humble-blue-500 to-humble-purple-500 bg-clip-text text-transparent">Approach</span>
              </h2>
              
              <div className="space-y-6 text-white/80 text-lg leading-relaxed">
                <p>
                  My approach is simple: I use AI tools, modern frameworks, and a trusted creative network to design and launch websites that feel sharp, personal, and ready for the real world. Every project is different, so I stay hands-on from first idea to final site.
                </p>
                
                <p>
                  When the work needs deeper creative direction, visuals, or copy, I bring in the right people — and make sure it all stays aligned.
                </p>
                
                <div className="w-full h-[2px] bg-gradient-to-r from-humble-pink-500 via-humble-purple-500 to-humble-blue-500 my-8 opacity-30"></div>
                
                <p className="text-xl font-medium text-center text-white">
                  HumbleStudio is AI-powered but human-led. You don't get a template — you get thoughtful production, a clear process, and a result you're proud to share.
                </p>
              </div>
            </div>
          </div>

          {/* Values Grid */}
          <div className="max-w-5xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              
              <div className="bg-humble-charcoal/50 backdrop-blur-sm p-6 rounded-xl border border-humble-gray-700/50 hover:border-humble-pink-500/50 transition-all duration-300 text-center">
                <div className="w-12 h-12 rounded-full bg-humble-pink-500/20 flex items-center justify-center mx-auto mb-4">
                  <span className="text-humble-pink-500 font-bold text-xl">⚡</span>
                </div>
                <h3 className="font-semibold text-white mb-3">Fast & Focused</h3>
                <p className="text-white/60 text-sm">
                  Quick turnaround without sacrificing quality or attention to detail
                </p>
              </div>
              
              <div className="bg-humble-charcoal/50 backdrop-blur-sm p-6 rounded-xl border border-humble-gray-700/50 hover:border-humble-purple-500/50 transition-all duration-300 text-center">
                <div className="w-12 h-12 rounded-full bg-humble-purple-500/20 flex items-center justify-center mx-auto mb-4">
                  <span className="text-humble-purple-500 font-bold text-xl">🤖</span>
                </div>
                <h3 className="font-semibold text-white mb-3">AI-Powered</h3>
                <p className="text-white/60 text-sm">
                  Leveraging cutting-edge tools while maintaining human creativity and oversight
                </p>
              </div>
              
              <div className="bg-humble-charcoal/50 backdrop-blur-sm p-6 rounded-xl border border-humble-gray-700/50 hover:border-humble-blue-500/50 transition-all duration-300 text-center">
                <div className="w-12 h-12 rounded-full bg-humble-blue-500/20 flex items-center justify-center mx-auto mb-4">
                  <span className="text-humble-blue-500 font-bold text-xl">👥</span>
                </div>
                <h3 className="font-semibold text-white mb-3">Human-Led</h3>
                <p className="text-white/60 text-sm">
                  Personal attention and creative direction from start to finish
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default About;
