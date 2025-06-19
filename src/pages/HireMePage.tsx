
import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import StarBackground from '../components/StarBackground';

const HireMePage = () => {
  return (
    <div className="min-h-screen relative overflow-x-hidden">
      <StarBackground />
      <Navbar />
      
      <main className="pt-24 pb-16">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-white">
              Get Your <span className="bg-gradient-to-r from-humble-pink-500 to-humble-purple-500 bg-clip-text text-transparent">Hire Me Page</span>
            </h1>
            
            <p className="text-xl text-white/80 mb-8">
              Start your Digital CV journey with our Hire Me Page package.
            </p>
            
            <div className="bg-humble-charcoal/50 backdrop-blur-sm rounded-2xl p-8 border border-humble-gray-700/50">
              <p className="text-white/70 text-lg">
                This page will contain the intake form and process for the Hire Me Page package.
              </p>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default HireMePage;
