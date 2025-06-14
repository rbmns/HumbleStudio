import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { ArrowLeft, User, MapPin, Calendar } from 'lucide-react';
import { supabase } from '@/integrations/supabase/client';
import StarBackground from '@/components/StarBackground';
import Contact from '@/components/Contact';
import Navbar from '@/components/Navbar';
import Hero from './case-study/Hero';
import ChallengeSection from './case-study/ChallengeSection';
import SolutionSection from './case-study/SolutionSection';
import KeyFeatures from './case-study/KeyFeatures';
import Technologies from './case-study/Technologies';
import ImpactSection from './case-study/ImpactSection';
import MediaGallery from './case-study/MediaGallery';
import CtaSection from './case-study/CtaSection';

interface CaseStudy {
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

interface CaseStudyMedia {
  id: string;
  media_url: string;
  alt_text?: string;
  caption?: string;
  section?: string;
  display_order: number;
}

const renderContentWithBullets = (content?: string) => {
  if (!content) return null;
  // Split input string into non-empty trimmed lines
  const lines = content.split('\n').map(line => line.trim()).filter(line => line !== '');
  // Check if most lines look like bullets (start with "-", "*" or numbered "1.")
  const isBulletList = lines.length > 0 &&
    lines.filter(line => /^(-|\*|\d+\.)\s/.test(line)).length >= Math.max(1, Math.floor(lines.length * 0.7));
  if (isBulletList) {
    return (
      <ul className="list-disc ml-6 space-y-2">
        {lines.map((line, idx) => {
          // Remove bullet marker for clean list item
          const text = line.replace(/^(-|\*|\d+\.)\s/, '');
          return <li key={idx}>{text}</li>;
        })}
      </ul>
    );
  }
  // fallback to paragraph(s)
  return lines.map((line, idx) => (
    <p key={idx} className="mb-4">{line}</p>
  ));
};

const CaseStudy = () => {
  const navigate = useNavigate();
  const { slug } = useParams<{ slug: string }>();
  const [caseStudy, setCaseStudy] = useState<CaseStudy | null>(null);
  const [media, setMedia] = useState<CaseStudyMedia[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (slug) {
      document.title = `${slug.replace(/-/g, ' ')} | HumbleStudio`;
      fetchCaseStudy();
    } else {
      setError('No case study slug provided');
      setLoading(false);
    }
  }, [slug]);

  const fetchCaseStudy = async () => {
    if (!slug) {
      setError('No slug provided');
      setLoading(false);
      return;
    }
    
    try {
      console.log(`Fetching case study with slug: ${slug}`);
      
      const { data: caseStudyData, error: caseStudyError } = await supabase
        .from('case_studies')
        .select('*')
        .eq('slug', slug)
        .eq('is_published', true)
        .maybeSingle();

      if (caseStudyError) {
        console.error('Error fetching case study:', caseStudyError);
        setError('Failed to fetch case study data');
        setLoading(false);
        return;
      }

      console.log('Case study data from DB:', caseStudyData);

      if (!caseStudyData) {
        console.log(`No case study found with slug: ${slug}`);
        setError('Case study not found');
        setLoading(false);
        return;
      }

      // Fetch media for this case study
      const { data: fetchedMedia, error: mediaError } = await supabase
        .from('case_study_media')
        .select('*')
        .eq('case_study_id', caseStudyData.id)
        .order('display_order', { ascending: true });

      if (mediaError) {
        console.error('Error fetching media:', mediaError);
      } else {
        console.log('Media data from DB:', fetchedMedia);
        setMedia(fetchedMedia || []);
      }

      // Process the case study data
      const processedCaseStudy: CaseStudy = {
        ...caseStudyData,
        key_features: Array.isArray(caseStudyData.key_features) 
          ? caseStudyData.key_features.filter((item): item is string => typeof item === 'string')
          : [],
        technologies: Array.isArray(caseStudyData.technologies) 
          ? caseStudyData.technologies.filter((item): item is string => typeof item === 'string')
          : []
      };
      
      setCaseStudy(processedCaseStudy);
      setLoading(false);
    } catch (error) {
      console.error('Error in fetchCaseStudy:', error);
      setError('An unexpected error occurred');
      setLoading(false);
    }
  };

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-humble-navy relative">
        <StarBackground />
        <Navbar />
        <div className="relative pt-24 pb-16 flex items-center justify-center">
          <div className="text-white text-center">
            <div className="text-xl mb-4">Loading case study...</div>
            <div className="text-sm text-white/60">Slug: {slug || 'No slug provided'}</div>
          </div>
        </div>
      </div>
    );
  }

  if (error || !caseStudy) {
    return (
      <div className="min-h-screen bg-humble-navy relative">
        <StarBackground />
        <Navbar />
        <div className="relative pt-24 pb-16 flex items-center justify-center">
          <div className="text-white text-center">
            <div className="text-xl mb-4">{error || 'Case study not found'}</div>
            <div className="text-sm text-white/60 mb-6">Slug: {slug || 'No slug provided'}</div>
            <button
              onClick={() => navigate('/work')}
              className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-humble-pink-500 via-humble-purple-500 to-humble-blue-500 text-white rounded-lg font-medium hover:opacity-90 transition-opacity"
            >
              <ArrowLeft className="h-4 w-4" />
              Back to Work
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-humble-navy text-white relative">
      <StarBackground />
      <Navbar />
      <Hero
        title={caseStudy.title}
        subtitle={caseStudy.subtitle}
        description={caseStudy.description}
        client_name={caseStudy.client_name}
        project_duration={caseStudy.project_duration}
        hero_image_url={caseStudy.hero_image_url}
      />
      <ChallengeSection
        heading={caseStudy.challenge_heading}
        content={caseStudy.challenge_content}
      />
      <SolutionSection
        heading={caseStudy.solution_heading}
        content={caseStudy.solution_content}
      />
      <KeyFeatures features={caseStudy.key_features} />
      <Technologies technologies={caseStudy.technologies} />
      <ImpactSection
        heading={caseStudy.impact_heading}
        content={caseStudy.impact_content}
      />
      <MediaGallery media={media} />
      <CtaSection
        heading={caseStudy.cta_heading}
        description={caseStudy.cta_description}
        buttonText={caseStudy.cta_button_text}
        onClick={() => scrollToSection("contact")}
      />
      <div id="contact">
        <Contact />
      </div>
    </div>
  );
};

export default CaseStudy;
