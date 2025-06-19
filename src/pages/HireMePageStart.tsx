
import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import StarBackground from '../components/StarBackground';

const HireMePageStart = () => {
  return (
    <div className="min-h-screen relative overflow-x-hidden">
      <StarBackground />
      <Navbar />
      
      <main className="pt-24 pb-16">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-8">
              <h1 className="text-4xl md:text-5xl font-bold mb-6 text-white">
                Get Your <span className="bg-gradient-to-r from-humble-pink-500 to-humble-purple-500 bg-clip-text text-transparent">Hire Me Page</span>
              </h1>
              
              <p className="text-xl text-white/80 mb-8">
                Fill out the form below to get started with your professional Hire Me Page.
              </p>
            </div>
            
            <div className="bg-humble-charcoal/30 rounded-2xl p-8 border border-humble-gray-700/30">
              <iframe
                data-tally-src="https://tally.so/embed/mVX1vJ?alignLeft=1&hideTitle=1&transparentBackground=1&dynamicHeight=1"
                width="100%"
                height="500"
                frameBorder="0"
                marginHeight={0}
                marginWidth={0}
                title="Hire Me Page Form"
                className="rounded-lg"
              ></iframe>
              
              <script
                dangerouslySetInnerHTML={{
                  __html: `
                    var d=document,w="https://tally.so/widgets/embed.js",v=function(){"undefined"!=typeof Tally?Tally.loadEmbeds():d.querySelectorAll("iframe[data-tally-src]:not([src])").forEach(function(e){e.src=e.dataset.tallySrc})};if("undefined"!=typeof Tally)v();else if(d.querySelector('script[src="'+w+'"]')==null){var s=d.createElement("script");s.src=w,s.onload=v,s.onerror=v,d.head.appendChild(s);}
                  `
                }}
              />
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default HireMePageStart;
