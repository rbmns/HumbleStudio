
import React from 'react';
import PortfolioGridOptimized from './portfolio/PortfolioGridOptimized';

const Portfolio = () => {
  return (
    <section id="portfolio" className="section-padding bg-humble-charcoal/30">
      <div className="container mx-auto px-4 md:px-6">
        <h2 className="section-title text-center">Latest Work</h2>
        
        <div className="max-w-4xl mx-auto">
          <PortfolioGridOptimized />
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
