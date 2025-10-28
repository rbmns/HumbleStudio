
import { useEffect, useState, useCallback } from "react";
import { supabase } from "@/integrations/supabase/client";

export interface CaseStudy {
  id: string;
  slug: string;
  title: string;
  subtitle?: string;
  description?: string;
  client_name?: string;
  client_location?: string;
  hero_image_url?: string;
  challenge_heading: string;
  challenge_content?: string;
  solution_heading: string;
  solution_content?: string;
  impact_heading: string;
  impact_content?: string;
  key_features: string[];
  technologies: string[];
  project_duration?: string;
  cta_heading?: string;
  cta_description?: string;
  cta_button_text: string;
  live_site_url?: string;
}

export interface CaseStudyMedia {
  id: string;
  media_url: string;
  alt_text?: string;
  caption?: string;
  section?: string;
  display_order: number;
}

export function useCaseStudy(slug?: string) {
  const [caseStudy, setCaseStudy] = useState<CaseStudy | null>(null);
  const [media, setMedia] = useState<CaseStudyMedia[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const fetchCaseStudy = useCallback(async () => {
    if (!slug) {
      setError('No slug provided');
      setLoading(false);
      return;
    }

    try {
      console.log('Fetching case study for slug:', slug);

      // Handle the surf instructor case study specially
      if (slug === 'surf-instructor') {
        // Fetch project directly by slug
        const { data: projectData, error: projectError } = await supabase
          .from('projects')
          .select('*')
          .eq('slug', 'surf-instructor')
          .single();

        if (projectError || !projectData) {
          console.error('Error fetching surf instructor project:', projectError);
          setError('Surf instructor case study not found');
          setLoading(false);
          return;
        }

        // Check if project is coming soon
        if (projectData.is_coming_soon) {
          setError('This case study is coming soon');
          setLoading(false);
          return;
        }

        // Fetch media from projects_media table
        const { data: fetchedMedia, error: mediaError } = await supabase
          .from('projects_media')
          .select('*')
          .eq('project_id', projectData.id)
          .order('display_order', { ascending: true });
        
        if (!mediaError && fetchedMedia) {
          const processedMedia = fetchedMedia.map(item => ({
            id: item.id,
            media_url: item.media_url,
            alt_text: item.alt_text,
            caption: item.alt_text,
            section: 'solution',
            display_order: item.display_order || 0
          }));
          setMedia(processedMedia);
        }

        // Map project data to case study format for surf instructor
        const processedCaseStudy: CaseStudy = {
          id: projectData.id,
          slug: projectData.slug || slug,
          title: projectData.title || '',
          subtitle: 'Surf Instructor & Freelancer',
          description: projectData.description || '',
          client_name: 'Surf Coach E.',
          client_location: 'Spain',
          hero_image_url: projectData.featured_image || projectData.main_image,
          challenge_heading: 'The Challenge',
          challenge_content: projectData.challenge || 'Understanding the unique requirements and creating a solution that meets all expectations.',
          solution_heading: 'The Solution',
          solution_content: projectData.solution || projectData.description || '',
          impact_heading: 'Results & Impact',
          impact_content: projectData.results || 'The project delivered excellent results and exceeded expectations.',
          key_features: Array.isArray(projectData.key_features)
            ? projectData.key_features.filter((item: unknown): item is string => typeof item === "string")
            : [],
          technologies: Array.isArray(projectData.technologies)
            ? projectData.technologies.filter((item: unknown): item is string => typeof item === "string")
            : [],
          project_duration: projectData.build_time || '',
          cta_heading: 'Ready to Start Your Project?',
          cta_description: 'Let\'s create something amazing together.',
          cta_button_text: 'Get Started',
          live_site_url: projectData.link || ''
        };
        
        setCaseStudy(processedCaseStudy);
        setLoading(false);
        return;
      }

      // Fetch project directly by slug for other projects
      const { data: projectData, error: projectError } = await supabase
        .from('projects')
        .select('*')
        .eq('slug', slug)
        .order('created_at', { ascending: false })
        .limit(1);

      if (projectError) {
        console.error('Error fetching project:', projectError);
        setError('Failed to fetch case study data');
        setLoading(false);
        return;
      }

      if (!projectData || projectData.length === 0) {
        console.log('No project found with slug:', slug);
        setError('Case study not found');
        setLoading(false);
        return;
      }

      const project = projectData[0];
      console.log('Found project:', project);

      // Check if project is coming soon
      if (project.is_coming_soon) {
        setError('This case study is coming soon');
        setLoading(false);
        return;
      }

      // Fetch media from projects_media table
      const { data: fetchedMedia, error: mediaError } = await supabase
        .from('projects_media')
        .select('*')
        .eq('project_id', project.id)
        .order('display_order', { ascending: true });
      
      if (!mediaError && fetchedMedia) {
        const processedMedia = fetchedMedia.map(item => ({
          id: item.id,
          media_url: item.media_url,
          alt_text: item.alt_text,
          caption: item.alt_text,
          section: 'solution',
          display_order: item.display_order || 0
        }));
        setMedia(processedMedia);
        console.log('Processed media:', processedMedia);
      }

      // Map project data to case study format
      const processedCaseStudy: CaseStudy = {
        id: project.id,
        slug: project.slug || slug,
        title: project.title || '',
        subtitle: '',
        description: project.description || '',
        client_name: '',
        client_location: '',
        hero_image_url: project.is_featured ? project.featured_image : project.main_image,
        challenge_heading: 'The Challenge',
        challenge_content: project.challenge || 'Understanding the unique requirements and creating a solution that meets all expectations.',
        solution_heading: 'The Solution',
        solution_content: project.solution || project.description || '',
        impact_heading: 'Results & Impact',
        impact_content: project.results || 'The project delivered excellent results and exceeded expectations.',
        key_features: Array.isArray(project.key_features)
          ? project.key_features.filter((item: unknown): item is string => typeof item === "string")
          : [],
        technologies: Array.isArray(project.technologies)
          ? project.technologies.filter((item: unknown): item is string => typeof item === "string")
          : [],
        project_duration: project.build_time || '',
        cta_heading: 'Ready to Start Your Project?',
        cta_description: 'Let\'s create something amazing together.',
        cta_button_text: 'Get Started',
        live_site_url: project.link || ''
      };
      
      setCaseStudy(processedCaseStudy);
      console.log('Case study processed:', processedCaseStudy);
      setLoading(false);
    } catch (error) {
      console.error('Error in fetchCaseStudy:', error);
      setError('An unexpected error occurred');
      setLoading(false);
    }
  }, [slug]);

  useEffect(() => {
    fetchCaseStudy();
  }, [fetchCaseStudy]);

  return { caseStudy, media, loading, error };
}
