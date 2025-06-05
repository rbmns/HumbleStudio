
import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const BrandDiscoveryForm = () => {
  return (
    <div className="min-h-screen bg-humble-navy">
      <Navbar />
      <div className="container mx-auto px-4 md:px-6 py-32">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-8">
            <h1 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Brand Discovery Form
            </h1>
            <p className="text-white/80 text-lg">
              Help us understand your vision so we can create the perfect website for you.
            </p>
          </div>
          
          <div className="bg-humble-charcoal/50 backdrop-blur-sm border border-humble-gray-700/50 rounded-xl p-6 md:p-8">
            <iframe
              data-tally-src="https://tally.so/embed/nrbjqX?alignLeft=1&hideTitle=1&transparentBackground=1&dynamicHeight=1"
              loading="lazy"
              width="100%"
              height="600"
              frameBorder="0"
              marginHeight={0}
              marginWidth={0}
              title="Brand Discovery Form"
              className="rounded-lg"
            ></iframe>
            <script>
              {`var d=document,w="https://tally.so/widgets/embed.js",v=function(){"undefined"!=typeof Tally?Tally.loadEmbeds():d.querySelectorAll("iframe[data-tally-src]:not([src])").forEach((function(e){e.src=e.dataset.tallySrc}))};if("undefined"!=typeof Tally)v();else if(d.querySelector('script[src="'+w+'"]')==null){var s=d.createElement("script");s.src=w,s.onload=v,s.onerror=v,d.head.appendChild(s);}`}
            </script>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default BrandDiscoveryForm;
