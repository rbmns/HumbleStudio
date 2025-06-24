
import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import StarBackground from '../components/StarBackground';
import FilteredPortfolioGrid from '../components/portfolio/FilteredPortfolioGrid';

const CustomSitePage = () => {
  return (
    <div className="min-h-screen relative overflow-x-hidden">
      <StarBackground />
      <Navbar />
      
      <main className="pt-24 pb-16">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-white">
              Custom <span className="bg-gradient-to-r from-humble-purple-500 to-humble-pink-500 bg-clip-text text-transparent">Websites</span>
            </h1>
            <p className="text-xl text-white/80 max-w-3xl mx-auto">
              Fully custom websites with advanced features, multiple pages, and everything you need to stand out online.
            </p>
          </div>
          
          <FilteredPortfolioGrid 
            categoryFilter="custom_site" 
            showTitle={true}
          />
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default CustomSitePage;
