
import React, { useState, useEffect, useMemo, useCallback } from 'react';
import { supabase } from '@/integrations/supabase/client';
import FeaturedProjectCard from './FeaturedProjectCard';
import GridProjectCard from './GridProjectCard';

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
    return projects.filter(project => !project.is_featured && !project.is_coming_soon).slice(0, 6);
  }, [projects]);

  if (loading) {
    return (
      <div className="space-y-16">
        {/* Skeleton for featured project */}
        <div>
          <div className="aspect-[16/9] md:aspect-[2/1] bg-gray-200 rounded-lg animate-pulse"></div>
          <div className="mt-6 md:mt-8">
            <div className="h-10 bg-gray-200 rounded w-1/2 animate-pulse"></div>
            <div className="h-6 bg-gray-200 rounded w-3/4 mt-4 animate-pulse"></div>
            <div className="h-6 bg-gray-200 rounded w-1/4 mt-4 animate-pulse"></div>
          </div>
        </div>
        {/* Skeleton for grid projects */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {[...Array(4)].map((_, i) => (
            <div key={i} className="aspect-[4/3] bg-gray-200 rounded-lg animate-pulse"></div>
          ))}
        </div>
      </div>
    );
  }

  return (
    <>
      {projects.length > 0 ? (
        <div>
          {/* Featured Project */}
          {featuredProjects.length > 0 && (
            <FeaturedProjectCard project={featuredProjects[0]} />
          )}

          {/* Regular Projects Grid */}
          {regularProjects.length > 0 && (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {regularProjects.map((project, index) => (
                <GridProjectCard key={project.id} project={project} index={index} />
              ))}
            </div>
          )}
        </div>
      ) : (
        <div className="text-center text-gray-500 py-16">
          <p>More projects coming soon.</p>
        </div>
      )}
    </>
  );
};

export default PortfolioGridOptimized;
