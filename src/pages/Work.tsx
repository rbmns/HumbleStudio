
import React, { useState, useEffect } from 'react';
import { ArrowRight, ExternalLink, Clock } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { supabase } from '@/integrations/supabase/client';
import StarBackground from '@/components/StarBackground';
import Navbar from '@/components/Navbar';

interface CaseStudy {
  id: string;
  slug: string;
  title: string;
  subtitle?: string;
  description?: string;
  client_name?: string;
  hero_image_url?: string;
  project_duration?: string;
  technologies: string[];
}

const Work = () => {
  const navigate = useNavigate();
  const [caseStudies, setCaseStudies] = useState<CaseStudy[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchCaseStudies();
  }, []);

  const fetchCaseStudies = async () => {
    try {
      const { data, error } = await supabase
        .from('case_studies')
        .select('*')
        .eq('is_published', true)
        .order('created_at', { ascending: false });

      if (error) {
        console.error('Error fetching case studies:', error);
        // Use fallback data
        setCaseStudies([
          {
            id: '1',
            slug: 'nonnas-table',
            title: "Nonna's Table",
            subtitle: "Restaurant Landing Page",
            description: "A beautiful, conversion-focused landing page for an Italian restaurant featuring online reservations, menu showcase, and seamless user experience.",
            hero_image_url: "https://tputfqwgyfpbtfoinluo.supabase.co/storage/v1/object/public/humblestudio/nonnas-table/d-1b.png",
            project_duration: "48 hours",
            technologies: ["React", "Tailwind CSS", "Framer Motion", "Supabase"]
          },
          {
            id: '2',
            slug: 'digital-cv',
            title: "Digital Resume Site",
            subtitle: "Personal Branding Platform", 
            description: "A sophisticated personal website showcasing professional achievements, portfolio, and contact information with modern design and smooth animations.",
            hero_image_url: "https://tputfqwgyfpbtfoinluo.supabase.co/storage/v1/object/public/humblestudio/digital-cv/d-front-2.png",
            project_duration: "36 hours",
            technologies: ["React", "TypeScript", "Tailwind CSS", "Lucide Icons"]
          }
        ]);
      } else {
        // Process database data
        const processedCaseStudies = data.map(study => ({
          id: study.id,
          slug: study.slug,
          title: study.title,
          subtitle: study.subtitle,
          description: study.description,
          client_name: study.client_name,
          hero_image_url: study.hero_image_url,
          project_duration: study.project_duration,
          technologies: Array.isArray(study.technologies) 
            ? study.technologies.filter((item): item is string => typeof item === 'string')
            : []
        }));
        setCaseStudies(processedCaseStudies);
      }
    } catch (error) {
      console.error('Error in fetchCaseStudies:', error);
      // Use fallback data on error
      setCaseStudies([
        {
          id: '1',
          slug: 'nonnas-table',
          title: "Nonna's Table",
          subtitle: "Restaurant Landing Page",
          description: "A beautiful, conversion-focused landing page for an Italian restaurant featuring online reservations, menu showcase, and seamless user experience.",
          hero_image_url: "https://tputfqwgyfpbtfoinluo.supabase.co/storage/v1/object/public/humblestudio/nonnas-table/d-1b.png",
          project_duration: "48 hours",
          technologies: ["React", "Tailwind CSS", "Framer Motion", "Supabase"]
        },
        {
          id: '2',
          slug: 'digital-cv', 
          title: "Digital Resume Site",
          subtitle: "Personal Branding Platform",
          description: "A sophisticated personal website showcasing professional achievements, portfolio, and contact information with modern design and smooth animations.",
          hero_image_url: "https://tputfqwgyfpbtfoinluo.supabase.co/storage/v1/object/public/humblestudio/digital-cv/d-front-2.png",
          project_duration: "36 hours",
          technologies: ["React", "TypeScript", "Tailwind CSS", "Lucide Icons"]
        }
      ]);
    } finally {
      setLoading(false);
    }
  };

  const getGradient = (title: string) => {
    switch (title.toLowerCase()) {
      case "nonna's table":
        return 'from-amber-500 to-orange-600';
      case 'digital resume site':
        return 'from-purple-500 to-pink-600';
      default:
        return 'from-humble-pink-500 to-humble-purple-500';
    }
  };

  const getCategory = (title: string) => {
    switch (title.toLowerCase()) {
      case "nonna's table":
        return 'Restaurant';
      case 'digital resume site':
        return 'Personal Brand';
      default:
        return 'Web Design';
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-humble-navy text-white">
        <StarBackground />
        <Navbar />
        
        <div className="pt-32 pb-24 relative z-10">
          <div className="container mx-auto px-6">
            <div className="text-center mb-20">
              <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 font-space-grotesk">
                Work
              </h1>
              <p className="text-xl text-white/80 font-light max-w-3xl mx-auto">
                Loading our case studies...
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-humble-navy text-white">
      <StarBackground />
      <Navbar />
      
      <div className="pt-32 pb-24 relative z-10">
        <div className="container mx-auto px-6">
          
          {/* Header */}
          <div className="text-center mb-20">
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 font-space-grotesk">
              Work
            </h1>
            <p className="text-xl text-white/80 font-light max-w-3xl mx-auto">
              Deep dives into our most successful projects, showcasing the strategy, 
              design process, and results that drive real business impact.
            </p>
          </div>

          {/* Case Studies Grid */}
          <div className="space-y-16">
            {caseStudies.map((study, index) => (
              <div key={study.id} className={`grid lg:grid-cols-2 gap-12 items-center ${
                index % 2 === 1 ? 'lg:grid-flow-dense' : ''
              }`}>
                
                {/* Image */}
                <div className={`relative group ${index % 2 === 1 ? 'lg:col-start-2' : ''}`}>
                  <div className="aspect-[4/3] rounded-2xl overflow-hidden bg-humble-charcoal/30 backdrop-blur-sm border border-white/10">
                    <img 
                      src={study.hero_image_url || `https://tputfqwgyfpbtfoinluo.supabase.co/storage/v1/object/public/humblestudio/${study.slug}/d-1a.png`}
                      alt={study.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>

                {/* Content */}
                <div className={`space-y-6 ${index % 2 === 1 ? 'lg:col-start-1 lg:row-start-1' : ''}`}>
                  
                  {/* Category & Build Time */}
                  <div className="flex items-center gap-4 text-sm">
                    <span className={`px-3 py-1 rounded-full bg-gradient-to-r ${getGradient(study.title)} text-white font-medium`}>
                      {getCategory(study.title)}
                    </span>
                    {study.project_duration && (
                      <div className="flex items-center gap-2 text-white/60">
                        <Clock className="h-4 w-4" />
                        <span>{study.project_duration}</span>
                      </div>
                    )}
                  </div>

                  {/* Title & Subtitle */}
                  <div>
                    <h2 className="text-3xl md:text-4xl font-bold text-white mb-2">
                      {study.title}
                    </h2>
                    {study.subtitle && (
                      <p className="text-lg text-humble-purple-400 font-medium">
                        {study.subtitle}
                      </p>
                    )}
                  </div>

                  {/* Description */}
                  <p className="text-white/80 text-lg leading-relaxed">
                    {study.description}
                  </p>

                  {/* Technologies */}
                  {study.technologies.length > 0 && (
                    <div className="flex flex-wrap gap-2">
                      {study.technologies.map((tech, techIndex) => (
                        <span
                          key={techIndex}
                          className="px-3 py-1 bg-humble-blue-500/20 text-humble-blue-300 rounded-lg text-sm"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  )}

                  {/* Actions */}
                  <div className="flex flex-col sm:flex-row gap-4">
                    <button
                      onClick={() => navigate(`/work/${study.slug}`)}
                      className="flex items-center justify-center gap-3 px-6 py-3 bg-gradient-to-r from-humble-pink-500 via-humble-purple-500 to-humble-blue-500 text-white rounded-xl font-semibold hover:opacity-90 transition-opacity"
                    >
                      Read Case Study
                      <ArrowRight className="h-5 w-5" />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Call to Action */}
          <div className="text-center mt-20 pt-16 border-t border-white/10">
            <h3 className="text-3xl font-bold text-white mb-6">
              Ready to Create Your Success Story?
            </h3>
            <p className="text-white/80 text-lg mb-8 max-w-2xl mx-auto">
              Let's build something amazing together. Every project starts with understanding your vision and goals.
            </p>
            <button
              onClick={() => navigate('/inquiry')}
              className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-humble-pink-500 via-humble-purple-500 to-humble-blue-500 text-white rounded-2xl font-semibold text-lg hover:opacity-90 transition-opacity"
            >
              Start Your Project
              <ArrowRight className="h-5 w-5" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Work;
