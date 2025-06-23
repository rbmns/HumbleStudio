
import React from 'react';
import { ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import StarBackground from '../components/StarBackground';

const DigitalBusinessCardIntake = () => {
  return (
    <div className="min-h-screen relative overflow-x-hidden">
      <StarBackground />
      <Navbar />
      
      <main className="pt-24 pb-16">
        <div className="container mx-auto px-4 md:px-6">
          
          {/* Header */}
          <div className="text-center mb-8">
            <Link 
              to="/website-packages"
              className="inline-flex items-center gap-2 text-humble-blue-400 hover:text-humble-blue-300 mb-6"
            >
              <ArrowLeft className="h-4 w-4" />
              Back to Packages
            </Link>
            
            <h1 className="text-3xl md:text-4xl font-bold mb-4">
              🔵 Digital Business Card - Let's Get Started!
            </h1>
            <p className="text-white/80 text-lg leading-relaxed max-w-2xl mx-auto">
              Tell us about your business and we'll create your perfect digital business card.
            </p>
          </div>

          {/* Embedded Form */}
          <div className="max-w-4xl mx-auto">
            <div className="bg-humble-charcoal/30 rounded-2xl p-6 md:p-8">
              <iframe
                data-tally-src="https://tally.so/embed/3Nv2vb?alignLeft=1&hideTitle=1&transparentBackground=1&dynamicHeight=1"
                loading="lazy"
                width="100%"
                height="800"
                frameBorder="0"
                marginHeight={0}
                marginWidth={0}
                title="Digital Business Card Intake Form"
                className="rounded-lg"
              ></iframe>
              <script>
                {`var d=document,w="https://tally.so/widgets/embed.js",v=function(){"undefined"!=typeof Tally?Tally.loadEmbeds():d.querySelectorAll("iframe[data-tally-src]:not([src])").forEach((function(e){e.src=e.dataset.tallySrc}))};if("undefined"!=typeof Tally)v();else if(d.querySelector('script[src="'+w+'"]')==null){var s=d.createElement("script");s.src=w,s.onload=v,s.onerror=v,d.head.appendChild(s);}`}
              </script>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default DigitalBusinessCardIntake;
