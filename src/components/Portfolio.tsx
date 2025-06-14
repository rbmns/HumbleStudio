
import React from 'react';
import PortfolioGridOptimized from './portfolio/PortfolioGridOptimized';

const Portfolio = () => {
  return (
    <section id="portfolio" className="section-padding">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12 md:mb-20">
          <h2 className="section-title">Latest Work</h2>
          <p className="text-center text-gray-300 text-base sm:text-lg md:text-xl mt-4 max-w-2xl mx-auto">
            A selection of projects that I'm proud of.
          </p>
        </div>
        
        <PortfolioGridOptimized />
      </div>
    </section>
  );
};

export default Portfolio;
