
import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { ArrowLeft, User, MapPin, Calendar } from 'lucide-react';
import { supabase } from '@/integrations/supabase/client';
import StarBackground from '@/components/StarBackground';
import Contact from '@/components/Contact';
import Navbar from '@/components/Navbar';

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

      {/* Hero Section */}
      <section className="pt-32 pb-24 relative">
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 font-space-grotesk leading-tight">
                  {caseStudy.title}
                </h1>
                
                {caseStudy.subtitle && (
                  <p className="text-xl md:text-2xl text-humble-purple-300 mb-6">
                    {caseStudy.subtitle}
                  </p>
                )}
                
                <p className="text-lg text-white/80 leading-relaxed mb-8">
                  {caseStudy.description}
                </p>

                {/* Project Details */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                  {caseStudy.client_name && (
                    <div className="flex items-center gap-3">
                      <User className="h-5 w-5 text-humble-purple-400" />
                      <div>
                        <p className="text-white/60 text-sm">Client</p>
                        <p className="text-white">{caseStudy.client_name}</p>
                      </div>
                    </div>
                  )}
                  {/* Removed client_location display
                  {caseStudy.client_location && (
                    <div className="flex items-center gap-3">
                      <MapPin className="h-5 w-5 text-humble-purple-400" />
                      <div>
                        <p className="text-white/60 text-sm">Location</p>
                        <p className="text-white">{caseStudy.client_location}</p>
                      </div>
                    </div>
                  )} */}
                  {caseStudy.project_duration && (
                    <div className="flex items-center gap-3">
                      <Calendar className="h-5 w-5 text-humble-purple-400" />
                      <div>
                        <p className="text-white/60 text-sm">Duration</p>
                        <p className="text-white">{caseStudy.project_duration}</p>
                      </div>
                    </div>
                  )}
                </div>
              </div>

              {/* Hero Image */}
              <div className="aspect-[4/3] rounded-3xl bg-gradient-to-br from-humble-pink-500/20 via-humble-purple-500/20 to-humble-blue-500/20 p-2">
                <div className="w-full h-full rounded-2xl overflow-hidden">
                  <img
                    src={caseStudy.hero_image_url || '/placeholder.svg'}
                    alt={caseStudy.title}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Challenge Section */}
      {caseStudy.challenge_content && (
        <section className="py-24 relative">
          <div className="container mx-auto px-6 relative z-10">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-8">
                {caseStudy.challenge_heading}
              </h2>
              <div className="prose prose-lg prose-invert max-w-none">
                <p className="text-white/80 leading-relaxed text-lg">
                  {caseStudy.challenge_content}
                </p>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Solution Section */}
      {caseStudy.solution_content && (
        <section className="py-24 bg-humble-charcoal/30 relative">
          <div className="container mx-auto px-6 relative z-10">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-8">
                {caseStudy.solution_heading}
              </h2>
              <div className="prose prose-lg prose-invert max-w-none">
                <p className="text-white/80 leading-relaxed text-lg">
                  {caseStudy.solution_content}
                </p>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Key Features Section */}
      {caseStudy.key_features && caseStudy.key_features.length > 0 && (
        <section className="py-24 relative">
          <div className="container mx-auto px-6 relative z-10">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-12">Key Features</h2>
              <div className="grid md:grid-cols-2 gap-6">
                {caseStudy.key_features.map((feature, index) => (
                  <div key={index} className="bg-humble-charcoal/50 backdrop-blur-sm rounded-xl p-6 border border-white/10">
                    <p className="text-white font-medium">{feature}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Technologies Section */}
      {caseStudy.technologies && caseStudy.technologies.length > 0 && (
        <section className="py-24 bg-humble-charcoal/30 relative">
          <div className="container mx-auto px-6 relative z-10">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-12">Technologies Used</h2>
              <div className="flex flex-wrap gap-4">
                {caseStudy.technologies.map((tech, index) => (
                  <span
                    key={index}
                    className="px-4 py-2 bg-gradient-to-r from-humble-pink-500/20 via-humble-purple-500/20 to-humble-blue-500/20 border border-humble-purple-500/30 rounded-lg text-white font-medium"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Impact Section */}
      {caseStudy.impact_content && (
        <section className="py-24 relative">
          <div className="container mx-auto px-6 relative z-10">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-8">
                {caseStudy.impact_heading}
              </h2>
              <div className="prose prose-lg prose-invert max-w-none">
                <p className="text-white/80 leading-relaxed text-lg">
                  {caseStudy.impact_content}
                </p>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Media Gallery */}
      {media && media.length > 0 && (
        <section className="py-24 bg-humble-charcoal/30 relative">
          <div className="container mx-auto px-6 relative z-10">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-12">Project Gallery</h2>
              <div className="grid md:grid-cols-2 gap-8">
                {media.map((item) => (
                  <div key={item.id} className="rounded-xl overflow-hidden bg-humble-charcoal/50 border border-white/10">
                    <img
                      src={item.media_url}
                      alt={item.alt_text || 'Project image'}
                      className="w-full h-64 object-cover"
                    />
                    {item.caption && (
                      <div className="p-4">
                        <p className="text-white/70 text-sm">{item.caption}</p>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      )}

      {/* CTA Section */}
      <section className="py-24 relative">
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              {caseStudy.cta_heading || "Ready to Start Your Project?"}
            </h2>
            <p className="text-lg text-white/80 mb-8 leading-relaxed">
              {caseStudy.cta_description || "Let's create something amazing together."}
            </p>
            <button
              onClick={() => scrollToSection('contact')}
              className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-humble-pink-500 via-humble-purple-500 to-humble-blue-500 text-white rounded-lg font-medium text-lg hover:from-humble-pink-600 hover:via-humble-purple-600 hover:to-humble-blue-600 transition-all"
            >
              {caseStudy.cta_button_text}
            </button>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <div id="contact">
        <Contact />
      </div>
    </div>
  );
};

export default CaseStudy;

