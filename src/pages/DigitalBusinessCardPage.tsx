
import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import StarBackground from '../components/StarBackground';
import FilteredPortfolioGrid from '../components/portfolio/FilteredPortfolioGrid';

const DigitalBusinessCardPage = () => {
  return (
    <div className="min-h-screen relative overflow-x-hidden">
      <StarBackground />
      <Navbar />
      
      <main className="pt-24 pb-16">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-white">
              Digital <span className="bg-gradient-to-r from-humble-blue-500 to-humble-purple-500 bg-clip-text text-transparent">Business Cards</span>
            </h1>
            <p className="text-xl text-white/80 max-w-3xl mx-auto">
              Professional one-page sites that showcase your services, personality, and make it easy for clients to book you.
            </p>
          </div>
          
          <FilteredPortfolioGrid 
            categoryFilter="digital_business_card" 
            showTitle={true}
          />
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default DigitalBusinessCardPage;
