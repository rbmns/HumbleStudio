
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

      // Map slug to project title
      let projectTitle = '';
      if (slug === 'nonnas-table') {
        projectTitle = "Nonna's Table";
      } else if (slug === 'digital-resume') {
        projectTitle = 'Digital Resume Site';
      } else {
        // Try to convert slug to title format
        projectTitle = slug.replace(/-/g, ' ').replace(/\b\w/g, l => l.toUpperCase());
      }

      console.log('Looking for project with title:', projectTitle);

      // Use projects table and get the most recent project with this title
      const { data: projectData, error: projectError } = await supabase
        .from('projects')
        .select('*')
        .eq('title', projectTitle)
        .order('created_at', { ascending: false })
        .limit(1);

      if (projectError) {
        console.error('Error fetching project:', projectError);
        setError('Failed to fetch case study data');
        setLoading(false);
        return;
      }

      if (!projectData || projectData.length === 0) {
        console.log('No project found with title:', projectTitle);
        setError('Case study not found');
        setLoading(false);
        return;
      }

      const project = projectData[0];
      console.log('Found project:', project);

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
          caption: item.alt_text, // Use alt_text as caption for now
          section: 'solution', // Default section
          display_order: item.display_order || 0
        }));
        setMedia(processedMedia);
        console.log('Processed media:', processedMedia);
      }

      // Map project data to case study format
      const processedCaseStudy: CaseStudy = {
        id: project.id,
        slug: slug,
        title: project.title || '',
        subtitle: '', // Not in projects table
        description: project.description || '',
        client_name: '', // Not in projects table
        client_location: '', // Not in projects table
        hero_image_url: fetchedMedia?.[0]?.media_url || '',
        challenge_heading: 'The Challenge',
        challenge_content: 'Understanding the unique requirements and creating a solution that meets all expectations.',
        solution_heading: 'The Solution',
        solution_content: project.description || '',
        impact_heading: 'Results & Impact',
        impact_content: 'The project delivered excellent results and exceeded expectations.',
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
