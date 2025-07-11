
import React, { useState, useEffect, useMemo, useCallback } from 'react';
import { supabase } from '@/integrations/supabase/client';
import PortfolioCard from './PortfolioCard';
import FeaturedProject from './FeaturedProject';

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
  key_features: string[];
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
      console.log('Fetching projects from projects table...');
      const { data: projectsData, error: projectsError } = await supabase
        .from('projects')
        .select('*')
        .order('created_at', { ascending: false });

      if (projectsError) {
        console.error('Error fetching projects:', projectsError);
        return;
      }

      console.log('Projects data received:', projectsData);

      // Fetch media from projects_media table (the correct table name)
      console.log('Fetching media from projects_media table...');
      const { data: mediaData, error: mediaError } = await supabase
        .from('projects_media')
        .select('*')
        .order('display_order', { ascending: true });

      if (mediaError) {
        console.error('Error fetching media:', mediaError);
        return;
      }

      console.log('Media data received:', mediaData);

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

      // Remove duplicates by grouping by title and keeping the most recent one
      const uniqueProjects = projectsData?.reduce((acc: any[], project: any) => {
        const existingIndex = acc.findIndex(p => p.title === project.title);
        if (existingIndex >= 0) {
          // Keep the more recent one (or the one with more data)
          if (new Date(project.created_at) > new Date(acc[existingIndex].created_at)) {
            acc[existingIndex] = project;
          }
        } else {
          acc.push(project);
        }
        return acc;
      }, []) || [];

      console.log('Unique projects after deduplication:', uniqueProjects);

      const projectsWithMedia: PortfolioProject[] = uniqueProjects.map(project => {
        const projectMedia = mediaData?.filter(media => media.project_id === project.id) || [];
        console.log(`Project ${project.title} has ${projectMedia.length} media items`);
        
        return {
          id: project.id,
          title: project.title || '',
          description: project.description || '',
          // Use categories field (which is an array) instead of category
          categories: project.categories || [],
          link: project.link || undefined,
          is_featured: project.is_featured || false,
          is_coming_soon: project.is_coming_soon || false,
          build_time: project.build_time || undefined,
          technologies: toStringArray(project.technologies),
          key_features: toStringArray(project.key_features),
          media: projectMedia.map(media => ({
            id: media.id,
            media_url: media.media_url,
            alt_text: media.alt_text || undefined,
            is_primary: media.is_primary || false,
            media_type: media.media_type || 'image',
            display_order: media.display_order || 0
          }))
        };
      });

      console.log('Final processed projects:', projectsWithMedia);
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

  const handleImageClick = useCallback((projectId: string, mediaIndex: number) => {
    console.log(`Image clicked: projectId=${projectId}, mediaIndex=${mediaIndex}`);
  }, []);

  if (loading) {
    return (
      <>
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
      </>
    );
  }

  return (
    <>
      <p className="text-center text-white/80 text-base sm:text-lg md:text-xl mb-8 max-w-2xl mx-auto">
        Showcasing beautiful websites built with AI and delivered fast
      </p>
      
      {projects.length > 0 ? (
        <div className="space-y-12">
          {/* Featured Projects */}
          {featuredProjects.length > 0 && (
            <div className="space-y-8">
              {featuredProjects.map((project) => (
                <FeaturedProject
                  key={project.id}
                  project={project}
                  onImageClick={handleImageClick}
                />
              ))}
            </div>
          )}

          {/* Regular Projects */}
          {regularProjects.length > 0 && (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
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
          <p className="text-sm mt-2">Check the console for debugging information.</p>
        </div>
      )}
    </>
  );
};

export default PortfolioGridOptimized;
