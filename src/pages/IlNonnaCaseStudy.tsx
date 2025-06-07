
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft, ExternalLink } from 'lucide-react';
import { supabase } from '@/integrations/supabase/client';

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

const IlNonnaCaseStudy = () => {
  const navigate = useNavigate();
  const [caseStudy, setCaseStudy] = useState<CaseStudy | null>(null);
  const [media, setMedia] = useState<CaseStudyMedia[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    document.title = "Il Nonna: Direct Growth in Rotterdam | HumbleStudio";
    fetchCaseStudy();
  }, []);

  const fetchCaseStudy = async () => {
    try {
      const { data: caseStudyData, error: caseStudyError } = await supabase
        .from('case_studies')
        .select('*')
        .eq('slug', 'il-nonna')
        .single();

      if (caseStudyError) {
        console.error('Error fetching case study:', caseStudyError);
        return;
      }

      const { data: mediaData, error: mediaError } = await supabase
        .from('case_study_media')
        .select('*')
        .eq('case_study_id', caseStudyData.id)
        .order('display_order', { ascending: true });

      if (mediaError) {
        console.error('Error fetching media:', mediaError);
      }

      // Convert JSON fields to arrays with proper type checking
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
      setMedia(mediaData || []);
    } catch (error) {
      console.error('Error in fetchCaseStudy:', error);
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-black">
        <div className="pt-24 pb-16 flex items-center justify-center">
          <div className="text-white">Loading...</div>
        </div>
      </div>
    );
  }

  if (!caseStudy) {
    return (
      <div className="min-h-screen bg-black">
        <div className="pt-24 pb-16 flex items-center justify-center">
          <div className="text-white">Case study not found</div>
        </div>
      </div>
    );
  }

  const solutionMedia = media.filter(m => m.section === 'solution');

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Simple Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-black/90 backdrop-blur-sm border-b border-gray-800">
        <div className="container mx-auto px-6 py-4">
          <button
            onClick={() => navigate('/')}
            className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to Portfolio
          </button>
        </div>
      </nav>
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-black">
        <div className="container mx-auto px-6">          
          <div className="max-w-4xl mx-auto text-center mb-16">
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 font-space-grotesk">
              {caseStudy.title}
            </h1>
            {caseStudy.subtitle && (
              <p className="text-xl md:text-2xl text-gray-300 mb-4 font-serif">
                {caseStudy.subtitle}
              </p>
            )}
            {caseStudy.description && (
              <p className="text-lg text-gray-400 font-serif leading-relaxed">
                {caseStudy.description}
              </p>
            )}
          </div>

          {/* Hero Image */}
          <div className="max-w-5xl mx-auto">
            <div className="aspect-[16/10] rounded-lg overflow-hidden shadow-2xl">
              <img
                src={caseStudy.hero_image_url || '/lovable-uploads/cabbeeb2-4701-40ca-8f62-75cb957be030.png'}
                alt={`${caseStudy.client_name} Website`}
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Challenge Section */}
      <section className="py-20 bg-gray-950">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-8 font-space-grotesk">
              {caseStudy.challenge_heading}
            </h2>
            <p className="text-lg text-gray-300 leading-relaxed font-serif">
              {caseStudy.challenge_content}
            </p>
          </div>
        </div>
      </section>

      {/* Solution Section */}
      <section className="py-20 bg-black">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-8 font-space-grotesk">
              {caseStudy.solution_heading}
            </h2>
            <div className="text-lg text-gray-300 leading-relaxed mb-12 font-serif">
              <p className="mb-6">
                {caseStudy.solution_content}
              </p>
              {caseStudy.key_features.length > 0 && (
                <ul className="space-y-3 mb-6">
                  {caseStudy.key_features.map((feature, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-pink-500 rounded-full flex-shrink-0 mt-3" style={{ backgroundColor: '#FF007F' }}></div>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              )}
            </div>

            {/* Feature Screenshots Grid */}
            {solutionMedia.length > 0 && (
              <div className="grid md:grid-cols-2 gap-8 mb-16">
                {solutionMedia.map((mediaItem) => (
                  <div key={mediaItem.id} className="bg-gray-900 rounded-lg p-6">
                    <h3 className="text-xl font-semibold text-white mb-4 font-space-grotesk">{mediaItem.caption}</h3>
                    <div className="aspect-[4/3] bg-gray-800 rounded-lg overflow-hidden">
                      <img
                        src={mediaItem.media_url}
                        alt={mediaItem.alt_text || mediaItem.caption || ''}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Impact & Results Section */}
      <section className="py-20 bg-gray-950">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-8 font-space-grotesk">
              {caseStudy.impact_heading}
            </h2>
            <p className="text-lg text-gray-300 leading-relaxed mb-12 font-serif">
              {caseStudy.impact_content}
            </p>

            {/* Results Grid */}
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4" style={{ backgroundColor: '#FF007F' }}>
                  <span className="text-2xl font-bold text-white">↗</span>
                </div>
                <h3 className="text-xl font-semibold text-white mb-2 font-space-grotesk">Direct Orders</h3>
                <p className="text-gray-400 font-serif">Significant increase in direct online orders</p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4" style={{ backgroundColor: '#FF007F' }}>
                  <span className="text-2xl font-bold text-white">💰</span>
                </div>
                <h3 className="text-xl font-semibold text-white mb-2 font-space-grotesk">Cost Reduction</h3>
                <p className="text-gray-400 font-serif">Reduced third-party commission fees</p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4" style={{ backgroundColor: '#FF007F' }}>
                  <span className="text-2xl font-bold text-white">⭐</span>
                </div>
                <h3 className="text-xl font-semibold text-white mb-2 font-space-grotesk">Brand Identity</h3>
                <p className="text-gray-400 font-serif">Enhanced digital presence and customer loyalty</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-black">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 font-space-grotesk">
              {caseStudy.cta_heading}
            </h2>
            <p className="text-lg text-gray-300 mb-8 font-serif">
              {caseStudy.cta_description}
            </p>
            <button
              onClick={() => navigate('/#contact')}
              className="inline-flex items-center gap-2 text-white px-8 py-4 rounded-full font-semibold hover:opacity-90 transition-opacity text-lg font-space-grotesk"
              style={{ backgroundColor: '#FF007F' }}
            >
              {caseStudy.cta_button_text}
              <ExternalLink className="h-5 w-5" />
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default IlNonnaCaseStudy;
