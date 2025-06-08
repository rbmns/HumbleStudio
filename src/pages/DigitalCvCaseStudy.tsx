import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft, ExternalLink, Menu, X } from 'lucide-react';
import { supabase } from '@/integrations/supabase/client';
import StarBackground from '@/components/StarBackground';
import Contact from '@/components/Contact';

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

const DigitalCvCaseStudy = () => {
  const navigate = useNavigate();
  const [caseStudy, setCaseStudy] = useState<CaseStudy | null>(null);
  const [media, setMedia] = useState<CaseStudyMedia[]>([]);
  const [loading, setLoading] = useState(true);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    document.title = "Digital CV: Personal Branding Solution | HumbleStudio";
    fetchCaseStudy();
  }, []);

  const fetchCaseStudy = async () => {
    try {
      console.log('Fetching case study with slug: digital-cv');
      
      const { data: caseStudyData, error: caseStudyError } = await supabase
        .from('case_studies')
        .select('*')
        .eq('slug', 'digital-cv')
        .maybeSingle();

      if (caseStudyError) {
        console.error('Error fetching case study:', caseStudyError);
      }

      console.log('Case study data from DB:', caseStudyData);

      let mediaData: CaseStudyMedia[] = [];
      if (caseStudyData?.id) {
        const { data: fetchedMedia, error: mediaError } = await supabase
          .from('case_study_media')
          .select('*')
          .eq('case_study_id', caseStudyData.id)
          .order('display_order', { ascending: true });

        if (mediaError) {
          console.error('Error fetching media:', mediaError);
        } else {
          console.log('Media data from DB:', fetchedMedia);
          mediaData = fetchedMedia || [];
        }
      }

      if (caseStudyData) {
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
        setMedia(mediaData);
      }
    } catch (error) {
      console.error('Error in fetchCaseStudy:', error);
    } finally {
      setLoading(false);
    }
  };

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMobileMenuOpen(false);
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-humble-navy relative">
        <StarBackground />
        <div className="relative pt-24 pb-16 flex items-center justify-center">
          <div className="text-white">Loading...</div>
        </div>
      </div>
    );
  }

  if (!caseStudy) {
    return (
      <div className="min-h-screen bg-humble-navy relative">
        <StarBackground />
        <div className="relative pt-24 pb-16 flex items-center justify-center">
          <div className="text-white">Case study not found</div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-humble-navy text-white relative">
      <StarBackground />
      
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-humble-navy/90 backdrop-blur-md border-b border-white/10">
        <div className="container mx-auto px-6 py-4">
          <div className="flex justify-between items-center">
            <button
              onClick={() => navigate('/')}
              className="flex items-center"
            >
              <h1 className="text-xl md:text-2xl font-bold">
                <span className="text-white">Humble</span>
                <span className="bg-gradient-to-r from-humble-pink-500 via-humble-purple-500 to-humble-blue-500 bg-clip-text text-transparent">Studio</span>
              </h1>
            </button>
            
            {/* Desktop Menu */}
            <div className="hidden md:flex space-x-8 items-center">
              <button onClick={() => navigate('/')} className="text-white/80 hover:text-white transition-colors">Home</button>
              <button onClick={() => navigate('/inquiry')} className="text-white/80 hover:text-white transition-colors">Inquiry</button>
              <button 
                onClick={() => scrollToSection('contact')} 
                className="px-5 py-2 rounded-full bg-gradient-to-r from-humble-pink-500 via-humble-purple-500 to-humble-blue-500 text-white font-medium hover:from-humble-pink-600 hover:via-humble-purple-600 hover:to-humble-blue-600 transition-all"
              >
                Contact
              </button>
            </div>
            
            {/* Mobile Menu Toggle */}
            <button 
              className="md:hidden text-white"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
          
          {/* Mobile Menu */}
          {isMobileMenuOpen && (
            <div className="md:hidden absolute top-full left-0 w-full bg-humble-navy/95 backdrop-blur-md shadow-lg">
              <div className="container mx-auto px-4 py-4 flex flex-col space-y-4">
                <button onClick={() => navigate('/')} className="text-white/80 hover:text-white transition-colors py-2">Home</button>
                <button onClick={() => navigate('/inquiry')} className="text-white/80 hover:text-white transition-colors py-2">Inquiry</button>
                <button 
                  onClick={() => scrollToSection('contact')} 
                  className="px-5 py-2 rounded-full bg-gradient-to-r from-humble-pink-500 via-humble-purple-500 to-humble-blue-500 text-white font-medium hover:from-humble-pink-600 hover:via-humble-purple-600 hover:to-humble-blue-600 transition-all"
                >
                  Contact
                </button>
              </div>
            </div>
          )}
        </div>
      </nav>
      
      {/* Section 1: Project Overview */}
      <section className="pt-32 pb-24 relative">
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-6xl mx-auto">
            {/* Project Title & Description - ABOVE IMAGE */}
            <div className="text-center mb-16 max-w-4xl mx-auto">
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-8 font-space-grotesk leading-tight">
                🚀 Digital CV Site
              </h1>
            </div>

            {/* Hero Image */}
            <div className="mb-20">
              <div className="aspect-[16/10] rounded-3xl bg-gradient-to-br from-humble-pink-500/20 via-humble-purple-500/20 to-humble-blue-500/20 p-2">
                <div className="w-full h-full rounded-2xl overflow-hidden">
                  <img
                    src={caseStudy.hero_image_url || 'https://tputfqwgyfpbtfoinluo.supabase.co/storage/v1/object/public/humblestudio/digital-cv/d-front-2.png'}
                    alt={`Digital CV Website`}
                    className="w-full h-full object-cover object-left-top"
                  />
                </div>
              </div>
            </div>

            {/* Project Info Grid */}
            <div className="grid md:grid-cols-2 gap-12 mb-16">
              <div className="bg-humble-charcoal/30 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
                <h3 className="text-xl font-semibold text-white mb-6 font-space-grotesk">Project Details</h3>
                <div className="space-y-4 text-white/80 text-lg">
                  <div>
                    <strong className="text-white font-medium">Type:</strong> Personal Branding / Career Portfolio
                  </div>
                  <div>
                    <strong className="text-white font-medium">Goal:</strong> Stand out from the crowd & impress recruiters
                  </div>
                  <div>
                    <strong className="text-white font-medium">Solution:</strong> Clean, mobile-friendly one-pager — live in 1 day
                  </div>
                </div>
              </div>

              <div className="bg-humble-charcoal/30 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
                <h3 className="text-xl font-semibold text-white mb-6 font-space-grotesk">Live Site</h3>
                <div className="text-center">
                  <a
                    href="https://rosiebiemans.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-3 px-8 py-3 bg-gradient-to-r from-humble-pink-500 via-humble-purple-500 to-humble-blue-500 text-white rounded-xl font-semibold text-lg hover:opacity-90 transition-opacity"
                  >
                    🖥️ See the site → rosiebiemans.com
                    <ExternalLink className="h-5 w-5" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 2: The Challenge */}
      <section className="py-24 bg-humble-charcoal/20 relative z-10">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <span className="text-6xl mb-8 block font-light">⸻</span>
            </div>
            
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-12 text-center font-space-grotesk">
              🧩 The Challenge
            </h2>
            
            <div className="text-xl text-white/80 leading-relaxed space-y-6">
              <p className="text-center max-w-3xl mx-auto">
                Most resumes look the same — especially when AI tools are scanning for keywords and recruiters skim through hundreds a day.
              </p>
              
              <div className="bg-humble-charcoal/30 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
                <p className="text-lg mb-6 text-center">The challenge was to create a digital CV that:</p>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <span className="text-humble-pink-500 text-xl">→</span>
                    <span>Grabs attention immediately</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="text-humble-pink-500 text-xl">→</span>
                    <span>Reflects personality and professionalism</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="text-humble-pink-500 text-xl">→</span>
                    <span>Works flawlessly on any device</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="text-humble-pink-500 text-xl">→</span>
                    <span>Loads fast and communicates clearly</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 3: The Solution */}
      <section className="py-24 relative z-10">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <span className="text-6xl mb-8 block font-light">⸻</span>
            </div>
            
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-12 text-center font-space-grotesk">
              💡 The Solution
            </h2>
            
            <p className="text-xl text-white/80 leading-relaxed text-center max-w-3xl mx-auto mb-20">
              We built a modern one-page resume website that combines clarity, confidence, and personal style — all in under 24 hours.
            </p>

            {/* Key Features */}
            <div className="bg-humble-charcoal/30 backdrop-blur-sm rounded-2xl p-8 border border-white/10 mb-20">
              <h3 className="text-2xl font-semibold text-white mb-8 text-center font-space-grotesk">Key Features</h3>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="flex items-start gap-4">
                  <span className="text-2xl">✍️</span>
                  <span className="text-white/80 text-lg">Structured layout with skills, experience & intro</span>
                </div>
                <div className="flex items-start gap-4">
                  <span className="text-2xl">📱</span>
                  <span className="text-white/80 text-lg">Fully responsive and mobile-friendly</span>
                </div>
                <div className="flex items-start gap-4">
                  <span className="text-2xl">📄</span>
                  <span className="text-white/80 text-lg">Downloadable CV PDF</span>
                </div>
                <div className="flex items-start gap-4">
                  <span className="text-2xl">🎨</span>
                  <span className="text-white/80 text-lg">Minimal yet polished design</span>
                </div>
              </div>
              <p className="text-white/80 text-lg text-center mt-8">
                Every block is intentional — designed to help the candidate stand out while staying easy to navigate.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Section 4: The Results */}
      <section className="py-24 bg-humble-charcoal/20 relative z-10">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <span className="text-6xl mb-8 block font-light">⸻</span>
            </div>
            
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-12 text-center font-space-grotesk">
              🎯 The Results
            </h2>

            <div className="grid md:grid-cols-2 gap-8 mb-16">
              <div className="text-center bg-humble-charcoal/30 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
                <div className="text-4xl font-bold text-humble-pink-500 mb-3 font-space-grotesk">✅</div>
                <div className="text-white font-medium text-lg">Site launched in a day</div>
              </div>
              
              <div className="text-center bg-humble-charcoal/30 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
                <div className="text-4xl font-bold text-humble-purple-500 mb-3 font-space-grotesk">✅</div>
                <div className="text-white font-medium text-lg">Immediate positive feedback</div>
              </div>
              
              <div className="text-center bg-humble-charcoal/30 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
                <div className="text-4xl font-bold text-humble-blue-500 mb-3 font-space-grotesk">✅</div>
                <div className="text-white font-medium text-lg">More confidence applying for jobs</div>
              </div>
              
              <div className="text-center bg-humble-charcoal/30 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
                <div className="text-4xl font-bold text-humble-pink-500 mb-3 font-space-grotesk">€49</div>
                <div className="text-white font-medium text-lg">Total cost</div>
              </div>
            </div>

            {/* Client Quote */}
            <div className="bg-gradient-to-r from-humble-pink-500/10 via-humble-purple-500/10 to-humble-blue-500/10 rounded-3xl p-12 border border-white/10 text-center">
              <div className="text-8xl text-humble-pink-500 mb-6 font-serif">"</div>
              <blockquote className="text-2xl md:text-3xl text-white font-serif italic mb-8 leading-relaxed">
                Since the CV went live, I've had lots of interviews — and many compliments from potential employers.
              </blockquote>
              <div className="text-humble-pink-500 font-medium text-lg font-space-grotesk">— Digital CV Client</div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 5: Call to Action */}
      <section className="py-24 relative z-10">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <div className="text-center mb-12">
              <span className="text-6xl mb-8 block font-light">⸻</span>
            </div>
            
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-8 font-space-grotesk">
              🔗 Want a site like this?
            </h2>
            
            <p className="text-2xl text-white/80 mb-12 max-w-2xl mx-auto font-light">
              Whether it's for job hunting, freelancing, or personal branding — we can build yours in 1 day. Starting at €49.
            </p>
            
            <div className="space-y-6">
              <a
                href="https://humblestudio.ai/inquiry"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 px-12 py-5 rounded-2xl font-semibold text-xl text-white bg-gradient-to-r from-humble-pink-500 via-humble-purple-500 to-humble-blue-500 hover:opacity-90 transition-opacity font-space-grotesk"
              >
                Get Your Website Built
                <ExternalLink className="h-6 w-6" />
              </a>
              
              <div className="text-white/60 text-lg">
                Professional websites delivered in days, not months
              </div>
            </div>
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

export default DigitalCvCaseStudy;
