import React, { useState, useEffect, useMemo, useCallback } from 'react';
import { supabase } from '@/integrations/supabase/client';
import FeaturedProject from './FeaturedProject';
import Lightbox from './Lightbox';

interface PortfolioProject {
  id: string;
  title: string;
  description: string;
  categories: string[];
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

const categories = [
  { id: 'all', label: 'All Projects' },
  { id: 'web', label: 'Web Design' },
  { id: 'branding', label: 'Branding' },
  { id: 'ecommerce', label: 'E-Commerce' },
];

const PortfolioGrid = React.memo(() => {
  const [activeCategory, setActiveCategory] = useState('all');
  const [projects, setProjects] = useState<PortfolioProject[]>([]);
  const [loading, setLoading] = useState(true);
  const [lightbox, setLightbox] = useState<{
    isOpen: boolean;
    projectId: string;
    currentIndex: number;
  }>({
    isOpen: false,
    projectId: '',
    currentIndex: 0
  });

  const fetchProjects = useCallback(async () => {
    try {
      console.log('Fetching projects from Supabase...');
      
      const { data: projectsData, error: projectsError } = await supabase
        .from('projects')
        .select('*')
        .order('created_at', { ascending: false });

      if (projectsError) {
        console.error('Error fetching projects:', projectsError);
        return;
      }

      // Use portfolio_media table since projects_media doesn't exist in types yet
      const { data: mediaData, error: mediaError } = await supabase
        .from('portfolio_media')
        .select('*')
        .order('display_order', { ascending: true });

      if (mediaError) {
        console.error('Error fetching media:', mediaError);
        return;
      }

      const toStringArray = (data: any): string[] => {
        if (Array.isArray(data)) {
          return data.filter(item => typeof item === 'string');
        }
        if (typeof data === 'string') {
          try {
            const parsed = JSON.parse(data);
            return Array.isArray(parsed) ? parsed.filter(item => typeof item === 'string') : [];
          } catch {
            return [];
          }
        }
        return [];
      };

      const projectsWithMedia: PortfolioProject[] = projectsData?.map(project => ({
        id: project.id,
        title: project.title || '',
        description: project.description || '',
        // Handle category field from database (singular) to categories array (plural)
        categories: project.category ? [project.category] : [],
        link: project.link || undefined,
        is_featured: project.is_featured || false,
        is_coming_soon: project.is_coming_soon || false,
        build_time: project.build_time || undefined,
        technologies: toStringArray(project.technologies),
        key_features: toStringArray(project.key_features),
        media: mediaData?.filter(media => media.project_id === project.id).map(media => ({
          id: media.id,
          media_url: media.media_url,
          alt_text: media.alt_text || undefined,
          is_primary: media.is_primary || false,
          media_type: media.media_type,
          device_type: media.device_type || undefined,
          display_order: media.display_order || 0
        })) || []
      })) || [];

      console.log('Projects with media:', projectsWithMedia);
      setProjects(projectsWithMedia);
    } catch (error) {
      console.error('Error in fetchProjects:', error);
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchProjects();
  }, [fetchProjects]);

  // Memoize filtered projects to prevent unnecessary recalculations
  const filteredProjects = useMemo(() => {
    return activeCategory === 'all' 
      ? projects 
      : projects.filter(project => project.categories.includes(activeCategory));
  }, [projects, activeCategory]);

  // Memoize featured and regular projects
  const { featuredProject, regularProjects } = useMemo(() => {
    const featured = filteredProjects.find(p => p.is_featured);
    const regular = filteredProjects.filter(p => !p.is_featured);
    return { featuredProject: featured, regularProjects: regular };
  }, [filteredProjects]);

  const openLightbox = useCallback((projectId: string, mediaIndex: number) => {
    setLightbox({
      isOpen: true,
      projectId,
      currentIndex: mediaIndex
    });
  }, []);

  const closeLightbox = useCallback(() => {
    setLightbox({
      isOpen: false,
      projectId: '',
      currentIndex: 0
    });
  }, []);

  const navigateLightbox = useCallback((direction: 'prev' | 'next') => {
    const project = projects.find(p => p.id === lightbox.projectId);
    if (!project) return;

    let newIndex = lightbox.currentIndex;
    if (direction === 'prev') {
      newIndex = newIndex > 0 ? newIndex - 1 : project.media.length - 1;
    } else {
      newIndex = newIndex < project.media.length - 1 ? newIndex + 1 : 0;
    }

    setLightbox(prev => ({ ...prev, currentIndex: newIndex }));
  }, [projects, lightbox.projectId, lightbox.currentIndex]);

  // Memoize current lightbox project
  const currentLightboxProject = useMemo(() => {
    return projects.find(p => p.id === lightbox.projectId);
  }, [projects, lightbox.projectId]);

  const handleCategoryChange = useCallback((categoryId: string) => {
    setActiveCategory(categoryId);
  }, []);

  if (loading) {
    return (
      <div className="text-center text-white py-16">
        <div className="animate-pulse">Loading portfolio...</div>
      </div>
    );
  }

  return (
    <>
      <div className="container mx-auto px-5 sm:px-4 md:px-6">
        <h2 className="section-title text-center">Portfolio</h2>
        <p className="text-center text-white/80 text-lg sm:text-xl mb-8 max-w-2xl mx-auto">
          Showcasing beautiful websites built with AI and delivered fast
        </p>
        
        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-2 md:gap-4 mb-12">
          {categories.map(category => (
            <button
              key={category.id}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                activeCategory === category.id 
                  ? 'bg-gradient-to-r from-humble-pink-500 to-humble-purple-500 text-white' 
                  : 'bg-humble-charcoal text-white/70 hover:bg-humble-charcoal/80'
              }`}
              onClick={() => handleCategoryChange(category.id)}
            >
              {category.label}
            </button>
          ))}
        </div>

        {/* Featured Project */}
        {featuredProject && (
          <FeaturedProject
            project={featuredProject}
            onImageClick={openLightbox}
          />
        )}

        {/* Note: Regular projects grid removed since ProjectCard was deleted */}
        {/* If you need regular projects, use SimplePortfolioGrid instead */}

        {filteredProjects.length === 0 && (
          <div className="text-center text-white/60 py-16">
            <p>No projects found in this category.</p>
          </div>
        )}
      </div>

      {/* Lightbox */}
      {currentLightboxProject && (
        <Lightbox
          isOpen={lightbox.isOpen}
          onClose={closeLightbox}
          media={currentLightboxProject.media}
          currentIndex={lightbox.currentIndex}
          onNavigate={navigateLightbox}
          projectTitle={currentLightboxProject.title}
        />
      )}
    </>
  );
});

PortfolioGrid.displayName = 'PortfolioGrid';

export default PortfolioGrid;
