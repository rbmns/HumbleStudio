
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
      document.title = `${slug.replace(/-/g, ' ')} | HumbleStudio`;

      const { data: caseStudyData, error: caseStudyError } = await supabase
        .from('case_studies')
        .select('*')
        .eq('slug', slug)
        .eq('is_published', true)
        .maybeSingle();

      if (caseStudyError) {
        setError('Failed to fetch case study data');
        setLoading(false);
        return;
      }

      if (!caseStudyData) {
        setError('Case study not found');
        setLoading(false);
        return;
      }

      const { data: fetchedMedia, error: mediaError } = await supabase
        .from('case_study_media')
        .select('*')
        .eq('case_study_id', caseStudyData.id)
        .order('display_order', { ascending: true });
      if (!mediaError && fetchedMedia) setMedia(fetchedMedia);

      const processedCaseStudy: CaseStudy = {
        ...caseStudyData,
        key_features: Array.isArray(caseStudyData.key_features)
          ? caseStudyData.key_features.filter((item: unknown): item is string => typeof item === "string")
          : [],
        technologies: Array.isArray(caseStudyData.technologies)
          ? caseStudyData.technologies.filter((item: unknown): item is string => typeof item === "string")
          : [],
      };
      setCaseStudy(processedCaseStudy);
      setLoading(false);
    } catch (error) {
      setError('An unexpected error occurred');
      setLoading(false);
    }
  }, [slug]);

  useEffect(() => {
    fetchCaseStudy();
  }, [fetchCaseStudy]);

  return { caseStudy, media, loading, error };
}
