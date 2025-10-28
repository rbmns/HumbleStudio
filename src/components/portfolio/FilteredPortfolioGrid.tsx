import React, { useState, useEffect, useMemo, useCallback, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { supabase } from '@/integrations/supabase/client';
import SimplePortfolioCard from './SimplePortfolioCard';
import FeaturedProject from './FeaturedProject';
import { Button } from '@/components/ui/button';
import { ArrowRight, ChevronLeft, ChevronRight } from 'lucide-react';

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
  is_hire_me?: boolean;
  is_digital_business_card?: boolean;
  is_custom_site?: boolean;
  show_on_home?: boolean;
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

interface FilteredPortfolioGridProps {
  showOnHomeOnly?: boolean;
  categoryFilter?: 'hire_me' | 'digital_business_card' | 'custom_site';
  showTitle?: boolean;
}

const FilteredPortfolioGrid = React.memo(({ 
  showOnHomeOnly = false, 
  categoryFilter,
  showTitle = true 
}: FilteredPortfolioGridProps) => {
  const [projects, setProjects] = useState<PortfolioProject[]>([]);
  const [loading, setLoading] = useState(true);
  const [showLeftArrow, setShowLeftArrow] = useState(false);
  const [showRightArrow, setShowRightArrow] = useState(false);
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const navigate = useNavigate();

  const fetchProjects = useCallback(async () => {
    try {
      console.log('Fetching projects with filters:', { showOnHomeOnly, categoryFilter });
      
      let query = supabase
        .from('projects')
        .select('*')
        .order('is_featured', { ascending: false })
        .order('created_at', { ascending: false });

      // Apply filters
      if (showOnHomeOnly) {
        query = query.eq('show_on_home', true);
      }

      if (categoryFilter === 'hire_me') {
        query = query.eq('is_hire_me', true);
      } else if (categoryFilter === 'digital_business_card') {
        query = query.eq('is_digital_business_card', true);
      } else if (categoryFilter === 'custom_site') {
        query = query.eq('is_custom_site', true);
      }

      const { data: projectsData, error: projectsError } = await query;

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
          is_hire_me: project.is_hire_me || false,
          is_digital_business_card: project.is_digital_business_card || false,
          is_custom_site: project.is_custom_site || false,
          show_on_home: project.show_on_home !== false, // default to true if null
          media: projectMedia
        };
      });

      console.log('Final processed projects:', projectsWithMedia);
      setProjects(projectsWithMedia);
    } catch (error) {
      console.error('Error in fetchProjects:', error);
    } finally {
      setLoading(false);
    }
  }, [showOnHomeOnly, categoryFilter]);

  useEffect(() => {
    fetchProjects();
  }, [fetchProjects]);

  const featuredProjects = useMemo(() => {
    const featured = projects.filter(project => project.is_featured);
    return featured.sort((a, b) => {
      if (a.is_coming_soon && !b.is_coming_soon) return 1;
      if (!a.is_coming_soon && b.is_coming_soon) return -1;
      return 0;
    });
  }, [projects]);

  const regularProjects = useMemo(() => {
    const regular = projects.filter(project => !project.is_featured);
    return regular.sort((a, b) => {
      if (a.is_coming_soon && !b.is_coming_soon) return 1;
      if (!a.is_coming_soon && b.is_coming_soon) return -1;
      return 0;
    });
  }, [projects]);

  const handleProjectClick = useCallback((project: PortfolioProject) => {
    console.log('handleProjectClick called for:', project.title, 'with slug:', project.slug);
    
    if (project.slug) {
      console.log(`Navigating to /work/${project.slug}`);
      navigate(`/work/${project.slug}`);
    } else {
      const slug = project.title.toLowerCase().replace(/\s+/g, '-');
      console.log(`Navigating to /work/${slug} (generated slug)`);
      navigate(`/work/${slug}`);
    }
  }, [navigate]);

  const handleImageClick = useCallback((projectId: string, mediaIndex: number) => {
    console.log('Image clicked:', projectId, mediaIndex);
  }, []);

  const checkScrollButtons = useCallback(() => {
    if (!scrollContainerRef.current) return;
    
    const container = scrollContainerRef.current;
    const scrollLeft = container.scrollLeft;
    const maxScroll = container.scrollWidth - container.clientWidth;
    
    setShowLeftArrow(scrollLeft > 10);
    setShowRightArrow(scrollLeft < maxScroll - 10);
  }, []);

  const scroll = useCallback((direction: 'left' | 'right') => {
    if (!scrollContainerRef.current) return;
    
    const container = scrollContainerRef.current;
    const scrollAmount = 320; // Width of one card plus gap
    
    container.scrollBy({
      left: direction === 'left' ? -scrollAmount : scrollAmount,
      behavior: 'smooth'
    });
  }, []);

  useEffect(() => {
    checkScrollButtons();
    window.addEventListener('resize', checkScrollButtons);
    return () => window.removeEventListener('resize', checkScrollButtons);
  }, [checkScrollButtons, projects]);

  const getCategoryTitle = () => {
    if (categoryFilter === 'hire_me') return 'Hire Me Page Examples';
    if (categoryFilter === 'digital_business_card') return 'Digital Business Card Examples';
    if (categoryFilter === 'custom_site') return 'Custom Site Examples';
    return 'Portfolio';
  };

  if (loading) {
    return (
      <div className="container mx-auto px-4 sm:px-6">
        {showTitle && (
          <>
            <h2 className="section-title text-center">{getCategoryTitle()}</h2>
            <p className="text-center text-white/80 text-base sm:text-lg md:text-xl mb-8 max-w-2xl mx-auto">
              Showcasing beautiful websites built with AI and delivered fast
            </p>
          </>
        )}
        
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
      {showTitle && (
        <>
          <h2 className="section-title text-center">{getCategoryTitle()}</h2>
          <p className="text-center text-white/80 text-base sm:text-lg md:text-xl mb-8 max-w-2xl mx-auto">
            Showcasing beautiful websites built with AI and delivered fast
          </p>
        </>
      )}

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
            <>
              {showOnHomeOnly ? (
                // Home page: horizontal scroll with limited projects
                <div className="space-y-6">
                  <div className="relative">
                    {/* Left Arrow */}
                    {showLeftArrow && (
                      <button
                        onClick={() => scroll('left')}
                        className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-gradient-to-r from-humble-pink-500 to-humble-purple-500 hover:opacity-90 text-white p-3 rounded-full shadow-lg transition-all hidden sm:block"
                        aria-label="Scroll left"
                      >
                        <ChevronLeft className="h-5 w-5" />
                      </button>
                    )}
                    
                    {/* Scrollable Container */}
                    <div 
                      ref={scrollContainerRef}
                      onScroll={checkScrollButtons}
                      className="flex overflow-x-auto gap-4 md:gap-6 pb-4 snap-x snap-mandatory scrollbar-none"
                      style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
                    >
                      {regularProjects.slice(0, 6).map((project) => (
                        <div key={project.id} className="flex-none w-[280px] sm:w-[320px] snap-start">
                          <SimplePortfolioCard
                            project={project}
                            onClick={handleProjectClick}
                            featured={false}
                          />
                        </div>
                      ))}
                    </div>
                    
                    {/* Right Arrow */}
                    {showRightArrow && (
                      <button
                        onClick={() => scroll('right')}
                        className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-gradient-to-r from-humble-purple-500 to-humble-pink-500 hover:opacity-90 text-white p-3 rounded-full shadow-lg transition-all hidden sm:block"
                        aria-label="Scroll right"
                      >
                        <ChevronRight className="h-5 w-5" />
                      </button>
                    )}
                  </div>
                  
                  {/* View Full Portfolio Button */}
                  <div className="flex justify-center pt-4">
                    <Button
                      onClick={() => navigate('/work')}
                      size="lg"
                      className="group"
                    >
                      View Full Portfolio
                      <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </Button>
                  </div>
                </div>
              ) : (
                // Full portfolio page: grid layout
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
            </>
          )}
        </div>
      ) : (
        <div className="text-center text-white/60 py-16">
          <p>No projects found for this category.</p>
        </div>
      )}
    </div>
  );
});

FilteredPortfolioGrid.displayName = 'FilteredPortfolioGrid';

export default FilteredPortfolioGrid;
