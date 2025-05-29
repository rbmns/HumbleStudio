
import React, { useState, useEffect } from 'react';
import { ExternalLink, Monitor, Smartphone, Play } from 'lucide-react';
import { supabase } from '@/integrations/supabase/client';

interface PortfolioProject {
  id: string;
  title: string;
  description: string;
  category: string;
  link: string | null;
  is_featured: boolean;
  is_coming_soon: boolean;
  technologies: string[];
  key_features: string[];
  portfolio_media: {
    media_type: string;
    media_url: string;
    device_type: string | null;
    is_primary: boolean;
    alt_text: string | null;
  }[];
}

const Portfolio = () => {
  const [activeCategory, setActiveCategory] = useState('all');
  const [projects, setProjects] = useState<PortfolioProject[]>([]);
  const [loading, setLoading] = useState(true);
  
  const categories = [
    { id: 'all', label: 'All Projects' },
    { id: 'web', label: 'Web Design' },
    { id: 'branding', label: 'Branding' },
    { id: 'ecommerce', label: 'E-Commerce' },
  ];

  useEffect(() => {
    fetchProjects();
  }, []);

  const fetchProjects = async () => {
    try {
      const { data, error } = await supabase
        .from('portfolio_projects')
        .select(`
          *,
          portfolio_media (
            media_type,
            media_url,
            device_type,
            is_primary,
            alt_text
          )
        `)
        .order('created_at', { ascending: false });

      if (error) throw error;

      // Transform the data to match our interface
      const transformedProjects: PortfolioProject[] = (data || []).map(project => ({
        ...project,
        technologies: Array.isArray(project.technologies) ? project.technologies : [],
        key_features: Array.isArray(project.key_features) ? project.key_features : [],
        portfolio_media: project.portfolio_media || []
      }));

      setProjects(transformedProjects);
    } catch (error) {
      console.error('Error fetching projects:', error);
    } finally {
      setLoading(false);
    }
  };
  
  const filteredProjects = activeCategory === 'all' 
    ? projects 
    : projects.filter(project => project.category === activeCategory);

  const getPrimaryImage = (project: PortfolioProject) => {
    const primaryImage = project.portfolio_media?.find(
      media => media.is_primary && media.media_type === 'image'
    );
    return primaryImage?.media_url || 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6';
  };

  if (loading) {
    return (
      <section id="portfolio" className="section-padding bg-humble-charcoal/30">
        <div className="container mx-auto px-5 sm:px-4 md:px-6">
          <div className="text-center text-white/70">Loading portfolio...</div>
        </div>
      </section>
    );
  }

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
          {filteredProjects.map((project) => (
            <div 
              key={project.id} 
              className="group bg-humble-charcoal rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <div className={`grid ${project.is_featured ? 'lg:grid-cols-2' : 'md:grid-cols-2'} gap-0`}>
                {/* Image Section */}
                <div className={`relative overflow-hidden ${project.is_featured ? 'h-80' : 'h-64'}`}>
                  <div className="absolute inset-0 bg-humble-charcoal/20 group-hover:bg-humble-charcoal/0 transition-all duration-300 z-10"></div>
                  <img 
                    src={getPrimaryImage(project)}
                    alt={project.title}
                    className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
                  />
                  {project.is_coming_soon && (
                    <div className="absolute inset-0 flex items-center justify-center bg-humble-charcoal/60 z-20">
                      <div className="bg-humble-purple-500 text-white px-4 py-2 rounded-full text-sm font-medium">
                        Coming Soon
                      </div>
                    </div>
                  )}
                  {project.is_featured && (
                    <div className="absolute top-4 left-4 bg-humble-pink-500 text-white px-3 py-1 rounded-full text-sm font-medium z-20">
                      Featured
                    </div>
                  )}
                </div>
                
                {/* Content Section */}
                <div className="p-6">
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

                  {/* Key Features */}
                  {project.key_features.length > 0 && (
                    <div className="mb-4">
                      <h4 className="text-sm font-semibold mb-2 text-humble-pink-500">Key Features</h4>
                      <ul className="space-y-1">
                        {project.key_features.slice(0, 3).map((feature, featureIndex) => (
                          <li key={featureIndex} className="text-white/70 text-sm flex items-center gap-2">
                            <div className="w-1.5 h-1.5 bg-humble-purple-500 rounded-full"></div>
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}

                  {/* Media Options */}
                  <div className="mb-4">
                    <div className="flex items-center gap-4 text-xs text-white/50">
                      {project.portfolio_media?.some(media => media.device_type === 'desktop') && (
                        <div className="flex items-center gap-1">
                          <Monitor className="h-3 w-3" />
                          <span>Desktop</span>
                        </div>
                      )}
                      {project.portfolio_media?.some(media => media.device_type === 'mobile') && (
                        <div className="flex items-center gap-1">
                          <Smartphone className="h-3 w-3" />
                          <span>Mobile</span>
                        </div>
                      )}
                      {project.portfolio_media?.some(media => media.media_type === 'video') && (
                        <div className="flex items-center gap-1">
                          <Play className="h-3 w-3" />
                          <span>Video</span>
                        </div>
                      )}
                    </div>
                  </div>
                  
                  {!project.is_coming_soon && project.link && (
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
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
