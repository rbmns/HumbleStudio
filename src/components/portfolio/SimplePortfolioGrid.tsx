
import React, { useState, useEffect, useMemo, useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import { supabase } from '@/integrations/supabase/client';
import SimplePortfolioCard from './SimplePortfolioCard';

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

const SimplePortfolioGrid = React.memo(() => {
  const [activeCategory, setActiveCategory] = useState('all');
  const [projects, setProjects] = useState<PortfolioProject[]>([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  const fetchProjects = useCallback(async () => {
    try {
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
        // Handle both categories and category fields
        categories: project.categories ? 
          (Array.isArray(project.categories) ? project.categories : [project.categories]) : 
          [],
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

  const filteredProjects = useMemo(() => {
    return activeCategory === 'all' 
      ? projects 
      : projects.filter(project => project.categories.includes(activeCategory));
  }, [projects, activeCategory]);

  const featuredProjects = useMemo(() => {
    return filteredProjects.filter(project => project.is_featured);
  }, [filteredProjects]);

  const regularProjects = useMemo(() => {
    return filteredProjects.filter(project => !project.is_featured);
  }, [filteredProjects]);

  const handleProjectClick = useCallback((project: PortfolioProject) => {
    console.log('handleProjectClick called for:', project.title);
    
    // Check if this is Nonna's Table specifically for case study
    if (project.title === "Nonna's Table" || project.title.toLowerCase().includes("nonna")) {
      console.log('Navigating to Nonnas Table case study');
      navigate('/case-studies/nonnas-table');
    } else if (project.title === "Surf Coach E. - Surf Instructor" || project.title.toLowerCase().includes("surf")) {
      console.log('Navigating to Surf Instructor case study');
      navigate('/case-studies/surf-instructor');
    } else if (project.link && !project.is_coming_soon) {
      console.log('Opening external link:', project.link);
      window.open(project.link, '_blank');
    }
  }, [navigate]);

  const handleCategoryChange = useCallback((categoryId: string) => {
    setActiveCategory(categoryId);
  }, []);

  if (loading) {
    return (
      <div className="container mx-auto px-4 sm:px-6">
        <h2 className="section-title text-center">Portfolio</h2>
        <p className="text-center text-white/80 text-base sm:text-lg md:text-xl mb-8 max-w-2xl mx-auto">
          Showcasing beautiful websites built with AI and delivered fast
        </p>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
          {[...Array(6)].map((_, i) => (
            <div key={i} className="bg-humble-charcoal rounded-xl overflow-hidden">
              <div className="aspect-[4/3] bg-humble-charcoal/50 animate-pulse"></div>
              <div className="p-4 md:p-5 space-y-3">
                <div className="h-4 bg-humble-charcoal/50 rounded animate-pulse"></div>
                <div className="h-6 bg-humble-charcoal/50 rounded animate-pulse"></div>
                <div className="h-4 bg-humble-charcoal/50 rounded animate-pulse w-2/3"></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 sm:px-6">
      <h2 className="section-title text-center">Portfolio</h2>
      <p className="text-center text-white/80 text-base sm:text-lg md:text-xl mb-8 max-w-2xl mx-auto">
        Showcasing beautiful websites built with AI and delivered fast
      </p>
      
      <div className="flex flex-wrap justify-center gap-2 md:gap-4 mb-8 md:mb-12">
        {categories.map(category => (
          <button
            key={category.id}
            className={`px-3 py-2 md:px-4 md:py-2 rounded-full text-sm font-medium transition-all duration-300 min-h-[44px] ${
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

      {filteredProjects.length > 0 ? (
        <div className="space-y-12">
          {/* Featured Projects - Centered and Single Column */}
          {featuredProjects.length > 0 && (
            <div className="flex justify-center">
              <div className="w-full max-w-4xl space-y-8">
                {featuredProjects.map((project) => (
                  <div key={project.id} className="mx-auto">
                    <SimplePortfolioCard
                      project={project}
                      onClick={handleProjectClick}
                      featured={true}
                    />
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Regular Projects */}
          {regularProjects.length > 0 && (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
              {regularProjects.map((project) => (
                <SimplePortfolioCard
                  key={project.id}
                  project={project}
                  onClick={handleProjectClick}
                  featured={false}
                />
              ))}
            </div>
          )}
        </div>
      ) : (
        <div className="text-center text-white/60 py-16">
          <p>No projects found in this category.</p>
        </div>
      )}
    </div>
  );
});

SimplePortfolioGrid.displayName = 'SimplePortfolioGrid';

export default SimplePortfolioGrid;
