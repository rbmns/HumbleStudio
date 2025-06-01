
import React, { useState, useEffect } from 'react';
import { ChevronDown, ChevronUp, ExternalLink, Monitor, Smartphone, Play, X, ChevronLeft, ChevronRight, Clock } from 'lucide-react';
import { supabase } from '@/integrations/supabase/client';
import { useQuery } from '@tanstack/react-query';

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
  build_time: string | null;
  created_at: string;
  updated_at: string;
}

interface PortfolioMedia {
  id: string;
  project_id: string;
  media_type: string;
  media_url: string;
  device_type: string | null;
  is_primary: boolean;
  display_order: number;
  alt_text: string | null;
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

  const categories = [
    { id: 'all', label: 'All Projects' },
    { id: 'web', label: 'Web Design' },
    { id: 'branding', label: 'Branding' },
    { id: 'ecommerce', label: 'E-Commerce' },
  ];

  // Fetch projects from Supabase
  const { data: projects = [], isLoading: projectsLoading } = useQuery({
    queryKey: ['portfolio-projects'],
    queryFn: async () => {
      const { data, error } = await supabase
        .from('portfolio_projects')
        .select('*')
        .order('created_at', { ascending: false });
      
      if (error) throw error;
      return data as PortfolioProject[];
    },
  });

  // Fetch media for all projects
  const { data: mediaData = [], isLoading: mediaLoading } = useQuery({
    queryKey: ['portfolio-media'],
    queryFn: async () => {
      const { data, error } = await supabase
        .from('portfolio_media')
        .select('*')
        .order('display_order', { ascending: true });
      
      if (error) throw error;
      return data as PortfolioMedia[];
    },
  });

  const filteredProjects = activeCategory === 'all' 
    ? projects 
    : projects.filter(project => project.category === activeCategory);

  const toggleProject = (projectId: string) => {
    setExpandedProject(expandedProject === projectId ? null : projectId);
  };

  const getProjectMedia = (projectId: string) => {
    return mediaData.filter(media => media.project_id === projectId);
  };

  const getPrimaryImage = (projectId: string) => {
    const media = getProjectMedia(projectId);
    const primary = media.find(m => m.is_primary);
    return primary || media[0];
  };

  const openImageOverlay = (media: PortfolioMedia, projectId: string) => {
    const projectMedia = getProjectMedia(projectId).filter(m => m.media_type === 'image');
    const currentIndex = projectMedia.findIndex(m => m.id === media.id);
    const project = projects.find(p => p.id === projectId);
    
    setSelectedImage({
      url: media.media_url,
      alt: media.alt_text || project?.title || 'Project image',
      projectId,
      currentIndex
    });
  };

  const navigateImage = (direction: 'prev' | 'next') => {
    if (!selectedImage) return;
    
    const projectMedia = getProjectMedia(selectedImage.projectId).filter(m => m.media_type === 'image');
    let newIndex = selectedImage.currentIndex;
    
    if (direction === 'prev') {
      newIndex = newIndex > 0 ? newIndex - 1 : projectMedia.length - 1;
    } else {
      newIndex = newIndex < projectMedia.length - 1 ? newIndex + 1 : 0;
    }
    
    const newMedia = projectMedia[newIndex];
    const project = projects.find(p => p.id === selectedImage.projectId);
    
    setSelectedImage({
      url: newMedia.media_url,
      alt: newMedia.alt_text || project?.title || 'Project image',
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

  if (projectsLoading || mediaLoading) {
    return (
      <section id="portfolio" className="section-padding bg-humble-charcoal/30">
        <div className="container mx-auto px-5 sm:px-4 md:px-6">
          <div className="flex items-center justify-center h-64">
            <div className="text-white/70">Loading portfolio...</div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <>
      <section id="portfolio" className="section-padding bg-humble-charcoal/30">
        <div className="container mx-auto px-5 sm:px-4 md:px-6">
          <h2 className="section-title text-center">Selected Work</h2>
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
              const primaryImage = getPrimaryImage(project.id);
              const projectMedia = getProjectMedia(project.id);
              const imageCount = projectMedia.filter(m => m.media_type === 'image').length;
              
         
               return (
  <div
    key={project.id}
    className="grid md:grid-cols-2 gap-6 bg-humble-charcoal rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300"
  >
    {/* Left: Image */}
    <div className="relative overflow-hidden h-64 md:h-auto cursor-pointer" onClick={() => !project.is_coming_soon && openImageOverlay(primaryImage, project.id)}>
      <img
        src={primaryImage?.media_url}
        alt={primaryImage?.alt_text || project.title}
        className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-700"
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

    {/* Right: Text */}
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

      <div className="flex items-center justify-between mt-4">
        {!project.is_coming_soon && project.link && (
          <a
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className="text-humble-pink-500 hover:text-humble-pink-400 font-medium flex items-center gap-2 transition-colors"
          >
            Visit Project <ExternalLink size={16} />
          </a>
        )}
      </div>
    </div>
  </div>
);
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
