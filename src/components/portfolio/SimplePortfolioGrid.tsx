
import React, { useState, useEffect, useMemo, useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import { supabase } from '@/integrations/supabase/client';
import SimplePortfolioCard from './SimplePortfolioCard';
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
  key_features: string[];
  build_time?: string;
  featured_image?: string;
  main_image?: string;
  slug?: string;
  subtitle?: string;
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

const SimplePortfolioGrid = React.memo(() => {
  const [projects, setProjects] = useState<PortfolioProject[]>([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  const fetchProjects = useCallback(async () => {
    try {
      console.log('Fetching projects from projects table...');
      const { data: projectsData, error: projectsError } = await supabase
        .from('projects')
        .select('*')
        .order('is_featured', { ascending: false })
        .order('created_at', { ascending: false });

      if (projectsError) {
        console.error('Error fetching projects:', projectsError);
        return;
      }

      console.log('Projects data received:', projectsData);

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
          // Keep the more recent one
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
        // Create media array with the appropriate image
        const imageUrl = project.is_featured ? project.featured_image : project.main_image;
        const projectMedia = [];
        
        if (imageUrl) {
          projectMedia.push({
            id: `main-${project.id}`,
            media_url: imageUrl,
            alt_text: `${project.title} preview`,
            is_primary: true,
            media_type: 'image',
            device_type: 'desktop',
            display_order: 1
          });
        } else {
          // Fallback placeholder if no image
          projectMedia.push({
            id: `placeholder-${project.id}`,
            media_url: `https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop`,
            alt_text: `${project.title} preview`,
            is_primary: true,
            media_type: 'image',
            device_type: 'desktop',
            display_order: 1
          });
        }
        
        console.log(`Project ${project.title} has slug: ${project.slug}, is_featured: ${project.is_featured}, and image: ${imageUrl}`);
        
        return {
          id: project.id,
          title: project.title || '',
          description: project.description || '',
          categories: project.categories || [],
          link: project.link || undefined,
          is_featured: project.is_featured || false,
          is_coming_soon: project.is_coming_soon || false,
          build_time: project.build_time || undefined,
          technologies: toStringArray(project.technologies),
          key_features: toStringArray(project.key_features),
          featured_image: project.featured_image,
          main_image: project.main_image,
          slug: project.slug,
          subtitle: project.subtitle,
          media: projectMedia
        };
      });

      console.log('Final processed projects with slugs and featured status:', projectsWithMedia.map(p => ({ title: p.title, slug: p.slug, is_featured: p.is_featured })));
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
    console.log('handleProjectClick called for:', project.title, 'with slug:', project.slug);
    
    // Always navigate to /work/slug format
    if (project.slug) {
      console.log(`Navigating to /work/${project.slug}`);
      navigate(`/work/${project.slug}`);
    } else {
      // Fallback slug generation
      const slug = project.title.toLowerCase().replace(/\s+/g, '-');
      console.log(`Navigating to /work/${slug} (generated slug)`);
      navigate(`/work/${slug}`);
    }
  }, [navigate]);

  const handleImageClick = useCallback((projectId: string, mediaIndex: number) => {
    // Handle lightbox or image modal if needed
    console.log('Image clicked:', projectId, mediaIndex);
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
          <p>No projects found.</p>
        </div>
      )}
    </div>
  );
});

SimplePortfolioGrid.displayName = 'SimplePortfolioGrid';

export default SimplePortfolioGrid;
