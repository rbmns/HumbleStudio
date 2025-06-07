
import React from 'react';
import SimplePortfolioGrid from './portfolio/SimplePortfolioGrid';

const Portfolio = () => {
  return (
    <section id="portfolio" className="section-padding bg-humble-charcoal/30">
      {/* Hero Section with Restaurant Image */}
      <div className="container mx-auto px-4 sm:px-6 mb-16">
        <div className="max-w-6xl mx-auto">
          <div className="aspect-[16/10] rounded-2xl overflow-hidden shadow-2xl mb-8">
            <img
              src="/lovable-uploads/cabbeeb2-4701-40ca-8f62-75cb957be030.png"
              alt="Nonna's Table Restaurant - Authentic Italian dining experience"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 gradient-text">Featured Project</h2>
            <p className="text-white/80 text-lg max-w-2xl mx-auto">
              Nonna's Table - A beautiful Italian restaurant website showcasing authentic dining experiences
            </p>
          </div>
        </div>
      </div>
      
      <SimplePortfolioGrid />
    </section>
  );
};

export default Portfolio;
