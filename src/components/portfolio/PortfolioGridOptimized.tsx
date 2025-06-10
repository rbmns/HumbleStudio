
import React, { useState, useEffect, useMemo, useCallback } from 'react';
import { supabase } from '@/integrations/supabase/client';
import PortfolioCard from './PortfolioCard';

interface PortfolioProject {
  id: string;
  title: string;
  description: string;
  categories: string[];
  link?: string;
  is_featured: boolean;
  is_coming_soon: boolean;
  technologies: string[];
  build_time?: string;
  media: PortfolioMedia[];
}

interface PortfolioMedia {
  id: string;
  media_url: string;
  alt_text?: string;
  is_primary: boolean;
  media_type: string;
  display_order: number;
}

const PortfolioGridOptimized: React.FC = () => {
  const [projects, setProjects] = useState<PortfolioProject[]>([]);
  const [loading, setLoading] = useState(true);

  const fetchProjects = useCallback(async () => {
    try {
      const { data: projectsData, error: projectsError } = await supabase
        .from('portfolio_projects')
        .select('*')
        .order('created_at', { ascending: false });

      if (projectsError) {
        console.error('Error fetching projects:', projectsError);
        return;
      }

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
        categories: project.category ? 
          (Array.isArray(project.category) ? project.category : [project.category]) : 
          [],
        link: project.link || undefined,
        is_featured: project.is_featured || false,
        is_coming_soon: project.is_coming_soon || false,
        build_time: project.build_time || undefined,
        technologies: toStringArray(project.technologies),
        media: mediaData?.filter(media => media.project_id === project.id).map(media => ({
          id: media.id,
          media_url: media.media_url,
          alt_text: media.alt_text || undefined,
          is_primary: media.is_primary || false,
          media_type: media.media_type,
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

  const featuredProjects = useMemo(() => {
    return projects.filter(project => project.is_featured);
  }, [projects]);

  const regularProjects = useMemo(() => {
    return projects.filter(project => !project.is_featured);
  }, [projects]);

  const handleProjectClick = useCallback((project: PortfolioProject) => {
    console.log('Project clicked:', project.title);
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
      
      {projects.length > 0 ? (
        <div className="space-y-12">
          {/* Featured Projects */}
          {featuredProjects.length > 0 && (
            <div className="flex justify-center">
              <div className="w-full max-w-4xl space-y-8">
                {featuredProjects.map((project) => (
                  <div key={project.id} className="mx-auto">
                    <PortfolioCard
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
                <PortfolioCard
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
          <p>No projects found.</p>
        </div>
      )}
    </div>
  );
};

export default PortfolioGridOptimized;
