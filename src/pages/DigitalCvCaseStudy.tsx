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
    document.title = "Digital CV: Personal Brand Website | HumbleStudio";
    fetchCaseStudy();
  }, []);

  const fetchCaseStudy = async () => {
    try {
      console.log('Fetching case study with slug: digital-cv');
      
      // Try to fetch from database first
      const { data: caseStudyData, error: caseStudyError } = await supabase
        .from('case_studies')
        .select('*')
        .eq('slug', 'digital-cv')
        .maybeSingle();

      if (caseStudyError) {
        console.error('Error fetching case study:', caseStudyError);
      }

      console.log('Case study data from DB:', caseStudyData);

      // Fetch media for this case study
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
        // Use database data
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
      } else {
        // Use fallback data if not in database
        console.log('Using fallback data for Digital CV case study');
        setCaseStudy({
          id: 'fallback-digital-cv',
          slug: 'digital-cv',
          title: "Digital Resume Site",
          subtitle: "Personal Branding Platform",
          description: "A sophisticated personal website showcasing professional achievements, portfolio, and contact information with modern design and smooth animations.",
          client_name: "Professional Individual",
          client_location: "Global",
          hero_image_url: 'https://tputfqwgyfpbtfoinluo.supabase.co/storage/v1/object/public/humblestudio/digital-cv/d-front-2.png',
          challenge_heading: "The Challenge",
          challenge_content: "Creating a standout personal brand in a competitive digital landscape.",
          solution_heading: "Our Solution",
          solution_content: "A clean, professional website that showcases skills and experience effectively.",
          impact_heading: "The Impact",
          impact_content: "A powerful digital presence that opens new opportunities and establishes credibility.",
          key_features: [
            "Professional Portfolio Showcase",
            "Interactive Resume Display",
            "Contact Integration",
            "Responsive Design",
            "Modern Animations",
            "SEO Optimized"
          ],
          technologies: [
            "React",
            "TypeScript",
            "Tailwind CSS",
            "Framer Motion"
          ],
          project_duration: "1 week",
          cta_heading: "Ready to Build Your Digital Presence?",
          cta_description: "Let's create a professional website that showcases your unique skills and opens new opportunities.",
          cta_button_text: "Start Your Project"
        });
        setMedia([]);
      }
    } catch (error) {
      console.error('Error in fetchCaseStudy:', error);
      // Use fallback data on any error
      setCaseStudy({
        id: 'fallback-digital-cv',
        slug: 'digital-cv',
        title: "Digital Resume Site",
        subtitle: "Personal Branding Platform",
        description: "A sophisticated personal website showcasing professional achievements, portfolio, and contact information with modern design and smooth animations.",
        client_name: "Professional Individual",
        client_location: "Global",
        hero_image_url: 'https://tputfqwgyfpbtfoinluo.supabase.co/storage/v1/object/public/humblestudio/digital-cv/d-front-2.png',
        challenge_heading: "The Challenge",
        challenge_content: "Creating a standout personal brand in a competitive digital landscape.",
        solution_heading: "Our Solution",
        solution_content: "A clean, professional website that showcases skills and experience effectively.",
        impact_heading: "The Impact",
        impact_content: "A powerful digital presence that opens new opportunities and establishes credibility.",
        key_features: [
          "Professional Portfolio Showcase",
          "Interactive Resume Display",
          "Contact Integration",
          "Responsive Design",
          "Modern Animations",
          "SEO Optimized"
        ],
        technologies: [
          "React",
          "TypeScript",
          "Tailwind CSS",
          "Framer Motion"
        ],
        project_duration: "1 week",
        cta_heading: "Ready to Build Your Digital Presence?",
        cta_description: "Let's create a professional website that showcases your unique skills and opens new opportunities.",
        cta_button_text: "Start Your Project"
      });
      setMedia([]);
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

      {/* Hero Section */}
      <section className="pt-32 pb-24 relative">
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-6xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-8 font-space-grotesk leading-tight">
              {caseStudy.title}
            </h1>
            
            <p className="text-xl md:text-2xl lg:text-3xl text-white/80 leading-relaxed font-light max-w-3xl mx-auto mb-16">
              {caseStudy.description}
            </p>

            {/* Hero Image */}
            <div className="aspect-[16/10] rounded-3xl bg-gradient-to-br from-humble-pink-500/20 via-humble-purple-500/20 to-humble-blue-500/20 p-2 mb-16">
              <div className="w-full h-full rounded-2xl overflow-hidden">
                <img
                  src={caseStudy.hero_image_url || 'https://tputfqwgyfpbtfoinluo.supabase.co/storage/v1/object/public/humblestudio/digital-cv/d-front-2.png'}
                  alt={`${caseStudy.title} Website`}
                  className="w-full h-full object-cover"
                />
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
