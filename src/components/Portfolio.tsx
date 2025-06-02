
import React, { useState, useEffect } from 'react';
import { ChevronDown, ChevronUp, ExternalLink, X, ChevronLeft, ChevronRight, Clock } from 'lucide-react';
import { supabase } from '@/integrations/supabase/client';

interface PortfolioProject {
  id: string;
  title: string;
  description: string;
  category: string;
  link?: string;
  is_featured: boolean;
  is_coming_soon: boolean;
  technologies: string[];
  key_features: string[];
  build_time?: string;
  media: PortfolioMedia[];
}

interface PortfolioMedia {
  id: string;
  media_url: string;
  alt_text?: string;
  is_primary: boolean;
  media_type: string;
  device_type?: string;
  display_order: number;
}

const Portfolio = () => {
  const [activeCategory, setActiveCategory] = useState('all');
  const [expandedProject, setExpandedProject] = useState<string | null>(null);
  const [selectedImage, setSelectedImage] = useState<{
    url: string;
    alt: string;
    projectId: string;
    currentIndex: number;
  } | null>(null);
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
      console.log('Fetching projects from Supabase...');
      
      // Fetch projects
      const { data: projectsData, error: projectsError } = await supabase
        .from('portfolio_projects')
        .select('*')
        .order('created_at', { ascending: false });

      if (projectsError) {
        console.error('Error fetching projects:', projectsError);
        return;
      }

      console.log('Projects fetched:', projectsData);

      // Fetch media for all projects
      const { data: mediaData, error: mediaError } = await supabase
        .from('portfolio_media')
        .select('*')
        .order('display_order', { ascending: true });

      if (mediaError) {
        console.error('Error fetching media:', mediaError);
        return;
      }

      console.log('Media fetched:', mediaData);

      // Combine projects with their media
      const projectsWithMedia = projectsData?.map(project => ({
        ...project,
        media: mediaData?.filter(media => media.project_id === project.id) || []
      })) || [];

      console.log('Combined projects with media:', projectsWithMedia);
      setProjects(projectsWithMedia);
    } catch (error) {
      console.error('Error in fetchProjects:', error);
    } finally {
      setLoading(false);
    }
  };

  const filteredProjects = activeCategory === 'all' 
    ? projects 
    : projects.filter(project => project.category === activeCategory);

  const toggleProject = (projectId: string) => {
    setExpandedProject(expandedProject === projectId ? null : projectId);
  };

  const getPrimaryImage = (project: PortfolioProject) => {
    return project.media.find(img => img.is_primary) || project.media[0];
  };

  const openImageOverlay = (project: PortfolioProject, imageIndex: number = 0) => {
    if (project.is_coming_soon || !project.media[imageIndex]) return;
    
    setSelectedImage({
      url: project.media[imageIndex].media_url,
      alt: project.media[imageIndex].alt_text || project.title,
      projectId: project.id,
      currentIndex: imageIndex
    });
  };

  const navigateImage = (direction: 'prev' | 'next') => {
    if (!selectedImage) return;
    
    const project = projects.find(p => p.id === selectedImage.projectId);
    if (!project) return;
    
    let newIndex = selectedImage.currentIndex;
    
    if (direction === 'prev') {
      newIndex = newIndex > 0 ? newIndex - 1 : project.media.length - 1;
    } else {
      newIndex = newIndex < project.media.length - 1 ? newIndex + 1 : 0;
    }
    
    setSelectedImage({
      url: project.media[newIndex].media_url,
      alt: project.media[newIndex].alt_text || project.title,
      projectId: selectedImage.projectId,
      currentIndex: newIndex
    });
  };

  const closeImageOverlay = () => {
    setSelectedImage(null);
  };

  // Handle keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!selectedImage) return;
      
      if (e.key === 'Escape') {
        closeImageOverlay();
      } else if (e.key === 'ArrowLeft') {
        navigateImage('prev');
      } else if (e.key === 'ArrowRight') {
        navigateImage('next');
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [selectedImage]);

  if (loading) {
    return (
      <section id="portfolio" className="section-padding bg-humble-charcoal/30">
        <div className="container mx-auto px-5 sm:px-4 md:px-6">
          <div className="text-center text-white">Loading portfolio...</div>
        </div>
      </section>
    );
  }

  return (
    <>
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
            {filteredProjects.map((project) => {
              const primaryImage = getPrimaryImage(project);
              const imageCount = project.media.length;
              
              return (
                <div 
                  key={project.id} 
                  className="group bg-humble-charcoal rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300"
                >
                  {/* Main Project Card */}
                  <div className={`grid ${project.is_featured ? 'lg:grid-cols-2' : 'md:grid-cols-2'} gap-0`}>
                    {/* Image Section */}
                    <div className={`relative overflow-hidden ${project.is_featured ? 'h-80' : 'h-64'}`}>
                      <div className="absolute inset-0 bg-humble-charcoal/20 group-hover:bg-humble-charcoal/0 transition-all duration-300 z-10"></div>
                      {primaryImage && (
                        <img 
                          src={primaryImage.media_url}
                          alt={primaryImage.alt_text || project.title}
                          className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700 cursor-pointer"
                          onClick={() => openImageOverlay(project, 0)}
                        />
                      )}
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
                      {imageCount > 1 && !project.is_coming_soon && (
                        <div className="absolute bottom-4 right-4 bg-humble-charcoal/80 text-white px-2 py-1 rounded text-sm z-20">
                          +{imageCount - 1} more
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

                        {project.build_time && (
                          <div className="flex items-center gap-2 mb-4 text-humble-blue-400">
                            <Clock className="h-4 w-4" />
                            <span className="text-sm">Built in {project.build_time}</span>
                          </div>
                        )}
                      </div>
                      
                      <div className="flex items-center justify-between">
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
                        
                        {!project.is_coming_soon && project.key_features.length > 0 && (
                          <button
                            onClick={() => toggleProject(project.id)}
                            className="text-humble-blue-500 hover:text-humble-blue-400 font-medium flex items-center gap-2 transition-colors"
                          >
                            {expandedProject === project.id ? 'Less Details' : 'More Details'}
                            {expandedProject === project.id ? <ChevronUp className="h-4 w-4" /> : <ChevronDown className="h-4 w-4" />}
                          </button>
                        )}
                      </div>
                    </div>
                  </div>

                  {/* Expanded Content */}
                  {expandedProject === project.id && !project.is_coming_soon && (
                    <div className="border-t border-humble-gray-700/50 bg-humble-charcoal/50 animate-fade-in">
                      <div className="p-6">
                        <div className="grid md:grid-cols-2 gap-8">
                          {/* Features */}
                          <div>
                            <h4 className="text-lg font-semibold mb-4 text-humble-pink-500">Key Features</h4>
                            <ul className="space-y-2">
                              {project.key_features.map((feature, featureIndex) => (
                                <li key={featureIndex} className="text-white/80 flex items-center gap-2">
                                  <div className="w-1.5 h-1.5 bg-humble-purple-500 rounded-full"></div>
                                  {feature}
                                </li>
                              ))}
                            </ul>
                          </div>
                          
                          {/* Media Gallery */}
                          <div>
                            <h4 className="text-lg font-semibold mb-4 text-humble-blue-500">Project Gallery</h4>
                            <div className="grid grid-cols-2 gap-3">
                              {project.media.slice(0, 4).map((image, imageIndex) => (
                                <div key={imageIndex} className="relative group cursor-pointer">
                                  <img 
                                    src={image.media_url}
                                    alt={image.alt_text || project.title}
                                    className="w-full h-20 object-cover rounded-lg hover:opacity-80 transition-opacity"
                                    onClick={() => openImageOverlay(project, imageIndex)}
                                  />
                                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors rounded-lg"></div>
                                </div>
                              ))}
                            </div>
                            {project.media.length > 4 && (
                              <p className="text-white/60 text-sm mt-2">
                                +{project.media.length - 4} more images
                              </p>
                            )}
                          </div>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Image Overlay */}
      {selectedImage && (
        <div className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4">
          <div className="relative max-w-6xl max-h-full w-full">
            {/* Close button */}
            <button
              onClick={closeImageOverlay}
              className="absolute top-4 right-4 z-10 bg-white/10 hover:bg-white/20 text-white p-2 rounded-full transition-colors"
            >
              <X className="h-6 w-6" />
            </button>

            {/* Navigation buttons */}
            <button
              onClick={() => navigateImage('prev')}
              className="absolute left-4 top-1/2 -translate-y-1/2 z-10 bg-white/10 hover:bg-white/20 text-white p-3 rounded-full transition-colors"
            >
              <ChevronLeft className="h-6 w-6" />
            </button>

            <button
              onClick={() => navigateImage('next')}
              className="absolute right-4 top-1/2 -translate-y-1/2 z-10 bg-white/10 hover:bg-white/20 text-white p-3 rounded-full transition-colors"
            >
              <ChevronRight className="h-6 w-6" />
            </button>

            {/* Image */}
            <img 
              src={selectedImage.url}
              alt={selectedImage.alt}
              className="w-full h-full object-contain"
            />

            {/* Image info */}
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-white/10 text-white px-4 py-2 rounded-lg">
              <p className="text-sm">{selectedImage.alt}</p>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Portfolio;
