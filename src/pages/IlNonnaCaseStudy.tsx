import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft, ExternalLink } from 'lucide-react';
import { supabase } from '@/integrations/supabase/client';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

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

      // Convert JSON fields to arrays
      const processedCaseStudy: CaseStudy = {
        ...caseStudyData,
        key_features: Array.isArray(caseStudyData.key_features) 
          ? caseStudyData.key_features 
          : [],
        technologies: Array.isArray(caseStudyData.technologies) 
          ? caseStudyData.technologies 
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
      <div className="min-h-screen relative overflow-x-hidden bg-humble-navy">
        <Navbar />
        <div className="pt-24 pb-16 flex items-center justify-center">
          <div className="text-white">Loading...</div>
        </div>
        <Footer />
      </div>
    );
  }

  if (!caseStudy) {
    return (
      <div className="min-h-screen relative overflow-x-hidden bg-humble-navy">
        <Navbar />
        <div className="pt-24 pb-16 flex items-center justify-center">
          <div className="text-white">Case study not found</div>
        </div>
        <Footer />
      </div>
    );
  }

  const solutionMedia = media.filter(m => m.section === 'solution');

  return (
    <div className="min-h-screen relative overflow-x-hidden bg-humble-navy">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-24 pb-16 bg-gradient-to-br from-humble-navy via-humble-charcoal to-humble-navy">
        <div className="container mx-auto px-4 sm:px-6">
          <button
            onClick={() => navigate('/')}
            className="flex items-center gap-2 text-white/70 hover:text-white mb-8 transition-colors"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to Portfolio
          </button>
          
          <div className="max-w-4xl mx-auto text-center mb-12">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
              {caseStudy.title}
            </h1>
            {caseStudy.subtitle && (
              <p className="text-xl md:text-2xl text-white/80 mb-4">
                {caseStudy.subtitle}
              </p>
            )}
            {caseStudy.description && (
              <p className="text-lg text-white/70">
                {caseStudy.description}
              </p>
            )}
          </div>

          {/* Hero Image */}
          <div className="max-w-6xl mx-auto">
            <div className="aspect-[16/10] rounded-2xl overflow-hidden shadow-2xl">
              <img
                src={caseStudy.hero_image_url || 'https://images.unsplash.com/photo-1555396273-367ea4eb4db5?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80'}
                alt={`${caseStudy.client_name} Website - Desktop and Mobile View`}
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Challenge Section */}
      <section className="py-16 bg-humble-charcoal/30">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-8">
              {caseStudy.challenge_heading}
            </h2>
            <p className="text-lg text-white/80 leading-relaxed">
              {caseStudy.challenge_content}
            </p>
          </div>
        </div>
      </section>

      {/* Solution Section */}
      <section className="py-16">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-8">
              {caseStudy.solution_heading}
            </h2>
            <div className="text-lg text-white/80 leading-relaxed mb-12">
              <p className="mb-6">
                {caseStudy.solution_content}
              </p>
              {caseStudy.key_features.length > 0 && (
                <ul className="space-y-3 mb-6">
                  {caseStudy.key_features.map((feature, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-humble-pink-500 rounded-full flex-shrink-0 mt-3"></div>
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
                  <div key={mediaItem.id} className="bg-humble-charcoal rounded-xl p-6">
                    <h3 className="text-xl font-semibold text-white mb-4">{mediaItem.caption}</h3>
                    <div className="aspect-[4/3] bg-humble-charcoal/50 rounded-lg overflow-hidden">
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
      <section className="py-16 bg-humble-charcoal/30">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-8">
              {caseStudy.impact_heading}
            </h2>
            <p className="text-lg text-white/80 leading-relaxed mb-12">
              {caseStudy.impact_content}
            </p>

            {/* Results Grid */}
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-humble-pink-500 to-humble-purple-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-white">↗</span>
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">Direct Orders</h3>
                <p className="text-white/70">Significant increase in direct online orders</p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-humble-blue-500 to-humble-indigo-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-white">💰</span>
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">Cost Reduction</h3>
                <p className="text-white/70">Reduced third-party commission fees</p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-humble-purple-500 to-humble-pink-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-white">⭐</span>
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">Brand Identity</h3>
                <p className="text-white/70">Enhanced digital presence and customer loyalty</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              {caseStudy.cta_heading}
            </h2>
            <p className="text-lg text-white/80 mb-8">
              {caseStudy.cta_description}
            </p>
            <button
              onClick={() => navigate('/#contact')}
              className="inline-flex items-center gap-2 bg-gradient-to-r from-humble-pink-500 to-humble-purple-500 text-white px-8 py-4 rounded-full font-semibold hover:scale-105 transition-transform text-lg"
            >
              {caseStudy.cta_button_text}
              <ExternalLink className="h-5 w-5" />
            </button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default IlNonnaCaseStudy;
