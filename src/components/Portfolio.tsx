
import React, { useState } from 'react';

const Portfolio = () => {
  const [activeCategory, setActiveCategory] = useState('all');
  
  const categories = [
    { id: 'all', label: 'All Projects' },
    { id: 'web', label: 'Web Design' },
    { id: 'branding', label: 'Branding' },
    { id: 'ecommerce', label: 'E-Commerce' },
  ];
  
  const projects = [
    {
      title: 'Digital CV',
      description: 'An interactive CV that sets you apart',
      category: 'web',
      image: 'https://res.cloudinary.com/dita7stkt/image/upload/v1747776038/hero_y59g41.png',
      link: 'https://rosiebiemans.com/',
    },
    {
      title: 'The Lineup',
      description: 'A social platform for nomads to connect locally',
      category: 'web',
      image: 'https://res.cloudinary.com/dita7stkt/image/upload/v1747775827/events_s5wzht.png',
      link: 'https://the-lineup.com/events',
    },
      {
      title: 'Coming Soon',
      description: 'New projects in the works',
      category: 'web',
      image: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6',
      link: '#',
      isComing: true,
    },
  ];
  
  const filteredProjects = activeCategory === 'all' 
    ? projects 
    : projects.filter(project => project.category === activeCategory);

  return (
    <section id="portfolio" className="section-padding bg-humble-gray-800/30">
      <div className="container mx-auto px-4 md:px-6">
        <h2 className="section-title text-center">Portfolio Preview</h2>
        <p className="text-center text-white/80 text-xl mb-8 max-w-2xl mx-auto">A glimpse into infinite possibilities</p>
        <p className="text-center text-white/70 mb-12">Check back soon for more project examples. Or have yours in here. 👀</p>
        
        <div className="flex flex-wrap justify-center gap-2 md:gap-4 mb-12">
          {categories.map(category => (
            <button
              key={category.id}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                activeCategory === category.id 
                  ? 'bg-gradient-to-r from-humble-purple-500 to-humble-pink-500 text-white' 
                  : 'bg-humble-gray-800 text-white/70 hover:bg-humble-gray-700'
              }`}
              onClick={() => setActiveCategory(category.id)}
            >
              {category.label}
            </button>
          ))}
        </div>
        
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map((project, index) => (
            <div 
              key={index} 
              className="group relative overflow-hidden rounded-lg bg-humble-gray-800 shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <div className="relative h-64 overflow-hidden">
                <div className="absolute inset-0 bg-humble-gray-900/20 group-hover:bg-humble-gray-900/0 transition-all duration-300 z-10"></div>
                <img 
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                />
                {project.isComing && (
                  <div className="absolute inset-0 flex items-center justify-center bg-humble-gray-900/60 z-20">
                    <div className="bg-humble-purple-500 text-white px-4 py-2 rounded-full text-sm font-medium">
                      Coming Soon
                    </div>
                  </div>
                )}
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                <p className="text-white/70 mb-4">{project.description}</p>
                
                {!project.isComing && (
                  <a 
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-humble-purple-500 hover:text-humble-purple-400 font-medium flex items-center gap-1 transition-colors"
                  >
                    Visit site
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
