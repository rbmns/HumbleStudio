
import React, { useState } from 'react';
import { ChevronDown, ChevronUp, ExternalLink, Monitor, Smartphone, Play } from 'lucide-react';

const Portfolio = () => {
  const [activeCategory, setActiveCategory] = useState('all');
  const [expandedProject, setExpandedProject] = useState<number | null>(null);
  
  const categories = [
    { id: 'all', label: 'All Projects' },
    { id: 'web', label: 'Web Design' },
    { id: 'branding', label: 'Branding' },
    { id: 'ecommerce', label: 'E-Commerce' },
  ];
  
  const projects = [
    {
      title: 'Shen Taxi & Tours',
      description: 'Professional taxi and tour services in Sri Lanka with comprehensive pricing and booking',
      category: 'web',
      image: '/lovable-uploads/3b4f4164-0508-45f5-93c7-643329942ec1.png',
      link: 'https://shentaxiandtours.humblestudio.ai/',
      isFeatured: true,
      technologies: ['React', 'Tailwind CSS', 'Responsive Design'],
      features: ['WhatsApp Integration', 'Service Booking', 'Gallery System', 'Contact Forms'],
      mockups: {
        desktop: '/lovable-uploads/3b4f4164-0508-45f5-93c7-643329942ec1.png',
        mobile: null, // Will need mobile screenshot
        video: null, // Will need video demo
      }
    },
    {
      title: 'Digital CV',
      description: 'An interactive CV that sets you apart',
      category: 'web',
      image: 'https://res.cloudinary.com/dita7stkt/image/upload/v1747776038/hero_y59g41.png',
      link: 'https://rosiebiemans.com/',
      technologies: ['React', 'Animation', 'Interactive Design'],
      features: ['Animated Sections', 'Download PDF', 'Contact Integration'],
      mockups: {
        desktop: 'https://res.cloudinary.com/dita7stkt/image/upload/v1747776038/hero_y59g41.png',
        mobile: null,
        video: null,
      }
    },
    {
      title: 'The Lineup',
      description: 'A social platform for nomads to connect locally',
      category: 'web',
      image: 'https://res.cloudinary.com/dita7stkt/image/upload/v1747775827/events_s5wzht.png',
      link: 'https://the-lineup.com/events',
      technologies: ['React', 'Social Features', 'Event Management'],
      features: ['Event Creation', 'User Profiles', 'Location-based Matching'],
      mockups: {
        desktop: 'https://res.cloudinary.com/dita7stkt/image/upload/v1747775827/events_s5wzht.png',
        mobile: null,
        video: null,
      }
    },
    {
      title: 'Coming Soon',
      description: 'New projects in the works',
      category: 'web',
      image: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6',
      link: '#',
      isComing: true,
      technologies: [],
      features: [],
      mockups: { desktop: null, mobile: null, video: null }
    },
  ];
  
  const filteredProjects = activeCategory === 'all' 
    ? projects 
    : projects.filter(project => project.category === activeCategory);

  const toggleProject = (index: number) => {
    setExpandedProject(expandedProject === index ? null : index);
  };

  return (
    <section id="portfolio" className="section-padding bg-humble-charcoal/30">
      <div className="container mx-auto px-5 sm:px-4 md:px-6">
        <h2 className="section-title text-center">Portfolio Preview</h2>
        <p className="text-center text-white/80 text-lg sm:text-xl mb-8 max-w-2xl mx-auto">A glimpse into infinite possibilities</p>
        <p className="text-center text-white/70 text-base sm:text-lg mb-12">Check back soon for more project examples. Or have yours in here. 👀</p>
        
        <div className="flex flex-wrap justify-center gap-2 md:gap-4 mb-12">
          {categories.map(category => (
            <button
              key={category.id}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                activeCategory === category.id 
                  ? 'bg-gradient-to-r from-humble-pink-500 to-humble-purple-500 text-white' 
                  : 'bg-humble-charcoal text-white/70 hover:bg-humble-charcoal/80'
              }`}
              onClick={() => setActiveCategory(category.id)}
            >
              {category.label}
            </button>
          ))}
        </div>
        
        <div className="space-y-6">
          {filteredProjects.map((project, index) => (
            <div 
              key={index} 
              className="group bg-humble-charcoal rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300"
            >
              {/* Main Project Card */}
              <div className={`grid ${project.isFeatured ? 'lg:grid-cols-2' : 'md:grid-cols-2'} gap-0`}>
                {/* Image Section */}
                <div className={`relative overflow-hidden ${project.isFeatured ? 'h-80' : 'h-64'}`}>
                  <div className="absolute inset-0 bg-humble-charcoal/20 group-hover:bg-humble-charcoal/0 transition-all duration-300 z-10"></div>
                  <img 
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
                  />
                  {project.isComing && (
                    <div className="absolute inset-0 flex items-center justify-center bg-humble-charcoal/60 z-20">
                      <div className="bg-humble-purple-500 text-white px-4 py-2 rounded-full text-sm font-medium">
                        Coming Soon
                      </div>
                    </div>
                  )}
                  {project.isFeatured && (
                    <div className="absolute top-4 left-4 bg-humble-pink-500 text-white px-3 py-1 rounded-full text-sm font-medium z-20">
                      Featured
                    </div>
                  )}
                </div>
                
                {/* Content Section */}
                <div className="p-6 flex flex-col justify-between">
                  <div>
                    <h3 className="text-xl font-semibold mb-3 text-white">{project.title}</h3>
                    <p className="text-white/70 mb-4 text-base leading-relaxed">{project.description}</p>
                    
                    {project.technologies.length > 0 && (
                      <div className="flex flex-wrap gap-2 mb-4">
                        {project.technologies.map((tech, techIndex) => (
                          <span 
                            key={techIndex}
                            className="text-xs px-3 py-1 bg-humble-purple-500/20 text-humble-purple-300 rounded-full"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    )}
                  </div>
                  
                  <div className="flex items-center justify-between">
                    {!project.isComing && (
                      <a 
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-humble-pink-500 hover:text-humble-pink-400 font-medium flex items-center gap-2 transition-colors"
                      >
                        Visit Site
                        <ExternalLink className="h-4 w-4" />
                      </a>
                    )}
                    
                    {!project.isComing && project.features.length > 0 && (
                      <button
                        onClick={() => toggleProject(index)}
                        className="text-humble-blue-500 hover:text-humble-blue-400 font-medium flex items-center gap-2 transition-colors"
                      >
                        {expandedProject === index ? 'Less Details' : 'More Details'}
                        {expandedProject === index ? <ChevronUp className="h-4 w-4" /> : <ChevronDown className="h-4 w-4" />}
                      </button>
                    )}
                  </div>
                </div>
              </div>

              {/* Expanded Content */}
              {expandedProject === index && !project.isComing && (
                <div className="border-t border-humble-gray-700/50 bg-humble-charcoal/50 animate-fade-in">
                  <div className="p-6">
                    <div className="grid md:grid-cols-2 gap-8">
                      {/* Features */}
                      <div>
                        <h4 className="text-lg font-semibold mb-4 text-humble-pink-500">Key Features</h4>
                        <ul className="space-y-2">
                          {project.features.map((feature, featureIndex) => (
                            <li key={featureIndex} className="text-white/80 flex items-center gap-2">
                              <div className="w-1.5 h-1.5 bg-humble-purple-500 rounded-full"></div>
                              {feature}
                            </li>
                          ))}
                        </ul>
                      </div>
                      
                      {/* Mockups Preview */}
                      <div>
                        <h4 className="text-lg font-semibold mb-4 text-humble-blue-500">View Options</h4>
                        <div className="space-y-3">
                          {project.mockups.desktop && (
                            <div className="flex items-center gap-3 text-white/70">
                              <Monitor className="h-5 w-5 text-humble-blue-400" />
                              <span>Desktop View Available</span>
                            </div>
                          )}
                          <div className="flex items-center gap-3 text-white/50">
                            <Smartphone className="h-5 w-5" />
                            <span>Mobile View - Coming Soon</span>
                          </div>
                          <div className="flex items-center gap-3 text-white/50">
                            <Play className="h-5 w-5" />
                            <span>Interactive Demo - Coming Soon</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
