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

const NonnasTableCaseStudy = () => {
  const navigate = useNavigate();
  const [caseStudy, setCaseStudy] = useState<CaseStudy | null>(null);
  const [media, setMedia] = useState<CaseStudyMedia[]>([]);
  const [loading, setLoading] = useState(true);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    document.title = "Nonna's Table: Restaurant Digital Transformation | HumbleStudio";
    fetchCaseStudy();
  }, []);

  const fetchCaseStudy = async () => {
    try {
      console.log('Fetching case study with slug: nonnas-table');
      
      // Try to fetch from database first
      const { data: caseStudyData, error: caseStudyError } = await supabase
        .from('case_studies')
        .select('*')
        .eq('slug', 'nonnas-table')
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
        console.log('Using fallback data for Nonnas Table case study');
        setCaseStudy({
          id: 'fallback-nonnas-table',
          slug: 'nonnas-table',
          title: "Nonna's Table",
          subtitle: "A Complete Digital Transformation for Authentic Italian Dining",
          description: "Creating a warm, welcoming digital presence that captures the essence of traditional Italian hospitality while providing modern functionality for reservations and online ordering.",
          client_name: "Nonna's Table",
          client_location: "Netherlands",
          hero_image_url: 'https://tputfqwgyfpbtfoinluo.supabase.co/storage/v1/object/public/humblestudio/nonnas-table/d-1a.png',
          challenge_heading: "Our Process: Crafting a Cohesive Digital Presence",
          challenge_content: "Traditional Italian restaurants need to balance authentic charm with modern digital expectations.",
          solution_heading: "Key Features & Capabilities",
          solution_content: "We created a comprehensive digital platform that maintains the warmth of Italian hospitality while providing cutting-edge functionality.",
          impact_heading: "The Impact",
          impact_content: "A beautifully crafted website that successfully bridges traditional Italian dining culture with modern digital convenience, resulting in improved customer engagement and streamlined operations.",
          key_features: [
            "Custom-Branded Website",
            "Integrated Table Reservations",
            "Direct Online Ordering",
            "Localized Payment Processing",
            "Centralized Order Management",
            "Automated Order Notifications",
            "Interactive Menu Showcase",
            "Mobile-Optimized Action Buttons"
          ],
          technologies: [
            "React",
            "TypeScript",
            "Tailwind CSS",
            "Supabase",
            "TheFork Manager",
            "Sitedish",
            "MultiSafepay"
          ],
          project_duration: "2 weeks",
          cta_heading: "Ready to Transform Your Restaurant's Digital Presence?",
          cta_description: "Let's create a beautiful, functional website that captures your restaurant's unique personality and drives real business results.",
          cta_button_text: "Start Your Project"
        });
        setMedia([]);
      }
    } catch (error) {
      console.error('Error in fetchCaseStudy:', error);
      // Use fallback data on any error
      setCaseStudy({
        id: 'fallback-nonnas-table',
        slug: 'nonnas-table',
        title: "Nonna's Table",
        subtitle: "A Complete Digital Transformation for Authentic Italian Dining",
        description: "Creating a warm, welcoming digital presence that captures the essence of traditional Italian hospitality while providing modern functionality for reservations and online ordering.",
        client_name: "Nonna's Table",
        client_location: "Netherlands",
        hero_image_url: 'https://tputfqwgyfpbtfoinluo.supabase.co/storage/v1/object/public/humblestudio/nonnas-table/d-1a.png',
        challenge_heading: "Our Process: Crafting a Cohesive Digital Presence",
        challenge_content: "Traditional Italian restaurants need to balance authentic charm with modern digital expectations.",
        solution_heading: "Key Features & Capabilities",
        solution_content: "We created a comprehensive digital platform that maintains the warmth of Italian hospitality while providing cutting-edge functionality.",
        impact_heading: "The Impact",
        impact_content: "A beautifully crafted website that successfully bridges traditional Italian dining culture with modern digital convenience, resulting in improved customer engagement and streamlined operations.",
        key_features: [
          "Custom-Branded Website",
          "Integrated Table Reservations",
          "Direct Online Ordering",
          "Localized Payment Processing",
          "Centralized Order Management",
          "Automated Order Notifications",
          "Interactive Menu Showcase",
          "Mobile-Optimized Action Buttons"
        ],
        technologies: [
          "React",
          "TypeScript",
          "Tailwind CSS",
          "Supabase",
          "TheFork Manager",
          "Sitedish",
          "MultiSafepay"
        ],
        project_duration: "2 weeks",
        cta_heading: "Ready to Transform Your Restaurant's Digital Presence?",
        cta_description: "Let's create a beautiful, functional website that captures your restaurant's unique personality and drives real business results.",
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
      
      {/* Section 1: Project Overview */}
      <section className="pt-32 pb-20 relative">
        <div className="container mx-auto px-6 relative z-10">
          {/* Hero Image */}
          <div className="max-w-5xl mx-auto mb-16">
            <div className="aspect-[16/10] rounded-2xl bg-gradient-to-br from-humble-pink-500/20 via-humble-purple-500/20 to-humble-blue-500/20 p-1">
              <div className="w-full h-full rounded-xl">
                <img
                  src={caseStudy.hero_image_url || 'https://tputfqwgyfpbtfoinluo.supabase.co/storage/v1/object/public/humblestudio/nonnas-table/d-1a.png'}
                  alt={`${caseStudy.client_name} Website`}
                  className="w-full h-full object-cover rounded-xl"
                />
              </div>
            </div>
          </div>

          {/* Project Details */}
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 text-center">
              {caseStudy.title}
            </h1>
            
            <p className="text-xl md:text-2xl text-white/80 mb-12 text-center leading-relaxed">
              {caseStudy.description}
            </p>

            {/* Project Info Grid */}
            <div className="grid md:grid-cols-2 gap-8 mb-12">
              <div className="bg-humble-charcoal/30 backdrop-blur-sm rounded-xl p-6 border border-white/10">
                <h3 className="text-lg font-semibold text-white mb-4">Business Details</h3>
                <div className="space-y-3 text-white/80">
                  <div>
                    <strong className="text-white">Business:</strong> {caseStudy.client_name}
                  </div>
                  <div>
                    <strong className="text-white">Type:</strong> Italian Restaurant
                  </div>
                  <div>
                    <strong className="text-white">Location:</strong> {caseStudy.client_location}
                  </div>
                </div>
              </div>

              <div className="bg-humble-charcoal/30 backdrop-blur-sm rounded-xl p-6 border border-white/10">
                <h3 className="text-lg font-semibold text-white mb-4">What They Needed</h3>
                <p className="text-white/80">
                  A warm, welcoming digital presence that captures traditional Italian hospitality while providing modern functionality for reservations and online ordering.
                </p>
              </div>
            </div>

            {/* Main Deliverables */}
            <div className="bg-humble-charcoal/30 backdrop-blur-sm rounded-xl p-6 border border-white/10 mb-8">
              <h3 className="text-lg font-semibold text-white mb-4">Main Deliverables</h3>
              <div className="grid sm:grid-cols-3 gap-4 text-center">
                <div className="bg-humble-pink-500/20 rounded-lg p-4">
                  <div className="text-2xl mb-2">🎨</div>
                  <div className="text-white font-medium">Digital Branding</div>
                </div>
                <div className="bg-humble-purple-500/20 rounded-lg p-4">
                  <div className="text-2xl mb-2">🍽️</div>
                  <div className="text-white font-medium">Restaurant Website</div>
                </div>
                <div className="bg-humble-blue-500/20 rounded-lg p-4">
                  <div className="text-2xl mb-2">📱</div>
                  <div className="text-white font-medium">Online Ordering</div>
                </div>
              </div>
            </div>

            {/* Live Site Link */}
            <div className="text-center">
              <a
                href="https://nonnas-table.humblestudio.ai/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-humble-pink-500 via-humble-purple-500 to-humble-blue-500 text-white rounded-full font-semibold text-lg hover:opacity-90 transition-opacity"
              >
                View Live Website
                <ExternalLink className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Section 2: The Challenge */}
      <section className="py-20 bg-humble-charcoal/20 relative z-10">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-8">
              <span className="text-6xl mb-4 block">⸻</span>
            </div>
            
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-8 text-center">
              The Challenge
            </h2>
            
            <div className="text-lg text-white/80 leading-relaxed text-center max-w-3xl mx-auto">
              <p>
                Traditional Italian restaurants face a unique challenge: how do you maintain the authentic, warm charm that makes dining special while meeting modern customer expectations for digital convenience? 
              </p>
              <br />
              <p>
                Nonna's Table needed a digital presence that would feel as welcoming as stepping into a family kitchen, but with the functionality to handle reservations, online ordering, and payment processing seamlessly.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Section 3: The Solution */}
      <section className="py-20 relative z-10">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-8">
              <span className="text-6xl mb-4 block">⸻</span>
            </div>
            
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-8 text-center flex items-center justify-center gap-3">
              <span className="text-4xl">💡</span>
              The Solution
            </h2>
            
            <p className="text-lg text-white/80 leading-relaxed text-center max-w-3xl mx-auto mb-16">
              We created a comprehensive digital platform that maintains the warmth of Italian hospitality while providing cutting-edge functionality.
            </p>

            {/* Solution Features */}
            <div className="grid md:grid-cols-2 gap-8 mb-16">
              <div className="space-y-6">
                <h3 className="text-2xl font-semibold text-white mb-6">Website Features</h3>
                <div className="space-y-4">
                  {[
                    "Seamless table reservation system with booking overlay",
                    "Direct online ordering for delivery & pickup",
                    "Interactive menu showcase with beautiful food photography",
                    "Mobile-optimized contact and ordering buttons",
                    "Warm, authentic Italian visual design"
                  ].map((feature, index) => (
                    <div key={index} className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-gradient-to-r from-humble-pink-500 to-humble-purple-500 rounded-full flex-shrink-0 mt-3"></div>
                      <span className="text-white/80">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="space-y-6">
                <h3 className="text-2xl font-semibold text-white mb-6">Technology & Strategy</h3>
                <div className="space-y-4">
                  <div>
                    <strong className="text-white">Tech Stack:</strong>
                    <div className="flex flex-wrap gap-2 mt-2">
                      {caseStudy.technologies.map((tech, index) => (
                        <span key={index} className="px-3 py-1 bg-humble-blue-500/20 text-humble-blue-300 rounded text-sm">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                  <div className="text-white/80">
                    <strong className="text-white">Strategic Decisions:</strong>
                    <ul className="mt-2 space-y-2">
                      <li>• Warm color palette with earthy tones</li>
                      <li>• Classic serif typography for authenticity</li>
                      <li>• Dutch payment integration (iDEAL, MultiSafepay)</li>
                      <li>• Centralized order management system</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            {/* Screenshots Section */}
            {media.length > 0 && (
              <div className="space-y-16">
                <h3 className="text-2xl font-semibold text-white text-center mb-8">Website Showcase</h3>
                {media.slice(0, 3).map((mediaItem, index) => (
                  <div key={mediaItem.id} className={`${index % 2 === 1 ? 'lg:flex-row-reverse' : ''} flex flex-col lg:flex-row items-center gap-12`}>
                    <div className="lg:w-2/3">
                      <div className="aspect-[16/10] bg-gradient-to-br from-humble-pink-500/20 via-humble-purple-500/20 to-humble-blue-500/20 p-1 rounded-2xl">
                        <img
                          src={mediaItem.media_url}
                          alt={mediaItem.alt_text || 'Website feature'}
                          className="w-full h-full object-cover rounded-xl"
                          loading="lazy"
                        />
                      </div>
                    </div>
                    {mediaItem.caption && (
                      <div className="lg:w-1/3">
                        <div className="bg-humble-charcoal/30 backdrop-blur-sm rounded-xl p-6 border border-white/10">
                          <h4 className="text-xl font-semibold text-white mb-3">{mediaItem.caption}</h4>
                          {mediaItem.alt_text && (
                            <p className="text-white/80">{mediaItem.alt_text}</p>
                          )}
                        </div>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Section 4: The Results */}
      <section className="py-20 bg-humble-charcoal/20 relative z-10">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-8">
              <span className="text-6xl mb-4 block">⸻</span>
            </div>
            
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-8 text-center flex items-center justify-center gap-3">
              <span className="text-4xl">🎯</span>
              The Results
            </h2>

            <div className="grid md:grid-cols-3 gap-8 mb-12">
              <div className="text-center bg-humble-charcoal/30 backdrop-blur-sm rounded-xl p-6 border border-white/10">
                <div className="text-3xl font-bold text-humble-pink-500 mb-2">{caseStudy.project_duration}</div>
                <div className="text-white font-medium">Site Launched</div>
                <div className="text-white/60 text-sm">From concept to live</div>
              </div>
              
              <div className="text-center bg-humble-charcoal/30 backdrop-blur-sm rounded-xl p-6 border border-white/10">
                <div className="text-3xl font-bold text-humble-purple-500 mb-2">100%</div>
                <div className="text-white font-medium">Client Satisfaction</div>
                <div className="text-white/60 text-sm">Exceeded expectations</div>
              </div>
              
              <div className="text-center bg-humble-charcoal/30 backdrop-blur-sm rounded-xl p-6 border border-white/10">
                <div className="text-3xl font-bold text-humble-blue-500 mb-2">✨</div>
                <div className="text-white font-medium">Professional Presence</div>
                <div className="text-white/60 text-sm">Complete digital transformation</div>
              </div>
            </div>

            {/* Client Quote */}
            <div className="bg-gradient-to-r from-humble-pink-500/10 via-humble-purple-500/10 to-humble-blue-500/10 rounded-2xl p-8 border border-white/10 text-center">
              <div className="text-6xl text-humble-pink-500 mb-4">"</div>
              <blockquote className="text-xl md:text-2xl text-white font-serif italic mb-6">
                I didn't expect this level of quality so fast — now people can finally find us online and experience our authentic Italian atmosphere before they even visit.
              </blockquote>
              <div className="text-humble-pink-500 font-medium">— Nonna's Table Team</div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 5: Call to Action */}
      <section className="py-20 relative z-10">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <div className="text-center mb-8">
              <span className="text-6xl mb-4 block">⸻</span>
            </div>
            
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 flex items-center justify-center gap-3">
              <span className="text-4xl">🔗</span>
              Ready for Your Own Success Story?
            </h2>
            
            <p className="text-xl text-white/80 mb-8 max-w-2xl mx-auto">
              💡 Want your own professional website like this — affordable and delivered fast?
            </p>
            
            <div className="space-y-4">
              <a
                href="https://humblestudio.ai/inquiry"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-8 py-4 rounded-full font-semibold text-lg text-white bg-gradient-to-r from-humble-pink-500 via-humble-purple-500 to-humble-blue-500 hover:opacity-90 transition-opacity"
              >
                Get Started Today
                <ExternalLink className="h-5 w-5" />
              </a>
              
              <div className="text-white/60">
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

export default NonnasTableCaseStudy;
