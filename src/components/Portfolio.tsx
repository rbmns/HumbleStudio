
import React from 'react';
import FilteredPortfolioGrid from './portfolio/FilteredPortfolioGrid';

const Portfolio = () => {
  return (
    <section id="portfolio" className="section-padding bg-humble-charcoal/30">
      <FilteredPortfolioGrid showOnHomeOnly={true} />
    </section>
  );
};

export default Portfolio;
