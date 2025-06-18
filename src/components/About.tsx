
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const About = () => {
  return (
    <section id="about" className="py-20 relative">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            
            {/* Text Content */}
            <div className="order-2 lg:order-1">
              <div className="inline-block px-4 py-2 rounded-full bg-humble-pink-500/20 text-humble-pink-400 text-sm font-medium mb-6">
                About HumbleStudio
              </div>
              
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-white leading-tight">
                Meet the Creator
              </h2>
              
              <div className="space-y-4 text-white/80 text-base md:text-lg leading-relaxed mb-8">
                <p>
                  Hi, I'm Rose — a senior producer who helps people get beautiful websites live, fast. At HumbleStudio, I use smart AI tools, no-code platforms, and a sharp eye for quality to deliver websites that feel professional and clear — often in just one day.
                </p>
                
                <p>
                  I work hands-on and bring in talented creatives from my network when a project needs extra direction or polish. The result: thoughtful, good-looking websites without the usual overhead.
                </p>
              </div>
              
              <Link 
                to="/about"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-white/10 hover:bg-white/20 text-white font-medium transition-all duration-300 backdrop-blur-sm hover:scale-105"
              >
                Read More About Me
                <ArrowRight size={16} />
              </Link>
            </div>
            
            {/* Image */}
            <div className="order-1 lg:order-2">
              <div className="relative max-w-sm mx-auto lg:max-w-none">
                <div className="absolute inset-0 bg-gradient-to-br from-humble-pink-500/20 to-humble-purple-500/20 rounded-2xl blur-xl"></div>
                <div className="relative bg-humble-charcoal/50 backdrop-blur-sm rounded-2xl p-2 border border-humble-gray-700/50">
                  <img 
                    src="/lovable-uploads/6ecd6047-6122-476e-bb89-caeb1e260203.png"
                    alt="Roosje Biemans - Founder of HumbleStudio"
                    className="w-full h-auto rounded-xl object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
