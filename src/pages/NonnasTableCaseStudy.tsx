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
          hero_image_url: '/lovable-uploads/cabbeeb2-4701-40ca-8f62-75cb957be030.png',
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
        hero_image_url: '/lovable-uploads/cabbeeb2-4701-40ca-8f62-75cb957be030.png',
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
      
      {/* Navigation - Updated to match general site styling */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-humble-charcoal/90 backdrop-blur-md border-b border-white/10">
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
            <div className="md:hidden absolute top-full left-0 w-full bg-humble-charcoal/95 backdrop-blur-md shadow-lg">
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
      <section className="pt-32 pb-20 relative">
        <div className="container mx-auto px-6 relative z-10">          
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

          {/* Hero Image - Large */}
          <div className="max-w-6xl mx-auto px-4 md:px-8">
            <div className="aspect-[16/10] rounded-2xl bg-gradient-to-br from-humble-pink-500/20 via-humble-purple-500/20 to-humble-blue-500/20 p-1">
              <div className="w-full h-full rounded-xl">
                <img
                  src={caseStudy.hero_image_url || '/lovable-uploads/cabbeeb2-4701-40ca-8f62-75cb957be030.png'}
                  alt={`${caseStudy.client_name} Website`}
                  className="w-full h-full object-cover rounded-xl"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Challenge/Process Section */}
      <section className="py-20 relative z-10">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-8 font-space-grotesk bg-gradient-to-r from-humble-pink-500 via-humble-purple-500 to-humble-blue-500 bg-clip-text text-transparent">
              {caseStudy.challenge_heading}
            </h2>
            
            <div className="text-lg text-gray-300 leading-relaxed font-serif space-y-6">
              <p>
                Our approach to developing the digital solution for the Nonna's Table concept involved a methodical sequence, emphasizing both aesthetic precision and functional excellence:
              </p>
              
              <div>
                <h3 className="text-xl font-semibold text-white mb-3 font-space-grotesk">Defining Vision & Style</h3>
                <p>
                  We began by meticulously defining the brand's essence. This involved establishing a digital brand identity and a moodboard to capture the "warm & authentic Italian comfort" that a restaurant like Nonna's Table embodies. This foundational work guided every subsequent visual decision, including the selection of a color palette (warm neutrals, earthy tones, fresh accents), appropriate typography (classic serifs for authenticity, clean sans-serifs for readability), and a consistent imagery style (rustic-yet-refined food photography, inviting interior shots).
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-white mb-3 font-space-grotesk">Strategic System Selection & Architecture</h3>
                <p className="mb-4">
                  With the visual identity set, we designed the website's main sections, prioritizing intuitive navigation and a user-friendly experience reflecting the restaurant's welcoming atmosphere. Simultaneously, extensive research into best practices for restaurant technology led to the identification and integration of the most suitable systems for core operations:
                </p>
                <ul className="space-y-3 ml-6">
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-gradient-to-r from-humble-pink-500 to-humble-purple-500 rounded-full flex-shrink-0 mt-3"></div>
                    <span>A seamless table reservation system to facilitate direct bookings, implemented with a booking overlay for a smooth user flow.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-gradient-to-r from-humble-pink-500 to-humble-purple-500 rounded-full flex-shrink-0 mt-3"></div>
                    <span>A robust online ordering system (for both delivery & pickup) powered by Sitedish, chosen for its efficiency and local relevance within the Netherlands.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-gradient-to-r from-humble-pink-500 to-humble-purple-500 rounded-full flex-shrink-0 mt-3"></div>
                    <span>Secure payment integrations with MultiSafepay, ensuring smooth processing of essential Dutch payment methods like iDEAL, alongside credit cards and digital wallets.</span>
                  </li>
                </ul>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-white mb-3 font-space-grotesk">Implementation & Refinement</h3>
                <p className="mb-4">
                  The final phase focused on the detailed development and rigorous testing of all integrated features. This included:
                </p>
                <ul className="space-y-3 ml-6">
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-gradient-to-r from-humble-pink-500 to-humble-purple-500 rounded-full flex-shrink-0 mt-3"></div>
                    <span>A dedicated admin tool for efficient order management, designed to centralize incoming orders from all channels.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-gradient-to-r from-humble-pink-500 to-humble-purple-500 rounded-full flex-shrink-0 mt-3"></div>
                    <span>Automated email notifications to streamline communication regarding new orders.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-gradient-to-r from-humble-pink-500 to-humble-purple-500 rounded-full flex-shrink-0 mt-3"></div>
                    <span>A beautifully designed, interactive menu showcase that reflects the established visual style.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-gradient-to-r from-humble-pink-500 to-humble-purple-500 rounded-full flex-shrink-0 mt-3"></div>
                    <span>Easy-access buttons for mobile users to reserve, call, or order online, ensuring critical actions are always a tap away.</span>
                  </li>
                </ul>
                <p className="mt-4">
                  Comprehensive testing ensured flawless functionality, a consistent user experience, and a pixel-perfect rendition of the visual style across all devices.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Media Gallery with alternating layout */}
      {media.length > 0 && (
        <section className="py-20 relative z-10">
          <div className="container mx-auto px-6">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-16 font-space-grotesk bg-gradient-to-r from-humble-pink-500 via-humble-purple-500 to-humble-blue-500 bg-clip-text text-transparent text-center">
              Project Gallery
            </h2>
            
            <div className="space-y-24">
              {media.map((mediaItem, index) => (
                <div key={mediaItem.id} className={`max-w-6xl mx-auto ${index % 2 === 1 ? 'flex flex-col lg:flex-row-reverse items-center gap-12' : 'flex flex-col lg:flex-row items-center gap-12'}`}>
                  {/* Large Image */}
                  <div className="lg:w-2/3">
                    <div className="aspect-[16/10] bg-gradient-to-br from-humble-pink-500/20 via-humble-purple-500/20 to-humble-blue-500/20 p-1 rounded-2xl">
                      <img
                        src={mediaItem.media_url}
                        alt={mediaItem.alt_text || mediaItem.caption || 'Case study image'}
                        className="w-full h-full object-cover rounded-xl"
                        loading="lazy"
                      />
                    </div>
                  </div>
                  
                  {/* Text Content */}
                  {mediaItem.caption && (
                    <div className="lg:w-1/3">
                      <div className="bg-humble-charcoal/30 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
                        <h3 className="text-xl md:text-2xl font-semibold text-white mb-4 font-space-grotesk">
                          {mediaItem.caption}
                        </h3>
                        {mediaItem.alt_text && (
                          <p className="text-gray-300 font-serif leading-relaxed">
                            {mediaItem.alt_text}
                          </p>
                        )}
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Solution Section */}
      <section className="py-20 relative z-10">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-8 font-space-grotesk bg-gradient-to-r from-humble-pink-500 via-humble-purple-500 to-humble-blue-500 bg-clip-text text-transparent">
              {caseStudy.solution_heading}
            </h2>
            
            <div className="text-lg text-gray-300 leading-relaxed mb-12 font-serif">
              <p className="mb-6">
                The resulting digital platform for Nonna's Table is equipped with powerful features designed to empower a modern restaurant:
              </p>
              <ul className="space-y-4 mb-6">
                {caseStudy.key_features.map((feature, index) => {
                  const [title, description] = feature.includes(':') ? feature.split(':', 2) : [feature, ''];
                  return (
                    <li key={index} className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-gradient-to-r from-humble-pink-500 to-humble-purple-500 rounded-full flex-shrink-0 mt-3"></div>
                      <div>
                        <strong className="text-white">{title}:</strong>
                        {description && <span> {description}</span>}
                      </div>
                    </li>
                  );
                })}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Impact & Results Section */}
      <section className="py-20 bg-humble-charcoal/20 relative z-10">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-8 font-space-grotesk bg-gradient-to-r from-humble-pink-500 via-humble-purple-500 to-humble-blue-500 bg-clip-text text-transparent">
              {caseStudy.impact_heading}
            </h2>
            <p className="text-lg text-gray-300 leading-relaxed mb-12 font-serif">
              {caseStudy.impact_content}
            </p>

            {/* Results Grid */}
            <div className="grid md:grid-cols-3 gap-8 px-4 md:px-0">
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-humble-pink-500 to-humble-purple-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-white">🌐</span>
                </div>
                <h3 className="text-xl font-semibold text-white mb-2 font-space-grotesk">Professional Website</h3>
                <p className="text-gray-400 font-serif">Custom-branded responsive design</p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-humble-purple-500 to-humble-blue-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-white">💼</span>
                </div>
                <h3 className="text-xl font-semibold text-white mb-2 font-space-grotesk">Streamlined Operations</h3>
                <p className="text-gray-400 font-serif">Integrated ordering and reservation systems</p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-humble-blue-500 to-humble-pink-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-white">⭐</span>
                </div>
                <h3 className="text-xl font-semibold text-white mb-2 font-space-grotesk">Enhanced Experience</h3>
                <p className="text-gray-400 font-serif">Improved customer journey and engagement</p>
              </div>
            </div>

            {/* Live Website Link */}
            <div className="text-center mt-12">
              <a
                href="https://nonnas-table.humblestudio.ai/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-humble-pink-500 via-humble-purple-500 to-humble-blue-500 text-white rounded-full font-semibold font-space-grotesk hover:opacity-90 transition-opacity"
              >
                View Live Website
                <ExternalLink className="h-4 w-4" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 relative z-10">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 font-space-grotesk bg-gradient-to-r from-humble-pink-500 via-humble-purple-500 to-humble-blue-500 bg-clip-text text-transparent">
              {caseStudy.cta_heading}
            </h2>
            <p className="text-lg text-gray-300 mb-8 font-serif">
              {caseStudy.cta_description}
            </p>
            <a
              href="https://humblestudio.ai/inquiry"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-full font-semibold text-lg font-space-grotesk text-white bg-gradient-to-r from-humble-pink-500 via-humble-purple-500 to-humble-blue-500 hover:opacity-90 transition-opacity"
            >
              {caseStudy.cta_button_text}
              <ExternalLink className="h-5 w-5" />
            </a>
          </div>
        </div>
      </section>

      {/* Contact Section - Removed black overlay */}
      <Contact />
    </div>
  );
};

export default NonnasTableCaseStudy;
